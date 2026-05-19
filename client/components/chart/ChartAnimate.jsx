'use client';
import { useState, useEffect } from 'react';

export default function ChartAnimate({ showAnimate, playControl, chartTuples, chartData }) {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        if (!showAnimate) {
            setStartIndex(chartData.length - 1);
        }
    }, [showAnimate, chartData]);

    return (
        <div></div>
    );
}