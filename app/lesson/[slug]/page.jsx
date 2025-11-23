/*import InteractiveGraph from '@/components/InteractiveGraph';
import { notFound } from 'next/navigation';

export default async function LessonPage({ params }) {
  // FIX 2: Await the params object (Required in Next.js 15)
  const { slug } = await params;

  // Mock data check (since we are skipping the data folder for simplicity in this fix)
  // You can keep your data fetch logic here if you prefer, but this hardcoded check ensures it works.
  if (slug !== 'intro-to-linear-regression' && slug !== 'linear-regression') {
    // If you want to allow any slug for now just to test, comment out the line below
    // return notFound(); 
  }

  return (
    <div className="min-h-screen bg-[#0f0a1e] text-white p-8">
      {/* Header Section }
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
            Introduction to Linear Regression
            </h1>
            <div className="flex justify-between items-center bg-[#1a103c] p-4 rounded-lg border border-purple-900/30">
                <span>Module progress: 2/5</span>
                <button className="px-4 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-900/50">
                    &lt; Previous
                </button>
            </div>
        </div>

        {/* Section 1: Definition }
        <section className="bg-[#1a103c] p-8 rounded-2xl border-l-4 border-pink-500">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">1. What is Linear Regression?</h2>
            <p className="text-gray-300 mb-4">
                Linear Regression is a method for modeling the relationship between a <span className="text-blue-400">dependent variable</span> (Y) and one or more <span className="text-purple-400">independent variables</span> (X).
            </p>
            <div className="bg-purple-900/20 p-4 rounded border border-purple-500/30">
                <p className="text-sm text-gray-300">
                    💡 <strong>Definition:</strong> It is a <span className="text-pink-400">supervised learning</span> algorithm predicting continuous output.
                </p>
            </div>
        </section>

        {/* Section 2: Formula }
        <section className="bg-[#1a103c] p-8 rounded-2xl border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-500 mb-6">2. Mathematical Formulation</h2>
            <div className="flex justify-center bg-[#0f0a1e] p-6 rounded-xl mb-4 border border-gray-800">
                <code className="text-3xl font-mono text-white">Y = β₀ + β₁X + ε</code>
            </div>
        </section>

        {/* Section 3: Interactive Graph (The Missing Piece) }
        <InteractiveGraph />

        {/* Footer Navigation }
        <div className="flex justify-end pt-8">
            <a href="/build" className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-bold hover:opacity-90">
                Continue →
            </a>
        </div>
      </div>
    </div>
  );
}
*/