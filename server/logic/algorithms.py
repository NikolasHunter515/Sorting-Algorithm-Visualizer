import json
import random
import math
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



def binary_insertion_sort(arr):
    steps = {"steps": []}

    def binary_search(arr, val, start, end, i):
        
        if start == end:
            if arr[start] > val:
                return start
            else:
                return start+1

        if start > end:
            return start

        mid = (start+end)//2
        steps['steps'].append({"type": "highlight", "indices": [mid, i]})
        if arr[mid] < val:
            return binary_search(arr, val, mid+1, end, i)
        elif arr[mid] > val:
            return binary_search(arr, val, start, mid-1, i)
        else:
            return mid

    for i in range(1, len(arr)):
        val = arr[i]
        j = binary_search(arr, val, 0, i-1, i)

        if j != i:
            steps['steps'].append({"type": "replace", "index": j, "value": arr[i]})
            for k in range(j + 1, i + 1):
                steps['steps'].append({"type": "replace", "index": k, "value": arr[k - 1]})
            arr = arr[:j] + [val] + arr[j:i] + arr[i+1:]

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def shell_sort(arr):
    steps = {"steps": []}
    n = len(arr)

    gap = n // 2
    while gap > 0:

        for i in range(gap, n):
            steps['steps'].append({"type": "highlight", "indices": [i]})
            temp = arr[i]   
            j = i

            while j >= gap and arr[j - gap] > temp:
                steps['steps'].append({"type": "highlight", "indices": [j - gap, i]})
                steps['steps'].append({"type": "replace", "index": j, "value": arr[j - gap]})
                arr[j] = arr[j - gap]
                j -= gap
        
            steps['steps'].append({"type": "replace", "index": j, "value": temp})
            arr[j] = temp

        gap //= 2
    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

 
def merge_sort_bottom_up(arr):
    steps = {"steps": []}

    def merge_sort_recursive(left, right):
        if right - left <= 1:
            return

        mid = (left + right) // 2

        merge_sort_recursive(left, mid)
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

def merge_sort_top_down(arr):
    steps = {"steps": []}

    def merge(arr, left, mid, right):
        
        n1 = mid - left + 1
        n2 = right - mid
        
        arr1 = arr[left:left + n1]
        arr2 = arr[mid + 1:mid + 1 + n2]
        
        i = 0    
        j = 0    
        k = left 
        
        while i < n1 and j < n2:
            if arr1[i] <= arr2[j]:
                steps['steps'].append({"type": "highlight", "indices": [k]}) 
                steps['steps'].append({"type": "replace", "index": k, "value": arr1[i]})
                arr[k] = arr1[i]
                i += 1
            else:
                steps['steps'].append({"type": "highlight", "indices": [k]}) 
                steps['steps'].append({"type": "replace", "index": k, "value": arr2[j]})
                arr[k] = arr2[j]
                j += 1
            k += 1
        
        while i < n1:
            steps['steps'].append({"type": "highlight", "indices": [k]}) 
            steps['steps'].append({"type": "replace", "index": k, "value": arr1[i]})
            arr[k] = arr1[i]
            i += 1
            k += 1
        
        while j < n2:
            steps['steps'].append({"type": "highlight", "indices": [k]}) 
            steps['steps'].append({"type": "replace", "index": k, "value": arr2[j]})
            arr[k] = arr2[j]
            j += 1
            k += 1

    n = len(arr)
    
    currSize = 1
    while currSize <= n - 1:
        
        leftStart = 0
        while leftStart < n - 1:
            
            mid = min(leftStart + currSize - 1, n - 1)
            rightEnd = min(leftStart + 2 * currSize - 1, n - 1)
            
            merge(arr, leftStart, mid, rightEnd)
            
            leftStart += 2 * currSize

        currSize = 2 * currSize

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def quick_sort_right_pivot(arr):
    steps = {"steps": []}

    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1

        for j in range(low, high):
            steps['steps'].append({"type": "highlight", "indices": [j, high]})
            if arr[j] < pivot:
                i += 1
                steps['steps'].append({"type": "swap", "indices": [i, j]})
                arr[i], arr[j] = arr[j], arr[i]

        steps['steps'].append({"type": "swap", "indices": [i + 1, high]})
        arr[i + 1], arr[high] = arr[high], arr[i + 1]

        return i + 1 

    def quick_sort(arr, low, high):
        if low < high:
            pivot_index = partition(arr, low, high)
            quick_sort(arr, low, pivot_index - 1)
            quick_sort(arr, pivot_index + 1, high)

    quick_sort(arr, 0, len(arr) - 1)

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def quick_sort_random_pivot(arr):
    steps = {"steps": []}

    def partition(arr, low, high):
        rand_index = random.randint(low, high - 1)
        steps['steps'].append({"type": "highlight", "indices": [rand_index]})

        steps['steps'].append({"type": "swap", "indices": [rand_index, high]})
        arr[rand_index], arr[high] = arr[high], arr[rand_index]

        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            steps['steps'].append({"type": "highlight", "indices": [j, high]})
            if arr[j] < pivot:
                i += 1
                steps['steps'].append({"type": "swap", "indices": [i, j]})
                arr[i], arr[j] = arr[j], arr[i]

        steps['steps'].append({"type": "swap", "indices": [i + 1, high]})
        arr[i + 1], arr[high] = arr[high], arr[i + 1]

        return i + 1  

    def quick_sort(arr, low, high):
        if low < high:
            pivot_index = partition(arr, low, high)
            quick_sort(arr, low, pivot_index - 1)
            quick_sort(arr, pivot_index + 1, high)

    quick_sort(arr, 0, len(arr) - 1)

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def max_heap_sort(arr):
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

def min_heap_sort(arr):
    steps = {"steps": []}

    def heapify_min(arr, n, i):
        smallest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and arr[left] < arr[smallest]:
            steps["steps"].append({"type": "highlight", "indices": [left, smallest]})
            smallest = left
        if right < n and arr[right] < arr[smallest]:
            steps["steps"].append({"type": "highlight", "indices": [right, smallest]})
            smallest = right

        if smallest != i:
            steps["steps"].append({"type": "swap", "indices": [smallest, i]})
            arr[i], arr[smallest] = arr[smallest], arr[i]
            heapify_min(arr, n, smallest)

    n = len(arr)

    # Build min heap
    for i in range(n // 2 - 1, -1, -1):
        steps["steps"].append({"type": "highlight", "indices":  [i]})
        heapify_min(arr, n, i)

    # Extract max to end, shrink heap from the front
    for i in range(n - 1, 0, -1):
        steps["steps"].append({"type": "swap", "indices": [0, i]})
        arr[0], arr[i] = arr[i], arr[0]
        heapify_min(arr, i, 0)

    i = 0
    j = len(arr) - 1
    while i <= j:
        steps["steps"].append({"type": "swap", "indices": [i, j]}) 
        arr[i], arr[j] = arr[j], arr[i]  
        i += 1
        j -= 1

    steps['steps'].append({"type": "stop"})
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

def msd_radix_sort(array, radix=10):
    steps = {"steps": []}

    def get_digit(val, exp, minValue):
        return math.floor(((val - minValue) / exp) % radix)

    def get_max_exp(array, minValue):
        max_val = max(array) - minValue
        exp = 1
        while max_val // exp >= radix:
            exp *= radix
        return exp

    def sort(array, low, high, exp, minValue):
        if high - low <= 1 or exp < 1:
            return

        buckets = [[] for _ in range(radix)]

        for i in range(low, high):
            steps["steps"].append({"type": "highlight", "indices": [i]})
            digit = get_digit(array[i], exp, minValue)
            buckets[digit].append(array[i])

        idx = low
        for bucket in buckets:
            for val in bucket:
                array[idx] = val
                steps["steps"].append({"type": "replace", "index": idx, "value": val})
                idx += 1

        idx = low
        for bucket in buckets:
            if len(bucket) > 1:
                sort(array, idx, idx + len(bucket), exp // radix, minValue)
            idx += len(bucket)

    if len(array) == 0:
        return array

    minValue = min(array)
    exp = get_max_exp(array, minValue)

    sort(array, 0, len(array), exp, minValue)

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def lsd_radix_sort(array, radix=10):
    steps = {"steps": []}

    def countingSortByDigit(array, radix, exponent, minValue):
        bucketIndex = -1
        buckets = [0] * radix
        output = [None] * len(array)
        
        for i in range(0, len(array)):
            steps["steps"].append({"type": "highlight", "indices": [i]})
            bucketIndex = math.floor(((array[i] - minValue) / exponent) % radix)
            buckets[bucketIndex] += 1

        for i in range(1, radix):
            buckets[i] += buckets[i - 1]

        for i in range(len(array) - 1, -1, -1):
            bucketIndex = math.floor(((array[i] - minValue) / exponent) % radix)
            buckets[bucketIndex] -= 1
            output[buckets[bucketIndex]] = array[i]

        return output

    if len(array) == 0:
        return array

    minValue = array[0];
    maxValue = array[0];
    for i in range(1, len(array)):
        steps["steps"].append({"type": "highlight", "indices": [i]})
        if array[i] < minValue:
            minValue = array[i]
        elif array[i] > maxValue:
            maxValue = array[i]

    exponent = 1
    while (maxValue - minValue) / exponent >= 1:
        tempArray = countingSortByDigit(array, radix, exponent, minValue)
        for i in range(len(tempArray)):
            steps["steps"].append({"type": "replace", "index": i, "value": tempArray[i]})
            array[i] = tempArray[i]

        exponent *= radix

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)

def pancake_sort(arr): 
    steps = {"steps": []}

    n = len(arr)
    def flip(arr, i):
        start = 0
        while start < i:
            steps["steps"].append({"type": "swap", "indices": [start, i]})
            temp = arr[start]
            arr[start] = arr[i]
            arr[i] = temp
            start += 1
            i -= 1

    def findMax(arr, n):
        mi = 0
        for i in range(0,n):
            steps["steps"].append({"type": "highlight", "indices": [i, mi]})
            if arr[i] > arr[mi]:
                mi = i
        return mi

    curr_size = n
    while curr_size > 1:
        mi = findMax(arr, curr_size)

        if mi != curr_size-1:
            flip(arr, mi)

            flip(arr, curr_size-1)
        curr_size -= 1

    steps["steps"].append({"type": "stop"})
    return json.dumps(steps)


