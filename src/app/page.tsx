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
      { id: 'real_estate_rental', shortName: "📊 Rental Maintenance Log Ledger", tagline: "Mobile-first interface to quickly record repair costs." },
      { id: 'real_estate_desc', shortName: "📝 Property Listing Feature Engine", tagline: "Generates portal-optimized descriptions from raw metrics." }
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

interface RentalExpenseNode {
  id: string;
  propertyName: string;
  expenseCategory: string;
  amount: number;
  taxDeductible: boolean;
  loggedAt: string;
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('real_estate_rental'); // Reset to correct rental ledger tool
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('real_estate');

  // Shared Core Payments Configuration
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Rental Ledger State Controls
  const [targetProperty, setTargetProperty] = useState<string>('');
  const [expenseType, setExpenseType] = useState<string>('Plumbing Fix');
  const [costAmount, setCostAmount] = useState<number>(4500);
  const [isDeductible, setIsDeductible] = useState<boolean>(true);
  const [rentalPremiumLock, setRentalPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [expenseLedger, setExpenseLedger] = useState<RentalExpenseNode[]>([
    {
      id: "1",
      propertyName: "Greenwood Residency Apt 4C",
      expenseCategory: "Electrical Overhaul",
      amount: 12500,
      taxDeductible: true,
      loggedAt: "2026-06-29"
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
      alert("Stripe Checkout System: Unlocking infinite property portfolio logging capacity token.");
    }, 1100);
  };

  // Ledger calculation processor block
  const executeLogRentalExpense = () => {
    if (!targetProperty.trim() || costAmount <= 0) return;

    // Strict Free limits check: Capped at 1 property tracker
    const alternateProperties = expenseLedger.filter(item => item.propertyName.toLowerCase() !== targetProperty.trim().toLowerCase());
    if (alternateProperties.length >= 1) {
      setRentalPremiumLock(true);
      return;
    }

    const newNode: RentalExpenseNode = {
      id: Date.now().toString(),
      propertyName: targetProperty.trim(),
      expenseCategory: expenseType,
      amount: costAmount,
      taxDeductible: isDeductible,
      loggedAt: new Date().toISOString().split('T')[0]
    };

    setExpenseLedger([newNode, ...expenseLedger]);
    setTargetProperty('');
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

      {/* CORE SCHEMAS TERMINAL INTERACTIVE SPLIT */}
      {activeTool === 'real_estate_rental' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* SEARCH ATTRIBUTION BOT TRACKING MAP */}
          <div className="hidden">
            <h1>Rental Maintenance Log & Expense Categorizer Ledger</h1>
            <h2>Mobile-first property portfolio tax deduction optimization systems.</h2>
            <p>Log residential asset repair bills, organize property maintenance overhead receipts, group immediate tax deductible asset items, and control cash flows natively under ten seconds.</p>
          </div>

          {/* SaaS VALUE HERO HEADER */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-800 border border-blue-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>📊</span> <span>Mobile-First Portfolio Profit Protection</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Log Property Repairs Under 10 Seconds. <br />
                <span className="text-blue-600">Secure Your Tax Write-Offs Instantly.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Scattered structural upkeep notes and forgotten repair receipts cost property solopreneurs thousands in missing write-offs during tax filing seasons. Use this micro-ledger app to snap and sort costs on the go.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#ledger-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Open Mobile Input Console ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Unlock Unlimited Portfolio Portals ($10)
                </button>
              </div>
            </div>
          </section>

          {/* APPLICATION RUNTIME TERMINAL CONSOLE */}
          <section id="ledger-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* ENTRY WIDGET CONTROLLER CARD */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Rapid Expense Log</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Property Name / Address Ref</label>
                    <input 
                      type="text" 
                      value={targetProperty}
                      onChange={(e) => setTargetProperty(e.target.value)}
                      placeholder="e.g. Greenwood Residency Apt 4C"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Maintenance Scope</label>
                    <select
                      value={expenseType}
                      onChange={(e) => setExpenseType(e.target.value)}
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-bold text-gray-700"
                    >
                      <option value="Plumbing Leak Fix">Plumbing Maintenance</option>
                      <option value="Electrical Repair">Electrical / Appliance Overhaul</option>
                      <option value="Structural Painting">Wall Painting & Patchwork</option>
                      <option value="Elevator Desk Fee">Association / Lift Charges</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Amount Incurred (₹)</label>
                      <input 
                        type="number" 
                        value={costAmount}
                        onChange={(e) => setCostAmount(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Tax Write-Off?</label>
                      <div className="flex items-center space-x-2 h-[38px] bg-[#faf9f6] border border-[#e9e8e4] rounded-lg px-3">
                        <input 
                          type="checkbox" 
                          checked={isDeductible}
                          onChange={(e) => setIsDeductible(e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-xs font-bold text-gray-600">Deductible</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeLogRentalExpense}
                  disabled={!targetProperty.trim() || costAmount <= 0}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Commit Log Node
                </button>
              </div>

              {/* STREAM MATRIX TRACKING FRAME OUTPUT CONTAINER */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* STRICT HARD CONVERSION BARRIER CAP */}
                {rentalPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Single Property Cap Active (Free Tier Rules)</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free solopreneur terminal accounts map exactly 1 property record to avoid cloud bloat. Remit $10 tier tokens to open infinite multi-apartment dashboard stacks.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-blue-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-blue-700 transition-colors">
                      Unlock Portfolio Matrix
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Active Real Estate Ledger Stream</span>
                    <span className="text-[10px] font-mono text-gray-400">Total Statements: {expenseLedger.length}</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {expenseLedger.map((item) => (
                      <div key={item.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors">
                        <div className="space-y-1">
                          <span className="font-bold text-xs sm:text-sm text-[#1e1e1c] block">{item.propertyName}</span>
                          <div className="text-[11.5px] text-gray-400">
                            Category: <b className="text-gray-600">{item.expenseCategory}</b> | Log Date: <span className="font-mono">{item.loggedAt}</span>
                          </div>
                        </div>

                        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 pt-2 sm:pt-0 border-gray-100">
                          <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-tight block border ${item.taxDeductible ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                            {item.taxDeductible ? 'TAX WRITE-OFF' : 'PERSONAL'}
                          </span>
                          <span className="font-mono text-xs font-black text-gray-900 mt-1.5 block">
                            ₹{item.amount.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* PROGRAMMATIC SEO VALUE PROPOSITION SCHEMA CARD GRIDS */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-2">Automated Portfolio Control</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The 10-Second Expense Shield</h2>
                <p className="text-xs text-gray-500 mt-2">How our mobile terminal saves maintenance receipts from slip-ups before tax evaluation windows arrive.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🛠 01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">On-Site Injection</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Property managers drop maintenance parameters and bills directly into the application layout panel while physically at the apartment site.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🗂 02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Deduction Categorization</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">System parameters isolate operational repairs against personal upgrades, tagging write-off elements cleanly for rapid filtering outputs.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🛡 03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Statement Protection</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Wipes out reliance on chaotic paper stacks. Instantly exports optimized cash ledger structures for painless tax compliance filings.</p>
                </div>
              </div>
            </div>
          </section>

          {/* EXCLUSIVE UNIQUE SELLING PROPOSITIONS (USPs) SYSTEM CARDS */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">Optimized For Landlords & Property Solopreneurs</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">No Massive Property SaaS Account Needed. <br />Govern Cashflow with Complete Speed.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Heavy enterprise landlord property software tools demand rigorous tenant tracking setups, bank integration workflows, and complex license tiers. <b>extrct.app</b> provides a fast mobile alternative built for pure utility.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-2xl block mb-1">📉</span>
                    <span className="font-bold text-xs text-gray-900 block">Deduction Leak Intercept</span>
                    <p className="text-[11px] text-gray-400 mt-1">Ensures minor maintenance expenditures are logged instantly before they vanish from your mind.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-2xl block mb-1">📱</span>
                    <span className="font-bold text-xs text-gray-900 block">True Mobile-First Shape</span>
                    <p className="text-[11px] text-gray-400 mt-1">No complicated dashboard clicks — opens inside seconds right on the property floor.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DYNAMIC HIGH-CONVERTING ACCORDION FAQ BLOCK */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Answered Queries</h3>
                <p className="text-xs text-gray-400 mt-1">Answers to common structural tracking questions about rental maintenance assets.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "What defines a rental repair item as a direct tax deduction write-off?",
                    a: "Under standard tax rules, routine maintenance costs like fixing plumbing breaches or electrical defects preserve the rental property asset value and are completely deductible. Capital renovations that expand property scale follow alternate depreciation timelines."
                  },
                  {
                    q: "How does the $10 portfolio tier license unlock multi-unit tracking?",
                    a: "The basic free terminal maps 1 isolated address ref to keep client operations simple. The upgraded premium network tier removes all system capacity locks, opening clean multi-apartment logs and spreadsheet downloads."
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

      {/* FOOTER LAYER BLOCK */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All system nodes synchronized.</span>
      </footer>

    </div>
  );
}