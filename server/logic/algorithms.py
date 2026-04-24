import json

def bubble_sort(arr):
    steps = {"steps": []}
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            steps["steps"].append({"type": "highlight", "indices": [j, j + 1]})
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
        
        steps["steps"].append({"type": "highlight", "indices": [i, minIndex]})
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
 
        steps["steps"].append({"type": "highlight", "indices": [i]})
        while j >= 0 and arr[j] > key:
            steps["steps"].append({"type": "highlight", "indices": [j, j + 1]})
            steps["steps"].append({"type": "swap", "indices": [j, j + 1]})
            arr[j + 1] = arr[j]
            j -= 1
            
        if j != -1:
            steps["steps"].append({"type": "highlight", "indices": [j, j + 1]})

        arr[j + 1] = key
    
    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def merge_sort(arr):
    steps = {"steps": []}

    def merge_sort_recursive(left, right):
        if right - left <= 1:
            return

        mid = (left + right) // 2

        # steps["steps"].append({
        #     "type": "highlight",
        #     "indices": list(range(left, mid))
        # })

        merge_sort_recursive(left, mid)

        # steps["steps"].append({
        #     "type": "highlight",
        #     "indices": list(range(mid, right))
        # })

        merge_sort_recursive(mid, right)

        merge(left, mid, right)

    def merge(left, mid, right):
        temp = []
        i, j = left, mid

        while i < mid and j < right:
            if arr[i] <= arr[j]:
                temp.append(arr[i])
                i += 1
            else:
                temp.append(arr[j])
                j += 1

        while i < mid:
            temp.append(arr[i])
            i += 1

        while j < right:
            temp.append(arr[j])
            j += 1

        for k in range(len(temp)):
            steps["steps"].append({
                "type": "highlight",
                "indices": [left + k]
            })

            arr[left + k] = temp[k]

            steps["steps"].append({
                "type": "replace",
                "index": left + k,
                "value": temp[k]
            })

    merge_sort_recursive(0, len(arr))

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def quick_sort(arr):
    steps = {"steps": []}
    stack = [(0, len(arr) - 1)]

    while stack:
        low, high = stack.pop()
        if low < high:
            pivot = arr[high]
            i = low - 1

            for j in range(low, high):
                steps["steps"].append({
                "type": "highlight",
                "indices": [high, j]
                })
                if arr[j] <= pivot:
                    i += 1

                    steps["steps"].append({"type": "highlight", "indices": [i, j]})
                    if i != j:
                        steps["steps"].append({
                        "type": "swap",
                        "indices": [i, j]
                        })
                        arr[i], arr[j] = arr[j], arr[i]

            steps["steps"].append({
            "type": "swap",
            "indices": [i + 1, high]
            })
            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            pivot_idx = i + 1

            stack.append((low, pivot_idx - 1))
            stack.append((pivot_idx + 1, high))

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def heap_sort(arr):
    steps = {"steps": []}
    n = len(arr)

    for i in range(n // 2 - 1, -1, -1):
        steps["steps"].append({
        "type": "highlight",
        "indices": [i]
        })
        while True:
            largest = i
            left = 2 * i + 1
            right = 2 * i + 2

            if left < n and arr[left] > arr[largest]: 
                steps["steps"].append({"type": "highlight", "indices": [left, largest]})
                largest = left
            if right < n and arr[right] > arr[largest]:
                steps["steps"].append({"type": "highlight", "indices": [right, largest]})
                largest = right

            if largest == i:
                break
            
            steps["steps"].append({
            "type": "swap",
            "indices": [i, largest]
            })
            arr[i], arr[largest] = arr[largest], arr[i]
            i = largest

    for i in range(n - 1, 0, -1):
        steps["steps"].append({
        "type": "highlight",
        "indices": [0, i]
        })
        steps["steps"].append({
        "type": "swap",
        "indices": [0, i]
        })
        arr[0], arr[i] = arr[i], arr[0]
        root = 0
        while True:
            largest = root
            left = 2 * root + 1
            right = 2 * root + 2

            if left < i and arr[left] > arr[largest]:
                steps["steps"].append({"type": "highlight", "indices": [left, i]})
                largest = left
            if right < i and arr[right] > arr[largest]: 
                steps["steps"].append({"type": "highlight", "indices": [right, i]})
                largest = right

            if largest == root:
                break

            steps["steps"].append({
            "type": "swap",
            "indices": [root, largest]
            })
            arr[root], arr[largest] = arr[largest], arr[root]
            root = largest

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def cocktail_sort(arr):
    steps = {"steps": []}
    n = len(arr)
    swapped = True
    start = 0
    end = n - 1

    while swapped:
        swapped = False

        for i in range(start, end):
            steps["steps"].append({
            "type": "highlight",
            "indices": [i, i + 1]
            })
            if arr[i] > arr[i + 1]:
                steps["steps"].append({
                "type": "swap",
                "indices": [i, i + 1]
                })
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

        if not swapped:
            break

        end -= 1
        swapped = False

        for i in range(end - 1, start - 1, -1):
            steps["steps"].append({
            "type": "highlight",
            "indices": [i, i + 1]
            })
            if arr[i] > arr[i + 1]:
                steps["steps"].append({
                "type": "swap",
                "indices": [i, i + 1]
                })
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

        start += 1

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)
