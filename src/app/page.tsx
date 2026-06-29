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

interface MaintenanceScheduleNode {
  id: string;
  machineName: string;
  componentType: string;
  operatingHours: number;
  criticality: 'HIGH' | 'MEDIUM' | 'LOW';
  nextServiceDueDate: string;
  actionStatus: 'PROACTIVE' | 'RISK_ZONE' | 'OVERDUE_BREACH';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('mfg_maintenance'); // Active tool locked
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('mfg');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('mfg');

  // Shared Stripe Processing Billing States
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Maintenance Scheduler States
  const [inputMachine, setInputMachine] = useState<string>('');
  const [inputComponent, setInputComponent] = useState<string>('');
  const [runtimeHours, setRuntimeHours] = useState<number>(1200);
  const [criticalityTier, setCriticalityTier] = useState<'HIGH' | 'MEDIUM' | 'LOW'>('HIGH');
  const [maintenancePremiumLock, setMaintenancePremiumLock] = useState<boolean>(false);
  
  // Interactive On-Page FAQ Toggle States
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceScheduleNode[]>([
    {
      id: "1",
      machineName: "Heavy Injection Molding Rig-04",
      componentType: "Hydraulic Seal Valves",
      operatingHours: 4200,
      criticality: "HIGH",
      nextServiceDueDate: "2026-07-08",
      actionStatus: "RISK_ZONE"
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
      alert("Stripe Checkout Session Trigger: Handshake initialized for $10 Premium Alert Unlock Module.");
    }, 1100);
  };

  // Scheduler Automation Engine logic calculation parameters
  const executeCompileMaintenanceSchedule = () => {
    if (!inputMachine.trim() || !inputComponent.trim()) return;

    // Strict limitation threshold check for conversion triggers
    if (maintenanceRecords.length >= 2) {
      setMaintenancePremiumLock(true);
      return;
    }

    let status: 'PROACTIVE' | 'RISK_ZONE' | 'OVERDUE_BREACH' = 'PROACTIVE';
    if (runtimeHours > 3500 || criticalityTier === 'HIGH') status = 'RISK_ZONE';
    if (runtimeHours > 5000) status = 'OVERDUE_BREACH';

    // Calculating standard production offset date rules natively
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + (runtimeHours > 3000 ? 5 : 20));
    const finalFormattedDate = currentDate.toISOString().split('T')[0];

    const newRecord: MaintenanceScheduleNode = {
      id: Date.now().toString(),
      machineName: inputMachine.trim(),
      componentType: inputComponent.trim(),
      operatingHours: runtimeHours,
      criticality: criticalityTier,
      nextServiceDueDate: finalFormattedDate,
      actionStatus: status
    };

    setMaintenanceRecords([newRecord, ...maintenanceRecords]);
    setInputMachine('');
    setInputComponent('');
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

      {/* CORE FRAMEWORK CONTROLLER ROUTER SPLIT */}
      {activeTool === 'dashboard' ? (
        <div className="p-12 text-center text-xs font-mono text-gray-400">Router Terminal Home state context link.</div>
      ) : activeTool === 'mfg_maintenance' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* PROGRAMMATIC ON-PAGE SEO SPEC DATA ENGINES */}
          <div className="hidden">
            <h1>Machine Breakdown & Preventative Maintenance Scheduler Engine</h1>
            <h2>MSME predictive hardware down-time reduction software templates.</h2>
            <p>Schedule systematic factory floor machine overhauls, calculate runtime critical deterioration offsets, trace machinery strain parameters, and connect automated sequence alerts before production breaches.</p>
          </div>

          {/* PREMIUM LANDING HERO SECTION */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 border border-blue-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>🔧</span> <span>Predictive Operational Risk Matrix</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Eliminate Unplanned Factory Downtime. <br />
                <span className="text-blue-600">Automate Proactive Machine Overhaul Logs.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Unplanned assembly breaks crush delivery timelines and burn through client trust margins. Track operating runtime milestones natively to enforce proactive sequence maintenance before hardware failure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#scheduler-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Open Maintenance Scheduler Terminal ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Activate Live Supabase Sequence Alerts ($10)
                </button>
              </div>
            </div>
          </section>

          {/* INTERACTIVE COMPONENT WORKSPACE */}
          <section id="scheduler-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* SCHEDULER ENTRY CONSOLE */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Hardware Telemetry Input</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Machine Asset Title / ID</label>
                    <input 
                      type="text" 
                      value={inputMachine}
                      onChange={(e) => setInputMachine(e.target.value)}
                      placeholder="e.g. CNC Heavy Milling Unit A"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] text-[#1e1e1c] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Vulnerable Component Node</label>
                    <input 
                      type="text" 
                      value={inputComponent}
                      onChange={(e) => setInputComponent(e.target.value)}
                      placeholder="e.g. Main Spindle Bearings"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Accumulated Runtime (hrs)</label>
                      <input 
                        type="number" 
                        value={runtimeHours}
                        onChange={(e) => setRuntimeHours(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Criticality Tier</label>
                      <select
                        value={criticalityTier}
                        onChange={(e) => setCriticalityTier(e.target.value as 'HIGH' | 'MEDIUM' | 'LOW')}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-bold text-gray-700"
                      >
                        <option value="HIGH">CRITICAL</option>
                        <option value="MEDIUM">STANDARD</option>
                        <option value="LOW">DEFERRED</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeCompileMaintenanceSchedule}
                  disabled={!inputMachine.trim() || !inputComponent.trim()}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Compute Next Service Anchor
                </button>
              </div>

              {/* AUTOMATION MONITOR SCHEDULING DISPATCH TABLE */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* PRE-FILLED PREMIUM ALERT BOX HOOK */}
                {maintenancePremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Automated SMS & Sequence Dispatch Alerts Engaged</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free local workspace layout saves current state only. Pay $10 to enable active background cron triggers that dispatch warning text nodes directly to engineers before production deadlines.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-blue-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-blue-700 transition-colors">
                      Unlock System Alert Nodes
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Active Factory Overhaul Matrix</span>
                    <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">Telemetry Connected</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {maintenanceRecords.map((node) => (
                      <div key={node.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-[#1e1e1c]">{node.machineName}</span>
                            <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${node.criticality === 'HIGH' ? 'bg-red-100 text-red-900' : 'bg-gray-100 text-gray-600'}`}>
                              {node.criticality} RISK
                            </span>
                          </div>
                          <p className="text-[12px] text-gray-500">
                            Node Targeted: <span className="font-medium text-gray-700">{node.componentType}</span> | Runtime Weight: <span className="font-mono font-bold text-gray-900">{node.operatingHours} hrs logged</span>
                          </p>
                        </div>

                        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 pt-2 sm:pt-0 border-gray-100">
                          <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold tracking-tight block border ${node.actionStatus === 'OVERDUE_BREACH' ? 'bg-red-50 text-red-700 border-red-100 animate-pulse' : node.actionStatus === 'RISK_ZONE' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-green-50 text-green-700 border-green-100'}`}>
                            {node.actionStatus === 'OVERDUE_BREACH' ? '🚨 REPAIR CRITICAL' : node.actionStatus === 'RISK_ZONE' ? '⚠️ INSPECT LOG' : '✓ HEALTHY'}
                          </span>
                          <span className="text-[11px] text-gray-400 font-mono mt-1 block">
                            Target Date: <b>{node.nextServiceDueDate}</b>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* VISUAL LAYOUT TEXT INFOGRAPHIC SYSTEM */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-2">Automated Pacing Blueprint</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The Proactive Overhaul Flow Loop</h2>
                <p className="text-xs text-gray-500 mt-2">How our edge-logic framework processes real-time runtime hours to lock down component lifecycles.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">⚙ 01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Runtime Aggregation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Shift logs record machinery operating weights directly. Edge parameters catch deviations instantly without external hardware dependencies.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">📡 02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Critical Status Mapping</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">System algorithms weigh asset runtime against strict industrial wear curves, grouping targets into precise color-coded risk flags.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🚨 03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Preemptive Alert Dispatch</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Before standard component wear timelines breach safety thresholds, premium routers trigger sequence signals to maintenance squads.</p>
                </div>
              </div>
            </div>
          </section>

          {/* EXCLUSIVE MARKETING VALUE SECTIONS (USPs) */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Maximum Plant Asset Protection</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Engineered to Safeguard <br />Your Production Commitments.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Most manufacturing platforms trap small business facilities in complex field management workflows. <b>extrct.app</b> strips software friction entirely, delivering a rugged data engine optimized for high-velocity operation floors.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <div className="text-lg font-bold text-blue-600">94%</div>
                    <span className="font-bold text-xs text-gray-900 block mt-1">Breakdown Prevention</span>
                    <p className="text-[11px] text-gray-400 mt-0.5">Flags degrading spindles or bearings well in advance of lockups.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <div className="text-lg font-bold text-emerald-600">Zero</div>
                    <span className="font-bold text-xs text-gray-900 block mt-1">Data Fatigue</span>
                    <p className="text-[11px] text-gray-400 mt-0.5">No messy onboarding manuals — enter asset data inputs and trace limits instantly.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* HIGH-CONVERTING ACCORDION FAQ BLOCK */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Asked Questions</h3>
                <p className="text-xs text-gray-400 mt-1">Answers to common deployment queries about our preventative maintenance framework.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "How does the engine calculate next service milestones?",
                    a: "The scheduling algorithm maps input operating hours against variable equipment wear coefficients. High criticality nodes scale downward automatically, prompting inspection limits significantly sooner to safeguard production capacity."
                  },
                  {
                    q: "What do I unlock inside the $10 premium alerting setup?",
                    a: "The standard terminal runs local manual data mappings. Upgrading links a Supabase listener network to route token operations directly into text nodes, alerting factory technicians before dead-lines drop."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-[#e9e8e4] rounded-xl bg-white overflow-hidden">
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
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All rights reserved.</span>
      </footer>

    </div>
  );
}