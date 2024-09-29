import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const placementData = [
  { name: 'TCS', placements: 30 },
  { name: 'Wipro', placements: 20 },
  { name: 'Google', placements: 10 },
  { name: 'Mahesh Computer', placements: 40 },
];

const trainingData = [
  { name: 'Placed', value: 100 },
  { name: 'In Progress', value: 80 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Graph: React.FC = () => {
  return (
    <div style={{ padding: '100px' }}>
      <h1>Placement Statistics</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
        <div style={{ width: '45%' }}>
          <h2>Placements by Company</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={placementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="placements" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: '45%' }}>
          <h2>Training Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={trainingData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {trainingData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
