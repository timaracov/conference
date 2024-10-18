from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict


PROJECT_PATH = Path(__file__).parents[0]


class BaseConf(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=PROJECT_PATH / ".env",
        extra="ignore"
    )

class AppConf(BaseConf):
    ENV: str = "dev"

class PgConf(BaseConf):
    PG_URL: str = "postgresql://user:pass@localhost:5432"

class SqliteConf(BaseConf):
    SQLITE_FILE_PATH: str = str(PROJECT_PATH / "db.sqlite")

    @property
    def SQLITE_URL(self) -> str:
        return f"sqlite:///{self.SQLITE_FILE_PATH}"


APP = AppConf()
PG = PgConf()
SQLITE = SqliteConf()
