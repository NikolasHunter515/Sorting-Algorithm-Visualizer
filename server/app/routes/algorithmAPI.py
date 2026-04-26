from flask import Blueprint, jsonify, request
from logic.algorithms import *
from logic.arrayGenerator import *

# Global array (for demo purposes)
CURRENT_ARRAY = []

ARRAY_TYPES = {
    "random": ArrayGenerator.generateRandom,
    "sorted": ArrayGenerator.generateSorted,
    "reverse": ArrayGenerator.generateReverse,
}

ALGORITHMS = {
    "bubble": bubble_sort,
    "selection": selection_sort,
    "insertion": insertion_sort,
    "merge": merge_sort,
    "quick": quick_sort,
    "heap": heap_sort,
    "cocktail": cocktail_sort
}

algorithm_bp = Blueprint("algorithm", __name__)
array_bp = Blueprint("array", __name__)

# =========================
# ALGORITHM ROUTE
# =========================
@algorithm_bp.route("/", methods=["GET"])
def get_algorithm():
    algorithm_name = request.args.get("type")
    algorithm = ALGORITHMS.get(algorithm_name)

    if not algorithm:
        return jsonify({"error": "invalid algorithm"}), 400

    if not CURRENT_ARRAY:
        return jsonify({"error": "must generate array first"}), 400

    return jsonify(algorithm(CURRENT_ARRAY))


# =========================
# ARRAY ROUTE (FIXED)
# =========================
# FIX: accept BOTH "/api/array" and "/api/array/"
@array_bp.route("", methods=["GET"])
@array_bp.route("/", methods=["GET"])
def get_array():
    size = request.args.get("size", default=10, type=int)
    array_type = request.args.get("type", default="random")

    generator = ARRAY_TYPES.get(array_type)
    if not generator:
        return jsonify({"error": "invalid array type"}), 400

    global CURRENT_ARRAY
    CURRENT_ARRAY = generator(size)

    return jsonify(CURRENT_ARRAY)