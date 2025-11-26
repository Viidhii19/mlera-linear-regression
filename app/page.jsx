'use client';
import InteractiveGraph from '../components/InteractiveGraph';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

const ClientMath = ({ math, block = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) return <span className="opacity-0">{math}</span>;

  return block ? <BlockMath math={math} /> : <InlineMath math={math} />;
};

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 pb-24 max-w-5xl mx-auto">
        {/* Load KaTeX CSS via CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          xintegrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfTmJ2uw45UEQSqiqXS1x3tzNH5j"
          crossOrigin="anonymous"
        />

        {/* Header Section */}
        <div className="mb-8">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Home &gt; Learning Path &gt; <span className="text-purple-600 dark:text-pink-500">Content</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
                Introduction to Linear Regression
            </h1>
            
            <div className="flex justify-between items-center bg-white dark:bg-[#1a103c] p-4 rounded-lg border border-gray-200 dark:border-purple-900/30 shadow-sm transition-colors duration-300">
                <div className="flex items-center gap-4">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Module progress: 2/5</span>
                    <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden hidden sm:block">
                        <div className="bg-pink-500 h-full w-2/5"></div>
                    </div>
                </div>
                <button disabled className="px-4 py-2 border border-gray-300 text-gray-400 rounded cursor-not-allowed text-sm font-medium">
                    &lt; Previous
                </button>
            </div>
        </div>

        {/* Section 1: What is Linear Regression? */}
        <section className="bg-white dark:bg-[#1a103c] p-6 md:p-8 rounded-2xl border-l-4 border-pink-500 shadow-lg mb-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-500 mb-4 flex items-center">
                <span className="bg-pink-100 dark:bg-pink-500/20 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                What is Linear Regression?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Linear Regression is one of the most fundamental and widely used techniques in the field of machine learning and statistics. It models the relationship between a <span className="text-blue-500 dark:text-blue-400 font-bold">dependent variable</span> (often denoted as <ClientMath math="Y"/>) and one or more <span className="text-purple-600 dark:text-purple-400 font-bold">independent variables</span> (<ClientMath math="X"/>).
            </p>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-500/30">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                    💡 <strong className="text-purple-700 dark:text-purple-300">Definition:</strong> Linear Regression is a <span className="text-pink-600 dark:text-pink-400 font-semibold">supervised learning</span> algorithm that predicts a continuous output value based on one or more input features.
                </p>
            </div>
        </section>

        {/* Section 2: Mathematical Formulation */}
        <section className="bg-white dark:bg-[#1a103c] p-6 md:p-8 rounded-2xl border-l-4 border-purple-500 shadow-lg mb-8 transition-colors duration-300">
             <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-500 mb-6 flex items-center">
                <span className="bg-purple-100 dark:bg-purple-500/20 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Mathematical Formulation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">The simplest form of Linear Regression (Simple Linear Regression) can be expressed as:</p>
            
            <div className="flex justify-center bg-gray-50 dark:bg-[#0f0a1e] p-4 rounded-xl mb-6 border border-gray-200 dark:border-gray-800 overflow-x-auto">
                <div className="text-gray-800 dark:text-white text-xl">
                    <ClientMath block math="Y = \beta_0 + \beta_1 X + \epsilon" />
                </div>
            </div>
            
             <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300 text-sm">
                    <li><span className="text-pink-500 font-bold"><ClientMath math="Y"/></span> : Dependent variable (Target)</li>
                    <li><span className="text-purple-500 font-bold"><ClientMath math="X"/></span> : Independent variable (Feature)</li>
                    <li><span className="text-blue-500 font-bold"><ClientMath math="\beta_0"/></span> : Y-Intercept (value of Y when X=0)</li>
                    <li><span className="text-blue-500 font-bold"><ClientMath math="\beta_1"/></span> : Slope (how much Y changes with X)</li>
                </ul>
            </div>
        </section>

        {/* Section 3: Intuition */}
        <section className="bg-white dark:bg-[#1a103c] p-6 md:p-8 rounded-2xl border-l-4 border-pink-500 shadow-lg mb-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-500 mb-4 flex items-center">
                <span className="bg-pink-100 dark:bg-pink-500/20 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Intuition behind LR
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Imagine you're trying to understand the relationship between study hours and exam scores. Intuitively, you might expect that more study hours lead to higher scores. Linear Regression formalizes this intuition by finding the <span className="text-pink-500 font-medium">straight line</span> that best represents this relationship.
            </p>
        </section>

        <InteractiveGraph />

        {/* Footer Navigation */}
        <div className="sticky bottom-4 bg-white/90 dark:bg-[#0f0a1e]/95 backdrop-blur p-4 border border-gray-200 dark:border-gray-800 mt-12 flex justify-between items-center rounded-xl shadow-2xl z-40 transition-colors duration-300">
            <div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Coming Up Next</div>
                <div className="font-bold text-gray-800 dark:text-white">Build a Linear Regression Model</div>
            </div>
            
            <Link href="/build" className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1">
                Continue →
            </Link>
        </div>
    </div>
  );
}