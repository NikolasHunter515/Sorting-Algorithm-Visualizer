from flask import Blueprint, jsonify, request
from logic.algorithms import *
from logic.arrayGenerator import *
 
# global array variable that will then be sorted
# loads one upon entering homepage
# this variable gets updated every time a new array is generated
# CURRENT_ARRAY = []

ARRAY_TYPES = {
    "random": ArrayGenerator.generateRandom,
    "sorted": ArrayGenerator.generateSorted,
    "reverse": ArrayGenerator.generateReverse,
}

ALGORITHMS = {
    "bubble": bubble_sort,
    "bubble_optimized": optimized_bubble_sort,
    "odd_even": odd_even_sort,
    "comb": comb_sort,
    "gnome": gnome_sort,
    "cocktail": cocktail_sort,
    "selection": selection_sort,
    "selection_bidirectional": bidirectional_selection_sort,
    "insertion": insertion_sort,
    "insertion_binary": binary_insertion_sort,
    "shell": shell_sort,
    "merge_top": merge_sort_top_down,
    "merge_bottom": merge_sort_bottom_up,
    "quick_right": quick_sort_right_pivot,
    "quick_random": quick_sort_random_pivot,
    "heap_min": min_heap_sort,
    "heap_max": max_heap_sort,
    "radix_msd": msd_radix_sort,
    "radix_lsd": lsd_radix_sort,
    "pancake": pancake_sort
}

algorithm_bp = Blueprint("algorithm", __name__)
array_bp = Blueprint("array", __name__)

@algorithm_bp.route("/api/algorithm/", methods=["POST"])
def get_algorithm():
    json = request.get_json()
   
    array = json['array']
    algorithm = json['algorithm']


    algorithm = ALGORITHMS.get(algorithm)
    if not algorithm:
        return "Invalid Algorithm", 400

    return algorithm(array)
    # if algorithm is None:
    #     return "Bad Request", 400
    # algorithm = ALGORITHMS.get(algorithm)

    # if not algorithm:
    #     return jsonify({"Error": "invalid algorithm"})
    #
    # if CURRENT_ARRAY != []:
    #     return algorithm(CURRENT_ARRAY)
    # else:
    #     return jsonify({"Error": "must generate array first"})

@array_bp.route("/api/array", methods=["GET"])
def get_array():
    size = request.args.get('size', default=10, type=int)
    array_type = request.args.get('type', default='random')
    
    if size > 200:
        size = 200
    elif size < 0:
        size = 0

    gen = ARRAY_TYPES.get(array_type)
    if not gen:
        return jsonify({"Error": "invalid array type"})

    global CURRENT_ARRAY
    CURRENT_ARRAY = gen(size)

    return jsonify(CURRENT_ARRAY)
