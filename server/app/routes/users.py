from flask import Blueprint, jsonify
#not apart of the algos app but here for env setup testing

users_bp = Blueprint("users", __name__)

@users_bp.route("/", methods=["GET"])
def get_users():
    return jsonify({"users": ["server working"]})