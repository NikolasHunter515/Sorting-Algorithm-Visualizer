'use client';
import React from "react-dom";
import { BarChart, Bar } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useState } from 'react';

export default function ChartRender({data}){
    const [arr, setArr] = useState([1,4,5,6]);

    return (
        <BarChart
        style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
        responsive
        data={data}
        >
        <Bar dataKey="uv" fill="#2117ec" />
        <RechartsDevtools />
        </BarChart>
    );
}