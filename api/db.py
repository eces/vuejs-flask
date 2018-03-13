from sqlalchemy import create_engine

engine = create_engine('mysql+pymysql://root:@localhost:3306/flask')

with engine.connect() as conn:
    result = conn.execute('select 3')
    row = result.fetchone()
    print(f'r ${row}')

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

from sqlalchemy import Column, Integer, String
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    fullname = Column(String)
    password = Column(String)

    def __repr__(self):
        return f"<User(name='${self.name}', fullname='${self.fullname}', password='${self.password}')>"

ed_user = User(name='ed', fullname='Ed Jones', password='ed')

