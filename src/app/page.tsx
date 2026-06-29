"use client";

import React, { useState } from 'react';
import { matrixData, processMatrixTool, MatrixReport } from '../modules/matrixProcessor';

type IndustryKey = 'ecom' | 'marketing' | 'mfg' | 'real_estate' | 'content' | 'hotels';

interface IndustryConfig {
  label: string;
  tools: { id: string; shortName: string }[];
}

const industriesMap: Record<IndustryKey, IndustryConfig> = {
  ecom: {
    label: "📦 E-Commerce",
    tools: [
      { id: 'ecom_fee', shortName: "📑 Fee & Overcharge Auditor" },
      { id: 'ecom_img', shortName: "🗜️ Image WebP Compressor" },
      { id: 'ecom_radar', shortName: "📡 Competitor Price Radar" }
    ]
  },
  marketing: {
    label: "📈 Marketing Agencies",
    tools: [
      { id: 'marketing_burn', shortName: "🚨 Ad-Spend Budget Burn Alert" },
      { id: 'marketing_portal', shortName: "🌐 Whitelabel Client Portal" },
      { id: 'marketing_utm', shortName: "🔗 UTM Campaign Link Builder" }
    ]
  },
  mfg: {
    label: "🏗️ Manufacturing & MSMEs",
    tools: [
      { id: 'mfg_yield', shortName: "📉 Raw Material Yield Detector" },
      { id: 'mfg_maintenance', shortName: "🔧 Maintenance Scheduler Alert" },
      { id: 'mfg_costing', shortName: "🧮 Production Batch Costing Tool" }
    ]
  },
  real_estate: {
    label: "🏡 Real Estate",
    tools: [
      { id: 'real_estate_whatsapp', shortName: "💬 WhatsApp Bulk Match Engine" }
    ]
  },
  content: {
    label: "🎬 Content Creators",
    tools: [
      { id: 'content_repurpose', shortName: "🎞️ Video Hook Repurpose Framework" }
    ]
  },
  hotels: {
    label: "🏨 Boutique Hotels & Guesthouses",
    tools: [
      { id: 'hotel_overbook', shortName: "🗓️ Overbooking Sync Matrix" },
      { id: 'hotel_compendium', shortName: "📖 Guest In-Room Compendium" },
      { id: 'hotel_checkout', shortName: "⏰ Late-Checkout Automator" }
    ]
  }
};

export default function SolopreneurMasterMegaMenu() {
  const [activeTool, setActiveTool] = useState<string>('dashboard');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [currentOutput, setCurrentOutput] = useState<MatrixReport | null>(null);
  const [imageCount, setImageCount] = useState<number>(6);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setCurrentOutput(null);
    setIsMegaMenuOpen(false);
  };

  const triggerToolSimulation = (toolId: string, customInput?: any) => {
    setIsProcessing(true);
    const result = processMatrixTool(toolId, customInput);
    setTimeout(() => {
      setCurrentOutput(result);
      setIsProcessing(false);
    }, 300);
  };

  const selectedToolMeta = matrixData[activeTool];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#37352f] font-sans antialiased text-[14px] relative">
      
      {/* SaaS Premium Header Menu bar */}
      <header className="h-16 bg-white border-b border-[#edece9] sticky top-0 z-50 px-8 flex items-center justify-between select-none">
        <div className="flex items-center space-x-8">
          
          <div onClick={() => { setActiveTool('dashboard'); setCurrentOutput(null); }} className="flex items-center space-x-2 cursor-pointer">
            <div className="w-6 h-6 bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-xs">M</div>
            <span className="font-bold text-base tracking-tight text-[#37352f]">extrct.app</span>
          </div>

          <nav className="relative flex items-center h-full">
            <button 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className={`flex items-center space-x-1 font-medium text-sm px-3 py-1.5 rounded-md transition-colors ${isMegaMenuOpen ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}
            >
              <span>Solutions</span>
              <span className="text-[9px] text-[#7c7b77]">▼</span>
            </button>

            {/* FULL COMPREHENSIVE MEGA MENU SYSTEM */}
            {isMegaMenuOpen && (
              <div className="absolute top-[52px] left-0 w-[720px] bg-white border border-[#edece9] shadow-2xl rounded-xl overflow-hidden flex z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                
                {/* Left Panel: All Industries from Excel Matrix */}
                <div className="w-[260px] bg-[#fbfbfa] border-r border-[#edece9] p-3 space-y-[1px]">
                  <div className="px-2 py-1.5 text-[10px] font-bold text-[#7c7b77] uppercase tracking-wider">Industries Ecosystem</div>
                  
                  {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
                    <div 
                      key={indKey}
                      onMouseEnter={() => setHoveredIndustry(indKey)}
                      className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === indKey ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.02)]'}`}
                    >
                      <span>{industriesMap[indKey].label}</span>
                      {hoveredIndustry === indKey && <span className="text-[10px] text-[#7c7b77]">→</span>}
                    </div>
                  ))}
                </div>

                {/* Right Panel: Active Sub-Tools List mapped via hovered industry */}
                <div className="flex-1 p-4 bg-white space-y-1 overflow-y-auto max-h-[400px]">
                  <div className="px-2 pb-2 text-[10px] font-bold text-[#7c7b77] uppercase tracking-wider border-b border-[#f1f0ee] mb-2">
                    {industriesMap[hoveredIndustry].label} Suite
                  </div>
                  
                  {industriesMap[hoveredIndustry].tools.map((tool) => {
                    const fullMeta = matrixData[tool.id];
                    return (
                      <div 
                        key={tool.id} 
                        onClick={() => selectToolFromMenu(tool.id)} 
                        className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer transition-colors"
                      >
                        <div className="font-semibold text-[13px] text-[#37352f]">{tool.shortName}</div>
                        <div className="text-[11px] text-[#7c7b77] line-clamp-1">{fullMeta?.painPoint}</div>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </nav>
        </div>

        <div className="text-xs text-[#7c7b77] border border-[#edece9] px-3 py-1 rounded-full bg-[#fbfbfa]">
          Deployment: <b>14 Active Utilities</b>
        </div>
      </header>

      {/* DISMISSER PLANE LAYER */}
      {isMegaMenuOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsMegaMenuOpen(false)} />}

      {/* CONTAINER HUB FOR SYSTEM INTERFACES */}
      <main className="max-w-[800px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-white border border-[#edece9] rounded-xl shadow-sm p-12 min-h-[460px]">
          
          {activeTool === 'dashboard' ? (
            <div className="text-center pt-12">
              <h1 className="text-4xl font-bold tracking-tight text-[#37352f] mb-3">Master Platform Core Grid</h1>
              <p className="text-[#7c7b77] text-base max-w-lg mx-auto mb-8">All industry segments from your structural matrix file are successfully wired. Open the <b>Solutions mega menu</b> dropdown above to toggle between distinct nodes.</p>
              <div className="inline-flex items-center space-x-2 text-xs bg-[#fbfbfa] border px-3 py-1.5 rounded-md text-[#5a5750]">
                <span>💡 Protocol Tip: Hover across industries to see internal tool matrices instantly</span>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#7c7b77] mb-1">
                <span>Operational Node Sandbox</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f] mb-6">
                {selectedToolMeta?.name}
              </h1>

              {/* Core Pain Point Grid */}
              <div className="bg-[#fdebec] border border-[#f5c2c2] p-4 rounded-xl mb-4">
                <span className="text-[11px] font-bold text-[#601a1a] uppercase tracking-wider block mb-1">Core System Pain Point</span>
                <p className="text-sm text-[#601a1a] leading-relaxed">{selectedToolMeta?.painPoint}</p>
              </div>

              {/* Functional Framework Setup */}
              <div className="bg-[#fbfbfa] border border-[#edece9] p-4 rounded-xl mb-8">
                <span className="text-[11px] font-bold text-[#7c7b77] uppercase tracking-wider block mb-1">Functional Processing Logic</span>
                <p className="text-sm text-[#5a5750] leading-relaxed">{selectedToolMeta?.logic}</p>
              </div>

              {activeTool === 'ecom_img' && (
                <div className="mb-4 flex items-center space-x-3 bg-white border p-3 rounded-lg max-w-xs">
                  <label className="text-xs font-medium text-[#7c7b77]">Upload Test Count:</label>
                  <input type="number" value={imageCount} onChange={(e) => setImageCount(Number(e.target.value))} className="w-16 border rounded p-1 text-xs text-center outline-none" />
                </div>
              )}

              {/* Interaction Drop Point Container Box */}
              <div 
                onClick={() => triggerToolSimulation(activeTool, activeTool === 'ecom_img' ? imageCount : null)} 
                className="border-2 border-dashed border-[#edece9] hover:border-[#37352f] rounded-xl p-16 text-center cursor-pointer mb-8 transition-all bg-[#fbfbfa]"
              >
                {isProcessing ? (
                  <span className="text-sm font-medium text-[#7c7b77] animate-pulse">Analyzing system database matrix parameters...</span>
                ) : (
                  <span className="text-sm font-medium text-[#37352f]">📄 Click to simulate dragging & dropping industry transaction logs dump</span>
                )}
              </div>

              {/* Output Generation Render Panels */}
              {currentOutput && (
                <div className="space-y-4 border-t border-[#edece9] pt-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#fbfbfa] border rounded-lg"><span className="text-xs text-[#7c7b77] uppercase font-bold tracking-wider block mb-1">Telemetry Variable A</span><b className="text-base text-[#37352f]">{currentOutput.metricA}</b></div>
                    <div className="p-4 bg-[#fbfbfa] border rounded-lg"><span className="text-xs text-[#7c7b77] uppercase font-bold tracking-wider block mb-1">Telemetry Variable B</span><b className="text-base text-red-600">{currentOutput.metricB}</b></div>
                  </div>

                  {currentOutput.isLocked && (
                    <div className="bg-[#fbfbfa] border border-[#edece9] rounded-xl p-6 text-center">
                      <p className="text-sm text-[#37352f] mb-4 font-medium">{selectedToolMeta?.unlockHook}</p>
                      <button onClick={() => alert("Stripe Interface active.")} className="bg-[#37352f] text-white text-xs font-semibold py-2 px-5 rounded-lg hover:bg-[#2c2a27] transition-all">
                        Unlock Full Sheet Integration Export Tier ($10)
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}