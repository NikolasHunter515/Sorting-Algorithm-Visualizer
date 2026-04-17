'use client';
import { useState } from 'react';

export default function SelectAlgo({ setAlgoName }){
    const [algoList] = useState([{name: "Quicksort"}, {name: "Bubble sort"}, {name: "Insertion sort"}, {name: "Selection sort"}, {name: "Merge sort"}, {name: "Heap sort"}, {name: "Cocktail sort"}]);

    function selection(name){
        setAlgoName(name);
        //console.log(setAlgoName);
    }

    //make simple dropdown here, use loop too.
    return(
        <div>
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Select Algos</button>

            <ul className="dropdown-menu">
                {algoList.map((algo, index) => (
                    <li key={index}>
                        <button className="btn dropdown-item" onClick={() => selection(algo.name)}>{algo.name}</button>
                    </li>
                ))}

            </ul>

        </div>
    );
}