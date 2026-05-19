'use client';
import React from "react";
import { ResponsiveContainer, BarChart, Bar } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

export default function BarGraph({data}){

    return(
        <ResponsiveContainer width="100%" aspect={1.618}>
              <BarChart data={data}>
                <defs>
                  <filter id="shadow" x="-100%" y="0%" width="200%" height="200%">
                    <feDropShadow
                      dx="-3"
                      dy="0"
                      stdDeviation="4"
                      floodColor="#000"
                      floodOpacity="1"
                    />
                  </filter>
                </defs>
        
                <Bar
                  dataKey="uv"
                  fill="#2117ec"
                  isAnimationActive={false}
                  filter="url(#shadow)"
                />
              </BarChart>
            </ResponsiveContainer>
    );
}