""" Udacity Item Catalog project """

# SQL ALCHEMY DEPENDENCIES
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

BASE = declarative_base()


class Restaurant(BASE):
    """ Restaurant Model schema """
    __tablename__ = 'restaurant'

    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    description = Column(String(1000), nullable=False)
    image = Column(String(1000), nullable=False)
    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        return {
            'name': self.name,
            'id': self.id,
            'description': self.description,
            'image': self.image,
        }


class MenuItem(BASE):
    """ Restaurant MenuItem schema """
    __tablename__ = 'menu_item'
    id = Column(Integer, primary_key=True)
    course = Column(String(250))
    description = Column(String(250))
    name = Column(String(80), nullable=False)
    price = Column(String(8))
    restaurant_id = Column(Integer, ForeignKey('restaurant.id'))
    restaurant = relationship(Restaurant)

    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        return {
            'name': self.name,
            'description': self.description,
            'id': self.id,
            'price': self.price,
            'course': self.course,
        }


ENGINE = create_engine('sqlite:///restaurantmenu.db')

BASE.metadata.create_all(ENGINE)