'use client';
import { useState } from 'react';

export default function SetInputSize({ inputSize, setInputSize }) {
    const [inVal, setInVal] = useState(`N: ${inputSize}`)

    //works but is kinda of buggy, new bug for irrisa
    function validInput(size){
        if(size >= 10 && size <= 200){
            setInputSize(size);
            console.log("Valid input");
        }
        else{
            console.log("Invalid input");
        }
    }

    return (
        <div>
            <input
                type="number"
                placeholder="N: "
                value={inputSize || ''}
                onChange={(e) => setInputSize(e.target.value)}
                id='inputSize'
                min={10}
                max={200}
            />
        </div>
    );
}