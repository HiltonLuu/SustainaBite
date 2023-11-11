from fastapi import FastAPI, Depends, HTTPException
from database import init_db, SessionLocal
from dependencies import get_db
from sqlalchemy.orm import Session
from models import User


app = FastAPI()
init_db()

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
