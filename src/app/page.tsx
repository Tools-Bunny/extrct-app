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
      { id: 'content_repurpose', shortName: "🎞️ Video Hook Repurpose Framework", tagline: "Splits long-form topics into structured format clips." },
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

export default function SolopreneurMasterNotionHomepage() {
  const [activeTool, setActiveTool] = useState<string>('dashboard');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('ecom');

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
    
    // Smooth scrolling window to functional block if any inner node is targeted
    const sandboxView = document.getElementById("homepage-sandbox-view");
    if (sandboxView) {
      sandboxView.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#37352f] font-sans antialiased text-[15px] relative">
      
      {/* HEADER NAVIGATION - LOCKED AS REQUESTED */}
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
                <span className={`text-[9px] text-[#7c7b77] transform transition-transform duration-150 ${isMegaMenuOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isMegaMenuOpen && (
                <div className="absolute top-[44px] left-0 w-[820px] bg-white border border-[#edece9] shadow-2xl rounded-xl overflow-hidden flex z-50 animate-in fade-in duration-100">
                  <div className="w-[300px] bg-[#fbfbfa] border-r border-[#edece9] p-3 space-y-[1px] overflow-y-auto max-h-[460px]">
                    <div className="px-2 py-1.5 text-[10px] font-bold text-[#7c7b77] uppercase tracking-wider mb-1">Target Sectors</div>
                    {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
                      <div 
                        key={indKey}
                        onMouseEnter={() => setHoveredIndustry(indKey)}
                        className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === indKey ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.02)]'}`}
                      >
                        <span className="truncate">{industriesMap[indKey].label}</span>
                        {hoveredIndustry === indKey && <span className="text-[10px] text-[#7c7b77]">→</span>}
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 p-5 bg-white space-y-2 overflow-y-auto max-h-[460px]">
                    <div className="px-2 pb-2 text-[10px] font-bold text-[#7c7b77] uppercase tracking-wider border-b border-[#f1f0ee] mb-1">
                      {industriesMap[hoveredIndustry].label} Operational Node Suite
                    </div>
                    {industriesMap[hoveredIndustry].tools.map((tool) => (
                      <div 
                        key={tool.id} 
                        onClick={() => selectToolFromMenu(tool.id)} 
                        className="p-2.5 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer transition-colors group"
                      >
                        <div className="font-semibold text-[13.5px] text-[#37352f] group-hover:text-black">{tool.shortName}</div>
                        <div className="text-[11.5px] text-[#7c7b77] mt-0.5 leading-snug">{tool.tagline}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#resources" className="text-sm font-medium text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)] px-3 py-1.5 rounded-md transition-colors">Resources</a>
            <a href="#pricing" className="text-sm font-medium text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)] px-3 py-1.5 rounded-md transition-colors">Pricing</a>
            <a href="#demo" className="text-sm font-medium text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)] px-3 py-1.5 rounded-md transition-colors">Demo</a>
          </nav>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button onClick={() => alert("Registration Portal")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm">
            Get Started for Free
          </button>
          <button onClick={() => alert("Log In")} className="text-sm font-semibold text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)] px-4 py-2 rounded-lg transition-colors">
            Log in
          </button>
        </div>
      </header>

      {/* DISMISSER PLANE FOR MEGA MENU */}
      {isMegaMenuOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsMegaMenuOpen(false)} />}

      {/* --- NOTION-STYLE NOTION HOMEPAGE ENGINE --- */}
      
      {/* 1. HERO BLOCK SECTION */}
      <section className="max-w-[900px] mx-auto px-6 text-center pt-20 pb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#37352f] max-w-3xl mx-auto leading-[1.1] mb-6">
          Write code logic. Run 30 operational micro-utilities.
        </h1>
        <p className="text-xl font-medium text-[#5a5750] max-w-2xl mx-auto leading-relaxed mb-8">
          extrct.app transforms your static structural matrix datasheets into live micro-SaaS computational layout nodes across 10 distinct industry workflows.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-12">
          <button className="bg-[#37352f] text-white hover:bg-black font-bold text-[15px] px-6 py-2.5 rounded-lg shadow transition-all">
            Get extrct free →
          </button>
          <button className="text-blue-600 font-semibold hover:underline text-[15px]">
            Request personalized demo
          </button>
        </div>

        {/* Brand Mockups Banner Minimalistic layout */}
        <div className="border border-[#edece9] shadow-xl rounded-2xl overflow-hidden bg-[#fbfbfa] p-4 max-w-[800px] mx-auto">
          <div className="h-6 w-full flex items-center space-x-1.5 px-2 pb-3 border-b border-[#edece9]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="text-[11px] font-mono text-[#7c7b77] pl-4">https://extrct.app/matrix-core</span>
          </div>
          <div className="p-8 text-left bg-white min-h-[220px] flex flex-col justify-between">
            <div>
              <span className="bg-amber-100 text-amber-800 font-mono text-[11px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">Dynamic Engine Active</span>
              <h3 className="text-2xl font-bold text-[#37352f] mt-2 mb-1">{industriesMap[notionActiveTab].label} Ecosystem Suite</h3>
              <p className="text-sm text-[#7c7b77]">{industriesMap[notionActiveTab].notionHeroSub}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
              {industriesMap[notionActiveTab].tools.map((t) => (
                <div key={t.id} className="p-3 bg-[#fbfbfa] border rounded-xl hover:border-[#37352f] transition-all cursor-pointer">
                  <div className="font-bold text-xs text-[#37352f] truncate">{t.shortName}</div>
                  <div className="text-[11px] text-[#7c7b77] line-clamp-1 mt-0.5">{t.tagline}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOTION DISTINCT 10-INDUSTRY INTERACTIVE TABS */}
      <section className="bg-[#fbfbfa] border-y border-[#edece9] py-12">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-[#37352f]">Every team, structured natively.</h2>
            <p className="text-[#7c7b77] text-sm mt-1">Select an industry vertical derived from your excel database map to test live layout configurations.</p>
          </div>

          {/* Interactive Hub Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-[860px] mx-auto">
            {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
              <button
                key={indKey}
                onClick={() => setNotionActiveTab(indKey)}
                className={`px-3 py-2.5 text-center font-semibold text-xs border rounded-xl transition-all ${notionActiveTab === indKey ? 'bg-white border-[#37352f] text-[#37352f] shadow-sm font-bold scale-[1.02]' : 'bg-transparent border-[#edece9] text-[#5a5750] hover:bg-[rgba(55,53,47,0.02)]'}`}
              >
                {industriesMap[indKey].label.split(' ')[1] || industriesMap[indKey].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE DYNAMIC OPERATION SANDBOX ANCHOR FRAME */}
      <section id="homepage-sandbox-view" className="max-w-[840px] mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">Interactive Feature Sandbox</span>
          <h2 className="text-2xl font-bold text-[#37352f] mt-2">Simulate Matrix Computation Pipeline</h2>
        </div>

        <div className="bg-white border border-[#edece9] rounded-2xl shadow-xl p-12 min-h-[300px]">
          {activeTool === 'dashboard' ? (
            <div className="text-center pt-8">
              <div className="w-12 h-12 bg-gray-50 border rounded-xl flex items-center justify-center mx-auto mb-3 text-lg">💡</div>
              <p className="text-[#37352f] font-semibold text-base">No tool row active currently.</p>
              <p className="text-[#7c7b77] text-xs max-w-md mx-auto mt-1">
                Open the top navigation <b>Solutions</b> dropdown menu and pick any specific functional layout tool to inspect real-time variable processing.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-wider text-[#7c7b77] mb-1">
                <span>Active Core Endpoint Node</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37352f] mb-4">
                {activeTool.split('_').join(' ').toUpperCase()} Functional Controller
              </h3>
              
              <div className="bg-[#fbfbfa] border rounded-xl p-4 mb-6 text-sm">
                <span className="font-bold text-xs text-[#37352f] block uppercase mb-1">System Action Flow</span>
                <p className="text-[#5a5750] leading-relaxed">This sandbox panel processes structured matrix formulas natively. Sub-page view elements for this specific entry are compiled.</p>
              </div>

              <div className="border-2 border-dashed border-[#edece9] hover:border-[#37352f] rounded-xl p-12 text-center cursor-pointer bg-[#fbfbfa]" onClick={() => alert("Simulating internal spreadsheet analysis parameters.")}>
                <span className="text-xs font-semibold text-[#37352f]">📄 Drop industry log transaction array dump to trigger calculations</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. FOOTER SYSTEM DESIGN BLOCK */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] pt-16 pb-12 select-none">
        <div className="max-w-[900px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Pillar Column */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-[10px]">M</div>
              <span className="font-bold text-sm tracking-tight text-[#37352f]">extrct.app</span>
            </div>
            <p className="text-xs text-[#7c7b77] leading-relaxed">
              Making complex spreadsheet architectures runnable across decentralized industries.
            </p>
          </div>

          {/* Solution Matrices Blocks */}
          <div>
            <h4 className="text-xs font-bold text-[#37352f] uppercase tracking-wider mb-3">Core Suites</h4>
            <ul className="space-y-2 text-xs text-[#5a5750]">
              <li><a href="#" className="hover:text-black">📦 E-Commerce Suite</a></li>
              <li><a href="#" className="hover:text-black">📈 Agency Operations</a></li>
              <li><a href="#" className="hover:text-black">🏗️ MSME Production</a></li>
              <li><a href="#" className="hover:text-black">🏡 Real Estate Hub</a></li>
            </ul>
          </div>

          {/* Operations Blocks */}
          <div>
            <h4 className="text-xs font-bold text-[#37352f] uppercase tracking-wider mb-3">Creators & Services</h4>
            <ul className="space-y-2 text-xs text-[#5a5750]">
              <li><a href="#" className="hover:text-black">🎬 Creator Frameworks</a></li>
              <li><a href="#" className="hover:text-black">🏨 Hospitality Sync</a></li>
              <li><a href="#" className="hover:text-black">💪 Gym Engagement</a></li>
              <li><a href="#" className="hover:text-black">✒️ Freelance Scopes</a></li>
            </ul>
          </div>

          {/* System Control Blocks */}
          <div>
            <h4 className="text-xs font-bold text-[#37352f] uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2 text-xs text-[#5a5750]">
              <li><a href="#" className="hover:text-black">Resources</a></li>
              <li><a href="#" className="hover:text-black">Pricing Framework</a></li>
              <li><a href="#" className="hover:text-black">Demo Node Request</a></li>
              <li><a href="#" className="hover:text-black">Security Protocols</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Block */}
        <div className="max-w-[900px] mx-auto px-6 pt-6 border-t border-[#edece9] flex flex-col md:flex-row items-center justify-between text-xs text-[#7c7b77]">
          <span>© 2026 extrct.app Terminal Technologies Inc. All parameters synced.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}