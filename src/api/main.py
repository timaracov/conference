__app_name__ = "Medconsultant"
__version__ = "0.0.1"


from fastapi import FastAPI
from fastapi.responses import ORJSONResponse


API = FastAPI()


@API.get("/version", tags=["General"])
async def get_version():
    return ORJSONResponse({"version": __version__, "name": __app_name__, "message": "ok"})


@API.get("/profile", tags=["Profile"])
async def get_my_profile():
    pass


@API.post("/profile/login", tags=["Profile"])
async def login_to_profile():
    pass


@API.post("/profile/register", tags=["Profile"])
async def register_profile():
    pass


@API.get("/patologies", tags=["Patologies"])
async def get_patologies():
    pass


@API.get("/exercises", tags=["Exercises"])
async def get_exercises():
    pass


@API.get("/documents", tags=["Documents"])
async def get_docs():
    pass


@API.post("/patologies", tags=["Patologies"])
async def create_patologies():
    pass


@API.post("/documents", tags=["Documents"])
async def add_docs():
    pass
