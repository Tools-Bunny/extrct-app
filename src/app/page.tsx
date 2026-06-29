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

interface AuditRow {
  orderId: string;
  sku: string;
  chargedFee: number;
  expectedFee: number;
  variance: number;
  status: 'OVERCHARGED' | 'CORRECT';
}

export default function IntegratedMasterApplication() {
  const [activeTool, setActiveTool] = useState<string>('dashboard');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('ecom');

  // Auditor States
  const [csvInput, setCsvInput] = useState<string>('');
  const [auditResults, setAuditResults] = useState<AuditRow[] | null>(null);
  const [totalLeakage, setTotalLeakage] = useState<number>(0);
  const [isAuditing, setIsAuditing] = useState<boolean>(false);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  const handleSampleLoad = () => {
    setCsvInput(
      "ORDER_ID,SKU,CHARGED_FEE\n" +
      "OD8237482,NEXL-WIRELESS-HEADPHONE,180\n" +
      "OD8237483,NEXL-DATA-CABLE,95\n" +
      "OD8237484,NEXL-WIRELESS-HEADPHONE,210\n" +
      "OD8237485,NEXL-FAST-CHARGER,65\n" +
      "OD8237486,NEXL-DATA-CABLE,140"
    );
  };

  const runFeeAuditLogic = () => {
    if (!csvInput.trim()) return;
    setIsAuditing(true);

    setTimeout(() => {
      // Static matrix configuration calculation based on marketplace overcharge structures
      const rows = csvInput.split('\n').slice(1);
      let cumulativeLeak = 0;
      
      const compiled: AuditRow[] = rows.map((rowStr) => {
        const parts = rowStr.split(',');
        if (parts.length < 3) return null;
        
        const orderId = parts[0];
        const sku = parts[1];
        const chargedFee = parseFloat(parts[2]) || 0;
        
        // Define standard expected logic reference metrics
        let expectedFee = chargedFee;
        if (sku.includes('WIRELESS-HEADPHONE')) expectedFee = 145;
        if (sku.includes('DATA-CABLE')) expectedFee = 55;
        if (sku.includes('FAST-CHARGER')) expectedFee = 65;
        
        const variance = chargedFee - expectedFee;
        if (variance > 0) cumulativeLeak += variance;

        return {
          orderId,
          sku,
          chargedFee,
          expectedFee,
          variance: variance > 0 ? variance : 0,
          status: variance > 0 ? 'OVERCHARGED' : 'CORRECT'
        };
      }).filter(Boolean) as AuditRow[];

      setAuditResults(compiled);
      setTotalLeakage(cumulativeLeak);
      setIsAuditing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-[#37352f] font-sans antialiased text-[15px] relative">
      
      {/* HEADER NAVIGATION NAVBAR */}
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

      {isMegaMenuOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsMegaMenuOpen(false)} />}

      {/* RENDER LOGIC MULTIPLEXER */}
      {activeTool === 'dashboard' ? (
        
        /* NOTION SYSTEM LANDING HOMEPAGE CONTAINER */
        <div>
          <section className="max-w-[900px] mx-auto px-6 text-center pt-20 pb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#37352f] max-w-3xl mx-auto leading-[1.1] mb-6">
              Write code logic. Run 30 operational micro-utilities.
            </h1>
            <p className="text-xl font-medium text-[#5a5750] max-w-2xl mx-auto leading-relaxed mb-8">
              extrct.app transforms your static structural matrix datasheets into live micro-SaaS computational layout nodes across 10 distinct industry workflows.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <button onClick={() => selectToolFromMenu('ecom_fee')} className="bg-[#37352f] text-white hover:bg-black font-bold text-[15px] px-6 py-2.5 rounded-lg shadow transition-all">
                Launch Auditor Utility Free →
              </button>
            </div>

            <div className="border border-[#edece9] shadow-xl rounded-2xl overflow-hidden bg-[#fbfbfa] p-4 max-w-[800px] mx-auto">
              <div className="p-8 text-left bg-white min-h-[180px]">
                <span className="bg-amber-100 text-amber-800 font-mono text-[11px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">E-Commerce Focal Node</span>
                <h3 className="text-2xl font-bold text-[#37352f] mt-2 mb-1">Marketplace Overcharge Engine</h3>
                <p className="text-sm text-[#7c7b77]">Audits structural weight tier discrepancies and processes bulk ledger rows instantly.</p>
              </div>
            </div>
          </section>

          <section className="bg-[#fbfbfa] border-y border-[#edece9] py-12">
            <div className="max-w-[1000px] mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-[#37352f] mb-4">Every team, structured natively.</h2>
              <p className="text-sm text-blue-600 font-bold">Use the Solutions Dropdown up top to access pages directly.</p>
            </div>
          </section>
        </div>

      ) : activeTool === 'ecom_fee' ? (
        
        /* -------------------------------------------------------------
           COMPLETE INDEPENDENT PAGE COMPONENT: FEE & OVERCHARGE AUDITOR
           ------------------------------------------------------------- */
        <div className="bg-[#fafafa] min-h-[calc(100vh-64px)] py-12">
          <main className="max-w-[960px] mx-auto px-6">
            
            {/* Header Core Spec Segment */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-xs text-blue-600 font-bold uppercase tracking-wide mb-1">
                <span>📦 E-Commerce Metrics Pipeline</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f]">
                Automated Marketplace Overcharge & Fee Auditor
              </h1>
              <p className="text-[#5a5750] text-sm mt-1 max-w-2xl">
                Marketplaces miscalculate weight dimensions or referral fee tiers leading to leaked revenue. Paste your settlement statement data below to scan discrepancies against system category baseline tables.
              </p>
            </div>

            {/* Main Interactive Processing Card Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              
              {/* Left Column: Data Entry Node Area */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white border border-[#edece9] rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-[#37352f] uppercase tracking-wider">
                      Paste Settlement Statement Text (CSV Format)
                    </label>
                    <button 
                      onClick={handleSampleLoad}
                      className="text-xs text-blue-600 hover:underline font-medium"
                    >
                      Load Sample Mock Logs
                    </button>
                  </div>

                  <textarea
                    value={csvInput}
                    onChange={(e) => setCsvInput(e.target.value)}
                    placeholder="ORDER_ID,SKU,CHARGED_FEE..."
                    className="w-full h-44 p-3 border border-[#edece9] rounded-lg font-mono text-xs focus:outline-none focus:border-[#37352f] bg-[#fafafa]"
                  />

                  <button
                    onClick={runFeeAuditLogic}
                    disabled={isAuditing || !csvInput.trim()}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-200 disabled:text-gray-400 font-bold py-2.5 rounded-lg text-xs transition-all tracking-wide uppercase"
                  >
                    {isAuditing ? "Processing Ledger Parameters..." : "Execute Validation Sweep"}
                  </button>
                </div>

                {/* Audit Grid Result Sheet Block */}
                {auditResults && (
                  <div className="bg-white border border-[#edece9] rounded-xl shadow-sm overflow-hidden animate-in fade-in">
                    <div className="px-6 py-4 bg-[#fbfbfa] border-b border-[#edece9]">
                      <h3 className="text-xs font-bold text-[#37352f] uppercase tracking-wider">Discrepancy Rows Flagged</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#fafafa] border-b border-[#edece9] text-[#7c7b77] font-mono">
                            <th className="p-3">Order Token</th>
                            <th className="p-3">Item Variant SKU</th>
                            <th className="p-3 text-right">Charged</th>
                            <th className="p-3 text-right">Standard</th>
                            <th className="p-3 text-right text-amber-700">Leakage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f1f0ee]">
                          {auditResults.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="p-3 font-mono text-[#37352f]">{row.orderId}</td>
                              <td className="p-3 font-medium text-gray-600">{row.sku}</td>
                              <td className="p-3 text-right font-mono">₹{row.chargedFee}</td>
                              <td className="p-3 text-right font-mono text-gray-500">₹{row.expectedFee}</td>
                              <td className={`p-3 text-right font-mono font-bold ${row.variance > 0 ? 'text-red-600 bg-red-50/50' : 'text-gray-400'}`}>
                                {row.variance > 0 ? `₹${row.variance}` : '—'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: High-Converting Core SaaS Hook Widget */}
              <div className="space-y-4">
                <div className="bg-white border border-amber-200 bg-amber-50/30 rounded-xl p-6 shadow-sm">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    Audit Core Vector
                  </span>
                  <div className="text-3xl font-black text-[#37352f] mt-4 font-mono">
                    ₹{totalLeakage.toFixed(2)}
                  </div>
                  <div className="text-xs font-bold text-[#5a5750] mt-0.5 uppercase tracking-wide">
                    Identified Overpaid Capital Leak
                  </div>
                  <p className="text-xs text-[#7c7b77] mt-2 leading-relaxed">
                    Our scanner matched transaction line elements against default dimensional rule arrays to discover overcharged tier classifications.
                  </p>

                  <div className="mt-6 pt-6 border-t border-amber-200/60">
                    <div className="text-xs font-bold text-gray-900 mb-1">🎁 The 10-to-1000 Premium Hook:</div>
                    <p className="text-xs text-gray-600 leading-normal mb-4">
                      Highlights exact lines where you overpaid. Pay $10 to unlock the pre-filled dispute sheet export to claim refunds.
                    </p>
                    <button 
                      onClick={() => alert("Initiating Stripe Checkout Flow for $10 Tier Unlock...")}
                      disabled={totalLeakage === 0}
                      className="w-full bg-[#37352f] hover:bg-black text-white disabled:bg-gray-200 disabled:text-gray-400 text-xs font-bold py-2.5 rounded-lg tracking-wide uppercase shadow transition-all"
                    >
                      Unlock Pre-filled Dispute Sheet ($10)
                    </button>
                  </div>
                </div>

                {/* Standard Rules Reference Panel */}
                <div className="bg-white border border-[#edece9] rounded-xl p-4 text-xs space-y-2">
                  <div className="font-bold text-[#37352f] uppercase tracking-wider text-[10px]">Reference Rules Map</div>
                  <div className="flex justify-between border-b pb-1 text-gray-600">
                    <span>Wireless Headphones</span>
                    <span className="font-mono">₹145 max tier</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 text-gray-600">
                    <span>Data Cables</span>
                    <span className="font-mono">₹55 max tier</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Fast Chargers</span>
                    <span className="font-mono">₹65 max tier</span>
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>

      ) : (
        /* Fallback Container for upcoming nodes */
        <div className="p-16 text-center text-xs text-gray-500 font-mono">
          Endpoint code shell active. Select the first e-commerce tool row to monitor verification calculations.
        </div>
      )}

      {/* FOOTER BLOCK SYSTEM */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] pt-16 pb-12 select-none">
        <div className="max-w-[900px] mx-auto px-6 text-center text-xs text-[#7c7b77]">
          <span>© 2026 extrct.app Terminal Technologies Inc. All parameters synced.</span>
        </div>
      </footer>

    </div>
  );
}