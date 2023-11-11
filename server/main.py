from fastapi import FastAPI, Depends, HTTPException
from database import init_db, SessionLocal
from dependencies import get_db
from sqlalchemy.orm import Session
from models import User

from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
init_db()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://127.0.0.1:5173/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    name: str
    age: int

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://127.0.0.1:5173/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    name: str
    age: int

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, query_param: str = None):
    return {"item_id": item_id, "query_param": query_param}

@app.post("/users/")
def create_user(username: str, email: str, db: Session = Depends(get_db)):
    # Use the db session to interact with the database
    db_user = User(username=username, email=email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.post("/users/")
def create_user(username: str, email: str, db: Session = Depends(get_db)):
    # Use the db session to interact with the database
    db_user = User(username=username, email=email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.post("/createUser")
def createUser(userInfo: User):
    print(userInfo)
    return userInfo