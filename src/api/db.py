import peewee

from .config import APP, PG, SQLITE


if APP == "dev":
    db = peewee.SqliteDatabase(SQLITE.SQLITE_URL)
else:
    db = peewee.PostgresqlDatabase(PG.PG_URL)


class BaseModel(peewee.Model):
    class Meta:
        database = db


class User(BaseModel):
    pass


class Exercise(BaseModel):
    pass


class Document(BaseModel):
    pass


class Patology(BaseModel):
    pass