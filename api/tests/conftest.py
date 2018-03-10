from pytest import fixture
from main import app

@fixture
def f_client():
    return app.test_client()
