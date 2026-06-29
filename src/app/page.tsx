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
      { id: 'hotel_checkout', shortName: "⏰ Late-Checkout Upsell Automator", tagline: "Deploys departure extension upsell strings to guest chats." }
    ]
  }
};

interface AllocationResultNode {
  role: string;
  hours: number;
  weight: number;
  shareAmount: number;
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('cafe_tips'); // Locked to active niche tool
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('cafe');

  // Shared Core Stripe Checkout Payments Gateway Telemetry
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Tip Pool State Matrix Controls
  const [totalTipPool, setTotalTipPool] = useState<number>(18500);
  const [waiterHours, setWaiterHours] = useState<number>(12);
  const [kitchenHours, setKitchenHours] = useState<number>(8);
  const [cleaningHours, setCleaningHours] = useState<number>(6);
  const [tipsPremiumLock, setTipsPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [sharesOutput, setSharesOutput] = useState<AllocationResultNode[]>([]);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  const triggerSecureStripeCheckout = () => {
    setIsStripeProcessing(true);
    setTimeout(() => {
      setIsStripeProcessing(false);
      alert("Stripe Payout System: Unlocking CSV payroll report downloads and automated multi-shift tracking matrices.");
    }, 1100);
  };

  // Proportional tip split mathematical calculator engine
  const executeCompileTipPoolSplits = () => {
    if (totalTipPool <= 0 || (waiterHours + kitchenHours + cleaningHours) <= 0) return;

    // Simulate free tier calculation ceiling tracking
    if (sharesOutput.length > 0 && totalTipPool > 50000) {
      setTipsPremiumLock(true);
      return;
    }

    // Role multiplier scoring index variables
    const waiterWeight = 1.0;
    const kitchenWeight = 0.8;
    const cleaningWeight = 0.5;

    const totalWeightedHours = 
      (waiterHours * waiterWeight) + 
      (kitchenHours * kitchenWeight) + 
      (cleaningHours * cleaningWeight);

    const pointValue = totalTipPool / totalWeightedHours;

    const compiledNodes: AllocationResultNode[] = [
      { role: "Front House Waiters / Servers", hours: waiterHours, weight: waiterWeight, shareAmount: parseFloat((waiterHours * waiterWeight * pointValue).toFixed(2)) },
      { role: "Back House Kitchen / Chefs", hours: kitchenHours, weight: kitchenWeight, shareAmount: parseFloat((kitchenHours * kitchenWeight * pointValue).toFixed(2)) },
      { role: "Support Staff / Maintenance Cleaning", hours: cleaningHours, weight: cleaningWeight, shareAmount: parseFloat((cleaningHours * cleaningWeight * pointValue).toFixed(2)) }
    ];

    setSharesOutput(compiledNodes);
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

      {/* RENDER SWITCHING MATRICES HOOKS */}
      {activeTool === 'cafe_tips' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* SEARCH ATTRIBUTION ENGINES ON-PAGE SEO METADATA TRAPS */}
          <div className="hidden">
            <h1>Daily Tip-Pooling & Shift Split-Calculator Engine | Restaurant Management</h1>
            <h2>Automated proportional tip share distribution ledger configurations for independent cafes.</h2>
            <p>Calculate custom weighted staff tip pools, track front house server hour logs, divide backend kitchen chef payouts splits, and isolate card tip distributions transparently under shift conclusions.</p>
          </div>

          {/* HIGH-CONVERTING HERO HEADER WORKSPACE */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-amber-50 text-amber-800 border border-amber-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>👥</span> <span>Friction-Free Restaurant Staff Payout Matrices</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Wipe Out Shift Tip Split Disputes. <br />
                <span className="text-amber-600">Calculate Proportional Staff Shares Instantly.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Dividing combined cash and card tips against mismatched shift hours manually at the end of a exhausting kitchen day breeds employee frustration. Scale distribution via custom role weights transparently inside seconds.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#tips-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Launch Shift Allocation Console ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Export Shift Payroll Records ($10)
                </button>
              </div>
            </div>
          </section>

          {/* APPLICATION RUNTIME TERMINAL ENGINE */}
          <section id="tips-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* SHIFT HOURLY LOGS ENTRY FORM COMPONENT */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Shift Metrics Control</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Total Tip Pool Accumulation (₹)</label>
                    <input 
                      type="number" 
                      value={totalTipPool}
                      onChange={(e) => setTotalTipPool(Number(e.target.value))}
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Total Server Hours (Front House - Weight: 1.0)</label>
                    <input 
                      type="number" 
                      value={waiterHours}
                      onChange={(e) => setWaiterHours(Number(e.target.value))}
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Kitchen Hours (1:0.8)</label>
                      <input 
                        type="number" 
                        value={kitchenHours}
                        onChange={(e) => setKitchenHours(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Cleaning Hours (1:0.5)</label>
                      <input 
                        type="number" 
                        value={cleaningHours}
                        onChange={(e) => setCleaningHours(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeCompileTipPoolSplits}
                  className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Compile Proportional Allocation
                </button>
              </div>

              {/* LIVE LEDGER CALCULATION FEED DISPATCH SPLIT CONTAINER */}
              <div className="lg:col-span-2 space-y-4">
                
                {tipsPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Dynamic Shifts Matrix Vault Engaged</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free allocation sandboxes cap single-shift entries below ₹50,000 to manage cloud limits. Upgrade options clear payout barriers and enable structural CSV exports instantly.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-amber-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-amber-700 transition-colors">
                      Unlock Bulk Matrix
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Granular Staff Payout Statements</span>
                    <span className="text-[10px] font-mono text-gray-400">Calculated State: Pristine</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {sharesOutput.length === 0 ? (
                      <div className="p-8 text-center text-xs text-gray-400 italic">
                        Input total shift pool metrics and tap compute to unlock the proportional role split chart.
                      </div>
                    ) : (
                      sharesOutput.map((node, i) => (
                        <div key={i} className="p-5 flex items-center justify-between hover:bg-[#faf9f6] transition-colors">
                          <div className="space-y-1">
                            <span className="font-bold text-xs sm:text-sm text-[#1e1e1c] block">{node.role}</span>
                            <p className="text-xs text-gray-400">
                              Logged Time: <b>{node.hours} Hours</b> | Coefficient Weight Index: <span className="font-mono">{node.weight}x</span>
                            </p>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] uppercase font-bold tracking-tight bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100 block">Net Allotment</span>
                            <span className="font-mono text-sm font-black text-gray-900 mt-1 block">₹{node.shareAmount.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* PROGRAMMATIC ON-PAGE SEO VALUE MARKETING SYSTEMS CONTENT */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-2">Operational Payroll Architecture</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The Weighted Proportional Distribution System</h2>
                <p className="text-xs text-gray-500 mt-2">How our micro-allocation solver protects workplace trust by grouping hours dynamically.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">💰 01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Pool Aggregation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Shift leaders collect total pooled cash and digital card tips gathered across the entirety of standard restaurant operation hours.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">⚖ 02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Coefficient Point Splitting</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">System compiles individual logged hours multiplied against precise organizational tier scales, balancing front-house and backend tasks.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🛡 03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Dispute Resolution Block</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Instantly outputs transparent payroll fractions down to individual rupee points, creating total transparency among kitchen squads.</p>
                </div>
              </div>
            </div>
          </section>

          {/* HIGH-CONVERTING VALUE CORE USPs CARD SYSTEM */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Built for Fast-Paced Independent Kitchens</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Retain Your Top Restaurant Staff <br />With Perfect Payout Trust.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Messy whiteboard calculations or loose ledger tracking at closing windows cause internal friction and drive away core service staff. <b>extrct.app</b> enforces absolute mathematical precision across daily shift routines.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">⏱</span>
                    <span className="font-bold text-xs text-gray-900 block">Rapid Payout Maps</span>
                    <p className="text-[11px] text-gray-400 mt-1">Takes less than 15 seconds to wrap up complex tip distribution maps post-closing.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">🛡️</span>
                    <span className="font-bold text-xs text-gray-900 block">Total Operational Trust</span>
                    <p className="text-[11px] text-gray-400 mt-1">Clear weighted calculations keep kitchen chefs and table servers perfectly satisfied.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DYNAMIC ON-PAGE HIGH-CONVERTING FAQ ACCORDION ENGINE */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Answered Queries</h3>
                <p className="text-xs text-gray-400 mt-1">Everything you need to master about executing daily restaurant tip split frameworks.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "Why is a weighted coefficient system critical for tip pool distribution?",
                    a: "A flat hourly split ignores the uneven operational value of different roles. Applying structured coefficient indexes (e.g. 1.0 for front servers, 0.8 for kitchen cooks) ensures that tip allocation matches the direct customer-facing dynamics of each shift."
                  },
                  {
                    q: "What variables activate on the professional $10 upgrade matrix?",
                    a: "The standard terminal computes individual shift values on the fly. Moving to our premium database layer opens up a centralized cloud logging system that records historical tip logs over months, syncing data to clean Excel reports."
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
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All system frameworks synchronized.</span>
      </footer>

    </div>
  );
}