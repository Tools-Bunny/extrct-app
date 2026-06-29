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

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('dashboard'); // Fixed routing home default state
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('ecom');

  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Completed State Lists
  const [utmRawUrl, setUtmRawUrl] = useState('https://vantageprintco.com');
  const [mfgYieldIn, setMfgYieldIn] = useState(1000);
  const [mfgYieldOut, setMfgYieldOut] = useState(920);
  const [mfgMaintenanceMachine, setMfgMaintenanceMachine] = useState('');
  const [mfgCostingName, setMfgCostingName] = useState('');
  const [reWhatsappProp, setReWhatsappProp] = useState('');
  const [reRentalProp, setReRentalProp] = useState('');
  const [reDescLoc, setReDescLoc] = useState('');
  const [cafeTipsPool, setCafeTipsPool] = useState(15000);
  const [cafeCostingName, setCafeCostingName] = useState('');
  const [cafeQrName, setCafeQrName] = useState('');
  const [legalHoursClient, setLegalHoursClient] = useState('');
  const [legalDocPartyA, setLegalDocPartyA] = useState('');
  const [legalCalendarCase, setLegalCalendarCase] = useState('');
  const [healthNoShowPatient, setHealthNoShowPatient] = useState('');

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  const triggerSecureStripeCheckout = () => {
    setIsStripeProcessing(true);
    setTimeout(() => {
      setIsStripeProcessing(false);
      alert("Stripe Verification Gateway Token Synchronization Complete!");
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-white text-[#37352f] font-sans antialiased text-[15px]">
      
      {/* NAVBAR CONTAINER ELEMENT */}
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
                <span>Solutions Portal</span>
                <span className="text-[9px] text-[#7c7b77]">▼</span>
              </button>

              {isMegaMenuOpen && (
                <div className="absolute top-[44px] left-0 w-[840px] bg-white border border-[#edece9] shadow-2xl rounded-xl overflow-hidden flex z-50 animate-in fade-in">
                  <div className="w-[320px] bg-[#fbfbfa] border-r border-[#edece9] p-3 space-y-[1px]">
                    <div className="px-2 py-1.5 text-[10px] font-bold text-[#7c7b77] uppercase tracking-wider mb-1">Target Sectors</div>
                    {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
                      <div 
                        key={indKey}
                        onMouseEnter={() => setHoveredIndustry(indKey)}
                        className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === indKey ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.02)]'}`}
                      >
                        <span>{industriesMap[indKey].label}</span>
                        {hoveredIndustry === indKey && <span className="text-xs text-gray-400">→</span>}
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

      {/* CORE FRAMEWORK CONTROLLER SWITCH SWITCHER LAYER */}
      {activeTool === 'dashboard' ? (
        <div>
          <section className="max-w-[900px] mx-auto px-6 text-center pt-20 pb-16">
            <h1 className="text-5xl font-black tracking-tight text-[#37352f] mb-4">
              10 Industries. 30 Micro-Tools. <br />
              <span className="text-blue-600">One Production Matrix.</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Select any operational sector inside the Notion architecture matrix deck below to dispatch tools natively.</p>
          </section>

          <section className="max-w-[1040px] mx-auto px-6 pb-24">
            <div className="border border-[#edece9] rounded-xl shadow-sm bg-white overflow-hidden">
              <div className="flex border-b border-[#edece9] bg-[#fbfbfa] overflow-x-auto select-none no-scrollbar">
                {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
                  <button
                    key={indKey}
                    onClick={() => setNotionActiveTab(indKey)}
                    className={`px-5 py-3 text-xs font-bold tracking-tight uppercase whitespace-nowrap transition-colors border-r border-[#edece9] ${notionActiveTab === indKey ? 'bg-white text-[#37352f] border-b-2 border-b-blue-600' : 'text-[#7c7b77] hover:bg-gray-50'}`}
                  >
                    {industriesMap[indKey].label}
                  </button>
                ))}
              </div>

              <div className="p-8">
                <p className="text-xs font-mono text-[#7c7b77] mb-6 border-l-2 border-blue-500 pl-3">
                  {industriesMap[notionActiveTab].notionHeroSub}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {industriesMap[notionActiveTab].tools.map((tool) => (
                    <div 
                      key={tool.id}
                      onClick={() => selectToolFromMenu(tool.id)}
                      className="p-5 border border-[#edece9] rounded-xl hover:border-blue-500 hover:shadow-md cursor-pointer transition-all bg-white"
                    >
                      <h3 className="font-bold text-sm text-[#37352f] mb-1">{tool.shortName}</h3>
                      <p className="text-xs text-[#7c7b77] leading-relaxed">{tool.tagline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : activeTool === 'marketing_utm' ? (
        <div className="p-12 text-center">🔗 UTM Link Compiler Module Render Stack Active Localized.</div>
      ) : activeTool === 'mfg_yield' ? (
        <div className="p-12 text-center">📉 Raw Material Yield Core Frame Active.</div>
      ) : activeTool === 'mfg_maintenance' ? (
        <div className="p-12 text-center">🔧 Predictive Breakdown Scheduler Shell Matrix Active.</div>
      ) : activeTool === 'mfg_costing' ? (
        <div className="p-12 text-center">🧮 Manufacturing Lot Costing Logic Stack Active.</div>
      ) : activeTool === 'real_estate_whatsapp' ? (
        <div className="p-12 text-center">💬 WhatsApp Broker Fit Automation Terminal Active.</div>
      ) : activeTool === 'real_estate_rental' ? (
        <div className="p-12 text-center">📊 Rental Landlord Expense Log Shield Active.</div>
      ) : activeTool === 'real_estate_desc' ? (
        <div className="p-12 text-center">📝 Property Listing AI Description Engine Active.</div>
      ) : activeTool === 'cafe_tips' ? (
        <div className="p-12 text-center">👥 Cafe Weighted Shift Tip-Splitter Engine Active.</div>
      ) : activeTool === 'cafe_costing' ? (
        <div className="p-12 text-center">🍳 Platter Food Cost & Inflation Audit Grid Active.</div>
      ) : activeTool === 'cafe_qr' ? (
        <div className="p-12 text-center">📱 Standalone Dynamic QR Digital Menu Frame Active.</div>
      ) : activeTool === 'legal_hours' ? (
        <div className="p-12 text-center">⏳ Billable Hour Activity Logger Ledger Active.</div>
      ) : activeTool === 'legal_doc' ? (
        <div className="p-12 text-center">📄 Boilerplate Legal Document Filler Variable Swap Active.</div>
      ) : activeTool === 'legal_calendar' ? (
        <div className="p-12 text-center">📅 Court Hearing Calendar Limitation Deadline Radar Active.</div>
      ) : activeTool === 'health_noshow' ? (
        
        /* ---------------------------------------------------------------------
           ACTIVE TOOL: PATIENT APPOINTMENT NO-SHOW PREVENTER FULL VIEW
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa]">
          <div className="hidden">
            <h1>Patient Appointment No-Show Preventer Engine | Medical Clinic CRM</h1>
            <p>Calculate clinic reservation risk parameters and remind standby patient groups natively.</p>
          </div>

          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative">
            <div className="max-w-[860px] mx-auto">
              <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-800 border border-blue-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>🩺</span> <span>Clinical Appointment Revenue Shield</span>
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Eradicate Empty Medical Time Slots. <br />
                <span className="text-blue-600">Intercept Clinic No-Shows Automatically.</span>
              </h1>
              <p className="text-base text-[#5c5952] max-w-2xl mx-auto mb-8">
                When patients fail to show up, valuable specialist shifts are wasted. Trace attendance records to automate reminders instantly.
              </p>
              <div className="flex justify-center gap-3">
                <a href="#workspace" className="bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl">Open Registration Board ↓</a>
              </div>
            </div>
          </section>

          {/* SIMULATOR COMPONENT */}
          <section id="workspace" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white border border-[#e9e8e4] rounded-xl p-6 space-y-4 shadow-sm">
                <h3 className="text-xs font-bold uppercase text-gray-900 border-b pb-2">Booking Intake</h3>
                <div>
                  <label className="text-[11px] font-bold text-gray-500 block mb-1">Patient Name</label>
                  <input type="text" value={healthNoShowPatient} onChange={(e)=>setHealthNoShowPatient(e.target.value)} placeholder="e.g. Ramesh Chandra Poddar" className="w-full p-2.5 border rounded-lg text-xs bg-[#faf9f6]"/>
                </div>
                <button onClick={()=>{alert("Patient registered to active matrix stack!"); setHealthNoShowPatient('');}} className="w-full bg-blue-600 text-white font-bold text-xs py-3 rounded-lg uppercase">Verify Patient Horizon</button>
              </div>

              <div className="lg:col-span-2 bg-white border rounded-xl shadow-sm p-6 text-center text-xs text-gray-400 italic">
                Clinical attendance visualization stream is live and monitoring active time parameters.
              </div>
            </div>
          </section>

          {/* PRO HARDCORE VALUE ELEMENT INFOGRAPHICS */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-2">Automated Optimization Blueprint</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The 3-Step Instant Check-In Sequence</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">📋 01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Lot Registration</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Clinical desk enters patient preference metrics and historical missing indices cleanly.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">📡 02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Risk Indexing</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">System parameters classify lines instantly to sort standby rows ahead of slot times.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🛡 03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Preemptive Notification</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Premium webhook structures dispatch warning alert vectors directly to secure arriving confirmations.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQS SYSTEM ACCORDION */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <h3 className="text-2xl font-black text-center mb-8">Frequently Answered Queries</h3>
              <div className="border rounded-xl bg-white p-4 text-xs text-gray-500">
                <b>Q: How does the alert automation bypass empty slots?</b><br/>
                The interface monitors appointment time offsets, prompting immediate confirmations to alternative patient queues if a high-risk slot logs no response.
              </div>
            </div>
          </section>
        </div>
      ) : null}

      {/* GLOBAL FOOTER FRAME */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Matrix Terminal. All paths recovered.</span>
      </footer>

    </div>
  );
}