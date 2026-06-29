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

interface HearingDeadlineNode {
  id: string;
  caseRef: string;
  forumName: string;
  taskType: string;
  targetDate: string;
  urgencyLevel: 'CRITICAL_BREACH' | 'WARNING_ZONE' | 'SAFE_HORIZON';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('legal_calendar'); // Locked strictly to calendar tracker tool
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('legal');

  // Shared Core Payments handshakes
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Calendar Tracker State Parameters
  const [caseTitle, setCaseTitle] = useState<string>('');
  const [courtForum, setCourtForum] = useState<string>('High Court of Delhi');
  const [deadlineAction, setDeadlineAction] = useState<string>('Written Statement Filing');
  const [inputDate, setInputDate] = useState<string>('2026-07-15');
  const [calendarPremiumLock, setCalendarPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [deadlineRecords, setDeadlineRecords] = useState<HearingDeadlineNode[]>([
    {
      id: "1",
      caseRef: "Sonali Industries vs State Capital Corp",
      forumName: "National Company Law Tribunal (NCLT)",
      taskType: "Rejoinder Affidavit Submission",
      targetDate: "2026-07-02",
      urgencyLevel: "CRITICAL_BREACH"
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
      alert("Stripe Verification Gateway: Initializing multi-device active push notifications API endpoint tokens.");
    }, 1100);
  };

  // Timeline risk rating processor engine
  const executeCompileDeadlineAlert = () => {
    if (!caseTitle.trim() || !inputDate) return;

    // Rigid limit cap checking rules for trial tier accounts
    if (deadlineRecords.length >= 2) {
      setCalendarPremiumLock(true);
      return;
    }

    const currentAnchor = new Date("2026-06-29");
    const parsedTarget = new Date(inputDate);
    const timeDiff = parsedTarget.getTime() - currentAnchor.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let level: 'CRITICAL_BREACH' | 'WARNING_ZONE' | 'SAFE_HORIZON' = 'SAFE_HORIZON';
    if (daysRemaining <= 5) level = 'CRITICAL_BREACH';
    else if (daysRemaining <= 15) level = 'WARNING_ZONE';

    const newDeadline: HearingDeadlineNode = {
      id: Date.now().toString(),
      caseRef: caseTitle.trim(),
      forumName: courtForum,
      taskType: deadlineAction,
      targetDate: inputDate,
      urgencyLevel: level
    };

    setDeadlineRecords([newDeadline, ...deadlineRecords]);
    setCaseTitle('');
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

      {/* CORE FRAMEWORK TERMINAL SWITCH SPLIT VIEW */}
      {activeTool === 'legal_calendar' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* BOT SEARCH CRAWLER TRACK DEEP ON-PAGE SEO SPEC */}
          <div className="hidden">
            <h1>Court Hearing Calendar & Deadline Tracker Engine | Litigation Defense</h1>
            <h2>Automated statutory compliance tracking frameworks and legal date monitors for independent attorneys.</h2>
            <p>Track critical written statement filings dead-lines natively, audit NCLT hearing dates matrices, map evidentiary timeline parameters, and eliminate procedural dismissal risks entirely.</p>
          </div>

          {/* SaaS VALUE PROPOSITION HERO SALES CARD */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-red-50 text-red-800 border border-red-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>📅</span> <span>Procedural Case Dismissal Prevention Radar</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Never Miss a Court Filing Deadline. <br />
                <span className="text-red-600">Track Critical Litigation Milestones Proactively.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Slipping a statutory limitation date or missing an affidavit submission window instantly breaks legal defense viability. Use this edge logging terminal to classify case weights and monitor compliance horizons.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#calendar-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Open Docket Tracker Console ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Enable SMS & Push Notification Triggers ($10)
                </button>
              </div>
            </div>
          </section>

          {/* APPLICATION INTERACTIVE DATA WORKSPACE */}
          <section id="calendar-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* ENTRY FORMS PANEL CONTROL COMPONENT CARD */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Docket Entry Terminal</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Case Matter Reference Title</label>
                    <input 
                      type="text" 
                      value={caseTitle}
                      onChange={(e) => setCaseTitle(e.target.value)}
                      placeholder="e.g. Acme Corp vs Director of Income Tax"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Judicial Forum / Court</label>
                    <input 
                      type="text" 
                      value={courtForum}
                      onChange={(e) => setCourtForum(e.target.value)}
                      placeholder="e.g. High Court of Bombay"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Required Compliance Target</label>
                    <select
                      value={deadlineAction}
                      onChange={(e) => setDeadlineAction(e.target.value)}
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-bold text-gray-700 focus:outline-none"
                    >
                      <option value="Written Statement Filing">Written Statement Submission</option>
                      <option value="Evidence Cross-Examination Ready">Evidence Processing Deadline</option>
                      <option value="Statutory Limitation Limitation End">Statutory Appeals Breach Limit</option>
                      <option value="Main Oral Arguments Hearing">Main Oral Arguments Hearing</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Target Compliance Date</label>
                    <input 
                      type="date" 
                      value={inputDate}
                      onChange={(e) => setInputDate(e.target.value)}
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={executeCompileDeadlineAlert}
                  disabled={!caseTitle.trim() || !inputDate}
                  className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Analyze Timeline Risk
                </button>
              </div>

              {/* LIVE RADAR RESPONSE SCREEN CONTAINER FEEDS */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* GATED BEHIND RIGID HARD SYSTEM CEILING LIMIT RULES */}
                {calendarPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Active Cron Listener Infrastructure Locked</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free local sandboxes track up to 2 active litigation rows concurrently. Remit $10 to deploy active multi-channel alert scripts that send SMS warning tags directly to counsel before breach points happen.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-red-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-red-700 transition-colors">
                      Activate Pro Alerts
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Litigation Timeline Command Control</span>
                    <span className="text-[10px] font-mono text-gray-400">Current Base Date Reference: June 29, 2026</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {deadlineRecords.map((node) => (
                      <div key={node.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors">
                        <div className="space-y-1.5">
                          <span className="font-bold text-xs sm:text-sm text-[#1e1e1c] block leading-tight">{node.caseRef}</span>
                          <div className="text-xs text-gray-500">
                            Forum: <b className="text-gray-700">{node.forumName}</b>
                          </div>
                          <div className="text-[11px] text-gray-400 font-mono">
                            Compliance Vector Required: <span className="font-medium text-gray-600">{node.taskType}</span>
                          </div>
                        </div>

                        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 pt-2 sm:pt-0 border-gray-100">
                          <span className={`text-[10px] px-2.5 py-0.5 rounded font-bold tracking-tight block border ${node.urgencyLevel === 'CRITICAL_BREACH' ? 'bg-red-50 text-red-700 border-red-100 animate-pulse' : node.urgencyLevel === 'WARNING_ZONE' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-green-50 text-green-700 border-green-100'}`}>
                            {node.urgencyLevel === 'CRITICAL_BREACH' ? '🚨 BREACH CRITICAL' : node.urgencyLevel === 'WARNING_ZONE' ? '⚠️ ZONE WARNING' : '✓ HORIZON SAFE'}
                          </span>
                          <span className="font-mono text-xs font-black text-gray-900 mt-2 block">
                            Target: {node.targetDate}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* VALUE PROPOSITION DIAGRAM BLUEPRINT SYSTEMS ON-PAGE SEO */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-2">Statutory Risk Containment Blueprint</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The Preemptive Compliance Safeguard Loop</h2>
                <p className="text-xs text-gray-500 mt-2">How our timeline logic monitors remaining operational days to protect firm defense positioning.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">📋 01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Docket Mapping</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Attorneys log variable court targets, judicial forum reference details, and fixed response deadlines inside the terminal dashboard.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">📡 02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Horizon Evaluation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Internal background calculation nodes calculate calendar distances, instantly classifying targets under color-coded urgency parameters.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🚨 03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Preemptive Warning Dispatch</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Before statutory limitations contract safety bands, premium background alert nodes route warning text blocks directly to advocacy teams.</p>
                </div>
              </div>
            </div>
          </section>

          {/* BRAND SUITE VALUE PROPOSITIONS AND SELLING MARGINS (USPs) */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">Boutique Case Flow Infrastructure</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Defend Your Practice Integrity. <br />Eliminate Omission Overage Risks.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Heavy enterprise court software portals force legal solopreneurs through lengthy account configurations, manual filing loops, and high overhead commitments. <b>extrct.app</b> provides a clean, ultra-responsive grid designed for speed.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">🛑</span>
                    <span className="font-bold text-xs text-gray-900 block">Zero Default Risks</span>
                    <p className="text-[11px] text-gray-400 mt-1">Isolates exactly which client files require urgent affidavit submissions inside 5 days.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">⏳</span>
                    <span className="font-bold text-xs text-gray-900 block">Blazing Fast Audits</span>
                    <p className="text-[11px] text-gray-400 mt-1">Review your entire active case calendar outlook at a single glance during busy mornings.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* HIGH-CONVERTING ACCORDION FAQ BLOCK LAYER */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Answered Practice Queries</h3>
                <p className="text-xs text-gray-400 mt-1">Answers to common structural tracking questions about statutory court timelines.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "How does the timeline matrix evaluate variable urgency thresholds?",
                    a: "The tracking code measures the calendar distance between the fixed user deadline input and the modern live base date. Remaining limits falling under 5 days trigger critical breach statuses to safeguard case viability."
                  },
                  {
                    q: "What features activate when routing token payments to the $10 premium upgrade tier?",
                    a: "The standard trial console logs timeline variables within active session frames. Upgrading links background worker servers to send automatic SMS notifications straight to associated legal advocates before deadlines strike."
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

      {/* FOOTER BLOCK ANCHOR LAYER */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All system frameworks verified.</span>
      </footer>

    </div>
  );
}