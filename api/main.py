from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
  app.logger.warning('Hey (%d)', 8668)
  return "Hello World!"
