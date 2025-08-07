from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import resume_parser, scorer

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost",
    "http://localhost:3000",  # Assuming your frontend runs on port 3000
    "http://localhost:8085",  # Assuming your Spring Boot backend runs on port 8085
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(resume_parser.router)
app.include_router(scorer.router)

@app.get("/")
async def root():
    return {"message": "HireSense AI ML Service"}