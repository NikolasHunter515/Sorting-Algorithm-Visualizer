'use client';

import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const dta = [
  { subject: 'A', uv: 1 },
  { subject: 'B', uv: 3 },
  { subject: 'C', uv: 2 },
  { subject: 'D', uv: 2 },
  { subject: 'E', uv: 4 },
  { subject: 'F', uv: 3 },
  { subject: 'G', uv: 4 },
];

export default function RadarGraph({ data, speed }) {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={data}
          outerRadius="80%"
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="id" tick={false} />
          <PolarRadiusAxis />

          <Radar
            dataKey="uv"
            stroke="#3AC3C5"
            fill="#3AC3C5"
            fillOpacity={1.0}
            animationDuration={speed}
            animationEasing="ease"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}