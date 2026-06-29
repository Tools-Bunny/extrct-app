"use client";
import { useState } from 'react';

export default function HomePage() {
  const [view, setView] = useState('home'); // 'home' or 'tool_detail'

  return (
    <div className="max-w-5xl mx-auto p-8">
      {view === 'home' ? (
        <div className="py-20 text-center">
          <h1 className="text-6xl font-black mb-6">Operations Terminal.</h1>
          <p className="text-xl text-gray-500 mb-12">Automate your business workflows with precision.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {['UTM Generator', 'Fee Auditor', 'Yield Monitor'].map((tool) => (
              <div key={tool} onClick={() => setView('tool_detail')} className="p-8 border rounded-2xl cursor-pointer hover:border-black transition-all">
                <h3 className="font-bold text-lg">{tool}</h3>
                <p className="text-sm text-gray-400 mt-2">Optimize your operations.</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="py-12 space-y-12">
          <button onClick={() => setView('home')} className="text-sm font-bold text-gray-400">← Back to Dashboard</button>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-black">Professional Tool Interface</h1>
              <p className="text-lg text-gray-600">Execute your specific workflow parameters. Optimized for performance and SEO.</p>
              <div className="p-8 bg-gray-50 rounded-2xl border space-y-4">
                <input type="text" placeholder="Enter configuration data..." className="w-full p-3 rounded-lg border" />
                <button className="w-full bg-black text-white py-3 font-bold rounded-lg">Execute Process</button>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-bold text-xl">Key Benefits</h3>
              <ul className="space-y-4 text-gray-600">
                <li>✅ High-precision algorithmic execution.</li>
                <li>✅ Fully indexable and SEO-ready content.</li>
                <li>✅ Scalable across business tiers.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}