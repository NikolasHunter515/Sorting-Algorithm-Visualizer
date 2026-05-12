import random

class ArrayGenerator:
    def __init__(self):
        return

    # Returns a sorted int array of n elements in order, starting from 1
    def generateSorted(n):
        return [i for i in range(1, n + 1)]

    # Returns a reverse sorted int array of n elements in order, starting from 1
    def generateReverse(n):
        return [i for i in range(n, 0, -1)]

    # Returns a random permutation int array of 1 to n elements 
    def generateRandom(n):
        array = [i for i in range(1, n + 1)]
        random.shuffle(array)
        return array