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

interface AuditRow { orderId: string; sku: string; chargedFee: number; expectedFee: number; variance: number; status: string; }
interface MockFile { name: string; originalSize: number; compressedSize: number; reduction: number; altText: string; status: string; }

interface ScraperNode {
  url: string;
  competitor: string;
  currentPrice: number;
  previousPrice: number;
  stockStatus: 'IN_STOCK' | 'STOCK_OUT';
  lastChecked: string;
  delta: number;
}

export default function AppCoreEcomArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('dashboard');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('ecom');

  // Tool 1 & 2 Static Backing States
  const [csvInput, setCsvInput] = useState<string>('');
  const [batchFiles, setBatchFiles] = useState<MockFile[]>([]);

  // Tool 3: Radar Interface States
  const [urlInput, setUrlInput] = useState<string>('');
  const [trackedUrls, setTrackedUrls] = useState<ScraperNode[]>([]);
  const [isScraping, setIsScraping] = useState<boolean>(false);
  const [radarPremiumLock, setRadarPremiumLock] = useState<boolean>(false);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  // Tool 3 Radar Methods
  const handleLoadMockRadarUrls = () => {
    setRadarPremiumLock(false);
    setTrackedUrls([
      { url: "https://flipkart.com/mock-competitor-electronics-1", competitor: "Alpha Electronics", currentPrice: 1399, previousPrice: 1599, stockStatus: 'IN_STOCK', lastChecked: "Just Now", delta: -200 },
      { url: "https://amazon.in/mock-competitor-cables-2", competitor: "Vecto Retail Node", currentPrice: 449, previousPrice: 449, stockStatus: 'STOCK_OUT', lastChecked: "5 mins ago", delta: 0 }
    ]);
  };

  const executeLiveScrapeCron = () => {
    if (!urlInput.trim()) return;
    
    // Premium Lock Check: Free accounts track 1 URL natively
    if (trackedUrls.length >= 1) {
      setRadarPremiumLock(true);
      return;
    }

    setIsScraping(true);
    setTimeout(() => {
      const newNode: ScraperNode = {
        url: urlInput,
        competitor: urlInput.includes('amazon') ? "Amazon Merchant Prime" : "Flipkart Marketplace Vendor",
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

  return (
    <div className="min-h-screen bg-white text-[#37352f] font-sans antialiased text-[15px] relative">
      
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

      {/* DASHBOARD ROUTER DECODING NODES */}
      {activeTool === 'dashboard' ? (
        
        <div>
          <section className="max-w-[900px] mx-auto px-6 text-center pt-20 pb-16">
            <h1 className="text-5xl font-bold tracking-tight text-[#37352f] mb-4">Run E-Commerce Competitor Radars</h1>
            <p className="text-sm text-[#7c7b77] mb-6">Select specific tool nodes to verify system layout frameworks.</p>
            <div className="flex justify-center space-x-2">
              <button onClick={() => selectToolFromMenu('ecom_radar')} className="bg-[#37352f] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm">Launch Competitor Radar Hub →</button>
            </div>
          </section>
        </div>

      ) : activeTool === 'ecom_fee' ? (
        <div className="p-8">Fee Auditor Shell</div>
      ) : activeTool === 'ecom_img' ? (
        <div className="p-8">Image Compressor Shell</div>
      ) : activeTool === 'ecom_radar' ? (
        
        /* ---------------------------------------------------------------------
           COMPLETE INDEPENDENT PAGE COMPONENT: COMPETITOR PRICE & STOCK RADAR
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa] min-h-[calc(100vh-64px)] py-12">
          <main className="max-w-[960px] mx-auto px-6">
            
            {/* Context Heading Title */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-xs text-blue-600 font-bold uppercase tracking-wide mb-1">
                <span>📡 Automated Web Scraper Cron Matrix</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f]">
                Competitor Price-Drop & Stock-Out Radar
              </h1>
              <p className="text-[#5a5750] text-sm mt-1 max-w-2xl">
                Checking competing product listings manually to adjust daily pricing models takes hours every morning. This automated dashboard tracks specific competitor product page parameters natively.
              </p>
            </div>

            {/* Computational Workspace Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              
              {/* Left Column: Link Pipeline Manager */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white border border-[#edece9] rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-[#37352f] uppercase tracking-wider">
                      Add New Competitor Listing URL
                    </label>
                    <button 
                      onClick={handleLoadMockRadarUrls}
                      className="text-xs text-blue-600 hover:underline font-medium"
                    >
                      Preload Benchmark Mock Feeds
                    </button>
                  </div>

                  <div className="flex space-x-2">
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://www.flipkart.com/product-item-reference-node..."
                      className="flex-1 p-2.5 border border-[#edece9] rounded-lg text-xs font-mono focus:outline-none focus:border-[#37352f] bg-[#fafafa]"
                    />
                    <button
                      onClick={executeLiveScrapeCron}
                      disabled={isScraping || !urlInput.trim()}
                      className="bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-100 disabled:text-gray-400 px-4 font-bold rounded-lg text-xs transition-all uppercase tracking-wide shrink-0"
                    >
                      {isScraping ? "Scraping..." : "Inject Target"}
                    </button>
                  </div>
                </div>

                {/* Tracking Metrics Ledger Sheet */}
                {trackedUrls.length > 0 && (
                  <div className="bg-white border border-[#edece9] rounded-xl shadow-sm overflow-hidden animate-in fade-in">
                    <div className="px-6 py-3.5 bg-[#fbfbfa] border-b border-[#edece9]">
                      <h3 className="text-xs font-bold text-[#37352f] uppercase tracking-wider">Active Competitor Monitor Matrix</h3>
                    </div>

                    <div className="divide-y divide-[#f1f0ee]">
                      {trackedUrls.map((node, idx) => (
                        <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50">
                          <div className="space-y-0.5">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-xs text-[#37352f]">{node.competitor}</span>
                              <span className={`text-[9px] px-1.5 py-0.5 font-bold uppercase tracking-wider rounded ${node.stockStatus === 'IN_STOCK' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {node.stockStatus === 'IN_STOCK' ? 'Active In Stock' : 'Stock Out'}
                              </span>
                            </div>
                            <div className="text-xs font-mono text-gray-400 truncate max-w-[380px]">{node.url}</div>
                            <div className="text-[11px] text-gray-400">Sync Frequency: {node.lastChecked}</div>
                          </div>

                          <div className="text-right shrink-0 flex items-center space-x-4 justify-between sm:justify-end">
                            <div className="font-mono text-xs">
                              <div className="text-gray-400 line-through">₹{node.previousPrice}</div>
                              <div className="text-[#37352f] font-bold text-sm">₹{node.currentPrice}</div>
                            </div>
                            
                            <div className={`px-2.5 py-1 rounded font-mono text-xs font-bold ${node.delta < 0 ? 'bg-amber-50 text-amber-700' : 'bg-gray-100 text-gray-500'}`}>
                              {node.delta < 0 ? `Drop ₹${Math.abs(node.delta)}` : 'Stable'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar: Premium Alerts Payload Trigger */}
              <div className="space-y-4">
                
                {/* Real-time Tracking Lock Gate */}
                <div className={`border rounded-xl p-6 shadow-sm transition-all ${radarPremiumLock ? 'border-amber-300 bg-amber-50/40 shadow-md scale-[1.01]' : 'bg-white border-[#edece9]'}`}>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                    Operational Limit Guard
                  </span>
                  <h3 className="text-base font-bold text-[#37352f] mt-3">The 10-to-1000 Alert Conversion Hook</h3>
                  <p className="text-xs text-[#7c7b77] mt-1 leading-relaxed">
                    Free tier tracking parameters limit data lookups to <b>1 active URL node</b>. Premium tiers unlock automated Supabase background fetch alerts and multi-channel notification routings.
                  </p>

                  {radarPremiumLock && (
                    <div className="mt-4 p-3 bg-white border border-amber-200 rounded-lg animate-in fade-in">
                      <div className="text-xs font-bold text-amber-950">⚠️ Limit Reached (Free Account Threshold)</div>
                      <p className="text-[11px] text-amber-900 mt-1">
                        You have hit the individual domain track threshold. Upgrade to execute parallel 10-channel price alerts every morning.
                      </p>
                      <button
                        onClick={() => alert("Launching premium subscription workflow trigger...")}
                        className="w-full mt-3 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded-lg text-xs uppercase tracking-wide transition-all shadow-sm"
                      >
                        Unlock Instant Live Alert Routings ($10)
                      </button>
                    </div>
                  )}
                </div>

                {/* System Diagnostics Info Panel */}
                <div className="bg-white border border-[#edece9] rounded-xl p-4 text-xs space-y-1 text-gray-500">
                  <div className="font-bold text-[#37352f] uppercase text-[9px] tracking-wider mb-1">Scraper Matrix Target Specifications</div>
                  <div>• Cron Schedule: Daily at 06:00 AM IST</div>
                  <div>• Engine Node: Headless Chromium instances</div>
                  <div>• Notification Target: Webhooks / SMS logs</div>
                </div>

              </div>

            </div>
          </main>
        </div>
      ) : (
        <div className="p-4 text-center">Active node</div>
      )}

      {/* FOOTER ANCHOR BLOCK */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] pt-16 pb-12 select-none">
        <div className="max-w-[900px] mx-auto px-6 text-center text-xs text-[#7c7b77]">
          <span>© 2026 extrct.app Terminal Technologies Inc. All parameters synced.</span>
        </div>
      </footer>

    </div>
  );
}