__all__ = ["User", "Patology", "Exercise", "Document", "ExercisesAndPatologiesM2M"]

import logging
import uuid

from datetime import datetime

import peewee as pw

from config import APP, PG, SQLITE


if APP.ENV == "dev":
    db = pw.SqliteDatabase(SQLITE.SQLITE_FILE_PATH)
else:
    db = pw.PostgresqlDatabase(PG.PG_URL)


## ## ## ## ## ## ## ## ## ## ## ## 


class User(pw.Model):
    user_id = pw.CharField(null=False, primary_key=True, unique=True, default=uuid.uuid4)

    login = pw.CharField(null=False)
    passwd_hash = pw.CharField(null=False)

    first_name = pw.CharField(null=False)
    second_name = pw.CharField(null=False)

    created_at = pw.DateTimeField(null=False, default=datetime.now)

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "login": self.login,
            "passwd_hash": self.passwd_hash,
            "first_name": self.first_name,
            "second_name": self.second_name,
            "created_at": self.created_at,
        }

    class Meta:
        database = db
        table_name = "users"


class Patology(pw.Model):
    patology_id = pw.UUIDField(null=False, primary_key=True, default=uuid.uuid4)

    name = pw.CharField(null=False)
    level = pw.IntegerField(
        null=True, 
        default=None,
        constraints=[
            pw.Check("level < 10"),
            pw.Check("level >= -1")
        ]
    )

    user = pw.ForeignKeyField(User, field="user_id", backref="patologies", null=True)

    def to_dict(self):
        return {
            "patology_id": self.patology_id,
            "name": self.name,
            "level": self.level,
        }

    class Meta:
        database = db
        table_name = "patologies"


class Exercise(pw.Model):
    exercise_id = pw.UUIDField(null=False, primary_key=True, default=uuid.uuid4)

    name = pw.CharField(null=False)
    description = pw.TextField(null=True)
    minutes_to_complete = pw.IntegerField(null=False)

    difficulty = pw.IntegerField(
        null=False,
        constraints=[
            pw.Check("difficulty < 4"),
            pw.Check("difficulty > 0")
        ]
    )

    def to_dict(self):
        return {
            "exercise_id": self.exercise_id,
            "name": self.name,
            "description": self.description,
            "minutes_to_complete": self.minutes_to_complete,
            "difficulty": self.difficulty,
        }

    class Meta:
        database = db
        table_name = "exercises"


class Document(pw.Model):
    document_id = pw.UUIDField(null=False, primary_key=True, default=uuid.uuid4)

    name = pw.CharField(null=True)
    file_path = pw.CharField(null=False)

    created_at = pw.DateTimeField(null=False, default=datetime.now)

    user = pw.ForeignKeyField(User, field="user_id", backref="documents")

    def to_dict(self):
        return {
            "document_id": self.document_id,
            "name": self.name,
            "file_path": self.file_path,
            "created_at": self.created_at,
        }

    class Meta:
        database = db
        table_name = "users_documents"


class ExercisesAndPatologiesM2M(pw.Model):
    exercise = pw.ForeignKeyField(Exercise, field="exercise_id", backref="patologies")
    patology = pw.ForeignKeyField(Patology, field="patology_id", backref="exercises")

    class Meta:
        database = db
        table_name = "epm2m"


def init_db():
    try:
        db.create_tables(models=[User, Patology, Exercise, Document, ExercisesAndPatologiesM2M])
    except Exception as err:
        logging.error(err)
