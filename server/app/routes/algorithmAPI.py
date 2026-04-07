from flask import Blueprint, jsonify, request
from logic.algorithms import *
from logic.arrayGenerator import *

bubble_bp = Blueprint("bubble", __name__)

@bubble_bp.route("/", methods=["GET"])
def get_bubble():
    arr = [5, 4, 3, 2, 1]
    test = bubble_sort(arr)
    return test


array_bp = Blueprint("array", __name__)

ARRAY_TYPES = {
    "random": ArrayGenerator.generateRandom,
    "sorted": ArrayGenerator.generateSorted,
    "reverse": ArrayGenerator.generateReverse,
}

@array_bp.route("/", methods=["GET"])
def get_bubble():
    size = request.args.get('size', default=10, type=int)
    array_type = request.args.get('type', default='random')

    gen = ARRAY_TYPES.get(array_type)
    if not gen:
        return jsonify({"Error": "invalid array type"})

    return gen(size)
