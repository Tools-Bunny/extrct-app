"use client";

import React, { useState } from 'react';

// Industry definitions remain the same
type IndustryKey = 'ecom' | 'marketing' | 'mfg' | 'real_estate' | 'cafe' | 'legal' | 'health';

export default function AppCore() {
  const [activeTool, setActiveTool] = useState<string>('dashboard');

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased">
      {/* Header - Clean & Minimal */}
      <header className="h-14 border-b border-[#eaeaea] flex items-center justify-between px-6 sticky top-0 bg-white z-50">
        <div onClick={() => setActiveTool('dashboard')} className="flex items-center gap-2 cursor-pointer">
          <div className="w-5 h-5 bg-black text-white rounded flex items-center justify-center font-black text-[10px]">E</div>
          <span className="font-bold text-[15px] tracking-tight">extrct.app</span>
        </div>
        <div className="flex gap-4">
          <button className="text-[13px] font-medium text-gray-600">Services</button>
          <button className="bg-black text-white px-4 py-1.5 rounded-md text-[12px] font-bold">Get Started</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1040px] mx-auto py-12 px-6">
        {activeTool === 'dashboard' ? (
          <div className="text-center py-20">
            <h1 className="text-5xl font-black mb-6">Operations Terminal.</h1>
            <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">Automate your business workflows with our specialized micro-tools.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {['Marketplace Auditor', 'Ad-Spend Tracker', 'Production Yield Tool'].map((t) => (
                <div key={t} onClick={() => setActiveTool('marketing_utm')} className="p-6 border rounded-xl hover:border-black transition-all cursor-pointer">
                  <h3 className="font-bold">{t}</h3>
                  <p className="text-xs text-gray-400 mt-2">Execute workflow instantly.</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <button onClick={() => setActiveTool('dashboard')} className="text-xs font-bold text-gray-400">← Back to Hub</button>
            
            {/* Tool Landing Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">Core Tool</span>
                <h1 className="text-4xl font-black">Campaign UTM Generator</h1>
                <p className="text-gray-600 text-lg">Generate clean, trackable attribution links to monitor your marketing ROI with zero manual errors.</p>
                
                <div className="bg-[#f7f7f5] p-6 rounded-xl border space-y-4">
                  <input type="text" placeholder="URL" className="w-full p-3 border rounded-lg text-sm" />
                  <button className="w-full bg-black text-white py-3 rounded-lg font-bold">Compile Link</button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-lg">Why use this?</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex gap-3"><span>✅</span> Accurate ROI reporting.</li>
                  <li className="flex gap-3"><span>✅</span> Eliminate traffic source confusion.</li>
                  <li className="flex gap-3"><span>✅</span> Professional naming for deep analytics.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}