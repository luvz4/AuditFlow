import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan", in: 2000, out: 1200 },
  { date: "Feb", in: 1800, out: 800 },
  { date: "Mar", in: 2100, out: 1400 }
];

export default function Dashboard() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cash Flow</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="in" stroke="#00C49F" />
          <Line type="monotone" dataKey="out" stroke="#FF8042" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
