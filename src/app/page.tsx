"use client";

import React, { useState } from 'react';

type IndustryKey = 
  | 'ecom' | 'marketing' | 'mfg' | 'real_estate' | 'cafe' 
  | 'legal' | 'health' | 'finance' | 'content' | 'hotel';

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
    notionHeroSub: "Instantly targets layout broadcasts via WhatsApp, runs complex rental upkeep logs, and builds listing scripts.",
    tools: [
      { id: 'real_estate_whatsapp', shortName: "💬 WhatsApp Bulk Match Engine", tagline: "Parses parameters directly into client broadcasts." },
      { id: 'real_estate_rental', shortName: "📊 Rental Maintenance Log Ledger", tagline: "Mobile-first interface to quickly record repair costs." },
      { id: 'real_estate_desc', shortName: "📝 Property Listing Feature Engine", tagline: "Generates portal-optimized descriptions from raw metrics." }
    ]
  },
  cafe: {
    label: "☕ Independent Restaurants & Cafes",
    notionHeroSub: "Slices dynamic daily tip splits among shift roles, audits variable food-cost margins, and outputs quick QR code digital menus.",
    tools: [
      { id: 'cafe_tips', shortName: "👥 Daily Tip-Pooling & Shift Splitter", tagline: "Slices cash/card tips proportionally against shift hours." },
      { id: 'cafe_costing', shortName: "🍳 Recipe Food-Cost & Inflation Tracker", tagline: "Tracks ingredient cost scaling down to recipe levels." },
      { id: 'cafe_qr', shortName: "📱 Dynamic QR Code Menu Presenter", tagline: "Instant standalone responsive digital menu configuration." }
    ]
  },
  legal: {
    label: "⚖️ Small Legal Firms",
    notionHeroSub: "Logs billable client metrics, auto-populates legal templates, and maps court hearing deadlines.",
    tools: [
      { id: 'legal_hours', shortName: "⏳ Billable Hour Tracker Ledger", tagline: "Logs strict activity sequences for client transparency." },
      { id: 'legal_doc', shortName: "📄 Boilerplate Legal Document Filler", tagline: "Swaps structured variable elements inside agreements." },
      { id: 'legal_calendar', shortName: "📅 Court Hearing Calendar Tracker", tagline: "Enforces zero deadline breaches across legal tasks." }
    ]
  },
  health: {
    label: "🩺 Independent Healthcare Clinics",
    notionHeroSub: "Prevents appointment no-shows via automated text nodes, structures digital consent forms, and tracks stock levels.",
    tools: [
      { id: 'health_noshow', shortName: "🗓️ Patient Appointment No-Show Preventer", tagline: "Sends velocity reminder alerts to secure slot retention." }
    ]
  },
  finance: { label: "💳 Fintech & Finance Teams", notionHeroSub: "Audits transaction leaks.", tools: [] },
  content: { label: "🎬 Content Creators", notionHeroSub: "Calculates brand deals.", tools: [] },
  hotel: { label: "🏨 Boutique Hotels", notionHeroSub: "Tracks overbookings.", tools: [] }
};

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('dashboard'); 
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('ecom');
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // 1. UTM Generator States
  const [utmUrl, setUtmUrl] = useState('https://vantageprintco.com');
  const [utmSource, setUtmSource] = useState('facebook');
  const [utmMedium, setUtmMedium] = useState('cpc');
  const [utmCampaign, setUtmCampaign] = useState('retro_realities_apparel');
  const [utmResult, setUtmResult] = useState('');

  // 2. Manufacturing Yield States
  const [mfgIn, setMfgIn] = useState<number>(1200);
  const [mfgOut, setMfgOut] = useState<number>(1110);
  const [mfgYieldResult, setMfgYieldResult] = useState<string>('');

  // 3. Maintenance Scheduler States
  const [mfgMachine, setMfgMachine] = useState<string>('');
  const [mfgComponent, setMfgComponent] = useState<string>('');

  // 4. Batch Costing States
  const [mfgBatchName, setMfgBatchName] = useState<string>('');
  const [mfgRawCost, setMfgRawCost] = useState<number>(45000);
  const [mfgQty, setMfgQty] = useState<number>(1500);
  const [mfgCostResult, setMfgCostResult] = useState<string>('');

  // 5. WhatsApp Broadcast States
  const [reProject, setReProject] = useState<string>('');
  const [reLocality, setReLocality] = useState<string>('');

  // 6. Rental Log States
  const [reRentalAddr, setReRentalAddr] = useState<string>('');
  const [reRentalCost, setReRentalCost] = useState<number>(3500);

  // 7. Property Description States
  const [reDescLoc, setReDescLoc] = useState<string>('');
  const [reDescSqft, setReDescSqft] = useState<number>(1650);

  // 8. Tip Pooling States
  const [cafeTipPool, setCafeTipPool] = useState<number>(24000);
  const [cafeWaitHours, setCafeWaitHours] = useState<number>(14);
  const [cafeKitHours, setCafeKitHours] = useState<number>(10);

  // 9. Recipe Costing States
  const [cafeRecipeName, setCafeRecipeName] = useState<string>('');
  const [cafeIngCost, setCafeIngCost] = useState<number>(160);
  const [cafeCardPrice, setCafeCardPrice] = useState<number>(490);

  // 10. QR Menu States
  const [cafeQrDish, setCafeQrDish] = useState<string>('');
  const [cafeQrPrice, setCafeQrPrice] = useState<number>(290);
  const [menuItems, setMenuItems] = useState<any[]>([{ id: '1', name: 'Spicy Paneer Tikka Wrap', price: 180, category: 'Quick Bites' }]);

  // 11. Legal Hours States
  const [legalClient, setLegalClient] = useState<string>('');
  const [legalHours, setLegalHours] = useState<number>(2.5);
  const [legalRate, setLegalRate] = useState<number>(4000);

  // 12. Legal Doc Filler States
  const [legalPartyA, setLegalPartyA] = useState<string>('');
  const [legalPartyB, setLegalPartyB] = useState<string>('');

  // 13. Court Deadline States
  const [legalCaseRef, setLegalCaseRef] = useState<string>('');
  const [legalDeadlineDate, setLegalDeadlineDate] = useState<string>('2026-07-20');

  // 14. Patient No Show States
  const [healthPatientName, setHealthPatientName] = useState<string>('');
  const [healthAbsences, setHealthAbsences] = useState<number>(0);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
    setOpenFaqIdx(null);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased text-[15px]">
      
      {/* FIXED EXACT NAV BAR DESIGN AS REQUESTED */}
      <header className="h-14 bg-white border-b border-[#eaeaea] sticky top-0 z-50 px-6 flex items-center justify-between select-none">
        
        {/* Left: Logo */}
        <div onClick={() => setActiveTool('dashboard')} className="flex items-center space-x-2 cursor-pointer shrink-0">
          <div className="w-5 h-5 bg-black text-white rounded flex items-center justify-center font-black text-xs">E</div>
          <span className="font-bold text-[15px] tracking-tight text-black">extrct.app</span>
        </div>

        {/* Middle: Menu Bar Links */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="relative">
            <button 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="flex items-center space-x-1 font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef] transition-colors"
            >
              <span>Services</span>
              <span className="text-[8px] text-gray-400">▼</span>
            </button>

            {isMegaMenuOpen && (
              <div className="absolute top-[38px] left-[-120px] w-[820px] bg-white border border-[#eaeaea] shadow-2xl rounded-xl overflow-hidden flex z-50">
                <div className="w-[280px] bg-[#f7f7f5] border-r border-[#eaeaea] p-3 space-y-[1px]">
                  {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
                    <div 
                      key={indKey}
                      onMouseEnter={() => setHoveredIndustry(indKey)}
                      className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === indKey ? 'bg-white text-black shadow-sm' : 'text-[#4a4a4a]'}`}
                    >
                      <span>{industriesMap[indKey].label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-5 bg-white space-y-2 max-h-[400px] overflow-y-auto">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b pb-1 mb-2">
                    {industriesMap[hoveredIndustry].label} Suite
                  </div>
                  {industriesMap[hoveredIndustry].tools.map((tool) => (
                    <div key={tool.id} onClick={() => selectToolFromMenu(tool.id)} className="p-2 rounded-lg hover:bg-[#f7f7f5] cursor-pointer transition-colors">
                      <div className="font-bold text-[13px] text-black">{tool.shortName}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{tool.tagline}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button onClick={() => alert("Resources Portal Hub")} className="font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef]">Resources</button>
          <button onClick={() => alert("SaaS Pricing Engine Framework")} className="font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef]">Pricing</button>
          <button onClick={() => alert("Request Active Workspace System Demo")} className="font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef]">Demo</button>
        </nav>

        {/* Right: Two Distinct Buttons */}
        <div className="flex items-center space-x-2.5 shrink-0">
          <button onClick={() => alert("Sign In Interface Window")} className="text-[14px] font-medium text-[#4a4a4a] hover:bg-[#efefef] px-3 py-1.5 rounded-md transition-colors">
            Sign In
          </button>
          <button onClick={() => alert("Free Account Registration Gateway")} className="bg-black hover:bg-[#333] text-white font-bold text-[13px] px-3.5 py-1.5 rounded-md transition-colors shadow-sm">
            Get Started for Free
          </button>
        </div>
      </header>

      {/* ---------------------------------------------------------------------
         EXACT NOTION.COM HOMEPAGE ARCHITECTURE
         --------------------------------------------------------------------- */}
      {activeTool === 'dashboard' ? (
        <div className="bg-white">
          <section className="max-w-[1020px] mx-auto px-6 pt-24 pb-16 text-center">
            <h1 className="text-5xl sm:text-6xl font-black text-black tracking-tight leading-[1.05] mb-6 max-w-3xl mx-auto">
              Write, plan, share. <br />With micro-tool execution.
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              extrct.app is the modular knowledge hub where 10 industry matrices align. Secure profit bounds, filter margin leaks, and eliminate task tracking fatigue natively.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <button onClick={() => alert("Free Registration Launch")} className="w-full sm:w-auto bg-black text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#333] shadow-md transition-all">
                Get extrct.app free →
              </button>
              <button onClick={() => alert("Custom Demo Hooks")} className="w-full sm:w-auto border text-black font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#f7f7f5] transition-all">
                Request custom enterprise demo
              </button>
            </div>

            {/* NOTION INTERACTIVE REPLICATION GRID GRAPHIC */}
            <div className="border border-[#eaeaea] shadow-2xl rounded-2xl bg-white p-2 max-w-[920px] mx-auto overflow-hidden">
              <div className="bg-[#f7f7f5] border rounded-xl p-8 text-left min-h-[340px]">
                <h3 className="text-sm font-bold text-black tracking-tight mb-4">Click a sector tab element below to pop dynamic inner calculator interfaces instantly:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['UTM Attribution Linker', 'Factory Floor Yield Monitor', 'WhatsApp Lead Fit Matrix', 'Rental Maintenance Logs', 'Proportional Tip Splitter', 'Billable Hour Logger'].map((box, idx) => (
                    <div key={idx} className="p-4 bg-white border rounded-xl shadow-sm text-xs font-bold text-center hover:border-black transition-colors cursor-pointer">
                      {box}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* NOTION TAB INTERFACE SYSTEM COMPONENT */}
          <section className="max-w-[1040px] mx-auto px-6 py-16 border-t border-[#eaeaea]">
            <div className="border border-[#eaeaea] rounded-xl shadow-sm bg-white overflow-hidden">
              <div className="flex border-b border-[#eaeaea] bg-[#f7f7f5] overflow-x-auto select-none no-scrollbar">
                {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
                  <button
                    key={indKey}
                    onClick={() => setNotionActiveTab(indKey)}
                    className={`px-5 py-3 text-xs font-bold tracking-tight uppercase whitespace-nowrap transition-colors border-r border-[#eaeaea] ${notionActiveTab === indKey ? 'bg-white text-black border-b-2 border-b-black' : 'text-gray-400 hover:bg-gray-50'}`}
                  >
                    {industriesMap[indKey].label}
                  </button>
                ))}
              </div>
              <div className="p-8">
                <p className="text-xs font-mono text-gray-400 mb-6 border-l-2 border-black pl-3 italic">
                  {industriesMap[notionActiveTab].notionHeroSub}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {industriesMap[notionActiveTab].tools.map((tool) => (
                    <div key={tool.id} onClick={() => selectToolFromMenu(tool.id)} className="p-5 border border-[#eaeaea] rounded-xl hover:border-black hover:shadow-md cursor-pointer transition-all bg-white">
                      <h3 className="font-bold text-sm text-black mb-1">{tool.shortName}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{tool.tagline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        
        /* ---------------------------------------------------------------------
           INDIVIDUAL LANDING DESIGNS INTACT FOR ALL COMPLATED TOOLS
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa]">
          
          <div className="max-w-[1040px] mx-auto pt-6 px-6">
            <button onClick={() => setActiveTool('dashboard')} className="text-xs font-bold text-gray-400 hover:text-black focus:outline-none">
              ← Back To Notion Home Matrix Hub
            </button>
          </div>

          {/* 1. MARKETING UTM GENERATOR */}
          {activeTool === 'marketing_utm' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-blue-50 text-blue-800 font-bold px-3 py-1 rounded-full text-xs mb-3">🔗 Attribution Linker</span>
                <h1 className="text-3xl font-black text-black mb-4">UTM Campaign Link Generator Engine</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Target Campaign URL</label>
                    <input type="text" value={utmUrl} onChange={(e)=>setUtmUrl(e.target.value)} className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Source Token</label>
                    <input type="text" value={utmSource} onChange={(e)=>setUtmSource(e.target.value)} className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>setUtmResult(`${utmUrl}?utm_source=${utmSource}&utm_medium=${utmMedium}`)} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Compile Link Parameters</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 font-mono text-xs text-gray-600 break-all">
                  {utmResult || 'Live attribution tracking token URL preview will render here.'}
                </div>
              </section>
            </div>
          )}

          {/* 2. RAW MATERIAL YIELD MONITOR */}
          {activeTool === 'mfg_yield' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-emerald-50 text-emerald-800 font-bold px-3 py-1 rounded-full text-xs mb-3">📉 Floor Scrap Monitor</span>
                <h1 className="text-3xl font-black text-black mb-4">Raw Material Yield & Dead-Stock Leak Detector</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Raw Input Weight (kg)</label>
                    <input type="number" value={mfgIn} onChange={(e)=>setMfgIn(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Final Dispatched Output (kg)</label>
                    <input type="number" value={mfgOut} onChange={(e)=>setMfgOut(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>setMfgYieldResult(`Efficiency Extraction Rate Matrix: ${((mfgOut/mfgIn)*100).toFixed(1)}%`)} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Verify Waste Ratio</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-sm font-bold text-gray-700 flex items-center justify-center">
                  {mfgYieldResult || 'Yield efficiency analysis solver stream live.'}
                </div>
              </section>
            </div>
          )}

          {/* 3. MAINTENANCE SCHEDULER */}
          {activeTool === 'mfg_maintenance' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-red-50 text-red-800 font-bold px-3 py-1 rounded-full text-xs mb-3">🔧 Overhaul Framework</span>
                <h1 className="text-3xl font-black text-black mb-4">Machine Breakdown & Preventative Maintenance Scheduler</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Machinery ID Asset Ref</label>
                    <input type="text" value={mfgMachine} onChange={(e)=>setMfgMachine(e.target.value)} placeholder="e.g. CNC Line #2" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>alert("Preventative service milestones anchored securely.")} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Lock Service Milestone</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Predictive maintenance timeline grid array is running active.
                </div>
              </section>
            </div>
          )}

          {/* 4. BATCH PRODUCTION COSTING */}
          {activeTool === 'mfg_costing' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-amber-50 text-amber-800 font-bold px-3 py-1 rounded-full text-xs mb-3">🧮 Margin Logs</span>
                <h1 className="text-3xl font-black text-black mb-4">Production Batch Costing & Dynamic Margin Calculator</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Batch Lot Name</label>
                    <input type="text" value={mfgBatchName} onChange={(e)=>setMfgBatchName(e.target.value)} placeholder="e.g. Snacks Lot #4" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold block text-gray-500 mb-1">Raw Expense (₹)</label>
                      <input type="number" value={mfgRawCost} onChange={(e)=>setMfgRawCost(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold block text-gray-500 mb-1">Quantity Units</label>
                      <input type="number" value={mfgQty} onChange={(e)=>setMfgQty(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                    </div>
                  </div>
                  <button onClick={()=>setMfgCostResult(`Realized Item Level Unit Cost: ₹${(mfgRawCost/mfgQty).toFixed(2)}`)} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Audit Cost Layout</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-sm font-bold text-gray-700 flex items-center justify-center">
                  {mfgCostResult || 'Batch margin calculations output board is operational.'}
                </div>
              </section>
            </div>
          )}

          {/* 5. WHATSAPP BROKER ENGINE */}
          {activeTool === 'real_estate_whatsapp' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-indigo-50 text-indigo-800 font-bold px-3 py-1 rounded-full text-xs mb-3">💬 Broadcast Engine</span>
                <h1 className="text-3xl font-black text-black mb-4">WhatsApp Bulk Property Alert & Match Engine</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Township Project Title</label>
                    <input type="text" value={reProject} onChange={(e)=>setReProject(e.target.value)} placeholder="e.g. DLF Heights" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>alert("Lead database parameters synchronized successfully.")} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Parse & Match Leads</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Broker profiling log streams are active.
                </div>
              </section>
            </div>
          )}

          {/* 6. RENTAL EXPENSE LOGS */}
          {activeTool === 'real_estate_rental' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-blue-50 text-blue-800 font-bold px-3 py-1 rounded-full text-xs mb-3">📊 Upkeep Guard</span>
                <h1 className="text-3xl font-black text-black mb-4">Rental Maintenance Log & Expense Categorizer</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Property Reference Address</label>
                    <input type="text" value={reRentalAddr} onChange={(e)=>setReRentalAddr(e.target.value)} placeholder="e.g. Sector 3 Plot 14" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Repair Cost (₹)</label>
                    <input type="number" value={reRentalCost} onChange={(e)=>setReRentalCost(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>alert("Log node committed cleanly.")} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Commit Log Node</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Landlord tax deductions ledger framework view live.
                </div>
              </section>
            </div>
          )}

          {/* 7. PROPERTY AI DESCRIPTION */}
          {activeTool === 'real_estate_desc' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-purple-50 text-purple-800 font-bold px-3 py-1 rounded-full text-xs mb-3">📝 Listing Copywriter</span>
                <h1 className="text-3xl font-black text-black mb-4">Property Listing Feature Description Engine</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Micro Neighborhood Location</label>
                    <input type="text" value={reDescLoc} onChange={(e)=>setReDescLoc(e.target.value)} placeholder="e.g. Mithanpura, Muzaffarpur" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Total Verified Area (Sq.Ft.)</label>
                    <input type="number" value={reDescSqft} onChange={(e)=>setReDescSqft(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>alert(`Compiled listing headline hook: Ultra premium layout tracking ${reDescSqft} Sq.Ft. right inside ${reDescLoc || 'Location'}`)} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Compile Listing Copy</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Portal metadata optimization matrix live stream feed.
                </div>
              </section>
            </div>
          )}

          {/* 8. CAFE TIP SPLITTER */}
          {activeTool === 'cafe_tips' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-amber-50 text-amber-800 font-bold px-3 py-1 rounded-full text-xs mb-3">👥 Shift Allocator</span>
                <h1 className="text-3xl font-black text-black mb-4">Daily Tip-Pooling & Shift-Split Calculator</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Tip Pool Total (₹)</label>
                    <input type="number" value={cafeTipPool} onChange={(e)=>setCafeTipPool(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>alert("Tip fractional calculations compiled based on shift weights.")} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Compile Allocation</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Proportional restaurant staff payout registry view.
                </div>
              </section>
            </div>
          )}

          {/* 9. RECIPE FOOD COSTING */}
          {activeTool === 'cafe_costing' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-green-50 text-green-800 font-bold px-3 py-1 rounded-full text-xs mb-3">🍳 Recipe Defense</span>
                <h1 className="text-3xl font-black text-black mb-4">Recipe Food-Cost & Inflation Tracker</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Recipe Dish Name</label>
                    <input type="text" value={cafeRecipeName} onChange={(e)=>setCafeRecipeName(e.target.value)} placeholder="e.g. Alfredo Basil Pasta" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold block text-gray-500 mb-1">Ingredient Cost (₹)</label>
                      <input type="number" value={cafeIngCost} onChange={(e)=>setCafeIngCost(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold block text-gray-500 mb-1">Menu Card Price (₹)</label>
                      <input type="number" value={cafeCardPrice} onChange={(e)=>setCafeCardPrice(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                    </div>
                  </div>
                  <button onClick={()=>alert(`Food Cost Ratio output: ${((cafeIngCost/cafeCardPrice)*100).toFixed(1)}%`)} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Verify Ratio Matrix</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Granular culinary margin protection ledger active.
                </div>
              </section>
            </div>
          )}

          {/* 10. QR DIGITAL MENU PRESENTER */}
          {activeTool === 'cafe_qr' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-indigo-50 text-indigo-800 font-bold px-3 py-1 rounded-full text-xs mb-3">📱 Dynamic Card Architect</span>
                <h1 className="text-3xl font-black text-black mb-4">Dynamic QR Code Digital Menu Presenter</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Dish Title on Card</label>
                    <input type="text" value={cafeQrDish} onChange={(e)=>setCafeQrDish(e.target.value)} placeholder="e.g. Paneer Tikka Platter" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Price realization (₹)</label>
                    <input type="number" value={cafeQrPrice} onChange={(e)=>setCafeQrPrice(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>{setMenuItems([...menuItems, { id: Date.now().toString(), name: cafeQrDish, price: cafeQrPrice }]); setCafeQrDish('');}} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Deploy Item Live</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-6 max-w-sm mx-auto border-t-[10px] border-t-black rounded-b-2xl shadow-lg">
                  <div className="p-4 border-b text-center text-xs font-bold tracking-widest uppercase">✨ LOCAL CAFE MENU ✨</div>
                  <div className="p-4 space-y-2 min-h-[160px] divide-y divide-gray-100">
                    {menuItems.map(item=>(
                      <div key={item.id} className="pt-2 flex justify-between text-xs">
                        <span><b>{item.name}</b></span>
                        <span className="font-mono text-indigo-600 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* 11. LEGAL BILLABLE HOURS TRACKER */}
          {activeTool === 'legal_hours' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-blue-50 text-blue-800 font-bold px-3 py-1 rounded-full text-xs mb-3">⏳ Realization Guard</span>
                <h1 className="text-3xl font-black text-black mb-4">Billable Hour Tracker & Activity Logger</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Client Reference Title</label>
                    <input type="text" value={legalClient} onChange={(e)=>setLegalClient(e.target.value)} placeholder="e.g. Sonali Advisory Group" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold block text-gray-500 mb-1">Hours Logged</label>
                      <input type="number" value={legalHours} onChange={(e)=>setLegalHours(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold block text-gray-500 mb-1">Hourly Rate (₹)</label>
                      <input type="number" value={legalRate} onChange={(e)=>setLegalRate(Number(e.target.value))} className="w-full p-2.5 border rounded text-xs font-mono bg-[#faf9f6]" />
                    </div>
                  </div>
                  <button onClick={()=>alert(`Unbilled accrual total logged: ₹${legalHours*legalRate}`)} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Commit Activity Block</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Timesheet itemized database audit output view live.
                </div>
              </section>
            </div>
          )}

          {/* 12. LEGAL CONTRACT FILLER */}
          {activeTool === 'legal_doc' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-indigo-50 text-indigo-800 font-bold px-3 py-1 rounded-full text-xs mb-3">📄 Variable Replacement Filler</span>
                <h1 className="text-3xl font-black text-black mb-4">Boilerplate Legal Document Filler & Variable Replacer</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Party A Name (Discloser)</label>
                    <input type="text" value={legalPartyA} onChange={(e)=>setLegalPartyA(e.target.value)} placeholder="e.g. Vantage Print Co." className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Party B Name (Recipient)</label>
                    <input type="text" value={legalPartyB} onChange={(e)=>setLegalPartyB(e.target.value)} placeholder="e.g. Acme Agency Ltd" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>alert("Boilerplate fields synchronized smoothly.")} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Populate Template Fields</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Finalized draft covenant text layout wrapper is empty.
                </div>
              </section>
            </div>
          )}

          {/* 13. COURT CALENDAR DEADLINES */}
          {activeTool === 'legal_calendar' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-red-50 text-red-800 font-bold px-3 py-1 rounded-full text-xs mb-3">📅 Procedural Compliance Radar</span>
                <h1 className="text-3xl font-black text-black mb-4">Court Hearing Calendar & Deadline Tracker</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Case Title Ref</label>
                    <input type="text" value={legalCaseRef} onChange={(e)=>setLegalCaseRef(e.target.value)} placeholder="e.g. Poddar vs Capital Corp" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>alert("Case matter reference timelines locked into risk alerts scheduler.")} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Analyze Timeline Risk</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Litigation docket monitoring tracking dashboard is active.
                </div>
              </section>
            </div>
          )}

          {/* 14. HEALTHCARE APPOINTMENT NO SHOW PREVENTER */}
          {activeTool === 'health_noshow' && (
            <div>
              <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-12 text-center px-6">
                <span className="inline-flex bg-blue-50 text-blue-800 font-bold px-3 py-1 rounded-full text-xs mb-3">🩺 Arrival Protection Radar</span>
                <h1 className="text-3xl font-black text-black mb-4">Patient Appointment No-Show Preventer</h1>
              </section>
              <section className="max-w-[1040px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
                  <div>
                    <label className="text-[11px] font-bold block text-gray-500 mb-1">Patient Full Name</label>
                    <input type="text" value={healthPatientName} onChange={(e)=>setHealthPatientName(e.target.value)} placeholder="e.g. Aman Verma" className="w-full p-2.5 border rounded text-xs bg-[#faf9f6]" />
                  </div>
                  <button onClick={()=>alert("Attendance matrix risk factors evaluated.")} className="w-full bg-black text-white text-xs font-bold py-3 rounded-lg uppercase">Analyze Schedule Risk</button>
                </div>
                <div className="lg:col-span-2 bg-white border rounded-xl p-8 text-xs text-gray-400 italic flex items-center justify-center">
                  Clinical booking attendance feed dashboard.
                </div>
              </section>
            </div>
          )}

          {/* SHARED VALUE MARKETING BOTTOM SYSTEM STRIPS */}
          <section className="max-w-[1040px] mx-auto px-6 pb-16">
            <div className="border border-amber-200 bg-amber-50/40 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm mb-6">
              <div>
                <span className="text-xs font-bold text-amber-950 block">🔒 Cloud Sync Webhook Routing Locked (Free Sandbox Space Rules)</span>
                <p className="text-[11px] text-amber-800 mt-0.5">Free tiers map active operations metrics inside localized frame layouts. Remit $10 to unlock database workflows and whitelabel document downloads.</p>
              </div>
              <button onClick={triggerSecureStripeCheckout} className="bg-black text-white text-xs font-bold px-3 py-2 rounded-lg shrink-0">Unlock Workspace Core</button>
            </div>
            
            <div className="bg-white border rounded-xl p-8 shadow-sm">
              <h3 className="text-xs font-black text-center tracking-wider uppercase mb-6 text-black">The 3-Stage Operational Margin Recovery Pipeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-[#fbfbfa] border rounded-xl">
                  <span className="text-sm font-bold text-black block mb-1">01. Entry Log Injection</span>
                  <p className="text-[11px] text-gray-400 leading-relaxed">Operators enter parameters directly into layout dashboards from desks flat, avoiding lag parameters.</p>
                </div>
                <div className="p-4 bg-[#fbfbfa] border rounded-xl">
                  <span className="text-sm font-bold text-black block mb-1">02. Syntactic Optimization</span>
                  <p className="text-[11px] text-gray-400 leading-relaxed">System algorithms calculate cost variances natively to remove human manual calculation dispute gaps.</p>
                </div>
                <div className="p-4 bg-[#fbfbfa] border rounded-xl">
                  <span className="text-sm font-bold text-black block mb-1">03. Preemptive Alert Shields</span>
                  <p className="text-[11px] text-gray-400 leading-relaxed">Flags margin compression or calendar deadline zone warning limits immediately before thresholds breach target bounds.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-8 shadow-sm mt-4">
              <h3 className="text-xs font-black uppercase text-center text-gray-400 tracking-widest mb-6">Frequently Answered Strategic Queries</h3>
              <div className="space-y-2">
                {[
                  { q: "How are individual micro-tool calculation constraints verified?", a: "The framework type-casts and balances parameters natively inside your active local device frame session before syncing nodes to prevent backend calculation lag traps." },
                  { q: "What technical automation unlocks inside the $10 premium upgrade setup?", a: "Paid tier tokens map standalone web listener webhooks that link directly to multi-channel communication networks to dispatch system warning alerts." }
                ].map((faq, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button onClick={()=>setOpenFaqIdx(openFaqIdx === index ? null : index)} className="w-full text-left font-bold text-xs p-4 bg-gray-50 flex justify-between focus:outline-none">
                      <span>{faq.q}</span><span>{openFaqIdx === index ? '▲' : '▼'}</span>
                    </button>
                    {openFaqIdx === index && <div className="p-4 text-xs text-gray-500 border-t bg-white leading-relaxed">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      )}

      {/* PERSISTENT BRAND GLOBAL NOTION FOOTER DESIGN FOR ALL ROUTE PAGES */}
      <footer className="border-t border-[#eaeaea] bg-[#f7f7f5] py-12 px-8 text-center text-xs text-[#7c7b77] select-none">
        <div className="max-w-[1040px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-black font-bold">
            <div className="w-4 h-4 bg-black text-white rounded flex items-center justify-center font-black text-[10px]">E</div>
            <span>extrct.app Operations Global Hub</span>
          </div>
          <span className="font-mono text-[11px]">© 2026 extrct.app SaaS Terminal Engine. All system parameters verified.</span>
        </div>
      </footer>

    </div>
  );
}