# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from flask import Flask, url_for
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flaskext.mysql import MySQL
from importlib import import_module
from logging import basicConfig, DEBUG, getLogger, StreamHandler
from os import path

mysql = MySQL()
db = SQLAlchemy()
login_manager = LoginManager()


def register_extensions(app):
    app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'
    app.config['MYSQL_DATABASE_USER'] = 'root'
    app.config['MYSQL_DATABASE_PASSWORD'] = '1208'
    app.config['MYSQL_DATABASE_DB'] = 'healthcare'
    mysql.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)


def register_blueprints(app):
    for module_name in ('base', 'home'):
        module = import_module('app.{}.routes'.format(module_name))
        app.register_blueprint(module.blueprint)


def configure_database(app):

    @app.before_first_request
    def initialize_database():
        db.create_all()

    @app.teardown_request
    def shutdown_session(exception=None):
        db.session.remove()


def create_app(config):
    app = Flask(__name__, static_folder='base/static',
                instance_relative_config=True)
    app.config.from_object(config)
    app.config.from_pyfile('application.cfg.py')
    register_extensions(app)
    register_blueprints(app)
    configure_database(app)
    return app
