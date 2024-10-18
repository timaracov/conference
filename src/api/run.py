import uvicorn

from db import init_db
from repos import AppRepo


if __name__ == "__main__":
    init_db()
    AppRepo().fill_patologies_and_exercises_data()
    uvicorn.run(
        "main:API",
        reload=True
    )
