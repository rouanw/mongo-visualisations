import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

const DataChart = ({ data }) => (
  <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Legend />
    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
  </LineChart>
);

export default DataChart;
