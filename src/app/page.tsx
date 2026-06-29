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

interface BillableLogNode {
  id: string;
  clientName: string;
  activityType: string;
  hoursLogged: number;
  hourlyRate: number;
  grossAmount: number;
  billingStatus: 'UNBILLED_HOLD' | 'INVOICED_PENDING';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('legal_hours'); // Switched strictly to legal tool node
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('legal');

  // Shared Core Payments handshakes
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Legal Hour Tracker Dashboard States
  const [clientTitle, setClientTitle] = useState<string>('');
  const [lawActivity, setLawActivity] = useState<string>('Client Consultation');
  const [timeDuration, setTimeDuration] = useState<number>(1.5);
  const [standardRate, setStandardRate] = useState<number>(3500);
  const [legalPremiumLock, setLegalPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [billingLogs, setBillingLogs] = useState<BillableLogNode[]>([
    {
      id: "1",
      clientName: "NEXL Tech Solutions Pvt Ltd",
      activityType: "Trademark IP Audit",
      hoursLogged: 4.5,
      hourlyRate: 4000,
      grossAmount: 18000,
      billingStatus: "UNBILLED_HOLD"
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
      alert("Stripe Verification Gateway: Connecting nested multi-attorney account sync arrays.");
    }, 1100);
  };

  // Billing time ledger math calculations node
  const executeCompileTimeLog = () => {
    if (!clientTitle.trim() || timeDuration <= 0 || standardRate <= 0) return;

    // Free sandbox cap ceiling limits rule check
    if (billingLogs.length >= 2) {
      setLegalPremiumLock(true);
      return;
    }

    const calculatedGross = parseFloat((timeDuration * standardRate).toFixed(2));

    const newLog: BillableLogNode = {
      id: Date.now().toString(),
      clientName: clientTitle.trim(),
      activityType: lawActivity,
      hoursLogged: timeDuration,
      hourlyRate: standardRate,
      grossAmount: calculatedGross,
      billingStatus: 'UNBILLED_HOLD'
    };

    setBillingLogs([newLog, ...billingLogs]);
    setClientTitle('');
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

      {/* DYNAMIC SCREEN CONFIG MATRIX SHIFT */}
      {activeTool === 'legal_hours' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* SEARCH ATTRIBUTION ENGINES METADATA DEEP TRACK SEO */}
          <div className="hidden">
            <h1>Billable Hour Tracker & Activity Logger Ledger | Legal Billing Systems</h1>
            <h2>Automated timesheet trackers and audit trail builders for boutique legal firms.</h2>
            <p>Log client consultation minutes natively, structure legal research invoice cost points, audit litigation casework values, and stop billable asset leaks during daily task rotations.</p>
          </div>

          {/* DYNAMIC SALES BRAND HERO HEADER */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-800 border border-blue-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>⏳</span> <span>Leak-Proof Legal Payout Diagnostics</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Capture Every Single Billable Minute. <br />
                <span className="text-blue-600">Eradicate Time Leakage in Legal Operations.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Forgetting to log short client check-ins, case study reviews, or contract drafting hours drains high-value attorney realization pools. Enforce continuous transparent itemized tracking natively inside seconds.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#logger-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Open Activity Logger Terminal ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Activate Live Invoicing Multi-User Webhooks ($10)
                </button>
              </div>
            </div>
          </section>

          {/* APPLICATION INTERACTIVE TELEMETRY WORKSPACE */}
          <section id="logger-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* ATTOURNEY INPUT WIDGET PANEL COMPONENT */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Telemetry Dispatch</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Client Reference Name</label>
                    <input 
                      type="text" 
                      value={clientTitle}
                      onChange={(e) => setClientTitle(e.target.value)}
                      placeholder="e.g. Sonali Education Foundations"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Casework Scope</label>
                    <select
                      value={lawActivity}
                      onChange={(e) => setLawActivity(e.target.value)}
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-bold text-gray-700 focus:outline-none"
                    >
                      <option value="Client Consultation">Client Advisory Consultation</option>
                      <option value="Contract Drafting">Contract Review & Drafting</option>
                      <option value="Legal Research Case Study">Precedent Legal Research</option>
                      <option value="Court Room Advocacy">Litigation & Court Room Advocacy</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Hours Applied</label>
                      <input 
                        type="number" 
                        step="0.1"
                        value={timeDuration}
                        onChange={(e) => setTimeDuration(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Hourly Rate (₹)</label>
                      <input 
                        type="number" 
                        value={standardRate}
                        onChange={(e) => setStandardRate(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeCompileTimeLog}
                  disabled={!clientTitle.trim() || timeDuration <= 0}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Commit Activity Block
                </button>
              </div>

              {/* TIMEPAGE ACTIVE LOG PIPELINES CONTAINER FEED */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* RIGID STRIPE GATING TRIGGER PROTECTION CEILING */}
                {legalPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Multi-Attorney Billing Cloud Vault Engaged</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free execution sandboxes retain 2 tracking logs concurrently to control memory loops. Pay $10 tokens to unlock infinite client databases and export itemized whitelabel time vouchers.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-blue-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-blue-700 transition-colors">
                      Unlock Account Cloud
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Active Timesheet Audit Log</span>
                    <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">Billing Grid Enabled</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {billingLogs.map((node) => (
                      <div key={node.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors">
                        <div className="space-y-1">
                          <span className="font-bold text-xs sm:text-sm text-[#1e1e1c] block">{node.clientName}</span>
                          <div className="text-[12px] text-gray-500">
                            casework: <b className="text-gray-700">{node.activityType}</b> | Logged: <span className="font-mono font-bold text-gray-900">{node.hoursLogged} hrs</span> @ ₹{node.hourlyRate}/hr
                          </div>
                        </div>

                        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 pt-2 sm:pt-0 border-gray-100">
                          <span className="text-[10px] px-2 py-0.5 rounded font-bold tracking-tight block border bg-amber-50 text-amber-700 border-amber-100">
                            UNBILLED ACCRUAL
                          </span>
                          <span className="font-mono text-xs font-black text-gray-900 mt-1.5 block">
                            ₹{node.grossAmount.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* VALUE PROPOSITION DIAGRAM BLUEPRINT ON-PAGE SEO MARGINS */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-2">Programmatic Allocation Workflows</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The 3-Tier Leak Mitigation Pipeline</h2>
                <p className="text-xs text-gray-500 mt-2">How our edge log matrix records minute details to stop billing compression leaks completely.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs mb-4">01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">On-The-Fly Injection</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Attorneys record client advisory blocks or sudden phone loops directly while completing tasks inside the responsive layout interface.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs mb-4">02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Accrual Multiplication</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">System parameters execute raw fraction hours directly against set contract billing levels, avoiding human rounding computation discrepancies.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs mb-4">03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Unbilled Audit Assurance</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Locks down unbilled logs in itemized vectors, ready for quick whitelabel generation loops, minimizing billing disputes entirely.</p>
                </div>
              </div>
            </div>
          </section>

          {/* HIGH CONVERTING UNIQUE SELLING PROPOSITIONS (USPs) GRIDS */}
          <section className="border-t border-[#edece9] bg-fbfbfa py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Maximum Revenue Realization Core</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Ditch Bloated Legal CRM software.<br />Log Billable Realizations in Real-Time.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Heavy enterprise management ecosystems require tiresome manual tracking steps, long account setups, and steep monthly commitments. <b>extrct.app</b> strips software bloat to bring pristine operational metrics right to your desk.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">⏳</span>
                    <span className="font-bold text-xs text-gray-900 block">Eradicate Lost Minutes</span>
                    <p className="text-[11px] text-gray-400 mt-1">Logs sudden case changes or calls instantly before they slip from your mind.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">📊</span>
                    <span className="font-bold text-xs text-gray-900 block">Total Client Transparency</span>
                    <p className="text-[11px] text-gray-400 mt-1">Itemized cost points reduce billing friction and build permanent client relationship trust.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DYNAMIC HIGH-CONVERTING FAQ ACCORDION ENGINE BLOCK */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Asked Questions</h3>
                <p className="text-xs text-gray-400 mt-1">Everything you need to master about maintaining pristine billable legal records.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "How does fraction-based legal hour allocation prevent net revenue leaks?",
                    a: "Traditional billing often rounds down short legal efforts like ten-minute emails or brief phone checks to zero. Tracking tasks down to exact decimal configurations ensures your firm captures and secures full compensation for all application labor."
                  },
                  {
                    q: "What properties execute inside the premium $10 invoicing webhook upgrade?",
                    a: "The baseline terminal operates a clean localized matrix stack. Moving onto our premium layer connects dynamic webhook routers that map timesheets directly to automated bookkeeping apps for rapid invoicing."
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