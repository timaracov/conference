from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict


class BaseConf(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=Path(__file__),
        extra="ignore"
    )

class AppConf(BaseConf):
    ENV: str = "dev"

class PgConf(BaseConf):
    PG_URL: str = "postgresql://user:pass@localhost:5432"

class SqliteConf(BaseConf):
    SQLITE_URL: str = "sqlite://db.sqlite"


APP = AppConf()
PG = PgConf()
SQLITE = SqliteConf()