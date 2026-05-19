'use client';

import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const dta = [
  { subject: "A", uv: 1 },
  { subject: "B", uv: 3 },
  { subject: "C", uv: 2 },
  { subject: "D", uv: 2 },
  { subject: "E", uv: 4 },
  { subject: "F", uv: 3 },
  { subject: "G", uv: 4 },
];

const dato = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function RadarGraph({ data }) {
  return (
    <RadarChart
      style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
      responsive
      outerRadius="80%"
      data={dato}
      margin={{
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <RechartsDevtools />
    </RadarChart>
  );
}