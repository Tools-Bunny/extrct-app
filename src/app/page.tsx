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

interface BroadcastQueueNode {
  id: string;
  propertyName: string;
  locality: string;
  matchedBuyersCount: number;
  compiledMessage: string;
  status: 'READY' | 'DISPATCHED';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('real_estate_whatsapp'); // Locked to active tool
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('real_estate');

  // Shared Core Gateway Payments
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Real Estate Dashboard States
  const [propertyName, setPropertyName] = useState<string>('');
  const [locality, setLocality] = useState<string>('');
  const [configType, setConfigType] = useState<string>('3 BHK');
  const [targetBudget, setTargetBudget] = useState<number>(15000000); // 1.5 Cr default
  const [whatsappPremiumLock, setWhatsappPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [broadcastQueue, setBroadcastQueue] = useState<BroadcastQueueNode[]>([
    {
      id: "1",
      propertyName: "Skyline Altura Phase 2",
      locality: "Gurgaon Sector 62",
      matchedBuyersCount: 42,
      compiledMessage: "🔥 New Launch Alert: Luxury 3 BHK apartment at Skyline Altura Phase 2, Gurgaon Sector 62 starting at 1.5 Cr. Direct access to NH-8.",
      status: "READY"
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
      alert("Stripe Checkout System: Initializing API endpoints for premium automated webhook loops.");
    }, 1100);
  };

  // Property Parsing Core Logic Engine
  const executeCompileBroadcastNode = () => {
    if (!propertyName.trim() || !locality.trim()) return;

    if (broadcastQueue.length >= 2) {
      setWhatsappPremiumLock(true);
      return;
    }

    const mockMatches = Math.floor(Math.random() * 80) + 15;
    const formattedBudget = targetBudget >= 10000000 ? `${(targetBudget / 10000000).toFixed(1)} Cr` : `${(targetBudget / 100000).toFixed(0)} Lakhs`;
    
    const compiled = `🎯 Premium Match discovered: ${configType} listing at ${propertyName}, ${locality}. Priced competitively at ${formattedBudget}. Tap here to inspect blueprints instantly.`;

    const newNode: BroadcastQueueNode = {
      id: Date.now().toString(),
      propertyName: propertyName.trim(),
      locality: locality.trim(),
      matchedBuyersCount: mockMatches,
      compiledMessage: compiled,
      status: 'READY'
    };

    setBroadcastQueue([newNode, ...broadcastQueue]);
    setPropertyName('');
    setLocality('');
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

      {/* COMPONENT ROUTER DISPATCH MULTIPLEXER */}
      {activeTool === 'real_estate_whatsapp' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* DEEP ON-PAGE PROGRAMMATIC SEO VAULT SYSTEM */}
          <div className="hidden">
            <h1>WhatsApp Bulk Property Match & Client Broadcast Engine | Real Estate Marketing</h1>
            <h2>Automated lead configuration matrices and transaction workflows for independent property brokers.</h2>
            <p>Parse inventory datasets natively, match active customer requirement sheets, filter micro-location leads, and route instant structured parameter texts to buyers directly without CRM manual bloat.</p>
          </div>

          {/* SaaS HERO SALES HEADER BLOCK */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-green-50 text-green-800 border border-green-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>💬</span> <span>High-Velocity Real Estate Direct Broadcasts</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Stop Matching Listings Manually. <br />
                <span className="text-green-600">Broadcast Perfect Property Fits Instantly.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Checking spreadsheets for buyer parameters whenever a new plot or apartment arrives takes hours of manual effort. Use this engine to sort budget matrix boundaries and deploy automated WhatsApp outreach copies.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#broadcast-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Open Target Broadcast Console ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Unlock API Cloud Webhook Routing ($10)
                </button>
              </div>
            </div>
          </section>

          {/* APPLICATION CONSOLE WORKSPACE SECTION */}
          <section id="broadcast-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* PROPERTY INPUT FORM COMPONENT */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Inventory Configuration</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Project / Township Name</label>
                    <input 
                      type="text" 
                      value={propertyName}
                      onChange={(e) => setPropertyName(e.target.value)}
                      placeholder="e.g. Godrej Woods Phase 1"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Specific Locality / Sector</label>
                    <input 
                      type="text" 
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      placeholder="e.g. Noida Sector 150"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Layout Blueprint</label>
                      <select
                        value={configType}
                        onChange={(e) => setConfigType(e.target.value)}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-bold text-gray-700 focus:outline-none"
                      >
                        <option value="2 BHK">2 BHK Flat</option>
                        <option value="3 BHK">3 BHK Flat</option>
                        <option value="4 BHK">4 BHK Luxury</option>
                        <option value="Villa Penthouse">Independent Villa</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Target Valuation (₹)</label>
                      <input 
                        type="number" 
                        value={targetBudget}
                        onChange={(e) => setTargetBudget(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeCompileBroadcastNode}
                  disabled={!propertyName.trim() || !locality.trim()}
                  className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Parse & Match Leads
                </button>
              </div>

              {/* STREAMS LIST ACTIVE OUTPUT PIPELINE GRID */}
              <div className="lg:col-span-2 space-y-4">
                
                {whatsappPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 API Bulk Cloud Dispatch Gateway Locked</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free execution sandbox simulates output string copies only. Pay $10 to securely interface directly with Meta business WhatsApp APIs and fire text packets to entire list records instantly.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-green-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-green-700 transition-colors">
                      Unlock Bulk Dispatch
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Generated Outreach Matrix</span>
                    <span className="text-[10px] font-mono text-gray-400">Match Accuracy Level: Strict</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {broadcastQueue.map((node) => (
                      <div key={node.id} className="p-5 space-y-3 hover:bg-[#faf9f6] transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold text-sm text-[#1e1e1c]">{node.propertyName}</span>
                            <span className="text-xs text-gray-400 font-mono block">{node.locality}</span>
                          </div>
                          <span className="text-[11px] font-bold bg-green-50 text-green-700 border border-green-100 px-2.5 py-1 rounded-full">
                            🎯 Matches {node.matchedBuyersCount} Buyers
                          </span>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <p className="text-xs text-gray-600 italic leading-relaxed flex-1 pr-4">
                            "{node.compiledMessage}"
                          </p>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(node.compiledMessage);
                              alert("Outreach text string copied to active clipboard vault!");
                            }}
                            className="bg-white border text-gray-700 hover:text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap"
                          >
                            Copy String
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* VALUE PROPOSITION MARKETING COMPONENT SECTIONS */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 block mb-2">Programmatic Data Pipeline</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The 3-Step Instant Deal Validation System</h2>
                <p className="text-xs text-gray-500 mt-2">How we clean parameter variations and transform inventory columns into runnable marketing streams.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-800 font-bold flex items-center justify-center text-xs mb-4">01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Property Indexing</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Agent logs the layout configuration metrics, sub-locality variables, and expected budget matrices into the terminal interface.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs mb-4">02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Automated Match Scanning</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">System instantly extracts buyer target parameters from your list database, dropping out mismatched configurations to avoid churn strings.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs mb-4">03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">WhatsApp Ready Compilation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Auto-generates clean, localized marketing ad copy strings containing conversion nodes, ready for clipboard capture or API cloud routing loops.</p>
                </div>
              </div>
            </div>
          </section>

          {/* HIGHLIGHTED SAAS PLATFORM REVENUE UNIQUE SELLING PROPOSITIONS (USPs) */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Built For High-Velocity Independent Brokers</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Close Property Transactions <br />Before Competitors Even Dial.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Heavy, traditional enterprise real estate CRM softwares demand complex customer profiling, tag setups, and subscription steps. <b>extrct.app</b> forces maximum speed-to-outreach via lightweight analytical grids.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">⚡</span>
                    <span className="font-bold text-xs text-gray-900 block">Instant Cross-Matching</span>
                    <p className="text-[11px] text-gray-400 mt-1">Locks target budget boundaries to prevent sending mismatched deals to premium clients.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">🛑</span>
                    <span className="font-bold text-xs text-gray-900 block">Zero Lead Burn Rate</span>
                    <p className="text-[11px] text-gray-400 mt-1">Clean personalized strings dramatically outperform cold phone loops.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DYNAMIC ON-PAGE HIGH-CONVERTING FAQ ACCORDION PATTERN */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Asked Questions</h3>
                <p className="text-xs text-gray-400 mt-1">Everything you need to master about matching property listing data structures.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "How does the matching logic parse unstructured locality parameters?",
                    a: "The framework utilizes simple token matching filters to cross-reference input sub-localities against buyer preference arrays. It guarantees that a Gurgaon developer launch only matches buyers targeting that specific regional cell."
                  },
                  {
                    q: "What properties execute natively on the $10 cloud webhook upgrade tier?",
                    a: "The starter console generates copyable manual message strings to use directly inside your device apps. The professional tier connects an active webhook link directly to Meta Cloud APIs to blast the entire filtered buyer list simultaneously in one click."
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

      {/* FOOTER BLOCK CONTAINER */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All system frameworks verified.</span>
      </footer>

    </div>
  );
}