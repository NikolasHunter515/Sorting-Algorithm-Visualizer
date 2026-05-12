
export default function shortenName(name){
    //goal here is to return the shorten version of an algos name to be feed into the api call.

    //when calling check for a null value before passing to api.
    switch(name){
        case "Quicksort": 
            return "quick";
        case "Bubble sort":
            return "bubble";
        case "Selection sort":
            return "selection";
        case "Insertion sort":
            return "insertion";
        case "Merge sort":
            return "merge";
        case "Heap sort":
            return "heap";
        case "Cocktail sort":
            return "cocktail";
        default:
            return null;
    }        
}