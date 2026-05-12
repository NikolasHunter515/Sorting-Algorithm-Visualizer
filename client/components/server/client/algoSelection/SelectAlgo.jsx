'use client';
import { useState } from 'react';

export default function SelectAlgo({ setAlgoName }){
    const [algoList] = useState([{name: "Quicksort (right pivot)"}, {name: "Quicksort (random pivot)"}, {name: "Bubble sort"}, {name: "Bubble sort(optimized)"}, {name: "Odd even sort"}, {name: "Comb sort"}, {name: "Gnome sort"}, {name: "Insertion sort"}, {name: "Binary Insertion sort"}, {name: "Selection sort"}, {name: "Bidirectional Selection sort"}, {name: "Shell sort"}, {name: "Merge sort(top down)"}, {name: "Merge sort(bottom up)"}, {name: "Heap sort"}, {name: "Min Heap sort"}, {name: "Cocktail sort"}, {name: "Radix sort (MSD)"}, {name: "Radix sort (LSD)"}, {name: "Pancake sort"}]);

    function selection(name){
        setAlgoName(name);
        //console.log(setAlgoName);
    }

    //make simple dropdown here, use loop too.
    return(
        <div>
            <button type="button" className="btn selectBtn dropdown-toggle" data-bs-toggle="dropdown" id="dDownToggle">Select Algos</button>

            <ul className="dropdown-menu">
                {algoList.map((algo, index) => (
                    <li key={index}>
                        <button className="btn dropdown-item" onClick={() => selection(algo.name)}><span className='me-2'>{algo.name}</span></button>
                    </li>
                ))}

            </ul>

        </div>
    );
}