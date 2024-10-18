from decimal import ExtendedContext
from typing import Optional
from db import *
from utils import hash_pass


class AppRepo:
    def add_user(
        self,
        login: str,
        password_plain: str,
        first_name: str,
        second_name: str,
    ):
        User(
            login=login,
            passwd_hash=hash_pass(password_plain),
            first_name=first_name,
            second_name=second_name,
        ).save(force_insert=True)

    def get_user(self, user_id: str):
        user = User.select().where(User.user_id == user_id).get()
        return user

    def get_user_by_login_and_pass(self, login: str, plain_pass: str):
        user = User.select().where(User.login == login).where(User.passwd_hash == hash_pass(plain_pass)).get()
        return user

    def add_exercise(self, name: str, description: str, minutes_to_complete: int, difficulty: int):
        Exercise(
            name=name,
            description=description,
            minutes_to_complete=minutes_to_complete,
            difficulty=difficulty,
        ).save()

    def get_exercises(self, patologies_ids: Optional[list[str]] = None):
        e = []
        if patologies_ids is None:
            for ee in Exercise.select():
                e.append(ee.to_dict())
            return e
        else:
            for ee in (
                Exercise
                .select()
                .where(
                    Exercise.exercise_id.in_(
                        ExercisesAndPatologiesM2M
                        .select(
                            ExercisesAndPatologiesM2M.exercise
                        )
                        .where(
                            ExercisesAndPatologiesM2M.patology.in_(patologies_ids)
                        )
                        .where(
                            ExercisesAndPatologiesM2M.exercise == Exercise.exercise_id
                        )
                    )
                )
            ):
                e.append(ee.to_dict())
            return e

    def add_document(self, user_id: str, fpath: str, name: str):
        Document(
            name=name,
            file_path=fpath,
            user=user_id,
        ).save(force_insert=True)

    def get_documents(self, user_id: str,):
        dd = []
        for doc in Document.select().where(Document.user == user_id):
            dd.append(doc.to_dict())
        return dd

    def add_patologies(self, user_id: str, name: str, level: int):
        Patology(user=user_id, name=name, level=level).save(force_insert=True)

    def get_patologies(self, user_id: Optional[str] = None):
        pp = []
        if user_id:
            for p in Patology.select().where(Patology.user == user_id):
                pp.append(p.to_dict())
        else:
            for p in Patology.select():
                pp.append(p.to_dict())
        return pp

    def fill_patologies_and_exercises_data(self):
        p = [
            Patology(
                name="Сколиоз",
                level=1,
            )
        ]
        e = [
            Exercise(
                name="",
                description="",
                minutes_to_complete=10,
                difficulty=1,
            )
        ]
        m2m = [
            ExercisesAndPatologiesM2M(
                exercise=e[0],
                patology=p[0]
            )
        ]

        for pp in p:
            try:
                Patology.get(Patology.name == pp.name)
            except:
                pp.save(force_insert=True)
        for ee in e:
            try:
                Exercise.get(Exercise.name == ee.name)
            except:
                ee.save(force_insert=True)
        for mm in m2m:
            try:
                ExercisesAndPatologiesM2M.get(ExercisesAndPatologiesM2M.patology.name == mm.patology.name)
            except:
                mm.save(force_insert=True)
