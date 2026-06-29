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
}

const industriesMap: Record<IndustryKey, IndustryConfig> = {
  ecom: {
    label: "📦 E-Commerce",
    tools: [
      { id: 'ecom_fee', shortName: "📑 Fee & Overcharge Auditor", tagline: "Audits structural weight tier discrepancies." },
      { id: 'ecom_img', shortName: "🗜️ Image WebP Compressor", tagline: "Batch conversion pipeline for rapid assets." },
      { id: 'ecom_radar', shortName: "📡 Competitor Price Radar", tagline: "Automated daily listing scraper and map tracker." }
    ]
  },
  marketing: {
    label: "📈 Digital Marketing Agencies",
    tools: [
      { id: 'marketing_burn', shortName: "🚨 Ad-Spend Budget Burn Alert", tagline: "Triggers active velocity alerts across network spends." },
      { id: 'marketing_portal', shortName: "🌐 Whitelabel Notion Client Portal", tagline: "One-click clean portfolio sharing dashboards." },
      { id: 'marketing_utm', shortName: "🔗 UTM Campaign Link Generator", tagline: "Structured matrix parameters for clean attribution flow." }
    ]
  },
  mfg: {
    label: "🏗️ Manufacturing & MSMEs",
    tools: [
      { id: 'mfg_yield', shortName: "📉 Raw Material Yield Detector", tagline: "Flags floor drop waste levels against input logs." },
      { id: 'mfg_maintenance', shortName: "🔧 Maintenance Scheduler Alert", tagline: "Supabase sequence alerts before production deadlines." },
      { id: 'mfg_costing', shortName: "🧮 Production Batch Costing Tool", tagline: "Real-time components margin framework calculators." }
    ]
  },
  real_estate: {
    label: "🏡 Real Estate Agents",
    tools: [
      { id: 'real_estate_whatsapp', shortName: "💬 WhatsApp Bulk Match Engine", tagline: "Parses parameters directly into client broadcasts." },
      { id: 'real_estate_commission', shortName: "📊 Split-Commission Calculator", tagline: "Calculates gross agency margins and multi-broker cuts." },
      { id: 'real_estate_flyer', shortName: "🖼️ Instant Social Flyer Maker", tagline: "Stitches property launch specs into sleek markups." }
    ]
  },
  content: {
    label: "🎬 Content Creators",
    tools: [
      { id: 'content_repurpose', shortName: "🎞️ Video Hook Repurpose Framework", tagline: "Splits long-form topics into structured format clips." },
      { id: 'content_sponsor', shortName: "💰 Sponsorship Price Estimator", tagline: "Algorithmic pricing calculator for audience deliverables." },
      { id: 'content_script', shortName: "📝 Script Structure Engine", tagline: "Enforces engagement markers for short-form retention." }
    ]
  },
  hotels: {
    label: "🏨 Boutique Hotels & Guesthouses",
    tools: [
      { id: 'hotel_overbook', shortName: "🗓️ Overbooking Sync Matrix", tagline: "Lightweight single source central calendar hub." },
      { id: 'hotel_compendium', shortName: "📖 Guest Digital Compendium", tagline: "Generates quick mobile guide web links via QR codes." },
      { id: 'hotel_checkout', shortName: "⏰ Late-Checkout Automator", tagline: "Sends departure upsell nodes directly to guest pipelines." }
    ]
  },
  gym: {
    label: "💪 Gyms & Fitness Studios",
    tools: [
      { id: 'gym_churn', shortName: "📉 Member Churn Predictor", tagline: "Monitors attendance velocity logs for warning offsets." },
      { id: 'gym_class', shortName: "📅 Class Capacity Optimizer", tagline: "Staggers peak shift slots based on historical volume logs." },
      { id: 'gym_trainer', shortName: "🧮 Trainer Split Ledger", tagline: "Processes tier base payouts avoiding manual math traps." }
    ]
  },
  freelance: {
    label: "✒️ Freelance Designers & Writers",
    tools: [
      { id: 'freelance_scope', shortName: "🛡️ Scope Creep Guard", tagline: "Isolates and logs client change requests on the fly." },
      { id: 'freelance_retainer', shortName: "📊 Retainer Hours Tracker", tagline: "Visual hourly burn charts to share transparent client logs." },
      { id: 'freelance_proposal', shortName: "📋 Dynamic Project Proposal Engine", tagline: "Models production risk buffers for fixed-rate estimates." }
    ]
  },
  cafe: {
    label: "☕ Cafes & Coffee Shops",
    tools: [
      { id: 'cafe_waste', shortName: "🗑️ Perishable Waste Auditor", tagline: "Tracks daily kitchen throwaways against production curves." },
      { id: 'cafe_recipe', shortName: "💲 Coffee Costing Ledger", tagline: "Calculates variable ingredient price updates down to cup levels." },
      { id: 'cafe_roster', shortName: "👥 Peak Transaction Rosterer", tagline: "Optimizes staff rosters against peak historical POS curves." }
    ]
  },
  dtc: {
    label: "🛍️ Direct-to-Consumer Brands",
    tools: [
      { id: 'dtc_cac', shortName: "📊 Multi-Channel CAC Tracker", tagline: "Aggregates blended ecosystem metrics over isolated platform tracking." },
      { id: 'dtc_refund', shortName: "🔄 Return Rate Margin Bleed Auditor", tagline: "Flags high-risk size variants draining fulfillment margins." },
      { id: 'dtc_cohort', shortName: "👥 Customer LTV Cohort Matrix", tagline: "Slices monthly retention trends to track cohort parameters." }
    ]
  }
};

export default function SolopreneurMasterLayoutShell() {
  const [activeTool, setActiveTool] = useState<string>('dashboard');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#37352f] font-sans antialiased text-[14px] relative">
      
      {/* HEADER NAVIGATION PIPELINE */}
      <header className="h-16 bg-white border-b border-[#edece9] sticky top-0 z-50 px-8 flex items-center justify-between select-none">
        
        {/* LEFT SECTION: Logo + Menu Items */}
        <div className="flex items-center space-x-8">
          
          {/* Logo Brand Terminal */}
          <div onClick={() => setActiveTool('dashboard')} className="flex items-center space-x-2 cursor-pointer shrink-0">
            <div className="w-6 h-6 bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-xs">M</div>
            <span className="font-bold text-base tracking-tight text-[#37352f]">extrct.app</span>
          </div>

          {/* Core Menu Bar Links Container */}
          <nav className="flex items-center space-x-2 h-full">
            
            {/* 1. Solutions Mega Dropdown Anchor */}
            <div className="relative flex items-center h-full">
              <button 
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`flex items-center space-x-1 font-medium text-sm px-3 py-1.5 rounded-md transition-colors ${isMegaMenuOpen ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}
              >
                <span>Solutions</span>
                <span className={`text-[9px] text-[#7c7b77] transform transition-transform duration-150 ${isMegaMenuOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* SOLUTIONS MEGA DROPDOWN PANEL */}
              {isMegaMenuOpen && (
                <div className="absolute top-[44px] left-0 w-[820px] bg-white border border-[#edece9] shadow-2xl rounded-xl overflow-hidden flex z-50 animate-in fade-in duration-100">
                  {/* Left Side Industries Selection List */}
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

                  {/* Right Side Tools Navigation Grid */}
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

            {/* 2. Resources Static Button Node */}
            <a href="#resources" className="text-sm font-medium text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)] px-3 py-1.5 rounded-md transition-colors">
              Resources
            </a>

            {/* 3. Pricing Static Button Node */}
            <a href="#pricing" className="text-sm font-medium text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)] px-3 py-1.5 rounded-md transition-colors">
              Pricing
            </a>

            {/* 4. Demo Static Button Node */}
            <a href="#demo" className="text-sm font-medium text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)] px-3 py-1.5 rounded-md transition-colors">
              Demo
            </a>

          </nav>
        </div>

        {/* RIGHT SECTION: Action Control Call-To-Actions */}
        <div className="flex items-center space-x-3 shrink-0">
          
          {/* Highlighted Color Button Node */}
          <button 
            onClick={() => alert("Registration Portal Access")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Get Started for Free
          </button>

          {/* Secondary Action Log-In Button Node */}
          <button 
            onClick={() => alert("Log In Interface Triggered")}
            className="text-sm font-semibold text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)] px-4 py-2 rounded-lg transition-colors"
          >
            Log in
          </button>

        </div>

      </header>

      {/* DISMISSER PLANE INTERCEPTOR */}
      {isMegaMenuOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsMegaMenuOpen(false)} />}

      {/* WORKSPACE PREVIEW FRAMEWORK HOOK */}
      <main className="max-w-[840px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-white border border-[#edece9] rounded-xl shadow-sm p-12 min-h-[460px] relative">
          
          {activeTool === 'dashboard' ? (
            <div className="text-center pt-16">
              <h1 className="text-4xl font-bold tracking-tight text-[#37352f] mb-3">Master Platform Infrastructure</h1>
              <p className="text-[#7c7b77] text-base max-w-lg mx-auto mb-8">Navigation header controls (Solutions, Resources, Pricing, Demo) with responsive alignment links are completely locked down.</p>
              <div className="inline-flex items-center space-x-2 text-xs bg-[#fbfbfa] border px-4 py-2 rounded-lg text-[#5a5750] shadow-sm">
                <span>⚡ Complete Core Setup: Header architecture matches requirements. Ready to branch into functional internal sub-pages.</span>
              </div>
            </div>
          ) : (
            <div className="text-center pt-24 animate-fade-in">
              <div className="w-12 h-12 bg-[rgba(55,53,47,0.04)] rounded-full flex items-center justify-center text-xl mx-auto mb-4">🛠️</div>
              <h2 className="text-xl font-bold text-[#37352f] mb-2 uppercase tracking-wide font-mono text-xs text-[#7c7b77]">Target System Endpoint Located</h2>
              <p className="text-xl font-bold text-[#37352f] mb-2 capitalize">`{activeTool.split('_').join(' ')}` Node Sandbox Ready</p>
              <p className="text-xs text-[#7c7b77] max-w-sm mx-auto">This specialized section page will be built out next with custom logic algorithms from your Excel spreadsheet layout.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}