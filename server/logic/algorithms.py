import json

# ================ COMPARISON BASED ALGORITHMS ===================

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

def optimized_bubble_sort(arr):
    steps = {"steps": []}
    n = len(arr)
    for i in range(n):
        changed = False
        for j in range(n - i - 1):
            steps["steps"].append({"type": "highlight", "indices": [j, j + 1]})
            if arr[j] > arr[j + 1]:
                changed = True
                steps["steps"].append({"type": "swap", "indices": [j, j + 1]})
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
        if changed == False:
            steps["steps"].append({"type": "stop"})
            return json.dumps(steps)
            

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def odd_even_sort(arr):
    steps = {"steps": []}
    n = len(arr)
    isSorted = 0

    while isSorted == 0:
        isSorted = 1
        for i in range(1, n-1, 2):
            steps["steps"].append({"type": "highlight", "indices": [i, i + 1]})

            if arr[i] > arr[i+1]:
                steps["steps"].append({"type": "swap", "indices": [i, i + 1]})
                arr[i], arr[i+1] = arr[i+1], arr[i]
                isSorted = 0
                
        for i in range(0, n-1, 2):
            steps["steps"].append({"type": "highlight", "indices": [i, i + 1]})

            if arr[i] > arr[i+1]:
                steps["steps"].append({"type": "swap", "indices": [i, i + 1]})
                arr[i], arr[i+1] = arr[i+1], arr[i]
                isSorted = 0
    
 
    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def comb_sort(arr):
    steps = {"steps": []}

    def getNextGap(gap):

        gap = (gap * 10)//13
        if gap < 1:
            return 1
        return gap


    n = len(arr)
    gap = n
    swapped = True

    while gap !=1 or swapped == 1:

        gap = getNextGap(gap)
        swapped = False

        for i in range(0, n-gap):
            steps["steps"].append({"type": "highlight", "indices": [i, i + gap]})
            if arr[i] > arr[i + gap]:
                steps["steps"].append({"type": "swap", "indices": [i, i + gap]})
                arr[i], arr[i + gap]=arr[i + gap], arr[i]
                swapped = True

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def gnome_sort(arr):
    steps = {"steps": []}
    n = len(arr)
    index = 0
    while index < n:
        if index == 0:
            index = index + 1
        steps["steps"].append({"type": "highlight", "indices": [index, index - 1]})
        if arr[index] >= arr[index - 1]:
            index = index + 1
        else:
            steps["steps"].append({"type": "swap", "indices": [index, index - 1]})
            arr[index], arr[index-1] = arr[index-1], arr[index]
            index = index - 1

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

def bidirectional_selection_sort(arr):
    steps = {"steps": []}

    n = len(arr)
    i = 0
    j = n - 1
    while(i < j):
        min = arr[i]
        max = arr[i]
        min_i = i
        max_i = i


        for k in range(i, j + 1, 1): 
            steps["steps"].append({"type": "highlight", "indices": [i, j, k]})
            if (arr[k] > max):
                max = arr[k]
                max_i = k
            elif (arr[k] < min):
                min = arr[k]
                min_i = k
        
        steps["steps"].append({"type": "swap", "indices": [i, min_i]})
        temp = arr[i]
        arr[i] = arr[min_i]
        arr[min_i] = temp

        if (arr[min_i] == max):
            steps["steps"].append({"type": "swap", "indices": [j, min_i]})
            temp = arr[j]
            arr[j] = arr[min_i]
            arr[min_i] = temp
        else:
            steps["steps"].append({"type": "swap", "indices": [j, max_i]})
            temp = arr[j]
            arr[j] = arr[max_i]
            arr[max_i] = temp

        i += 1
        j -= 1

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

def radix_sort(arr):
    steps = {"steps": []}
    
    def counting_sort(arr, exp):
        n = len(arr)
        output = [0] * n
        count = [0] * 10  # Base 10

        for i in range(n):
            steps["steps"].append({
                "type": "highlight",
                "indices": [i]
                })
            index = (arr[i] // exp) % 10
            count[index] += 1

        for i in range(1, 10):
            count[i] += count[i - 1]

        for i in range(n - 1, -1, -1):
            index = (arr[i] // exp) % 10
            output[count[index] - 1] = arr[i]
            count[index] -= 1

        for i in range(n):
            steps["steps"].append({
                "type": "replace",
                "index": i,
                "value": output[i]
            })
            arr[i] = output[i]

    def radix(arr):
        if not arr:
            return arr
        
        max_val = max(arr)

        exp = 1
        while max_val // exp > 0:
            counting_sort(arr, exp)
            exp *= 10
        return arr

    radix(arr)
    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)
