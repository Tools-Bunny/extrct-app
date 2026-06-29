"use client";
import { useState } from 'react';

export default function Home() {
  const [activeTool, setActiveTool] = useState('home');
  const tools = [
    'UTM Generator', 'Fee Auditor', 'Yield Monitor', 'WhatsApp Engine', 
    'Rental Log', 'Property Desc', 'Tip Splitter', 'Recipe Costing', 
    'QR Menu', 'Billable Hours', 'Legal Doc', 'Court Calendar', 
    'No-Show Preventer', 'Maintenance Scheduler'
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 min-h-[70vh]">
      {activeTool === 'home' ? (
        <div className="py-20 text-center">
          <h1 className="text-6xl font-black mb-6">Operations Terminal.</h1>
          <p className="text-xl text-gray-500 mb-12">Precision micro-tools for your business matrix.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((t) => (
              <div key={t} onClick={() => setActiveTool(t)} className="p-8 border rounded-2xl hover:border-black cursor-pointer transition-all text-left">
                <h3 className="font-bold text-lg">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="py-12 space-y-12">
          <button onClick={() => setActiveTool('home')} className="text-xs font-bold text-gray-400 underline">← Back to Dashboard</button>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl font-black mb-4">{activeTool}</h1>
              <p className="text-gray-600 mb-8">Professional landing page design for {activeTool}. Execute your workflow parameters with precision.</p>
              <div className="p-8 bg-gray-50 rounded-2xl border space-y-4">
                <input type="text" placeholder="Enter configuration data..." className="w-full p-3 rounded-lg border" />
                <button className="w-full bg-black text-white py-3 font-bold rounded-lg">Execute Process</button>
              </div>
            </div>
            <div className="p-8 border rounded-2xl bg-gray-50">
              <h3 className="font-bold text-xl mb-4">Why this module works</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>✅ High-precision algorithmic execution.</li>
                <li>✅ Optimized for zero-latency output.</li>
                <li>✅ Scalable across all business tiers.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}