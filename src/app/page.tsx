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
      { id: 'health_noshow', shortName: "🗓️ Patient Appointment No-Show Preventer", tagline: "Sends velocity reminder alerts to secure slot retention." },
      { id: 'health_consent', shortName: "📋 Medical Consent Form Generator", tagline: "Stitches responsive client check-boxes into clean PDFs." },
      { id: 'health_stock', shortName: "📦 In-Clinic Consumable Stock Alert", tagline: "Flags critical needle, gauze, or medicine inventory dips." }
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
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Core App Tool Forms Parameters
  const [mfgIn, setMfgIn] = useState<number>(1000);
  const [mfgOut, setMfgOut] = useState<number>(910);
  const [mfgMachine, setMfgMachine] = useState<string>('');
  const [mfgRawCost, setMfgRawCost] = useState<number>(50000);
  const [mfgQty, setMfgQty] = useState<number>(2000);
  const [reProject, setReProject] = useState<string>('');
  const [reRentalAddr, setReRentalAddr] = useState<string>('');
  const [reRentalCost, setReRentalCost] = useState<number>(4000);
  const [reDescLoc, setReDescLoc] = useState<string>('');
  const [reDescSqft, setReDescSqft] = useState<number>(1500);
  const [cafeTipPool, setCafeTipPool] = useState<number>(12000);
  const [cafeWaitHours, setCafeWaitHours] = useState<number>(14);
  const [cafeKitHours, setCafeKitHours] = useState<number>(10);
  const [cafeRecipeName, setCafeRecipeName] = useState<string>('');
  const [cafeIngCost, setCafeIngCost] = useState<number>(150);
  const [cafeCardPrice, setCafeCardPrice] = useState<number>(450);
  const [cafeQrDish, setCafeQrDish] = useState<string>('');
  const [cafeQrPrice, setCafeQrPrice] = useState<number>(220);
  const [legalClient, setLegalClient] = useState<string>('');
  const [legalHours, setLegalHours] = useState<number>(2.5);
  const [legalRate, setLegalRate] = useState<number>(4000);
  const [legalPartyA, setLegalPartyA] = useState<string>('');
  const [legalPartyB, setLegalPartyB] = useState<string>('');
  const [legalCaseRef, setLegalCaseRef] = useState<string>('');
  const [healthPatientName, setHealthPatientName] = useState<string>('');
  const [utmUrl, setUtmUrl] = useState<string>('https://vantageprintco.com');
  const [utmSource, setUtmSource] = useState<string>('google');
  const [utmResult, setUtmResult] = useState<string>('');
  const [mfgYieldResult, setMfgYieldResult] = useState<string>('');
  const [mfgCostResult, setMfgCostResult] = useState<string>('');
  const [menuItems, setMenuItems] = useState<any[]>([{ id: '1', name: 'Spicy Paneer Tikka Wrap', price: 180, category: 'Quick Bites' }]);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
    setOpenFaqIdx(null);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased text-[14px] sm:text-[15px]">
      
      {/* HEADER NAVBAR CONTAINER */}
      <header className="h-14 bg-white border-b border-[#eaeaea] sticky top-0 z-50 px-6 flex items-center justify-between select-none">
        <div onClick={() => setActiveTool('dashboard')} className="flex items-center space-x-2 cursor-pointer shrink-0">
          <div className="w-5 h-5 bg-black text-white rounded flex items-center justify-center font-black text-xs">E</div>
          <span className="font-bold text-[15px] tracking-tight text-black">extrct.app</span>
        </div>

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

          <button onClick={() => alert("Resources Hub")} className="font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef]">Resources</button>
          <button onClick={() => alert("Pricing Matrix")} className="font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef]">Pricing</button>
          <button onClick={() => alert("Request Demo")} className="font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef]">Demo</button>
        </nav>

        <div className="flex items-center space-x-2.5 shrink-0">
          <button onClick={() => alert("Sign In Window")} className="text-[14px] font-medium text-[#4a4a4a] hover:bg-[#efefef] px-3 py-1.5 rounded-md transition-colors">Sign In</button>
          <button onClick={() => alert("Registration Gateway")} className="bg-black hover:bg-[#333] text-white font-bold text-[13px] px-3.5 py-1.5 rounded-md transition-colors shadow-sm">Get Started for Free</button>
        </div>
      </header>

      {/* GLOBAL ROUTER CONTROLLER */}
      {activeTool === 'dashboard' ? (
        <div className="bg-white">
          <section className="max-w-[1020px] mx-auto px-6 pt-24 pb-16 text-center">
            <h1 className="text-5xl sm:text-6xl font-black text-black tracking-tight leading-[1.05] mb-6 max-w-3xl mx-auto">
              Write, plan, share. <br />With micro-tool execution.
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              extrct.app transforms fragmented data parameters into high-performing solo operations terminal layers. Secure profit bounds, block leakage splits, and audit operations natively.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <button onClick={() => alert("Registration Initialized")} className="w-full sm:w-auto bg-black text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#333] shadow-md transition-all">Get extrct.app free →</button>
              <button onClick={() => alert("Demo Initialized")} className="w-full sm:w-auto border text-black font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#f7f7f5] transition-all">Request custom enterprise demo</button>
            </div>

            <div className="border border-[#eaeaea] shadow-2xl rounded-2xl bg-white p-2 max-w-[920px] mx-auto overflow-hidden">
              <div className="bg-[#f7f7f5] border rounded-xl p-8 text-left min-h-[340px]">
                <h3 className="text-base font-bold text-black tracking-tight mb-4">Click a category tier to pop itemized standalone workspaces instantly:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['UTM Attribution Linker', 'Raw Material Yield Detector', 'WhatsApp Property Alert Engine', 'Rental Upkeep Expense Categorizer', 'Shift Tip-Pooling Ledger', 'Billable Hour Activity Logger'].map((box, idx) => (
                    <div key={idx} className="p-4 bg-white border rounded-xl shadow-sm text-xs font-bold hover:border-black transition-colors cursor-pointer text-center">{box}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

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
                <p className="text-xs font-mono text-gray-400 mb-6 border-l-2 border-black pl-3 italic">{industriesMap[notionActiveTab].notionHeroSub}</p>
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
        <div className="bg-[#fafafa] py-12">
          <div className="max-w-[1040px] mx-auto px-6">
            <button onClick={() => setActiveTool('dashboard')} className="text-xs font-bold text-gray-400 hover:text-black focus:outline-none mb-6">
              ← Back To Notion Home Matrix
            </button>

            {/* 1. UTM TOOL */}
            {activeTool === 'marketing_utm' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">UTM Campaign Link Generator Engine</h1>
                <input type="text" value={utmUrl} onChange={(e)=>setUtmUrl(e.target.value)} className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>setUtmResult(`${utmUrl}?utm_source=${utmSource}`)} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Compile Link</button>
                <p className="text-xs font-mono bg-gray-50 p-3 rounded break-all">{utmResult || 'Output parameters preview pipeline.'}</p>
              </div>
            )}

            {/* 2. MANUFACTURING YIELD */}
            {activeTool === 'mfg_yield' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Raw Material Yield & Dead-Stock Leak Detector</h1>
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" value={mfgIn} onChange={(e)=>setMfgIn(Number(e.target.value))} className="p-2 border rounded text-xs" />
                  <input type="number" value={mfgOut} onChange={(e)=>setMfgOut(Number(e.target.value))} className="p-2 border rounded text-xs" />
                </div>
                <button onClick={()=>setMfgYieldResult(`Efficiency: ${((mfgOut/mfgIn)*100).toFixed(1)}%`)} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Verify Ratio</button>
                <p className="text-sm font-bold text-gray-700">{mfgYieldResult}</p>
              </div>
            )}

            {/* 3. MAINTENANCE */}
            {activeTool === 'mfg_maintenance' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Machine Breakdown & Preventative Scheduler</h1>
                <input type="text" value={mfgMachine} onChange={(e)=>setMfgMachine(e.target.value)} placeholder="CNC Machine ID" className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert("Service milestone committed.")} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Lock Milestone</button>
              </div>
            )}

            {/* 4. COSTING */}
            {activeTool === 'mfg_costing' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Production Batch Costing Tool</h1>
                <input type="number" value={mfgRawCost} onChange={(e)=>setMfgRawCost(Number(e.target.value))} className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>setMfgCostResult(`Unit Cost: ₹${(mfgRawCost/mfgQty).toFixed(2)}`)} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Audit Cost</button>
                <p className="text-sm font-bold">{mfgCostResult}</p>
              </div>
            )}

            {/* 5. WHATSAPP ENG */}
            {activeTool === 'real_estate_whatsapp' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">WhatsApp Bulk Property Alert Matcher</h1>
                <input type="text" value={reProject} onChange={(e)=>setReProject(e.target.value)} placeholder="Greenwood Complex" className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert("Database synchronization running.")} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Match Leads</button>
              </div>
            )}

            {/* 6. RENTAL EXPENSE */}
            {activeTool === 'real_estate_rental' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Rental Maintenance Log & Categorizer</h1>
                <input type="text" value={reRentalAddr} onChange={(e)=>setReRentalAddr(e.target.value)} className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert("Expense node committed.")} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Commit Log</button>
              </div>
            )}

            {/* 7. PROPERTY DESCRIPTION */}
            {activeTool === 'real_estate_desc' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Property Listing Feature Description Engine</h1>
                <input type="text" value={reDescLoc} onChange={(e)=>setReDescLoc(e.target.value)} placeholder="Mithanpura" className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert(`Compiled listing headline at ${reDescLoc}`)} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Compile Copy</button>
              </div>
            )}

            {/* 8. TIP POOLING */}
            {activeTool === 'cafe_tips' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Daily Tip-Pooling & Shift-Split Calculator</h1>
                <input type="number" value={cafeTipPool} onChange={(e)=>setCafeTipPool(Number(e.target.value))} className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert("Tip calculations fractions applied.")} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Compile Map</button>
              </div>
            )}

            {/* 9. RECIPE FOOD COSTING */}
            {activeTool === 'cafe_costing' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Recipe Food-Cost & Inflation Tracker</h1>
                <input type="text" value={cafeRecipeName} onChange={(e)=>setCafeRecipeName(e.target.value)} className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert(`Food Cost verified: ${((cafeIngCost/cafeCardPrice)*100).toFixed(1)}%`)} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Verify Matrix</button>
              </div>
            )}

            {/* 10. QR DIGITAL MENU */}
            {activeTool === 'cafe_qr' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Dynamic QR Code Digital Menu Presenter</h1>
                <input type="text" value={cafeQrDish} onChange={(e)=>setCafeQrDish(e.target.value)} className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>{setMenuItems([...menuItems, { id: Date.now().toString(), name: cafeQrDish, price: cafeQrPrice }]); setCafeQrDish('');}} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Deploy Live</button>
                <div className="mt-4 p-4 border rounded max-w-xs bg-gray-50">
                  {menuItems.map(item=><div key={item.id} className="flex justify-between text-xs py-1"><span>{item.name}</span><span>₹{item.price}</span></div>)}
                </div>
              </div>
            )}

            {/* 11. LEGAL BILLABLE HOUR */}
            {activeTool === 'legal_hours' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Billable Hour Tracker & Activity Logger</h1>
                <input type="text" value={legalClient} onChange={(e)=>setLegalClient(e.target.value)} placeholder="Client Name" className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert(`Accrual total logged: ₹${legalHours*legalRate}`)} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Commit Block</button>
              </div>
            )}

            {/* 12. LEGAL CONTRACT REPLACER */}
            {activeTool === 'legal_doc' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Boilerplate Legal Document Filler</h1>
                <input type="text" value={legalPartyA} onChange={(e)=>setLegalPartyA(e.target.value)} placeholder="Party A" className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert("Boilerplate metadata synchronized.")} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Populate Fields</button>
              </div>
            )}

            {/* 13. COURT CALENDAR */}
            {activeTool === 'legal_calendar' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Court Hearing Calendar & Deadline Tracker</h1>
                <input type="text" value={legalCaseRef} onChange={(e)=>setLegalCaseRef(e.target.value)} placeholder="Case Title" className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert("Case limits locked into alert timeline channels.")} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Analyze Timeline</button>
              </div>
            )}

            {/* 14. HEALTHCARE NO SHOW */}
            {activeTool === 'health_noshow' && (
              <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
                <h1 className="text-2xl font-black">Patient Appointment No-Show Preventer</h1>
                <input type="text" value={healthPatientName} onChange={(e)=>setHealthPatientName(e.target.value)} placeholder="Patient Name" className="w-full p-2 border rounded text-xs" />
                <button onClick={()=>alert("Schedule analytics checked.")} className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Analyze Risk</button>
              </div>
            )}

            {/* GLOBAL TOOL ON-PAGE VALUE INFOGRAPHICS MAP & ACCORDIONS */}
            <div className="bg-white border rounded-xl p-8 shadow-sm mt-8">
              <h3 className="text-xs font-black tracking-wider uppercase mb-6 text-center">The 3-Stage Operational Margin Recovery Pipeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-[#fbfbfa] border rounded-xl text-xs">
                  <span className="font-bold text-black block mb-1">01. Log Injection</span>
                  <p className="text-gray-400">Operators enter data directly into dashboards on the fly, avoiding latency.</p>
                </div>
                <div className="p-4 bg-[#fbfbfa] border rounded-xl text-xs">
                  <span className="font-bold text-black block mb-1">02. Optimization Loop</span>
                  <p className="text-gray-400">System algorithms process variations natively to clear computational calculation disputes.</p>
                </div>
                <div className="p-4 bg-[#fbfbfa] border rounded-xl text-xs">
                  <span className="font-bold text-black block mb-1">03. Preemptive Shields</span>
                  <p className="text-gray-400">Flags margin compression leaks or deadline limit alerts proactively before constraints breach.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-8 shadow-sm mt-4">
              <h3 className="text-xs font-black uppercase text-center text-gray-400 tracking-widest mb-6">Frequently Answered Strategic Queries</h3>
              <div className="space-y-2">
                <div className="border rounded p-4 bg-gray-50 text-xs">
                  <p className="font-bold text-black mb-1">Q: How are individual calculations processed safely?</p>
                  <p className="text-gray-500">The core stack triggers parameters validation inside local browser layout threads to provide instant latency execution response maps.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* PERSISTENT GLOBAL NOTION FOOTER DESIGN FOR ALL PAGES */}
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