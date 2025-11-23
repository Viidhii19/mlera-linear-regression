'use client';
import { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the graph
const data = [
  { x: 1, y: 20 }, { x: 2, y: 25 }, { x: 3, y: 40 }, { x: 4, y: 50 },
  { x: 5, y: 55 }, { x: 6, y: 70 }, { x: 7, y: 85 }, { x: 8, y: 90 },
  { x: 9, y: 95 }
];

export default function InteractiveGraph() {
  const [intercept, setIntercept] = useState(20);
  const [slope, setSlope] = useState(5);
  const [lineData, setLineData] = useState([]);
  const [mse, setMse] = useState(0);

  // Update the regression line and calculate MSE whenever sliders change
  useEffect(() => {
    const newLine = data.map(pt => ({ x: pt.x, y: (slope * pt.x) + intercept }));
    setLineData(newLine);
    
    // Calculate Mean Squared Error
    const error = data.reduce((acc, pt) => acc + Math.pow(pt.y - ((slope * pt.x) + intercept), 2), 0);
    setMse(error / data.length);
  }, [slope, intercept]);

  return (
    <div className="w-full p-6 bg-[#1a103c] rounded-xl border border-purple-900/50 shadow-xl mt-6">
      <h3 className="text-xl font-semibold mb-4 text-white">7. Visual Representation</h3>
      <p className="text-gray-400 text-sm mb-4">Adjust the intercept and slope to minimize the error (MSE).</p>

      <div className="h-[300px] w-full bg-[#0f0a1e] rounded-lg p-2">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis type="number" dataKey="x" name="Study Hours" domain={[0, 10]} stroke="#a855f7" tick={{fill: '#a855f7'}} />
            <YAxis type="number" dataKey="y" name="Score" domain={[0, 120]} stroke="#a855f7" tick={{fill: '#a855f7'}} />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }} 
              contentStyle={{ backgroundColor: '#1a103c', borderColor: '#a855f7', color: '#fff' }} 
            />
            <Scatter name="Students" data={data} fill="#8884d8" />
            <Scatter name="Line" data={lineData} line={{ stroke: '#ec4899', strokeWidth: 3 }} shape={() => <></>} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Controls */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex justify-between">
             <label className="text-pink-500 font-medium">Intercept (β₀)</label>
             <span className="text-white">{intercept}</span>
          </div>
          <input 
            type="range" min="0" max="50" 
            value={intercept} 
            onChange={(e) => setIntercept(Number(e.target.value))} 
            className="w-full accent-pink-500 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" 
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
             <label className="text-pink-500 font-medium">Slope (β₁)</label>
             <span className="text-white">{slope}</span>
          </div>
          <input 
            type="range" min="0" max="15" step="0.1" 
            value={slope} 
            onChange={(e) => setSlope(Number(e.target.value))} 
            className="w-full accent-pink-500 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" 
          />
        </div>
      </div>

      {/* Error Metric */}
      <div className="mt-6 p-4 bg-[#0f0a1e] rounded-lg border border-red-500/30 flex justify-between items-center">
        <span className="text-gray-400 text-sm">Mean Squared Error (MSE)</span>
        <span className="text-2xl font-bold text-red-400">{mse.toFixed(2)}</span>
      </div>
    </div>
  );
}