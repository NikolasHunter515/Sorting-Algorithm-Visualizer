'use client';
import React from "react-dom";
import { BarChart, Bar } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useState } from 'react';

export default function ChartRender({data}){
    const [arr, setArr] = useState([1,4,5,6]);

    return (
        <div className="chartRend">
                <BarChart
            style={{ width: '100%', maxWidth: '2000px', maxHeight: '2000px', aspectRatio: 1.618 }}
            responsive
            data={data}
            >

            <defs>
            <filter id="shadow" x="-100%" y="0%" width="200%" height="200%">
            <feDropShadow
                dx="-3"
                dy="0"
                stdDeviation="4"
                floodColor="#000"
                floodOpacity="1.25"
            />
            </filter>
        </defs>

            <Bar dataKey="uv" fill="#2117ec" isAnimationActive={false} filter="url(#shadow)"/>
            <RechartsDevtools />
            </BarChart>
        </div>
    );
}