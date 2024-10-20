__app_name__ = "Medconsultant"
__version__ = "0.0.1"


from typing import Optional

from fastapi import FastAPI, Query, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.responses import ORJSONResponse
from fastapi.middleware.cors import CORSMiddleware

from config import PROJECT_PATH
from repos import AppRepo
from utils import save_file


API = FastAPI()


API.mount("/api/static", StaticFiles(directory=PROJECT_PATH / "static"))
API.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@API.get("/version", tags=["General"])
async def get_version():
    return ORJSONResponse({"version": __version__, "name": __app_name__, "message": "ok"})


@API.get("/profile", tags=["Profile"])
async def get_my_profile(user_id: str):
    u = AppRepo().get_user(user_id)
    return ORJSONResponse({"message": "ok", "user": u.to_dict()})


@API.post("/profile/login", tags=["Profile"])
async def login_to_profile(login: str, password: str):
    try:
        u = AppRepo().get_user_by_login_and_pass(login, password)
        return ORJSONResponse({"message": "ok", "user": u.to_dict()})
    except:
        return ORJSONResponse({"message": "invalid login or password"}, 403)


@API.post("/profile/register", tags=["Profile"])
async def register_profile(
    login: str, 
    passwd_plain: str,
    fullname: str,
    group: str,
):
    AppRepo().add_user(
        login,
        passwd_plain,
        fullname,
        group,
    )
    return ORJSONResponse({"message": "ok"})


@API.get("/exercises", tags=["Exercises"])
async def get_exercises(patologies_ids: Optional[list[str]] = Query(None)):
    res = AppRepo().get_exercises(patologies_ids)
    return ORJSONResponse({"message": "ok", "data": res})


@API.post("/patologies", tags=["Patologies"])
async def create_patologies(user_id: str, name: str, level: int):
    AppRepo().add_patologies(user_id, name, level)
    return ORJSONResponse({"message": "ok"}, 201)


@API.get("/patologies", tags=["Patologies"])
async def get_patologies(user_id: Optional[str] = None):
    pp = AppRepo().get_patologies(user_id)
    return ORJSONResponse({"message": "ok", "data": pp})


@API.post("/documents", tags=["Documents"])
async def add_docs(
    file: UploadFile,
    user_id: str,
    name: str,
):
    relative_path = save_file(user_id, file)
    AppRepo().add_document(user_id, relative_path, name)
    return ORJSONResponse({"message": "ok", "relative_path": relative_path})


@API.get("/documents", tags=["Documents"])
async def get_docs(user_id: str):
    docs = AppRepo().get_documents(user_id)
    return ORJSONResponse({"message": "ok", "data": docs})
