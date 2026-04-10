'use client';

import { useState, useEffect } from 'react';

export default function ChartAnimate({showAnimate, playControl, chartTuples, chartData}){
    //Acutally this does not need to be a client component just needs to read data and update what the chart sees.
    const [startIndex, setStartIndex] = useState(0); // will be used to handle pause and play
    //scratch this, will be given the original array, and passed the tuples to swap at each iteration.
    //consider making the sleep time an input for this function, for futrue functionality.

    useEffect(() =>{
        if(!showAnmiate){
            setStartIndex(chartData.length - 1);
        }

        //loop throuhg tuples here and swap, then sleep for 2 seconds.
    })

    return(
        <div>
            
        </div>
    );
}