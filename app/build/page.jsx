'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function BuildPage() {
  const [dataset, setDataset] = useState('Sales Revenue');
  const [learningRate, setLearningRate] = useState(0.05);
  const [iterations, setIterations] = useState(100);
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [costHistory, setCostHistory] = useState([]);

  // Training Simulation Logic
  useEffect(() => {
    if (isTraining && progress < iterations) {
      const timer = setTimeout(() => {
        setProgress(prev => prev + 2); // Speed up animation
        const newCost = Math.max(0.1, 1 / (progress * 0.1 + 1)); // Fake cost curve
        setCostHistory(prev => [...prev, { iteration: progress, cost: newCost }]);
      }, 30);
      return () => clearTimeout(timer);
    } else if (progress >= iterations) {
      setIsTraining(false);
    }
  }, [isTraining, progress, iterations]);

  const handleTrain = () => {
    setIsTraining(true);
    setProgress(0);
    setCostHistory([]);
  };

  // Mock Data based on selection
  const getData = () => {
    if (dataset === 'Sales Revenue') return [{x:10, y:20}, {x:20, y:45}, {x:30, y:55}, {x:40, y:85}, {x:50, y:90}];
    if (dataset === 'Housing Prices') return [{x:50, y:150}, {x:80, y:220}, {x:100, y:300}, {x:120, y:350}, {x:150, y:450}];
    return [{x:1, y:40000}, {x:2, y:45000}, {x:5, y:80000}, {x:8, y:120000}];
  };

  return (
    <div className="min-h-screen p-4 md:p-8 pb-20 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Home &gt; Learning Path &gt; <span className="text-purple-600 dark:text-pink-500">Build</span></div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Build A Linear Regression Model</h1>
            
            <div className="bg-white dark:bg-[#1a103c] p-6 rounded-xl border border-l-4 border-pink-500 shadow-md">
                <h2 className="font-bold text-lg text-pink-600 dark:text-pink-400 mb-2">1. Lets Build The Model</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Select a dataset, adjust hyperparameters, and click "Build" to watch the model train in real-time.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Dataset Selection */}
            <div className="space-y-4">
                <label className="block text-purple-600 dark:text-purple-400 font-bold">2. Select Dataset</label>
                <select 
                    value={dataset} 
                    onChange={(e) => setDataset(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-[#1a103c] border border-gray-300 dark:border-purple-500/30 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 outline-none"
                >
                    <option>Sales Revenue</option>
                    <option>Housing Prices</option>
                    <option>Salary vs Experience</option>
                </select>
                <div className="bg-blue-50 dark:bg-purple-900/20 p-4 rounded border border-blue-100 dark:border-purple-500/20 text-sm text-gray-600 dark:text-gray-300">
                    Currently selected: <strong>{dataset}</strong>. This dataset helps visualize linear correlations in real-world scenarios.
                </div>
            </div>

            {/* Hyperparameters */}
            <div className="space-y-4">
                <label className="block text-purple-600 dark:text-purple-400 font-bold">3. Hyperparameters</label>
                <div className="bg-white dark:bg-[#1a103c] p-6 rounded-xl border border-gray-200 dark:border-gray-800 space-y-6 shadow-sm">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm text-gray-500 dark:text-gray-400">Learning Rate</label>
                            <span className="text-pink-500 font-bold">{learningRate}</span>
                        </div>
                        <input 
                            type="range" min="0.001" max="0.1" step="0.001" 
                            value={learningRate} onChange={(e) => setLearningRate(Number(e.target.value))}
                            className="w-full accent-pink-500 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
                        />
                    </div>
                    <button 
                        onClick={handleTrain}
                        disabled={isTraining}
                        className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all ${isTraining ? 'bg-gray-500' : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90'}`}
                    >
                        {isTraining ? `Training... (${Math.floor((progress/iterations)*100)}%)` : 'Build Model'}
                    </button>
                </div>
            </div>
        </div>

        {/* Visualizations */}
        <div className="space-y-4">
             <label className="block text-purple-600 dark:text-purple-400 font-bold">4. Model Growth</label>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Regression Plot */}
                <div className="bg-white dark:bg-[#1a103c] p-4 rounded-xl border border-gray-200 dark:border-gray-800 h-[300px] shadow-sm">
                    <h3 className="text-center text-gray-500 text-sm mb-4">Regression Fit</h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <ScatterChart>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                            <XAxis type="number" dataKey="x" stroke="#888" />
                            <YAxis type="number" dataKey="y" stroke="#888" />
                            <Scatter name="Data" data={getData()} fill="#a855f7" />
                            {progress > 0 && (
                                <Scatter name="Fit" data={[{x:0, y:0}, {x:100, y: progress * 5}]} line={{ stroke: '#ec4899', strokeWidth: 2 }} shape={() => <></>} />
                            )}
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>

                {/* Cost Plot */}
                <div className="bg-white dark:bg-[#1a103c] p-4 rounded-xl border border-gray-200 dark:border-gray-800 h-[300px] shadow-sm">
                     <h3 className="text-center text-gray-500 text-sm mb-4">Cost vs Iteration</h3>
                     <ResponsiveContainer width="100%" height="90%">
                        <LineChart data={costHistory}>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                            <XAxis dataKey="iteration" stroke="#888" />
                            <YAxis stroke="#888" />
                            <Line type="monotone" dataKey="cost" stroke="#ec4899" dot={false} strokeWidth={2} isAnimationActive={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
             </div>
        </div>
    </div>
  );
}