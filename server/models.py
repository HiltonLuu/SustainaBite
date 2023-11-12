from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

import database

Base = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")


class Business(Base):
    __tablename__ = "business"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, index=True)
    desc = Column(String)
    image = Column(String)
    username = Column(String)
    password = Column(String)
    email = Column(String)
    phone = Column(String)

class Marketplace_Post(Base):
    __tablename__ = "marketplace_post"

    id = Column(Integer, primary_key=True)
    business_id = Column(Integer, ForeignKey("business.id"))
    category = Column(String)
    price = Column(Float)
    quantity = Column(Integer)
    measurement = Column(String)
    post_datetime = Column(DateTime)
    pick_up_datetime = Column(DateTime)
    is_sold = Column(Boolean)