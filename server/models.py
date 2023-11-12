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

    posts = relationship("Marketplace_Post", back_populates="business")

class Marketplace_Post(Base):
    __tablename__ = "marketplace_post"

    id = Column(Integer, primary_key=True, autoincrement=True)
    business_id = Column(Integer, ForeignKey("business.id"))
    category = Column(String)
    price = Column(Float)
    quantity = Column(Integer)
    measurement = Column(String)
    post_datetime = Column(DateTime)
    pick_up_datetime = Column(DateTime)
    is_sold = Column(Boolean)

    business = relationship("Business", back_populates="posts")
    purchase = relationship("Purchase_History", back_populates="marketplace_post")

class Purchase_History(Base):
    __tablename__ = "purchase_history"

    id = Column(Integer, primary_key=True, autoincrement=True)
    marketplace_post_id = Column(Integer, ForeignKey("marketplace_post.id"))
    not_for_profit_id = Column(Integer, ForeignKey("not_for_profit.id"))
    purchase_date = Column(DateTime)

    marketplace_post = relationship("Marketplace_Post", back_populates="purchase")
    not_for_profit = relationship("Not_For_Profit", back_populates="purchase_history_list")


class Not_For_Profit(Base):
    __tablename__ = "not_for_profit"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, index=True)
    username = Column(String)
    password = Column(String)
    email = Column(String)
    phone = Column(String)

    purchase_history_list = relationship("Purchase_History", back_populates="not_for_profit")
    donator_list = relationship("Not_For_Profit_Donator", back_populates="not_for_profit")
    donate_history = relationship("Donation_History", back_populates="not_for_profit")


class Donation_History(Base):
    __tablename__ = "donation_history"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    not_for_profit_id = Column(Integer, ForeignKey("not_for_profit.id"))
    donator_id = Column(Integer, ForeignKey("donator.id"))
    donation_date = Column(DateTime)

    not_for_profit = relationship("Not_For_Profit", back_populates="donate_history")



class Not_For_Profit_Donator(Base):
    __tablename__ = "not_for_profit_donator"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    not_for_profit_id = Column(Integer, ForeignKey("not_for_profit.id"))
    donator_id = Column(Integer, ForeignKey("donator.id"))

    not_for_profit = relationship("Not_For_Profit", back_populates="donator_list")


class Donator(Base):
    __tablename__ = "donator"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, index=True)
    username = Column(String)
    password = Column(String)
    email = Column(String)
    phone = Column(String)    



