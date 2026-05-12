
export default function shortenName(name){
    //goal here is to return the shorten version of an algos name to be feed into the api call.

    //when calling check for a null value before passing to api.
    switch(name){
        case "Quicksort (right pivot)": 
            return "quick_right";
        case "Quicksort (random pivot)": 
            return "quick_random";
        case "Bubble sort":
            return "bubble";
        case "Bubble sort(optimized)":
            return "bubble_optimized";
        case "Odd even sort":
            return "odd_even";
        case "Comb sort":
            return "comb";
        case "Gnome sort":
            return "gnome";
        case "Selection sort":
            return "selection";
        case "Bidirectional Selection sort":
            return "selection_bidirectional";
        case "Insertion sort":
            return "insertion";
        case "Binary Insertion sort":
            return "insertion_binary";
        case "Shell sort":
            return "shell";
        case "Merge sort(top down)":
            return "merge_top";
        case "Merge sort(bottom up)":
            return "merge_bottom";    
        case "Heap sort":
            return "heap_max";
        case "Min Heap sort":
            return "heap_min";
        case "Cocktail sort":
            return "cocktail";
        case "Radix sort (MSD)":
            return "radix_msd";
        case "Radix sort (LSD)":
            return "radix_lsd";
        case "Pancake sort":
            return "pancake";
        default:
            return null;
    }        
}