import json

def bubble_sort(arr):
    steps = {"steps": []}
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            steps["steps"].append({"type": "highlight", "indices": [j]})
            if arr[j] > arr[j + 1]:
                steps["steps"].append({"type": "swap", "indices": [j, j + 1]})
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def selection_sort(arr):
    steps = {"steps": []}
    n = len(arr)
    for i in range(n):
        minIndex = i
        for j in range(i + 1, n):
            steps["steps"].append({"type": "highlight", "indices": [j]})
            if arr[minIndex] > arr[j]:
                minIndex = j

        if i != minIndex:
            steps["steps"].append({"type": "swap", "indices": [i, minIndex]})
            arr[i], arr[minIndex] = arr[minIndex], arr[i]

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def insertion_sort(arr):
    steps = {"steps": []}
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            steps["steps"].append({"type": "highlight", "indices": [j]})
            steps["steps"].append({"type": "swap", "indices": [j, j + 1]})
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    
    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def merge_sort(arr):
    n = len(arr)
    size = 1

    while size < n:
        for start in range(0, n, size * 2):
            mid = min(start + size, n)
            end = min(start + size * 2, n)
            left = arr[start:mid]
            right = arr[mid:end]
            merged = []
            i = j = 0

            while i < len(left) and j < len(right):
                if left[i] <= right[j]:
                    merged.append(left[i])
                    i += 1
                else:
                    merged.append(right[j])
                    j += 1

            merged.extend(left[i:])
            merged.extend(right[j:])
            arr[start:start + len(merged)] = merged

        size *= 2

    return arr

def quick_sort(arr):
    stack = [(0, len(arr) - 1)]

    while stack:
        low, high = stack.pop()
        if low < high:
            pivot = arr[high]
            i = low - 1

            for j in range(low, high):
                if arr[j] <= pivot:
                    i += 1
                    arr[i], arr[j] = arr[j], arr[i]

            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            pivot_idx = i + 1

            stack.append((low, pivot_idx - 1))
            stack.append((pivot_idx + 1, high))

    return arr

def heap_sort(arr):
    n = len(arr)

    for i in range(n // 2 - 1, -1, -1):
        while True:
            largest = i
            left = 2 * i + 1
            right = 2 * i + 2

            if left < n and arr[left] > arr[largest]:
                largest = left
            if right < n and arr[right] > arr[largest]:
                largest = right

            if largest == i:
                break

            arr[i], arr[largest] = arr[largest], arr[i]
            i = largest

    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        root = 0
        while True:
            largest = root
            left = 2 * root + 1
            right = 2 * root + 2

            if left < i and arr[left] > arr[largest]:
                largest = left
            if right < i and arr[right] > arr[largest]:
                largest = right

            if largest == root:
                break

            arr[root], arr[largest] = arr[largest], arr[root]
            root = largest

    return arr

def cocktail_sort(arr):
    n = len(arr)
    swapped = True
    start = 0
    end = n - 1

    while swapped:
        swapped = False

        for i in range(start, end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

        if not swapped:
            break

        end -= 1
        swapped = False

        for i in range(end - 1, start - 1, -1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

        start += 1

    return arr
