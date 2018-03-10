#! /usr/bin/env python3

from flask import (
    Flask,
    jsonify,
)

import yaml
import jwt
import pydash as _

app = Flask(__name__)

# migration, Table
# fetch,
# datetime, pytz
# redis, celery
# postgresql JSON
# sentry Exception
# cloudwatch/papertrail


@app.route("/")
def index():
    config = yaml.load(open('./config.yml').read())

    app.logger.warning('Hey (%d)', 8668)
    # raise Exception(3)
    return jsonify({
        "a": 1.00,
        "한글": [
            {"a": 1},
            {"a": 3},
        ],
        # 'SQS': config['queue']
        'SQS': _.get(config, 'mysql.master.host'),
        'jwt': jwt.encode({
            'some': 'sdfsdf'
        }, 'secret', algorithm='HS256').decode('utf8')
    })
