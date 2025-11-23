'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-purple-900/30 bg-white/80 dark:bg-[#0f0a1e]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center transition-colors duration-300">
      <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
        MLera
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
        <Link href="/" className="text-purple-600 dark:text-purple-400 font-semibold">Home</Link>
        <Link href="/build" className="hover:text-purple-500 transition-colors">Learning Path</Link>
        <Link href="#" className="hover:text-purple-500 transition-colors opacity-50 cursor-not-allowed" title="Not part of assignment">Challenges</Link>
      </div>

      <div className="flex items-center gap-4">
        {/* Ensure ThemeToggle file exists in the same directory */}
        <ThemeToggle />
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <User className="w-5 h-5 text-gray-700 dark:text-white" />
        </div>
      </div>
    </nav>
  );
}