import os

from uuid import uuid4
from hashlib import sha512

from fastapi import UploadFile

from config import PROJECT_PATH


def hash_pass(password_plain: str):
    return sha512(password_plain.encode()).hexdigest()


def save_file(user_id: str, file: UploadFile):
    ext = "" if file.filename is None else f".{file.filename.split('.')[-1]}"
    fid = str(uuid4())

    fpath = PROJECT_PATH / "static" / user_id / f"{fid}{ext}"

    if not os.path.exists(PROJECT_PATH / "static" / user_id ):
        os.makedirs(PROJECT_PATH / "static" / user_id)

    with open(fpath, "w+b") as f:
        while content := file.file.read():
            f.write(content)

    return f"/{user_id}/{fid}{ext}"

