'use client';
import { useState } from 'react';

export default function SetInputSize({ inputSize, setInputSize }) {
    return (
        <div>
            <input
                type="number"
                placeholder="N: "
                value={inputSize || ''}
                onChange={(e) => setInputSize(e.target.value)}
            />
        </div>
    );
}