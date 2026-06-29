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
      { id: 'real_estate_rental', shortName: "📊 Rental Maintenance Log Ledger", tagline: "Mobile-first interface to quickly record repair costs." },
      { id: 'real_estate_desc', shortName: "📝 Property Listing Feature Engine", tagline: "Generates portal-optimized descriptions from raw metrics." }
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

interface GeneratedDescNode {
  id: string;
  title: string;
  descriptionText: string;
  keyFeatures: string[];
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('real_estate_desc'); // Locked to third real estate tool
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('real_estate');

  // Shared Gateway Telemetry States
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Engine Input States
  const [locationInput, setLocationInput] = useState<string>('');
  const [sqftInput, setSqftInput] = useState<number>(1800);
  const [amenitiesInput, setAmenitiesInput] = useState<string>('Clubhouse, Modular Kitchen, Lift, 24x7 Security');
  const [bhkConfig, setBHKConfig] = useState<string>('3 BHK');
  const [descPremiumLock, setDescPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [generatedItems, setGeneratedItems] = useState<GeneratedDescNode[]>([
    {
      id: "1",
      title: "🔥 Premium 3 BHK Luxury Apartment at Mithanpura, Muzaffarpur",
      descriptionText: "Presenting a spacious, meticulously designed 1800 Sq.Ft. residential layout situated in the premium hub of Mithanpura. Impeccably optimized for modern family lifestyle with superior airflow profiles and high-end fitments throughout. Perfect connectivity vectors to local retail hotspots.",
      keyFeatures: ["1800 Sq.Ft. Living Space", "Exclusive Clubhouse Access", "Fully-Equipped Modular Kitchen", "Secure Gated Compound"]
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
      alert("Stripe Checkout Secure API: Removing description limits generation cap tokens successfully.");
    }, 1100);
  };

  // Description Builder Copy Compiler Engine
  const executeCompileListingDescription = () => {
    if (!locationInput.trim() || sqftInput <= 0 || !amenitiesInput.trim()) return;

    // Rigid limit threshold rule check for conversion locks
    if (generatedItems.length >= 2) {
      setDescPremiumLock(true);
      return;
    }

    const cleanLocation = locationInput.trim();
    const cleanAmenities = amenitiesInput.split(',').map(a => a.trim()).filter(Boolean);

    const generatedTitle = `✨ Beautiful ${bhkConfig} Residential Layout (${sqftInput} Sq.Ft.) — ${cleanLocation}`;
    const generatedCopy = `Stunning, high-utility ${bhkConfig} real estate asset tracking a total space of ${sqftInput} Sq.Ft. nested cleanly right inside the highly sought-after block of ${cleanLocation}. Complete with premium architecture specifications and premium integrations like ${amenitiesInput.trim()}. Secure a private consultation loop today.`;

    const newNode: GeneratedDescNode = {
      id: Date.now().toString(),
      title: generatedTitle,
      descriptionText: generatedCopy,
      keyFeatures: [`${sqftInput} Sq.Ft. Verified Plot`, `${bhkConfig} Modern Split Layout`, ...cleanAmenities.slice(0, 2)]
    };

    setGeneratedItems([newNode, ...generatedItems]);
    setLocationInput('');
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

      {/* RENDER LAYER CONTROL VIEW SWITCHER */}
      {activeTool === 'real_estate_desc' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* DEEP HIGH-RANKING BOT TRAFFICS TRACK METADATA */}
          <div className="hidden">
            <h1>Property Listing Feature Description Engine | Real Estate AI Copywriter</h1>
            <h2>Automated high-converting real estate text copy generation grids for property agents.</h2>
            <p>Input raw dimensional metrics, square footage location criteria, and housing key amenities tags to instantly execute portal optimized description strings that trigger fast lead responses.</p>
          </div>

          {/* DYNAMIC HIGH-CONVERTING HERO HEADER */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>📝</span> <span>High-Conversion Portal Copy Optimization</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Stop Writing Property Ads Manually. <br />
                <span className="text-indigo-600">Compile Portal-Optimized Descriptions Instantly.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Drafting listing pitches for real estate apps whenever an asset list expands creates operational friction. Drop in your square footage variables and key amenities to structure premium, optimized buyer texts.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#engine-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Launch Copy Generator Terminal ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Bypass Generation Limits Group ($10)
                </button>
              </div>
            </div>
          </section>

          {/* INTERACTIVE WORKSPACE SECTION APPLICATION ENGINE */}
          <section id="engine-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* PROPERTY SPEC CONTROLLER ENTRY INPUT */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Property Metrics</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Micro-Location / Neighborhood</label>
                    <input 
                      type="text" 
                      value={locationInput}
                      onChange={(e) => setLocationInput(e.target.value)}
                      placeholder="e.g. Mithanpura, Muzaffarpur"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Total Space (Sq.Ft.)</label>
                      <input 
                        type="number" 
                        value={sqftInput}
                        onChange={(e) => setSqftInput(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Configuration Type</label>
                      <select
                        value={bhkConfig}
                        onChange={(e) => setBHKConfig(e.target.value)}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-bold text-gray-700 focus:outline-none"
                      >
                        <option value="1 BHK">1 BHK Flat</option>
                        <option value="2 BHK">2 BHK Flat</option>
                        <option value="3 BHK">3 BHK Luxury</option>
                        <option value="4 BHK">4 BHK Penthouse</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Amenities Tags (Comma Separated)</label>
                    <textarea 
                      value={amenitiesInput}
                      onChange={(e) => setAmenitiesInput(e.target.value)}
                      rows={3}
                      placeholder="Modular Kitchen, Security, Lift"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] resize-none focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={executeCompileListingDescription}
                  disabled={!locationInput.trim() || sqftInput <= 0}
                  className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Compile Optimized Listing Copy
                </button>
              </div>

              {/* DYNAMIC LAYOUT ENGINE GENERATION FEEDS */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* GATED BEHIND FREE GENERATION LIMIT BARRIER */}
                {descPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Free Daily Allocation Token Cap Encountered</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free execution nodes allocate 2 sample listing generation batches. Remit $10 tier subscription tokens to clear capacity blockages completely.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-indigo-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-indigo-700 transition-colors">
                      Clear Generation Cap
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">High-Converting Real Estate Copy Feed</span>
                    <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-bold">SEO Optimizer Layer Active</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {generatedItems.map((item) => (
                      <div key={item.id} className="p-6 space-y-3.5 hover:bg-[#faf9f6] transition-colors">
                        
                        <div>
                          <span className="text-xs sm:text-sm font-black text-gray-900 block leading-snug">{item.title}</span>
                        </div>

                        <p className="text-xs text-gray-600 leading-relaxed bg-[#fcfbfa] p-3 border border-[#edece9] rounded-xl font-sans italic">
                          "{item.descriptionText}"
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.keyFeatures.map((f, i) => (
                            <span key={i} className="text-[10px] font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                              🎯 {f}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(`${item.title}\n\n${item.descriptionText}`);
                              alert("Full property title and optimized description string copied securely!");
                            }}
                            className="bg-white border text-indigo-600 hover:text-indigo-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
                          >
                            Copy Asset Copy Stacks
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SYSTEM ARCHITECTURE MAP INFOGRAPHICS DESIGN SECTION */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-2">Automated Optimization Blueprint</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The 3-Stage Listing Conversion Pipeline</h2>
                <p className="text-xs text-gray-500 mt-2">How raw space variables convert instantly into compelling market-ready copy scripts.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🖊 01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Variable Injection</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Agent enters specific sub-locality matrices, exact plot square foot values, and core structural asset amenities into the layout console.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🗜 02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Syntactic Optimization</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">The internal linguistic background worker sanitizes data anomalies, formatting highly indexable headings tailored directly for property portals.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🚀 03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Lead Capture Deployment</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Outputs crisp headline variants and comprehensive bullet specifications blocks ready for clipboard capture and listing syndication loops.</p>
                </div>
              </div>
            </div>
          </section>

          {/* EXCLUSIVE REVENUE DRIVING SUITE USPs COMPONENT SECTION */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Engineered for Rapid Multi-Portal Syndication</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Maximize Inbound Lead Velocity <br />With Captivating Descriptions.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Boring, single-line real estate posts fail to capture premium buyers on competitive application platforms. <b>extrct.app</b> injects immediate structured clarity across your inventory layouts to accelerate sales.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">🎯</span>
                    <span className="font-bold text-xs text-gray-900 block">Portal Friendly Hooks</span>
                    <p className="text-[11px] text-gray-400 mt-1">Highlights structural square foot variables cleanly to maximize app organic search hits.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">⏱</span>
                    <span className="font-bold text-xs text-gray-900 block">Extreme Production Boost</span>
                    <p className="text-[11px] text-gray-400 mt-1">Generates comprehensive descriptions in seconds, saving hours of typing fatigue.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* RIGID COMPONENT LAYER ACCORDION FAQs */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Answered Queries</h3>
                <p className="text-xs text-gray-400 mt-1">Everything you need to master about automating property listing writeups.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "Why are standardized structural descriptions critical for digital real estate channels?",
                    a: "Digital real estate discovery relies heavily on data query tags. When your copy structured elements highlight exact square footage boundaries and key neighborhood parameters, app algorithm crawlers pick up and prioritize your property listing."
                  },
                  {
                    q: "How does the $10 generation tier unlock alter my workspace matrix?",
                    a: "The standard trial allocation includes a 2-batch copy limit. Moving to our premium tier bypasses validation caps completely, giving you infinite description output access for heavy localized portfolios."
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

      {/* FOOTER BLOCK ANCHOR */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All system frameworks verified.</span>
      </footer>

    </div>
  );
}