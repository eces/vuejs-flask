def test_ping(f_client):
    r = f_client.get('/')
    assert r.status_code == 200
