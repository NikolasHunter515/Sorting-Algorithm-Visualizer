"""
Sorting Algorithm Test Suite
Tests 7 algorithms across average, best, and worst cases.
Measures: correctness, execution time, comparison count, swap/move count.

Algorithms: Bubble Sort, Selection Sort, Insertion Sort,
            Merge Sort, Quick Sort, Heap Sort, Cocktail Sort
"""

import time
import random
import copy


def bubble_sort(arr):
    a = arr[:]
    comps = swaps = 0
    n = len(a)
    for i in range(n):
        for j in range(n - i - 1):
            comps += 1
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
                swaps += 1
    return a, comps, swaps


def selection_sort(arr):
    a = arr[:]
    comps = swaps = 0
    n = len(a)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            comps += 1
            if a[j] < a[min_idx]:
                min_idx = j
        if min_idx != i:
            a[i], a[min_idx] = a[min_idx], a[i]
            swaps += 1
    return a, comps, swaps


def insertion_sort(arr):
    a = arr[:]
    comps = swaps = 0
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0:
            comps += 1
            if a[j] > key:
                a[j + 1] = a[j]
                swaps += 1
                j -= 1
            else:
                break
        a[j + 1] = key
    return a, comps, swaps


def merge_sort(arr):
    moves = [0]
    comps = [0]

    def _merge_sort(a):
        if len(a) <= 1:
            return a
        mid = len(a) // 2
        left = _merge_sort(a[:mid])
        right = _merge_sort(a[mid:])
        return _merge(left, right)

    def _merge(left, right):
        result = []
        i = j = 0
        while i < len(left) and j < len(right):
            comps[0] += 1
            if left[i] <= right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1
            moves[0] += 1
        while i < len(left):
            result.append(left[i])
            i += 1
            moves[0] += 1
        while j < len(right):
            result.append(right[j])
            j += 1
            moves[0] += 1
        return result

    sorted_arr = _merge_sort(arr[:])
    return sorted_arr, comps[0], moves[0]


def quick_sort(arr):
    a = arr[:]
    comps = [0]
    swaps = [0]

    def _quick_sort(lo, hi):
        if lo < hi:
            p = partition(lo, hi)
            _quick_sort(lo, p - 1)
            _quick_sort(p + 1, hi)

    def partition(lo, hi):
        pivot = a[hi]
        i = lo - 1
        for j in range(lo, hi):
            comps[0] += 1
            if a[j] <= pivot:
                i += 1
                a[i], a[j] = a[j], a[i]
                swaps[0] += 1
        a[i + 1], a[hi] = a[hi], a[i + 1]
        swaps[0] += 1
        return i + 1

    if a:
        _quick_sort(0, len(a) - 1)
    return a, comps[0], swaps[0]


def heap_sort(arr):
    a = arr[:]
    comps = [0]
    swaps = [0]
    n = len(a)

    def heapify(n, i):
        largest = i
        l, r = 2 * i + 1, 2 * i + 2
        if l < n:
            comps[0] += 1
            if a[l] > a[largest]:
                largest = l
        if r < n:
            comps[0] += 1
            if a[r] > a[largest]:
                largest = r
        if largest != i:
            a[i], a[largest] = a[largest], a[i]
            swaps[0] += 1
            heapify(n, largest)

    for i in range(n // 2 - 1, -1, -1):
        heapify(n, i)
    for i in range(n - 1, 0, -1):
        a[0], a[i] = a[i], a[0]
        swaps[0] += 1
        heapify(i, 0)

    return a, comps[0], swaps[0]


def cocktail_sort(arr):
    a = arr[:]
    comps = swaps = 0
    start, end = 0, len(a) - 1
    swapped = True
    while swapped:
        swapped = False
        for i in range(start, end):
            comps += 1
            if a[i] > a[i + 1]:
                a[i], a[i + 1] = a[i + 1], a[i]
                swaps += 1
                swapped = True
        if not swapped:
            break
        swapped = False
        end -= 1
        for i in range(end - 1, start - 1, -1):
            comps += 1
            if a[i] > a[i + 1]:
                a[i], a[i + 1] = a[i + 1], a[i]
                swaps += 1
                swapped = True
        start += 1
    return a, comps, swaps


# ─────────────────────────────────────────────
#  Input Generators
# ─────────────────────────────────────────────

def generate_average_case(n=100):
    """Random shuffled list — average case for all algorithms."""
    data = list(range(n))
    random.shuffle(data)
    return data

def generate_best_case(algorithm_name, n=100):
    """
    Best case varies by algorithm:
      - Bubble / Insertion / Cocktail : already sorted
      - Selection / Merge / Heap      : already sorted (no best-case gain, but canonical)
      - Quick Sort                    : median-of-three pivot (random is fine; sorted is worst)
    """
    if algorithm_name == "Quick Sort":
        # Sorted input is the worst case for naive quick sort; use random instead
        data = list(range(n))
        random.shuffle(data)
        return data
    return list(range(n))

def generate_worst_case(algorithm_name, n=100):
    """
    Worst case:
      - Bubble / Insertion / Cocktail : reverse sorted
      - Selection                     : reverse sorted
      - Merge / Heap                  : reverse sorted
      - Quick Sort (last-element pivot): already sorted / reverse sorted
    """
    return list(range(n, 0, -1))


# ─────────────────────────────────────────────
#  Test Runner
# ─────────────────────────────────────────────

ALGORITHMS = {
    "Bubble Sort":    bubble_sort,
    "Selection Sort": selection_sort,
    "Insertion Sort": insertion_sort,
    "Merge Sort":     merge_sort,
    "Quick Sort":     quick_sort,
    "Heap Sort":      heap_sort,
    "Cocktail Sort":  cocktail_sort,
}

N = 100  # list size for all tests


def run_test(name, func, data, case_label):
    """Run a single test and print results."""
    expected = sorted(data)

    start = time.perf_counter()
    result, comps, swaps = func(data)
    elapsed = time.perf_counter() - start

    correct = result == expected
    status = "✓ PASS" if correct else "✗ FAIL"

    print(f"  [{case_label:<8}]  {status}  |  "
          f"Time: {elapsed * 1000:7.3f} ms  |  "
          f"Comparisons: {comps:6d}  |  "
          f"Swaps/Moves: {swaps:6d}")

    if not correct:
        print(f"            Expected : {expected[:10]}...")
        print(f"            Got      : {result[:10]}...")

    return correct


def run_all_tests():
    random.seed(42)
    total = 0
    passed = 0

    print("=" * 75)
    print(f" SORTING ALGORITHM TEST SUITE  (n={N})")
    print("=" * 75)

    for name, func in ALGORITHMS.items():
        print(f"\n{'─' * 75}")
        print(f"  {name}")
        print(f"{'─' * 75}")

        cases = {
            "Best":    generate_best_case(name, N),
            "Average": generate_average_case(N),
            "Worst":   generate_worst_case(name, N),
        }

        for label, data in cases.items():
            ok = run_test(name, func, data, label)
            total += 1
            passed += int(ok)

    print(f"\n{'=' * 75}")
    print(f"  Results: {passed}/{total} tests passed")
    print("=" * 75)


# ─────────────────────────────────────────────
#  Edge-Case Tests
# ─────────────────────────────────────────────

def run_edge_case_tests():
    edge_cases = {
        "Empty list":       [],
        "Single element":   [42],
        "Two elements":     [2, 1],
        "All identical":    [7] * 10,
        "Already sorted":   list(range(10)),
        "Reverse sorted":   list(range(10, 0, -1)),
        "Negative numbers": [-5, -1, -3, 0, -2],
    }

    print(f"\n{'=' * 75}")
    print("  EDGE CASE TESTS")
    print(f"{'=' * 75}")

    total = passed = 0

    for name, func in ALGORITHMS.items():
        print(f"\n  {name}")
        for label, data in edge_cases.items():
            expected = sorted(data)
            try:
                result, comps, swaps = func(data)
                ok = result == expected
                status = "✓ PASS" if ok else "✗ FAIL"
            except Exception as e:
                ok = False
                status = f"✗ ERROR: {e}"
            print(f"    {label:<20} {status}")
            total += 1
            passed += int(ok)

    print(f"\n{'=' * 75}")
    print(f"  Edge Case Results: {passed}/{total} tests passed")
    print("=" * 75)


# ─────────────────────────────────────────────
#  Entry Point
# ─────────────────────────────────────────────

if __name__ == "__main__":
    run_all_tests()
    run_edge_case_tests()