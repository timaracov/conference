import uvicorn

if __name__ == "__main__":
    uvicorn.run(
        "main:API",
        reload=True
    )