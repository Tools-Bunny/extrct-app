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
      { id: 'hotel_checkout', shortName: "⏰ Late-Checkout Automator", tagline: "Sends departure upsell nodes directly to guest pipelines." }
    ]
  }
};

interface PopulatedDocNode {
  id: string;
  templateType: string;
  partyAName: string;
  partyBName: string;
  compiledContent: string;
  generatedDate: string;
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('legal_doc'); // View locked to variable doc filler tool node
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('legal');

  // Shared Core Payments handshakes 
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Variable Document Filler Dashboard States
  const [templateType, setTemplateType] = useState<string>('Non-Disclosure Agreement (NDA)');
  const [partyA, setPartyA] = useState<string>('');
  const [partyB, setPartyB] = useState<string>('');
  const [governingLaw, setGoverningLaw] = useState<string>('Delhi Jurisdiction');
  const [docPremiumLock, setDocPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [populatedDocs, setPopulatedDocs] = useState<PopulatedDocNode[]>([
    {
      id: "1",
      templateType: "Non-Disclosure Agreement (NDA)",
      partyAName: "Vantage Print Co.",
      partyBName: "Sonali Technical Institutes",
      compiledContent: "This Non-Disclosure Agreement is executed between Vantage Print Co. (Party A) and Sonali Technical Institutes (Party B). Both entities agree that proprietary computational designs and structural frameworks shared shall remain highly confidential under the absolute jurisdiction of Delhi Courts.",
      generatedDate: "2026-06-29"
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
      alert("Stripe Verification Gateway: Unlocking infinite document templates metadata parsing vaults token.");
    }, 1100);
  };

  // Variable replacement script generation execution node
  const executeCompileDocumentFiller = () => {
    if (!partyA.trim() || !partyB.trim()) return;

    // Simulation cap threshold checking for free users
    if (populatedDocs.length >= 2) {
      setDocPremiumLock(true);
      return;
    }

    const compiledTemplate = `This legal instrument (${templateType}) establishes an absolute bounding covenant between ${partyA.trim()} (designated as Party A) and ${partyB.trim()} (designated as Party B). All proprietary configurations, core telemetry systems, and data logs transferred between the signature windows shall be strictly protected. This relationship is strictly governed under the laws of ${governingLaw}.`;

    const newNode: PopulatedDocNode = {
      id: Date.now().toString(),
      templateType,
      partyAName: partyA.trim(),
      partyBName: partyB.trim(),
      compiledContent: compiledTemplate,
      generatedDate: new Date().toISOString().split('T')[0]
    };

    setPopulatedDocs([newNode, ...populatedDocs]);
    setPartyA('');
    setPartyB('');
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

      {/* COMPONENT SWITCH LOG VIEW CODES */}
      {activeTool === 'legal_doc' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* SEARCH ATTRIBUTION BOT TRACK METADATA DEEP SEO */}
          <div className="hidden">
            <h1>Boilerplate Legal Document Filler & Variable Replacer Engine | Attorney Automation</h1>
            <h2>Automated legal agreement template managers and contract placeholder replacements builders.</h2>
            <p>Inject personalized client details natively, replace contract boilerplate variable parameters, populate liability waivers data, and compile compliant corporate agreements under ten seconds.</p>
          </div>

          {/* SaaS BRAND Sales HERO HEADER */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>📄</span> <span>Error-Proof Agreement Metadata Auto-Population</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Stop Re-Typing Legal Templates. <br />
                <span className="text-indigo-600">Populate Boilerplate Variables Instantly.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Manually searching through contract rows to replace client names, company details, or court jurisdictions invites massive liability exposure. Drop raw parameters here to generate clean, finalized drafting stacks.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#filler-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Open Contract Filler Terminal ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Unlock Infinite Bulk Document Templates ($10)
                </button>
              </div>
            </div>
          </section>

          {/* INTERACTIVE COMPONENT WORKSPACE APPLICATION CONSOLE */}
          <section id="filler-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* VARIABLE METADATA INJECTION PANEL FORM CARD */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Variable Parameters</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Contract Type Model</label>
                    <select
                      value={templateType}
                      onChange={(e) => setTemplateType(e.target.value)}
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-bold text-gray-700"
                    >
                      <option value="Non-Disclosure Agreement (NDA)">Non-Disclosure Agreement (NDA)</option>
                      <option value="Commercial Lease Deed">Commercial Lease Deed</option>
                      <option value="Freelancer Retainer Agreement">Freelancer Retainer Contract</option>
                      <option value="Mutual Settlement Deed">Mutual Settlement Deed</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Party A Name (Discloser / Lessor)</label>
                    <input 
                      type="text" 
                      value={partyA}
                      onChange={(e) => setPartyA(e.target.value)}
                      placeholder="e.g. Acme Corporations Inc"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Party B Name (Recipient / Lessee)</label>
                    <input 
                      type="text" 
                      value={partyB}
                      onChange={(e) => setPartyB(e.target.value)}
                      placeholder="e.g. John Doe Consulting"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Governing Jurisdiction / Law</label>
                    <input 
                      type="text" 
                      value={governingLaw}
                      onChange={(e) => setGoverningLaw(e.target.value)}
                      placeholder="e.g. Mumbai High Court Limits"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>
                </div>

                <button
                  onClick={executeCompileDocumentFiller}
                  disabled={!partyA.trim() || !partyB.trim()}
                  className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Populate Template Fields
                </button>
              </div>

              {/* STREAMS LIST DIGITAL OUTPUT GENERATOR PIPELINES */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* STRICT DAILY ACCOUNT ALLOCATION CEILING LIMIT BARRIERS */}
                {docPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Free Document Template Allocation Cap Hit</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free local configurations generate up to 2 customized document logs concurrently. Remit $10 to fully unlock persistent cloud saving, multi-user presets, and native PDF extraction downloads.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-indigo-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-indigo-700 transition-colors">
                      Bypass Drafting Cap
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Compiled Document Registry</span>
                    <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-bold">Metadata Synthesizer Active</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {populatedDocs.map((node) => (
                      <div key={node.id} className="p-6 space-y-3.5 hover:bg-[#faf9f6] transition-colors">
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                          <div>
                            <span className="text-xs font-black text-gray-900 block leading-tight">{node.templateType}</span>
                            <span className="text-[11px] text-gray-400 font-mono mt-0.5 block">Generated Date Stamp: {node.generatedDate}</span>
                          </div>
                          <span className="text-[10px] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">
                            Party A: {node.partyAName} | Party B: {node.partyBName}
                          </span>
                        </div>

                        <p className="text-xs text-gray-600 leading-relaxed bg-[#fcfbfa] p-3 border border-[#edece9] rounded-xl font-sans italic">
                          "{node.compiledContent}"
                        </p>

                        <div className="pt-1 flex justify-end">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(node.compiledContent);
                              alert("Populated legal agreement content string copied securely to active device memory stack!");
                            }}
                            className="bg-white border text-indigo-600 hover:text-indigo-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
                          >
                            Copy Draft Agreement
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* PROGRAMMATIC SEO INFOGRAPHIC VALUE COMPONENT PIPELINES */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-2">Automated Document Workflows</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The Variable Replacement Framework</h2>
                <p className="text-xs text-gray-500 mt-2">How our edge text worker injects client parameters across boilerplate contract rows instantly.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-xs mb-4">01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Parameter Definition</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">The drafting user inputs raw company names, signatory parameters, and local governing jurisdiction nodes cleanly inside the interface panel.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs mb-4">02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Placeholder Swap Loop</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Internal algorithm functions traverse boilerplate matrix strings, swapping out system delimiters natively to eliminate typing omissions.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs mb-4">03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Final Draft Deployment</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Outputs error-free, legally synchronized document blocks instantly ready for active client signature execution loops or storage stacks.</p>
                </div>
              </div>
            </div>
          </section>

          {/* BRAND VALUE CORE PLATFORM UNIQUE SELLING PROPOSITIONS (USPs) */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Rugged Operational Contract Security</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Mitigate Legal Compliance Hazards <br />In Under Ten Seconds.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Heavy, traditional document management softwares demand manual field tagging, clunky workspace integrations, and high multi-seat subscription barriers. <b>extrct.app</b> provides a blazing fast alternative for solo practitioners.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">🛡️</span>
                    <span className="font-bold text-xs text-gray-900 block">Compliance Defense</span>
                    <p className="text-[11px] text-gray-400 mt-1">Ensures critical details are swapped uniformly across all paragraphs to avoid leakage gaps.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">⚡</span>
                    <span className="font-bold text-xs text-gray-900 block">High Production Splits</span>
                    <p className="text-[11px] text-gray-400 mt-1">Ditch manual templates copying fatigue; deploy polished contract outputs instantly on demand.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DYNAMIC ACCORDION FAQS SYSTEM CARD MODULE */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Answered Legal Mappings</h3>
                <p className="text-xs text-gray-400 mt-1">Answers to common structural tracking queries about boilerplate macro document systems.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "Why is a template variable replacement engine superior to manual 'Find and Replace' methods?",
                    a: "Standard text application 'Find & Replace' workflows frequently fail to detect placeholder variations due to formatting discrepancies, hidden character splits, or syntax caps. A tokenized replacement matrix completely prevents accidental text omissions."
                  },
                  {
                    q: "What functions activate inside the $10 persistent cloud template upgrade package?",
                    a: "The starter terminal sandbox manages text generations within local states. Upgrading locks in a permanent repository framework to store custom template blueprints, multi-user clauses, and downloadable PDF assets."
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

      {/* FOOTER BLOCK CONTAINER ANCHOR */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All system frameworks verified.</span>
      </footer>

    </div>
  );
}