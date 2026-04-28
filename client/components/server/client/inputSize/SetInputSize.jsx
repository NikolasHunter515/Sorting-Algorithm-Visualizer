'use client';
import { useState } from 'react';

export default function SetInputSize({ inputSize, setInputSize }) {
    const [inVal, setInVal] = useState(`N: ${inputSize}`)

    return (
        <div>
            <input
                type="number"
                placeholder="N: "
                value={inputSize || ''}
                onChange={(e) => setInputSize(e.target.value)}
                id='inputSize'
            />
        </div>
    );
}