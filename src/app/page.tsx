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

interface ScraperNode {
  url: string;
  competitor: string;
  currentPrice: number;
  previousPrice: number;
  stockStatus: 'IN_STOCK' | 'STOCK_OUT';
  lastChecked: string;
  delta: number;
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('dashboard'); // Back to original default matrix home
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('ecom');

  // Radar App Component States
  const [urlInput, setUrlInput] = useState<string>('');
  const [trackedUrls, setTrackedUrls] = useState<ScraperNode[]>([
    { url: "https://www.amazon.in/dp/B0CXMOCK11", competitor: "Alpha Electronics (Amazon)", currentPrice: 1399, previousPrice: 1599, stockStatus: 'IN_STOCK', lastChecked: "Updated 12 mins ago", delta: -200 }
  ]);
  const [isScraping, setIsScraping] = useState<boolean>(false);
  const [radarPremiumLock, setRadarPremiumLock] = useState<boolean>(false);
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  const handleLoadMockRadarUrls = () => {
    setRadarPremiumLock(false);
    setTrackedUrls([
      { url: "https://www.amazon.in/dp/B0CXMOCK11", competitor: "Alpha Electronics (Amazon)", currentPrice: 1399, previousPrice: 1599, stockStatus: 'IN_STOCK', lastChecked: "Updated 12 mins ago", delta: -200 },
      { url: "https://www.flipkart.com/p/itm_mock22", competitor: "Vecto Retail (Flipkart)", currentPrice: 449, previousPrice: 449, stockStatus: 'STOCK_OUT', lastChecked: "Updated 1 hour ago", delta: 0 }
    ]);
  };

  const executeLiveScrapeCron = () => {
    if (!urlInput.trim()) return;
    if (trackedUrls.length >= 1) {
      setRadarPremiumLock(true);
      return;
    }

    setIsScraping(true);
    setTimeout(() => {
      const newNode: ScraperNode = {
        url: urlInput,
        competitor: urlInput.includes('amazon') ? "Amazon Verified Merchant" : "Flipkart Platinum Seller",
        currentPrice: 849,
        previousPrice: 999,
        stockStatus: 'IN_STOCK',
        lastChecked: "Just Now",
        delta: -150
      };
      setTrackedUrls([newNode, ...trackedUrls]);
      setUrlInput('');
      setIsScraping(false);
    }, 850);
  };

  const triggerSecureStripeCheckout = () => {
    setIsStripeProcessing(true);
    setTimeout(() => {
      setIsStripeProcessing(false);
      alert("Stripe Checkout Redirect: Tokenized session initialized successfully. Security handshakes completed.");
    }, 1100);
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
                        {hoveredIndustry === indKey && <span className="text-[10px] text-[#7c7b77]">→</span>}
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 p-5 bg-white space-y-2">
                    <div className="px-2 pb-2 text-[10px] font-bold text-[#7c7b77] uppercase tracking-wider border-b border-[#f1f0ee] mb-1">
                      {industriesMap[hoveredIndustry].label} Operational Node Suite
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

        <div className="flex items-center space-x-3 shrink-0">
          <button onClick={() => alert("Registration Portal")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm">
            Get Started for Free
          </button>
        </div>
      </header>

      {/* RENDER PIPELINE SWITCHER BOARD */}
      {activeTool === 'dashboard' ? (
        
        /* ---------------------------------------------------------------------
           ORIGINAL PLATFORM HOMEPAGE (NOTION NOTATION INTERFACE RESTORED)
           --------------------------------------------------------------------- */
        <div>
          <section className="max-w-[900px] mx-auto px-6 text-center pt-20 pb-16">
            <h1 className="text-5xl font-black tracking-tight text-[#37352f] mb-4">
              10 Industries. 30 Micro-Tools. <br />
              <span className="text-blue-600">One Production Matrix.</span>
            </h1>
            <p className="text-base text-[#5a5750] max-w-xl mx-auto mb-8">
              Micro-utilities built to optimize operation bottle-necks, compliance, and margin leakages across fast-moving workflows.
            </p>
          </section>

          {/* Tabbed Component System */}
          <section className="max-w-[1040px] mx-auto px-6 pb-24">
            <div className="border border-[#edece9] rounded-xl shadow-sm bg-white overflow-hidden">
              <div className="flex border-b border-[#edece9] bg-[#fbfbfa] overflow-x-auto select-none no-scrollbar">
                {(Object.keys(industriesMap) as IndustryKey[]).map((indKey) => (
                  <button
                    key={indKey}
                    onClick={() => setNotionActiveTab(indKey)}
                    className={`px-5 py-3 text-xs font-bold tracking-tight uppercase whitespace-nowrap transition-colors border-r border-[#edece9] ${notionActiveTab === indKey ? 'bg-white text-[#37352f] border-b-2 border-b-blue-600' : 'text-[#7c7b77] hover:bg-gray-50'}`}
                  >
                    {industriesMap[indKey].label.split(' ')[0]} {industriesMap[indKey].label.split(' ').slice(1).join(' ')}
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
                      <div className="mt-4 text-[11px] font-bold text-blue-600 flex items-center space-x-1">
                        <span>Launch Workspace</span> <span>→</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

      ) : activeTool === 'ecom_fee' ? (
        <div className="p-12 text-center text-sm">Fee Auditor Workspace Area</div>
      ) : activeTool === 'ecom_img' ? (
        <div className="p-12 text-center text-sm">Asset Compressor Workspace Area</div>
      ) : activeTool === 'ecom_radar' ? (
        
        /* ---------------------------------------------------------------------
           COMPETITOR RADAR: NEW PREMIUM SAAS LANDING PAGE STYLE UI
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa]">
          
          {/* SEO Meta Tags Emulated Struct */}
          <div className="hidden">
            <h1>Competitor Price-Drop & Stock-Out Radar | E-Commerce Pricing Automation</h1>
            <p>Automate daily marketplace tracking. Track competitor pricing matrices, instantly spot inventory stock-outs on Amazon & Flipkart, and defend profit margins.</p>
          </div>

          {/* Hero Segment */}
          <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-14 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#f0efeb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>
            <div className="max-w-[780px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs mb-4 border border-blue-100 shadow-sm">
                <span>✨</span> <span>Automated E-Commerce Tracking Layer</span>
              </span>
              <h1 className="text-4xl font-black tracking-tight text-[#1e1e1c] leading-[1.15] mb-4">
                Stop checking competitor pages manually. <br />
                <span className="text-blue-600">Automate Price & Inventory Audits.</span>
              </h1>
              <p className="text-sm sm:text-base text-[#5c5952] leading-relaxed max-w-2xl mx-auto mb-6">
                Checking competing product listings manually to adjust daily pricing models takes hours every morning. This web scraper cron job runs via Supabase edge functions to track listing parameters automatically.
              </p>
              <div className="flex items-center justify-center gap-3">
                <a href="#interactive-dashboard" className="bg-[#1e1e1c] text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Try Sandbox Simulator Live ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="bg-white border border-[#e9e8e4] text-[#1e1e1c] font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-[#faf9f6] transition-all shadow-sm">
                  Upgrade to Pro ($10/mo)
                </button>
              </div>
            </div>
          </section>

          {/* Sandbox Workspace Area */}
          <section id="interactive-dashboard" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold text-[#1e1e1c] uppercase tracking-wider">Target Listing URL</label>
                    <button onClick={handleLoadMockRadarUrls} className="text-xs text-blue-600 hover:underline font-bold">Preload Benchmark Feed Matrix</button>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="Paste Amazon or Flipkart product listing URL..."
                      className="flex-1 p-3 border border-[#e9e8e4] rounded-xl text-xs font-mono focus:outline-none focus:border-blue-500 bg-[#faf9f6]"
                    />
                    <button onClick={executeLiveScrapeCron} disabled={isScraping || !urlInput.trim()} className="bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-100 disabled:text-gray-400 px-5 font-bold rounded-xl text-xs uppercase tracking-wider transition-all shrink-0">
                      {isScraping ? "Crawling Node..." : "Run Active Audit"}
                    </button>
                  </div>
                </div>

                {/* Live Streams Output */}
                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <h3 className="text-xs font-bold text-[#1e1e1c] uppercase tracking-wider">Live Competitor Stream Parameters</h3>
                    <span className="text-[11px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{trackedUrls.length} Active Targets</span>
                  </div>
                  <div className="divide-y divide-[#f3f2ee]">
                    {trackedUrls.map((node, idx) => (
                      <div key={idx} className="p-5 flex items-center justify-between gap-4 hover:bg-[#faf9f6]">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-[14px] text-[#1e1e1c]">{node.competitor}</span>
                            <span className={`text-[10px] px-2 py-0.5 font-bold uppercase rounded-md tracking-wide ${node.stockStatus === 'IN_STOCK' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                              {node.stockStatus === 'IN_STOCK' ? '● Live In Stock' : '× Out of Stock'}
                            </span>
                          </div>
                          <div className="text-xs font-mono text-[#8e8b82] truncate max-w-[320px]">{node.url}</div>
                          <div className="text-[11px] text-[#8e8b82]">{node.lastChecked}</div>
                        </div>
                        <div className="text-right flex items-center space-x-4">
                          <div className="font-mono text-xs">
                            <div className="text-[#8e8b82] line-through">₹{node.previousPrice}</div>
                            <div className="text-[#1e1e1c] font-black text-sm">₹{node.currentPrice}</div>
                          </div>
                          <div className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold ${node.delta < 0 ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-gray-50 text-gray-500'}`}>
                            {node.delta < 0 ? `-₹${Math.abs(node.delta)}` : 'Stable'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Billing/Info Column */}
              <div className="space-y-6">
                <div className={`border rounded-2xl p-6 bg-white shadow-sm transition-all ${radarPremiumLock ? 'border-amber-400 bg-amber-50/20 ring-4 ring-amber-100' : 'border-[#e9e8e4]'}`}>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#1e1e1c] text-white px-2 py-0.5 rounded">Account Status: Starter Free</span>
                  <h3 className="text-base font-extrabold text-[#1e1e1c] mt-3">Continuous Daily Automation</h3>
                  <p className="text-xs text-[#5c5952] mt-1 leading-relaxed">
                    Free starter parameters allow tracking up to <b>1 active product URL node</b> at a time. To unlock instant automated alerts, unlimited multi-channel loops, and cross-platform domain streams, connect your billing configuration.
                  </p>

                  {radarPremiumLock && (
                    <div className="mt-4 p-3.5 bg-white border border-amber-200 rounded-xl shadow-sm animate-in fade-in">
                      <div className="text-xs font-bold text-amber-950">🔒 Operational Threshold Reached</div>
                      <p className="text-[11px] text-amber-900 mt-1">You have triggered multiple URL extraction points. Upgrade to professional pipelines to deploy parallel multi-listing monitoring channels instantly.</p>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-[#f3f2ee]">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-lg font-black text-[#1e1e1c]">₹849</span>
                        <span className="text-xs text-[#8e8b82]"> / mo</span>
                      </div>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} disabled={isStripeProcessing} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs uppercase transition-all shadow-sm">
                      {isStripeProcessing ? "🔄 Connecting Stripe Node..." : "🛡️ Unlock Pro Tracking Engine"}
                    </button>
                    <div className="text-center text-[10px] text-[#8e8b82] mt-2">🔒 Secured by Stripe Identity Tokens</div>
                  </div>
                </div>

                {/* FAQ Block */}
                <div className="bg-white border border-[#e9e8e4] rounded-2xl p-4 space-y-2 text-xs">
                  <h4 className="font-bold text-[#1e1e1c] uppercase tracking-wider text-[11px]">Deep Optimization FAQs</h4>
                  <div>
                    <h5 className="font-bold text-[#1e1e1c]">How does the automated scraper handle proxy bans?</h5>
                    <p className="text-[#8e8b82] text-[11px]">Our matrix engine automatically rotates elite premium residential proxies every morning to prevent IP blacklisting.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="p-4 text-center">Active node</div>
      )}

      {/* FOOTER ANCHOR LAYER */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal.</span>
      </footer>

    </div>
  );
}