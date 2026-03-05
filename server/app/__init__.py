from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .routes.users import users_bp
    app.register_blueprint(users_bp, url_prefix="/api/users")

    return app