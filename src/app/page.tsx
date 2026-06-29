"use client";

import React, { useState } from 'react';

type IndustryKey = 
  | 'ecom' | 'marketing' | 'mfg' | 'real_estate' | 'content' 
  | 'hotels' | 'gym' | 'freelance' | 'cafe' | 'dtc';

interface ToolItem {
  id: string;
  shortName: string;
  tagline: string;
}

interface IndustryConfig {
  label: string;
  tools: ToolItem[];
  notionHeroSub: string;
}

const industriesMap: Record<IndustryKey, IndustryConfig> = {
  ecom: {
    label: "📦 E-Commerce",
    notionHeroSub: "Audits marketplace fees, compresses heavy product variants, and monitors competitor price drop signals.",
    tools: [
      { id: 'ecom_fee', shortName: "📑 Fee & Overcharge Auditor", tagline: "Audits structural weight tier discrepancies." },
      { id: 'ecom_img', shortName: "🗜️ Image WebP Compressor", tagline: "Batch conversion pipeline for rapid assets." },
      { id: 'ecom_radar', shortName: "📡 Competitor Price Radar", tagline: "Automated daily listing scraper and map tracker." }
    ]
  },
  marketing: {
    label: "📈 Digital Marketing Agencies",
    notionHeroSub: "Automates multi-channel budget tracking, auto-builds whitelabel portals, and formats pristine UTM parameters.",
    tools: [
      { id: 'marketing_burn', shortName: "🚨 Ad-Spend Budget Burn Alert", tagline: "Triggers active velocity alerts across network spends." },
      { id: 'marketing_portal', shortName: "🌐 Whitelabel Notion Client Portal", tagline: "One-click clean portfolio sharing dashboards." },
      { id: 'marketing_utm', shortName: "🔗 UTM Campaign Link Generator", tagline: "Structured matrix parameters for clean attribution flow." }
    ]
  },
  mfg: {
    label: "🏗️ Manufacturing & MSMEs",
    notionHeroSub: "Exposes factory floor leakage, automates proactive machine maintenance, and locks down live batch production costing.",
    tools: [
      { id: 'mfg_yield', shortName: "📉 Raw Material Yield Detector", tagline: "Flags floor drop waste levels against input logs." },
      { id: 'mfg_maintenance', shortName: "🔧 Maintenance Scheduler Alert", tagline: "Supabase sequence alerts before production deadlines." },
      { id: 'mfg_costing', shortName: "🧮 Production Batch Costing Tool", tagline: "Real-time components margin framework calculators." }
    ]
  },
  real_estate: {
    label: "🏡 Real Estate Agents",
    notionHeroSub: "Instantly targets layout broadcasts via WhatsApp, runs complex split payouts, and builds flyer markups dynamically.",
    tools: [
      { id: 'real_estate_whatsapp', shortName: "💬 WhatsApp Bulk Match Engine", tagline: "Parses parameters directly into client broadcasts." },
      { id: 'real_estate_commission', shortName: "📊 Split-Commission Calculator", tagline: "Calculates gross agency margins and multi-broker cuts." },
      { id: 'real_estate_flyer', shortName: "🖼️ Instant Social Flyer Maker", tagline: "Stitches property launch specs into sleek markups." }
    ]
  },
  content: {
    label: "🎬 Content Creators",
    notionHeroSub: "Automates multi-platform asset clipping grids, optimizes brand rate valuations, and templates scripts for viewer retention.",
    tools: [
      { id: 'content_repurpose', shortName: "🎞️ Video Hook Repurpose Framework", tagline: "Splits long-form topics into structured format formats." },
      { id: 'content_sponsor', shortName: "💰 Sponsorship Price Estimator", tagline: "Algorithmic pricing calculator for audience deliverables." },
      { id: 'content_script', shortName: "📝 Script Structure Engine", tagline: "Enforces engagement markers for short-form retention." }
    ]
  },
  hotels: {
    label: "🏨 Boutique Hotels & Guesthouses",
    notionHeroSub: "Stops platform overbookings natively, launches real-time digital in-room catalogs, and upsells check-outs via text automation.",
    tools: [
      { id: 'hotel_overbook', shortName: "🗓️ Overbooking Sync Matrix", tagline: "Lightweight single source central calendar hub." },
      { id: 'hotel_compendium', shortName: "📖 Guest Digital Compendium", tagline: "Generates quick mobile guide web links via QR codes." },
      { id: 'hotel_checkout', shortName: "⏰ Late-Checkout Automator", tagline: "Sends departure upsell nodes directly to guest pipelines." }
    ]
  },
  gym: {
    label: "💪 Gyms & Fitness Studios",
    notionHeroSub: "Predicts customer quiet-quitting early, maps dynamic floor limits, and processes automated personal trainer matrices.",
    tools: [
      { id: 'gym_churn', shortName: "📉 Member Churn Predictor", tagline: "Monitors attendance velocity logs for warning offsets." },
      { id: 'gym_class', shortName: "📅 Class Capacity Optimizer", tagline: "Staggers peak shift slots based on historical volume logs." },
      { id: 'gym_trainer', shortName: "🧮 Trainer Split Ledger", tagline: "Processes tier base payouts avoiding manual math traps." }
    ]
  },
  freelance: {
    label: "✒️ Freelance Designers & Writers",
    notionHeroSub: "Isolates client revision overhead costs, structures transparent hourly retainer usage records, and protects margins during quote generation.",
    tools: [
      { id: 'freelance_scope', shortName: "🛡️ Scope Creep Guard", tagline: "Isolates and logs client change requests on the fly." },
      { id: 'freelance_retainer', shortName: "📊 Retainer Hours Tracker", tagline: "Visual hourly burn charts to share transparent client logs." },
      { id: 'freelance_proposal', shortName: "📋 Dynamic Project Proposal Engine", tagline: "Models production risk buffers for fixed-rate estimates." }
    ]
  },
  cafe: {
    label: "☕ Cafes & Coffee Shops",
    notionHeroSub: "Minimizes throwaway fresh kitchen waste logs, calculates beverage price adjustments instantly, and tracks team slots against peak POS data.",
    tools: [
      { id: 'cafe_waste', shortName: "🗑️ Perishable Waste Auditor", tagline: "Tracks daily kitchen throwaways against production curves." },
      { id: 'cafe_recipe', textName: "💲 Coffee Costing Ledger", tagline: "Calculates variable ingredient price updates down to cup levels." },
      { id: 'cafe_roster', shortName: "👥 Peak Transaction Rosterer", tagline: "Optimizes staff rosters against peak historical POS curves." }
    ]
  },
  dtc: {
    label: "🛍️ Direct-to-Consumer Brands",
    notionHeroSub: "Assembles blended ecosystem CAC insights, structures precise item-level return audits, and compiles customer lifetime parameters.",
    tools: [
      { id: 'dtc_cac', shortName: "📊 Multi-Channel CAC Tracker", tagline: "Aggregates blended ecosystem metrics over isolated platform tracking." },
      { id: 'dtc_refund', shortName: "🔄 Return Rate Margin Bleed Auditor", tagline: "Flags high-risk size variants draining fulfillment margins." },
      { id: 'dtc_cohort', shortName: "👥 Customer LTV Cohort Matrix", tagline: "Slices monthly retention trends to track cohort parameters." }
    ]
  }
};

interface YieldLogNode {
  id: string;
  timestamp: string;
  batchCode: string;
  materialName: string;
  inputQty: number;
  expectedOutputQty: number;
  actualOutputQty: number;
  variancePercentage: number;
  leakStatus: 'OPTIMAL' | 'MINOR_LEAK' | 'CRITICAL_MARGIN_BLEED';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('dashboard'); 
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('mfg');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('mfg');

  // Stripe Billing States
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Raw Material Yield States
  const [batchCodeInput, setBatchCodeInput] = useState<string>('');
  const [materialInput, setMaterialInput] = useState<string>('');
  const [inputQty, setInputQty] = useState<number>(100);
  const [expectedQty, setExpectedQty] = useState<number>(90);
  const [actualQty, setActualQty] = useState<number>(82);
  const [yieldPremiumLock, setYieldPremiumLock] = useState<boolean>(false);
  
  // FAQ Accordion State Matrix
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [yieldLogs, setYieldLogs] = useState<YieldLogNode[]>([
    {
      id: "1",
      timestamp: "2026-06-29 14:22",
      batchCode: "BCH-MKH-098",
      materialName: "Raw Makhana Pods",
      inputQty: 500,
      expectedOutputQty: 450,
      actualOutputQty: 395,
      variancePercentage: -12.2,
      leakStatus: 'CRITICAL_MARGIN_BLEED'
    }
  ]);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  const triggerSecureStripeCheckout = () => {
    setIsStripeProcessing(true);
    setTimeout(() => {
      setIsStripeProcessing(false);
      alert("Stripe Checkout Secure API: Processing conversion bundle setup tokens.");
    }, 1100);
  };

  // Yield Calculator Core Functional Logic
  const executeProcessYieldLog = () => {
    if (!batchCodeInput.trim() || !materialInput.trim()) return;
    
    // Safety cap rule for premium lock limits
    if (yieldLogs.length >= 2) {
      setYieldPremiumLock(true);
      return;
    }

    const variance = parseFloat((((actualQty - expectedQty) / expectedQty) * 100).toFixed(1));
    let status: 'OPTIMAL' | 'MINOR_LEAK' | 'CRITICAL_MARGIN_BLEED' = 'OPTIMAL';
    
    if (variance <= -10) status = 'CRITICAL_MARGIN_BLEED';
    else if (variance <= -3) status = 'MINOR_LEAK';

    const newLog: YieldLogNode = {
      id: Date.now().toString(),
      timestamp: "2026-06-29 19:15",
      batchCode: batchCodeInput.trim().toUpperCase(),
      materialName: materialInput.trim(),
      inputQty,
      expectedOutputQty: expectedQty,
      actualOutputQty: actualQty,
      variancePercentage: variance,
      leakStatus: status
    };

    setYieldLogs([newLog, ...yieldLogs]);
    setBatchCodeInput('');
    setMaterialInput('');
  };

  return (
    <div className="min-h-screen bg-white text-[#37352f] font-sans antialiased text-[15px]">
      
      {/* HEADER NAVBAR CONTAINER */}
      <header className="h-16 bg-white border-b border-[#edece9] sticky top-0 z-50 px-8 flex items-center justify-between select-none">
        <div className="flex items-center space-x-8">
          <div onClick={() => setActiveTool('dashboard')} className="flex items-center space-x-2 cursor-pointer shrink-0">
            <div className="w-6 h-6 bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-xs">M</div>
            <span className="font-bold text-base tracking-tight text-[#37352f]">extrct.app</span>
          </div>

          <nav className="flex items-center space-x-2 h-full">
            <div className="relative flex items-center h-full">
              <button 
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`flex items-center space-x-1 font-medium text-sm px-3 py-1.5 rounded-md transition-colors ${isMegaMenuOpen ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}
              >
                <span>Solutions</span>
                <span className="text-[9px] text-[#7c7b77]">▼</span>
              </button>

              {isMegaMenuOpen && (
                <div className="absolute top-[44px] left-0 w-[820px] bg-white border border-[#edece9] shadow-2xl rounded-xl overflow-hidden flex z-50 animate-in fade-in">
                  <div className="w-[300px] bg-[#fbfbfa] border-r border-[#edece9] p-3 space-y-[1px]">
                    <div className="px-2 py-1.5 text-[10px] font-bold text-[#7c7b77] uppercase tracking-wider mb-1">Target Sectors</div>
                    {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
                      <div 
                        key={indKey}
                        onMouseEnter={() => setHoveredIndustry(indKey)}
                        className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === indKey ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.02)]'}`}
                      >
                        <span>{industriesMap[indKey].label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 p-5 bg-white space-y-2">
                    <div className="px-2 pb-2 text-[10px] font-bold text-[#7c7b77] uppercase tracking-wider border-b border-[#f1f0ee] mb-1">
                      {industriesMap[hoveredIndustry].label} Operational Suite
                    </div>
                    {industriesMap[hoveredIndustry].tools.map((tool) => (
                      <div 
                        key={tool.id} 
                        onClick={() => selectToolFromMenu(tool.id)} 
                        className="p-2.5 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer transition-colors"
                      >
                        <div className="font-semibold text-[13.5px] text-[#37352f]">{tool.shortName}</div>
                        <div className="text-[11.5px] text-[#7c7b77] mt-0.5">{tool.tagline}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* ROUTING CONTROLLER VIEW SWITCHER */}
      {activeTool === 'dashboard' ? (
        <div className="p-12 text-center text-sm font-mono">Main Matrix Terminal Active Panel. Select specific tool via solutions menu node.</div>
      ) : activeTool === 'mfg_yield' ? (
        
        /* ---------------------------------------------------------------------
           RAW MATERIAL YIELD & DEAD-STOCK LEAK DETECTOR ACTIVE SHELL
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa]">
          
          {/* CRITICAL ON-PAGE SEO METADATA TRAP FOR INDEXING BOT CRUISE */}
          <div className="hidden">
            <h1>Raw Material Yield Detector & Inventory Waste Management System</h1>
            <h2>Algorithmic dead-stock leakage auditing for modern factories and MSME manufacturing plants.</h2>
            <p>Track production shrinkage, calculate variable weight discrepancy variances, evaluate factory floor material drop rates, and optimize batch level raw yields natively.</p>
          </div>

          {/* HERO WORKSPACE BLOCK */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-amber-50 text-amber-800 border border-amber-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>🏭</span> <span>Factory Floor Margin Armor Module</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Stop Burning Factory Margins Silently. <br />
                <span className="text-amber-600">Track Real-Time Production Yield Drops.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Unexpected waste during production or items expiring in the warehouse burns through manufacturing margins silently. This system flags floor variance drops instantly against target output metrics.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#yield-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Launch Input Logging Console ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Unlock Department Analytics ($10 Tier)
                </button>
              </div>
            </div>
          </section>

          {/* INTERACTIVE WORKSPACE CORE HOOK */}
          <section id="yield-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* LOGGING CONTROLLER */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Input Shift Parameters</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Batch Code Ref</label>
                    <input 
                      type="text" 
                      value={batchCodeInput}
                      onChange={(e) => setBatchCodeInput(e.target.value)}
                      placeholder="e.g. BCH-THEK-001"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] uppercase font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Raw Material Category</label>
                    <input 
                      type="text" 
                      value={materialInput}
                      onChange={(e) => setMaterialInput(e.target.value)}
                      placeholder="e.g. Premium Wheat Flour"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 block mb-1">Input Qty (kg)</label>
                      <input 
                        type="number" 
                        value={inputQty}
                        onChange={(e) => setInputQty(Number(e.target.value))}
                        className="w-full p-2 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 block mb-1">Expected (kg)</label>
                      <input 
                        type="number" 
                        value={expectedQty}
                        onChange={(e) => setExpectedQty(Number(e.target.value))}
                        className="w-full p-2 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 block mb-1">Actual (kg)</label>
                      <input 
                        type="number" 
                        value={actualQty}
                        onChange={(e) => setActualQty(Number(e.target.value))}
                        className="w-full p-2 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeProcessYieldLog}
                  disabled={!batchCodeInput.trim() || !materialInput.trim()}
                  className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Verify Floor Yield State
                </button>
              </div>

              {/* LIVE MONITOR PIPELINE VECTOR FEED */}
              <div className="lg:col-span-2 space-y-4">
                
                {yieldPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Historical Waste Analytics Vault Engaged</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free operational telemetry layer limits display logs to 2 nodes. Pay $10 to unlock multi-department metrics maps and CSV ledger exports.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-amber-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-amber-700 transition-colors">
                      Unlock Matrix
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Live Processing Stream</span>
                    <span className="text-[10px] font-mono text-gray-400">Telemetry Engine: Live</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {yieldLogs.map((log) => (
                      <div key={log.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono font-bold bg-gray-100 px-2 py-0.5 rounded text-gray-700">{log.batchCode}</span>
                            <span className="text-xs font-bold text-[#1e1e1c]">{log.materialName}</span>
                          </div>
                          <p className="text-[11.5px] text-gray-400">
                            Logged: {log.timestamp} | Input: <b>{log.inputQty}kg</b> → Expected: <b>{log.expectedOutputQty}kg</b>
                          </p>
                        </div>

                        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 pt-2 sm:pt-0 border-gray-100">
                          <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold tracking-tight block border ${log.leakStatus === 'CRITICAL_MARGIN_BLEED' ? 'bg-red-50 text-red-700 border-red-100' : log.leakStatus === 'MINOR_LEAK' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-green-50 text-green-700 border-green-100'}`}>
                            {log.leakStatus === 'CRITICAL_MARGIN_BLEED' ? 'CRITICAL LEAK' : log.leakStatus === 'MINOR_LEAK' ? 'MINOR LEAK' : 'OPTIMAL'}
                          </span>
                          <span className={`font-mono text-xs font-black mt-1 block ${log.variancePercentage < 0 ? 'text-red-600' : 'text-green-600'}`}>
                            {log.variancePercentage}% Variance
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ===================================================================
              NEW: ADVANCED DEEP ON-PAGE SEO COPY & CONVERSION ARCHITECTURE LAYER
              =================================================================== */}
          
          {/* VISUAL INFOGRAPHIC LAYOUT: VALUE PROPOSITION SCHEMA */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-2">Operational Infrastructure Map</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">How We Plug Your Factory Floor Margin Leakage</h2>
                <p className="text-xs text-gray-500 mt-2">Our programmatic pipeline acts as a protective shield between manual logs and complex supply chains.</p>
              </div>

              {/* THREE-STAGE CONVERSATIONAL INFOGRAPHIC FLOW CONTAINER */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl relative">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs mb-4">01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Raw Log Compilation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Floor supervisors input raw inputs against terminal finished outputs right from any basic mobile device or tablet setup.</p>
                </div>

                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl relative">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs mb-4">02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Variance State Analytics</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Our background state worker processes deviations in real-time. If actual parameters slip below threshold targets, a leak instance token triggers.</p>
                </div>

                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl relative">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-800 font-bold flex items-center justify-center text-xs mb-4">03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Department Attribution</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Isolate precisely which specific machinery shift or loading zone is driving wastage to enforce operational discipline instantly.</p>
                </div>

              </div>
            </div>
          </section>

          {/* CORE PRODUCT UNIQUE SELLING PROPOSITIONS (USPs) & REVENUE CODES */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Designed For Local Manufacturers</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">No Bulky ERP Setup Required. <br />Deploy Tracking in Five Minutes.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Traditional manufacturing enterprise resource software options demand months of onboarding contracts, technical engineering resources, and deep licensing financial footprints. <b>extrct.app</b> provides a lightweight web interface engineered to scale.
                  </p>
                  
                  <div className="pt-2 space-y-2.5">
                    <div className="flex items-start space-x-2.5">
                      <span className="text-green-600 text-xs mt-0.5">✔</span>
                      <span className="text-xs font-medium text-gray-700">Zero database setup required — logs save securely directly into cloud-cached browser memory grids.</span>
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <span className="text-green-600 text-xs mt-0.5">✔</span>
                      <span className="text-xs font-medium text-gray-700">Instant multi-tenant variance categorization isolates theft, process evaporation, or weight defects.</span>
                    </div>
                  </div>
                </div>

                {/* GRAPHIC SPECS VISUAL GRID */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-2xl block mb-1">⚖</span>
                    <span className="font-bold text-xs text-gray-900 block">Shrinkage Controls</span>
                    <p className="text-[11px] text-gray-400 mt-1">Stops micro material disappearing during cross-department shifts.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-2xl block mb-1">📈</span>
                    <span className="font-bold text-xs text-gray-900 block">Margin Recovery</span>
                    <p className="text-[11px] text-gray-400 mt-1">Identifies low-yield raw batches to audit external wholesale suppliers.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-2xl block mb-1">⏱</span>
                    <span className="font-bold text-xs text-gray-900 block">Rapid Auditing</span>
                    <p className="text-[11px] text-gray-400 mt-1">Takes less than 12 seconds for a shift manager to complete logging cycles.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-2xl block mb-1">📦</span>
                    <span className="font-bold text-xs text-gray-900 block">Dead-Stock Alerts</span>
                    <p className="text-[11px] text-gray-400 mt-1">Triggers visibility flags before warehouse inventory batches reach shelf decay.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DYNAMIC FAQ ACCORDION PATTERN MATRIX BLOCK */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Answered Queries (FAQs)</h3>
                <p className="text-xs text-gray-400 mt-1">Everything you need to know about tracking manufacturing raw yields.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "What exactly is an operational material yield variance drop?",
                    a: "Yield variance measures the difference between the standard raw material expected output and the actual physical output achieved during a factory production run. Slips mean you are wasting source elements due to process issues, leakage, or calibration faults."
                  },
                  {
                    q: "How does the $10 tier level billing unlock track historical trends?",
                    a: "The standard tier monitors immediate active data frames. Upgrading triggers a dedicated Supabase relational mapping table that archives every single historical batch run, providing long-term charts to detect micro trends and leak patterns over months."
                  },
                  {
                    q: "Can this system integrate directly with local weighting scales?",
                    a: "Currently, this module works via rapid structured web input terminals optimized for mobile layouts, minimizing software setup hurdles. Full API endpoints for automated industrial hardware hooks are locked inside our upcoming enterprise roadmap pipelines."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-[#e9e8e4] rounded-xl bg-white overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenFaqIdx(openFaqIdx === index ? null : index)}
                      className="w-full px-5 py-4 text-left font-bold text-xs sm:text-sm text-gray-800 flex items-center justify-between hover:bg-gray-50 focus:outline-none transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="text-xs text-gray-400 font-mono">{openFaqIdx === index ? '▲' : '▼'}</span>
                    </button>
                    {openFaqIdx === index && (
                      <div className="px-5 pb-4 text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-2 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>
      ) : null}

      {/* FOOTER LAYER */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All parameters verified.</span>
      </footer>

    </div>
  );
}