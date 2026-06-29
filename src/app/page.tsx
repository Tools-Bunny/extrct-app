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
      { id: 'cafe_recipe', shortName: "💲 Coffee Costing Ledger", tagline: "Calculates variable ingredient price updates down to cup levels." },
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

interface CostingBatchNode {
  id: string;
  batchName: string;
  rawMaterialCost: number;
  laborOverhead: number;
  unitsProduced: number;
  targetWholesalePrice: number;
  costPerUnit: number;
  grossMarginPercentage: number;
  profitRiskStatus: 'HEALTHY_MARGIN' | 'COMPRESSED_WARN' | 'LOSS_BLEED';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('mfg_costing'); // Dynamic routing lock
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('mfg');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('mfg');

  // Shared Core Gateway Payments Telemetry
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Batch Costing State Matrices
  const [batchName, setBatchName] = useState<string>('');
  const [rawCost, setRawCost] = useState<number>(35000);
  const [laborCost, setLaborCost] = useState<number>(8000);
  const [unitsQty, setUnitsQty] = useState<number>(1000);
  const [wholesaleTarget, setWholesaleTarget] = useState<number>(55);
  const [costingPremiumLock, setCostingPremiumLock] = useState<boolean>(false);
  
  // Accordion Controller State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [costingBatches, setCostingBatches] = useState<CostingBatchNode[]>([
    {
      id: "1",
      batchName: "Premium Fried Snacks Batch #22",
      rawMaterialCost: 45000,
      laborOverhead: 12000,
      unitsProduced: 1500,
      targetWholesalePrice: 48,
      costPerUnit: 38.0,
      grossMarginPercentage: 20.8,
      profitRiskStatus: 'COMPRESSED_WARN'
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
      alert("Stripe Verification Gateway: Connected node validation complete.");
    }, 1100);
  };

  // Production batch margin calculation processor framework
  const executeCompileBatchCosting = () => {
    if (!batchName.trim() || rawCost <= 0 || unitsQty <= 0 || wholesaleTarget <= 0) return;

    if (costingBatches.length >= 2) {
      setCostingPremiumLock(true);
      return;
    }

    const totalExpense = rawCost + laborCost;
    const computedUnitCost = parseFloat((totalExpense / unitsQty).toFixed(2));
    const marginPercentage = parseFloat((((wholesaleTarget - computedUnitCost) / wholesaleTarget) * 100).toFixed(1));

    let riskStatus: 'HEALTHY_MARGIN' | 'COMPRESSED_WARN' | 'LOSS_BLEED' = 'HEALTHY_MARGIN';
    if (marginPercentage < 10) riskStatus = 'LOSS_BLEED';
    else if (marginPercentage < 25) riskStatus = 'COMPRESSED_WARN';

    const newBatch: CostingBatchNode = {
      id: Date.now().toString(),
      batchName: batchName.trim(),
      rawMaterialCost: rawCost,
      laborOverhead: laborCost,
      unitsProduced: unitsQty,
      targetWholesalePrice: wholesaleTarget,
      costPerUnit: computedUnitCost,
      grossMarginPercentage: marginPercentage,
      profitRiskStatus: riskStatus
    };

    setCostingBatches([newBatch, ...costingBatches]);
    setBatchName('');
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

      {/* COMPONENT INTERACTIVE SWITCHER SCREEN BLOCK */}
      {activeTool === 'dashboard' ? (
        <div className="p-12 text-center text-xs font-mono text-gray-400">Main State Matrix Controller Shell.</div>
      ) : activeTool === 'mfg_costing' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* CRITICAL ATTRIBUTION DATA ON-PAGE SEO VAULT */}
          <div className="hidden">
            <h1>Production Batch Costing & Profit Margin Framework Tool | MSME Cost Matrix</h1>
            <h2>Algorithmic batch pricing logic models for variable factory components and scaling manufacturers.</h2>
            <p>Calculate unit level gross cost matrices, isolate raw material scaling spikes, trace labor resource drain coefficients, and preserve wholesale net realization percentages metrics natively.</p>
          </div>

          {/* DYNAMIC SALES HERO SECTION */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>🧮</span> <span>Granular Unit-Level Margin Armor</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Stop Underestimating Production Costs. <br />
                <span className="text-emerald-600">Lock In Real Batch Gross Profit Margins.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Volatile ingredient quotes and hidden labor leakages destroy batch profit targets completely. Calculate precise real-time cost boundaries before shipping inventory lots to external distributors.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#costing-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Launch Costing Analyzer Console ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Export Deep Margin Data Ledger ($10)
                </button>
              </div>
            </div>
          </section>

          {/* APPLICATION INTERACTIVE TELEMETRY CONSOLE */}
          <section id="costing-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* COST CONFIGURATOR TERMINAL CARD */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Batch Cost Metrics</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Production Lot / Item Reference</label>
                    <input 
                      type="text" 
                      value={batchName}
                      onChange={(e) => setBatchName(e.target.value)}
                      placeholder="e.g. Potato Chips Lot #45"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Raw Materials (₹)</label>
                      <input 
                        type="number" 
                        value={rawCost}
                        onChange={(e) => setRawCost(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Labor & Power (₹)</label>
                      <input 
                        type="number" 
                        value={laborCost}
                        onChange={(e) => setLaborCost(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Units Produced Qty</label>
                      <input 
                        type="number" 
                        value={unitsQty}
                        onChange={(e) => setUnitsQty(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Target Price / Unit (₹)</label>
                      <input 
                        type="number" 
                        value={wholesaleTarget}
                        onChange={(e) => setWholesaleTarget(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeCompileBatchCosting}
                  disabled={!batchName.trim() || rawCost <= 0 || unitsQty <= 0}
                  className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Analyze Cost Architecture
                </button>
              </div>

              {/* LIVE MARGIN LEDGER REAL-TIME MONITOR GRID */}
              <div className="lg:col-span-2 space-y-4">
                
                {costingPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 CSV Costing Data Ledger Locked</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free analytical frame caps at 2 parallel items logs. Transition to our professional module package to map macro historical trends and unpack structural yield reports.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-emerald-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-emerald-700 transition-colors">
                      Activate Tier Setup
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Granular Batch Diagnostics Feed</span>
                    <span className="text-[10px] font-mono text-gray-400">Status: Real-Time Active</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {costingBatches.map((node) => (
                      <div key={node.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors">
                        <div className="space-y-1.5">
                          <span className="font-bold text-sm text-[#1e1e1c] block">{node.batchName}</span>
                          <div className="text-xs text-gray-500">
                            Volume: <b>{node.unitsProduced} items</b> | Cost/Unit: <span className="font-mono font-bold text-gray-900">₹{node.costPerUnit}</span>
                          </div>
                          <div className="text-[11px] text-gray-400 font-mono">
                            Materials Matrix: ₹{node.rawMaterialCost.toLocaleString('en-IN')} + Overhead: ₹{node.laborOverhead.toLocaleString('en-IN')}
                          </div>
                        </div>

                        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 pt-2 sm:pt-0 border-gray-100">
                          <span className={`text-[10px] px-2.5 py-1 rounded-md font-bold tracking-tight block border ${node.profitRiskStatus === 'LOSS_BLEED' ? 'bg-red-50 text-red-700 border-red-100' : node.profitRiskStatus === 'COMPRESSED_WARN' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-green-50 text-green-700 border-green-100'}`}>
                            {node.profitRiskStatus === 'LOSS_BLEED' ? '🚨 MARGIN LEAK' : node.profitRiskStatus === 'COMPRESSED_WARN' ? '⚠️ RISK SPIKE' : '✓ HEALTHY CUT'}
                          </span>
                          <span className={`font-mono text-xs font-black mt-1.5 block ${node.grossMarginPercentage < 10 ? 'text-red-600' : 'text-emerald-600'}`}>
                            {node.grossMarginPercentage}% Net Cut
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SYSTEM VALUE VISUAL REVENUE FLOW BLUEPRINT INFOGRAPHICS */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-2">Attribution Workflow Mapping</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The Unit-Level Margin Recovery Loop</h2>
                <p className="text-xs text-gray-500 mt-2">How structured data isolation blocks out hidden losses before wholesale contracts execute.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🧮 01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Expense Aggregation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">System compiles direct source raw inventory prices nested cleanly alongside shift metrics, wiping out manual ledger mistakes.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">📊 02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Lot Variable Splitting</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Instantly parses total investments across production volume lots, mapping exact real-time component costs to single piece targets.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🛡 03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Profit Boundary Lock</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Alert codes instantly surface margins falling underneath custom thresholds, signaling managers to re-negotiate quotes before shipments.</p>
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCT UNIQUE SELLING PROPOSITIONS (USPs) MARKETING CONTENT */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">MSME Financial Guard Suite</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Ditch Chaotic Spreadsheets. <br />Govern Factory Profitability.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Messy offline tables obscure true conversion spend details, making products look profitable when they are bleeding cash. <b>extrct.app</b> forces complete structural mathematical clarity across fast-moving workflows.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-2xl block mb-1">📈</span>
                    <span className="font-bold text-xs text-gray-900 block">Leak Eradication</span>
                    <p className="text-[11px] text-gray-400 mt-1">Isolates exactly which product batches drop under target thresholds.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-2xl block mb-1">⚡</span>
                    <span className="font-bold text-xs text-gray-900 block">Instant Pricing Audits</span>
                    <p className="text-[11px] text-gray-400 mt-1">Re-calculate pricing frameworks on the fly when input supplier quotes change.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DEEP ON-PAGE SEO ACCORDION FAQ SYSTEM BLOCK */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Answered Framework Queries</h3>
                <p className="text-xs text-gray-400 mt-1">Everything you need to map about local production gross margins.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "How exactly do hidden operational parameters corrupt single unit calculations?",
                    a: "Most local business operators track basic ingredient bills but overlook baseline shifting variables like factory power spikes, machine setup wear, and product wastage rates. Bundling labor splits isolates true product costs down to the package level."
                  },
                  {
                    q: "Can I leverage this matrix to model wholesale distribution tier discounts?",
                    a: "Absolutely. By establishing the firm floor production cost per unit, you can safely map out the exact range for distributor commission cuts without slipping into structural cash flow losses."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-[#e9e8e4] rounded-xl bg-white overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenFaqIdx(openFaqIdx === index ? null : index)}
                      className="w-full px-5 py-4 text-left font-bold text-xs sm:text-sm text-gray-800 flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <span className="text-xs text-gray-400 font-mono">{openFaqIdx === index ? '▲' : '▼'}</span>
                    </button>
                    {openFaqIdx === index && (
                      <div className="px-5 pb-4 text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-2 animate-in fade-in duration-150">
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
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All system nodes synchronized.</span>
      </footer>

    </div>
  );
}