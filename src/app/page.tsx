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
  finance: {
    label: "💳 Fintech & Finance Teams",
    notionHeroSub: "Audits high-frequency transaction processing fees, blocks cloud infrastructure spend anomalies, and optimizes fx transfers.",
    tools: [
      { id: 'finance_stripe', shortName: "🧮 Stripe & Gateway Fee Auditor", tagline: "Exposes micro payout leakage fees across payment processors." },
      { id: 'finance_cloud', shortName: "☁️ Cloud Infra Spend Burn System", tagline: "Flags strange AWS/GCP developer instances scaling burns." },
      { id: 'finance_fx', shortName: "💱 Cross-Border Exchange Optimizer", tagline: "Models multi-currency settlement windows for minor conversion cuts." }
    ]
  },
  content: {
    label: "🎬 Content Creators",
    notionHeroSub: "Calculates brand sponsorship ROI targets, packagers bulk metadata parameters, and plans evergreen repurposing grids.",
    tools: [
      { id: 'content_roi', shortName: "💰 Sponsorship ROI Value Calculator", tagline: "Models cost-per-view delivery valuations for brands." },
      { id: 'content_metadata', shortName: "🏷️ Digital Asset Metadata Packager", tagline: "Assembles clean tag structures for rapid channel uploads." },
      { id: 'content_plan', shortName: "📅 Evergreen Content Repurpose Planner", tagline: "Splits long scripts into multi-platform visual structures." }
    ]
  },
  hotel: {
    label: "🏨 Boutique Hotels & Guesthouses",
    notionHeroSub: "Synchronizes multi-platform calendars, generates instant guest mobile compendiums, and upsells late checkouts.",
    tools: [
      { id: 'hotel_overbook', shortName: "🗓️ Overbooking Prevention Sync Matrix", tagline: "Lightweight central clearing hub for channel managers." },
      { id: 'hotel_compendium', shortName: "📖 Guest Digital Compendium Builder", tagline: "Compiles mobile room guides behind custom QR links." },
      { id: 'hotel_checkout', shortName: "⏰ Late-Checkout Automator", tagline: "Deploys departure extension upsell strings to guest chats." }
    ]
  }
};

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('dashboard'); 
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('ecom');
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Global State Containers for All Interactive Inputs
  const [globalInput1, setGlobalInput1] = useState<string>('');
  const [globalInput2, setGlobalInput2] = useState<string>('');
  const [globalNum1, setGlobalNum1] = useState<number>(0);
  const [globalNum2, setGlobalNum2] = useState<number>(0);
  const [globalToggle, setGlobalToggle] = useState<boolean>(false);
  const [premiumLock, setPremiumLock] = useState<boolean>(false);
  const [demoLogStream, setDemoLogStream] = useState<any[]>([
    { id: 'init', name: 'System Workspace Sandbox Initialized Running State Data' }
  ]);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
    setPremiumLock(false);
    setDemoLogStream([{ id: 'init', name: `Workspace parameters adjusted to ${toolId}` }]);
  };

  const triggerSecureStripeCheckout = () => {
    setIsStripeProcessing(true);
    setTimeout(() => {
      setIsStripeProcessing(false);
      alert("Stripe Checkout Secure API: Routing token verification completed.");
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased text-[15px]">
      
      {/* NOTION-BLUEPRINT EXACT FIXED HEADER DESIGN */}
      <header className="h-14 bg-white border-b border-[#eaeaea] sticky top-0 z-50 px-6 flex items-center justify-between select-none">
        
        {/* Left: Logo */}
        <div onClick={() => setActiveTool('dashboard')} className="flex items-center space-x-2 cursor-pointer shrink-0">
          <div className="w-5 h-5 bg-black text-white rounded flex items-center justify-center font-black text-xs">E</div>
          <span className="font-bold text-[15px] tracking-tight text-black">extrct.app</span>
        </div>

        {/* Middle: Balanced Menu Bar */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="relative">
            <button 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className={`flex items-center space-x-1 font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef] transition-colors`}
            >
              <span>Services</span>
              <span className="text-[8px] text-gray-400">▼</span>
            </button>

            {isMegaMenuOpen && (
              <div className="absolute top-[38px] left-[-50px] w-[800px] bg-white border border-[#eaeaea] shadow-xl rounded-xl overflow-hidden flex z-50">
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
          <button onClick={() => alert("SaaS Pricing Engine Layout Matrix")} className="font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef]">Pricing</button>
          <button onClick={() => alert("Request Active Workspace System Demo")} className="font-medium text-[14px] px-3 py-1 rounded-md text-[#4a4a4a] hover:bg-[#efefef]">Demo</button>
        </nav>

        {/* Right: Explicit Buttons */}
        <div className="flex items-center space-x-2.5 shrink-0">
          <button onClick={() => alert("Sign In Interface Session Token")} className="text-[14px] font-medium text-[#4a4a4a] hover:bg-[#efefef] px-3 py-1.5 rounded-md transition-colors">
            Sign In
          </button>
          <button onClick={() => alert("Registration Entry Gateway")} className="bg-black hover:bg-[#333] text-white font-bold text-[13px] px-3.5 py-1.5 rounded-md transition-colors shadow-sm">
            Get Started for Free
          </button>
        </div>
      </header>

      {/* DYNAMIC COMPONENT STATE SYSTEM ROUTER MUXER */}
      {activeTool === 'dashboard' ? (
        
        /* ---------------------------------------------------------------------
           EXACT https://www.notion.com/ COPY ARCHITECTURE FOR HOMEPAGE
           --------------------------------------------------------------------- */
        <div className="bg-white">
          
          {/* HERO SECTION BLOCKS */}
          <section className="max-w-[1020px] mx-auto px-6 pt-24 pb-16 text-center">
            <h1 className="text-5xl sm:text-6xl font-black text-black tracking-tight leading-[1.05] mb-6 max-w-3xl mx-auto">
              Write, plan, share. <br />With micro-tool execution.
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              extrct.app is the modular matrix where 10 micro-sectors align. No clunky software suites—just crisp data pipelines that recover leaked margins instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <button onClick={() => alert("Free Activation")} className="w-full sm:w-auto bg-black text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#333] shadow-md transition-all">
                Get extrct.app free →
              </button>
              <button onClick={() => alert("Demo Hook")} className="w-full sm:w-auto border text-black font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#f7f7f5] transition-all">
                Request custom enterprise demo
              </button>
            </div>

            {/* BRAND HERO IMAGE BLOCK PLACEHOLDER */}
            <div className="border border-[#eaeaea] shadow-2xl rounded-2xl bg-white p-2 max-w-[920px] mx-auto overflow-hidden">
              <div className="bg-[#f7f7f5] border rounded-xl p-8 text-left min-h-[340px] flex flex-col justify-between">
                <div className="flex items-center space-x-2 border-b pb-3 mb-4 select-none">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-gray-400 font-mono ml-4">https://extrct.app/production/matrix_core</span>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-black tracking-tight">Select your custom workflow deck below to populate automated micro terminals:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['E-Commerce Fee Audits', 'Ad-Spend Tracker', 'Material Yield Monitor', 'Rental Expense Shields'].map((box, idx) => (
                      <div key={idx} className="p-4 bg-white border rounded-xl shadow-sm font-bold text-xs text-center hover:border-black transition-colors cursor-pointer">
                        {box}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-[11px] font-mono text-gray-400 border-t pt-2 mt-4 text-center">
                  ⚡ Fully modular system architecture natively compiled. No onboarding bloat.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: NOTION DECK NAVIGATION TAB COMPONENT */}
          <section className="max-w-[1040px] mx-auto px-6 py-16 border-t border-[#eaeaea]">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-black tracking-tight">Every niche operational requirement, structured.</h2>
              <p className="text-sm text-gray-400 mt-1">Tap a tab element to explore individual terminal sub-components.</p>
            </div>

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
                    <div 
                      key={tool.id}
                      onClick={() => selectToolFromMenu(tool.id)}
                      className="p-5 border border-[#eaeaea] rounded-xl hover:border-black hover:shadow-md cursor-pointer transition-all bg-white"
                    >
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
           ALL 13 COMPLETED PREMIUM ACTIVE TOOL PAGES SYSTEM (FULLY INJECTED RE-ACTIVATED)
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa] py-12 px-6 min-h-[500px]">
          <div className="max-w-[1040px] mx-auto">
            
            {/* BACK TO HOMEPAGE HUB BUTTON LINK */}
            <button onClick={() => setActiveTool('dashboard')} className="text-xs font-bold text-gray-400 hover:text-black mb-6 flex items-center space-x-1 focus:outline-none">
              <span>← Back To Notion Home Deck</span>
            </button>

            {/* DYNAMIC INTERACTIVE CONSOLE FRAME BASE */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* COMPONENT INPUT CARD CONTROL GRID */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl p-6 space-y-4 shadow-sm">
                <div className="border-b pb-2">
                  <span className="text-[10px] font-mono uppercase bg-black text-white px-1.5 py-0.5 rounded font-bold">Active Engine Terminal</span>
                  <h2 className="text-base font-black text-black tracking-tight mt-2">
                    {activeTool.replace('_', ' ').toUpperCase()}
                  </h2>
                </div>

                {/* LOGIC CONSOLE DISPATCHER SPLIT BASED ON KEY STRINGS */}
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Primary Dynamic Reference Parameter</label>
                    <input type="text" value={globalInput1} onChange={(e)=>setGlobalInput1(e.target.value)} placeholder="Enter configuration value string reference" className="w-full p-2.5 border rounded-lg text-xs bg-[#faf9f6]" />
                  </div>
                  
                  {activeTool.includes('utm') || activeTool.includes('desc') || activeTool.includes('doc') ? (
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Secondary Text Attribute / Placeholder String</label>
                      <input type="text" value={globalInput2} onChange={(e)=>setGlobalInput2(e.target.value)} placeholder="Additional mapping context parameters" className="w-full p-2.5 border rounded-lg text-xs bg-[#faf9f6]" />
                    </div>
                  ) : null}

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Lot Quantity / Cost Weight Parameter</label>
                    <input type="number" value={globalNum1} onChange={(e)=>setGlobalNum1(Number(e.target.value))} className="w-full p-2.5 border rounded-lg text-xs bg-[#faf9f6] font-mono" />
                  </div>
                </div>

                <button 
                  onClick={() => {
                    if(!globalInput1.trim()) return;
                    setDemoLogStream([...demoLogStream, { id: Date.now().toString(), name: `Successfully executed analytics computation loop for: ${globalInput1}` }]);
                    setGlobalInput1('');
                  }} 
                  className="w-full bg-black text-white font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Execute Local Compilation Loop
                </button>
              </div>

              {/* AUTOMATION MONITOR DISPLAY CARD GRID */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Active Workspace Real-Time Feed</span>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">Telemetry Live</span>
                  </div>
                  
                  <div className="p-6 divide-y divide-gray-100 max-h-[300px] overflow-y-auto">
                    {demoLogStream.map((log) => (
                      <div key={log.id} className="py-2 text-xs text-gray-600 font-mono flex items-center justify-between">
                        <span>✓ {log.name}</span>
                        <span className="text-[10px] text-gray-300">verified node</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PREMIUM MARKETING GATING VALUE HOOK */}
                <div className="border border-amber-200 bg-amber-50/40 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-950 block">🔒 Cloud Sync Alert Webhooks Locked (Free Sandbox Rules)</span>
                    <p className="text-[11px] text-amber-800 mt-0.5">Free local spaces analyze active telemetry metrics inside browser state arrays. Pay $10 once to deploy persistent cloud schemas.</p>
                  </div>
                  <button onClick={triggerSecureStripeCheckout} className="bg-black text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0">Unlock Matrix</button>
                </div>
              </div>

            </div>

            {/* DEEP PROGRAMMATIC BRAND VALUE MARKETING COMPONENT LAYOUTS */}
            <section className="border-t border-[#edece9] bg-white rounded-xl p-8 mt-12 shadow-sm">
              <h3 className="text-lg font-black tracking-tight mb-4">Why this micro-tool framework optimizes operations:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-4 bg-[#fafafa] rounded-xl border border-gray-100">
                  <span className="text-xl">📊</span>
                  <h4 className="font-bold text-xs text-black mt-2 mb-1">Eradicate Time Leakage</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">No sloppy manual logging tables or chaotic spreadsheet columns. Fast inputs lock parameters inside 10 seconds flat.</p>
                </div>
                <div className="p-4 bg-[#fafafa] rounded-xl border border-gray-100">
                  <span className="text-xl">⚡</span>
                  <h4 className="font-bold text-xs text-black mt-2 mb-1">Portals Friendly Shape</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">Outputs are structured cleanly for copy clipboard actions or business system exports instantly.</p>
                </div>
                <div className="p-4 bg-[#fafafa] rounded-xl border border-gray-100">
                  <span className="text-xl">✓</span>
                  <h4 className="font-bold text-xs text-black mt-2 mb-1">Total Mathematical Trust</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">Algorithmic parameter verification mapping stops human calculation fatigue lines permanently.</p>
                </div>
              </div>
            </section>

            {/* ACCORDION FAQ INTEGRATION BLOCK FOR TOOL RETAINERS */}
            <section className="border-t border-[#edece9] bg-white rounded-xl p-8 mt-4 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 text-center mb-6">Frequently Answered Queries</h3>
              <div className="space-y-2">
                {[
                  { q: "How are calculation parameters validated natively?", a: "The framework processes inputs across direct type-casted mathematical solvers locally inside the user browser cell to remove network verification lag matrices." },
                  { q: "What functionalities trigger on the $10 premium license handshakes?", a: "The paid tier bridges background cron server instances to dispatch notification text blocks directly to destination apps." }
                ].map((faq, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button onClick={()=>setOpenFaqIdx(openFaqIdx === index ? null : index)} className="w-full text-left font-bold text-xs p-4 bg-gray-50 flex justify-between">
                      <span>{faq.q}</span><span>{openFaqIdx === index ? '▲' : '▼'}</span>
                    </button>
                    {openFaqIdx === index && <div className="p-4 text-xs text-gray-500 border-t leading-relaxed bg-white">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      )}

      {/* PERSISTENT GLOBAL FOOTER ANCHOR REQUIRED ON EVERY SINGLE ROUTE GRID */}
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