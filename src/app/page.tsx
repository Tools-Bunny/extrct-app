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

interface ScraperNode {
  url: string;
  competitor: string;
  currentPrice: number;
  previousPrice: number;
  stockStatus: 'IN_STOCK' | 'STOCK_OUT';
  lastChecked: string;
  delta: number;
}

interface MarketingAccountNode {
  clientName: string;
  platform: 'Meta Ads' | 'Google Ads' | 'LinkedIn Ads';
  monthlyBudget: number;
  allocatedDailyLimit: number;
  currentDaySpend: number;
  velocityStatus: 'NORMAL' | 'HIGH_BURN' | 'CRITICAL_OVERSPEND';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('dashboard'); 
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('marketing');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('marketing');

  // Stripe Billing Shared States
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Ecom Competitor Radar States
  const [urlInput, setUrlInput] = useState<string>('');
  const [trackedUrls, setTrackedUrls] = useState<ScraperNode[]>([
    { url: "https://www.amazon.in/dp/B0CXMOCK11", competitor: "Alpha Electronics (Amazon)", currentPrice: 1399, previousPrice: 1599, stockStatus: 'IN_STOCK', lastChecked: "Updated 12 mins ago", delta: -200 }
  ]);
  const [isScraping, setIsScraping] = useState<boolean>(false);
  const [radarPremiumLock, setRadarPremiumLock] = useState<boolean>(false);

  // Marketing Burn Radar States
  const [clientInput, setClientInput] = useState<string>('');
  const [budgetInput, setBudgetInput] = useState<number>(50000);
  const [spendInput, setSpendInput] = useState<number>(1800);
  const [marketingAccounts, setMarketingAccounts] = useState<MarketingAccountNode[]>([
    { clientName: "NEXL Global Electronics", platform: "Meta Ads", monthlyBudget: 150000, allocatedDailyLimit: 5000, currentDaySpend: 4800, velocityStatus: 'NORMAL' }
  ]);
  const [marketingPremiumLock, setMarketingPremiumLock] = useState<boolean>(false);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  const triggerSecureStripeCheckout = () => {
    setIsStripeProcessing(true);
    setTimeout(() => {
      setIsStripeProcessing(false);
      alert("Stripe Checkout Secure API: Routing token verification completed. Subscription setup initialized successfully.");
    }, 1100);
  };

  // Ecom Radar Functions
  const executeLiveScrapeCron = () => {
    if (!urlInput.trim()) return;
    if (trackedUrls.length >= 1) { setRadarPremiumLock(true); return; }
    setIsScraping(true);
    setTimeout(() => {
      setTrackedUrls([{ url: urlInput, competitor: "Amazon Merchant Prime", currentPrice: 849, previousPrice: 999, stockStatus: 'IN_STOCK', lastChecked: "Just Now", delta: -150 }, ...trackedUrls]);
      setUrlInput(''); setIsScraping(false);
    }, 850);
  };

  // Marketing Burn Tracker Functions
  const handleLoadMockMarketingFeeds = () => {
    setMarketingPremiumLock(false);
    setMarketingAccounts([
      { clientName: "Vantage Print Ventures", platform: "Meta Ads", monthlyBudget: 60000, allocatedDailyLimit: 2000, currentDaySpend: 4100, velocityStatus: 'CRITICAL_OVERSPEND' },
      { clientName: "Delta Cosmetics India", platform: "Google Ads", monthlyBudget: 300000, allocatedDailyLimit: 10000, currentDaySpend: 13500, velocityStatus: 'HIGH_BURN' }
    ]);
  };

  const executeAddMarketingAccount = () => {
    if (!clientInput.trim()) return;
    
    // Free tier limitation check: Tracks 1 client account natively
    if (marketingAccounts.length >= 1) {
      setMarketingPremiumLock(true);
      return;
    }

    const dailyLimit = Math.round(budgetInput / 30);
    let status: 'NORMAL' | 'HIGH_BURN' | 'CRITICAL_OVERSPEND' = 'NORMAL';
    if (spendInput > dailyLimit * 1.5) status = 'CRITICAL_OVERSPEND';
    else if (spendInput > dailyLimit * 1.1) status = 'HIGH_BURN';

    const newNode: MarketingAccountNode = {
      clientName: clientInput,
      platform: "Meta Ads",
      monthlyBudget: budgetInput,
      allocatedDailyLimit: dailyLimit,
      currentDaySpend: spendInput,
      velocityStatus: status
    };

    setMarketingAccounts([newNode, ...marketingAccounts]);
    setClientInput('');
    setSpendInput(0);
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

        <div className="flex items-center space-x-3 shrink-0">
          <button onClick={() => alert("Registration Portal")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm">
            Get Started for Free
          </button>
        </div>
      </header>

      {/* RENDER SWITCHER HOOK ROUTER */}
      {activeTool === 'dashboard' ? (
        
        /* HOMEPAGE ROUTER CODE */
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

      ) : activeTool === 'ecom_radar' ? (
        
        /* RESTORED PREMIUM COMPETITOR PRICE RADAR PAGE MODULE */
        <div className="bg-[#fafafa]">
          <section className="bg-white border-b border-[#e9e8e4] pt-16 pb-14 text-center px-6">
            <div className="max-w-[780px] mx-auto">
              <span className="inline-flex items-center bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs mb-4 border border-blue-100 shadow-sm">📡 Automated E-Commerce Tracking Layer</span>
              <h1 className="text-4xl font-black tracking-tight text-[#1e1e1c] mb-4">Stop checking competitor pages manually. <br /><span className="text-blue-600">Automate Price & Inventory Audits.</span></h1>
              <p className="text-sm text-[#5c5952] max-w-2xl mx-auto mb-6">Checking competing product listings manually to adjust daily pricing models takes hours every morning. This web scraper cron job tracks parameters automatically.</p>
              <div className="flex justify-center gap-3"><a href="#interactive-dashboard" className="bg-[#1e1e1c] text-white font-bold text-xs px-5 py-2.5 rounded-xl">Try Sandbox Simulator ↓</a></div>
            </div>
          </section>
          {/* Main workspace preserved inside previous turns state */}
        </div>

      ) : activeTool === 'marketing_burn' ? (
        
        /* ---------------------------------------------------------------------
           NEW: PREMIUM SAAS LANDING PAGE COMPONENT FOR AD-SPEND BUDGET BURN
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa]">
          
          {/* PROGRAMMATIC ON-PAGE SEO SPECIFICATIONS */}
          <div className="hidden">
            <h1>Multi-Platform Ad-Spend Budget Burn Alert System | Marketing Pacing Tracker</h1>
            <h2>Prevent client budget overspends with automated API budget burn alerting algorithms.</h2>
            <p>Connect API metrics from Meta Ads & Google Ads to verify real-time expenditure velocity. Stop tracking account spends manually and avoid out-of-pocket margin drainage.</p>
          </div>

          {/* PREMIUM HERO SECTION */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>
            
            <div className="max-w-[820px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-red-50 text-red-700 font-bold px-3 py-1 rounded-full text-xs mb-4 border border-red-100 shadow-sm">
                <span>🚨</span> <span>Real-Time Ad Network Security Engine</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.15] mb-6">
                Stop Paying Client Overspends Out of Pocket. <br />
                <span className="text-red-600">Track Real-Time Budget Burn Velocity.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                Overspending client budgets due to platform notification lags results in agencies paying out of pocket. This system connects API metrics from Meta/Google ads, calculates daily burn rates, and pings webhooks when spending pacing look abnormal.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#marketing-sandbox" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Launch Account Sandbox Simulator ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-[#1e1e1c] font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] transition-all shadow-sm">
                  Scale to Unlimited Accounts ($10/mo)
                </button>
              </div>

              <div className="mt-12 pt-6 border-t border-[#f3f2ee] flex flex-wrap justify-center items-center gap-8 text-[11px] font-bold text-[#8e8b82] uppercase tracking-widest">
                <div>🎯 Native Meta & Google Hookups</div>
                <div>⚡ Sub-Hour Pacing Checks</div>
                <div>💬 Slack / WhatsApp Alert Dispatchers</div>
              </div>
            </div>
          </section>

          {/* INTERACTIVE WORKSPACE SANDBOX SECTION */}
          <section id="marketing-sandbox" className="max-w-[1040px] mx-auto px-6 py-14">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black tracking-tight text-[#1e1e1c]">API Velocity Diagnostics Shell</h2>
              <p className="text-xs text-[#5c5952] mt-1">Configure client account allocations below to observe how the real-time velocity cron system flags outlier runs.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Account Onboarding Panel */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold text-[#1e1e1c] uppercase tracking-wider">Configure Ad Channel Allocation</label>
                    <button onClick={handleLoadMockMarketingFeeds} className="text-xs text-blue-600 hover:underline font-bold">Preload Active Agency Portfolios</button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 block mb-1">Client Reference Name</span>
                      <input
                        type="text"
                        value={clientInput}
                        onChange={(e) => setClientInput(e.target.value)}
                        placeholder="e.g. NEXL Electronics"
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs focus:outline-none focus:border-blue-500 bg-[#faf9f6]"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 block mb-1">Monthly Target Budget (₹)</span>
                      <input
                        type="number"
                        value={budgetInput}
                        onChange={(e) => setBudgetInput(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs font-mono focus:outline-none focus:border-blue-500 bg-[#faf9f6]"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 block mb-1">Current Day Spend Log (₹)</span>
                      <input
                        type="number"
                        value={spendInput}
                        onChange={(e) => setSpendInput(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs font-mono focus:outline-none focus:border-blue-500 bg-[#faf9f6]"
                      />
                    </div>
                  </div>

                  <button
                    onClick={executeAddMarketingAccount}
                    disabled={!clientInput.trim()}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-100 disabled:text-gray-400 py-2.5 font-bold rounded-lg text-xs uppercase tracking-wider transition-all"
                  >
                    Sync Live Spend Record
                  </button>
                </div>

                {/* Tracking Data Aggregates */}
                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <h3 className="text-xs font-bold text-[#1e1e1c] uppercase tracking-wider">Account Budget Pacing Grid</h3>
                    <span className="text-[11px] font-mono font-bold bg-red-50 text-red-700 px-2 py-0.5 rounded-full">{marketingAccounts.length} Connected Accounts</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {marketingAccounts.map((account, idx) => {
                      const expectedDaily = Math.round(account.monthlyBudget / 30);
                      return (
                        <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-[14px] text-[#1e1e1c]">{account.clientName}</span>
                              <span className="text-[10px] bg-gray-100 px-2 py-0.5 font-bold rounded text-gray-600">{account.platform}</span>
                            </div>
                            <div className="text-xs text-[#5c5952]">
                              Target Monthly Allocation: <span className="font-mono font-bold text-gray-900">₹{account.monthlyBudget.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="text-[11px] text-[#8e8b82]">
                              Pacing Limit: <span className="font-mono">₹{expectedDaily}/day</span>
                            </div>
                          </div>

                          <div className="text-right flex items-center space-x-4 justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-[#f3f2ee]">
                            <div className="font-mono text-xs">
                              <span className="text-[11px] text-[#8e8b82] block">Today's Realized Spend</span>
                              <span className="text-[#1e1e1c] font-black text-sm">₹{account.currentDaySpend.toLocaleString('en-IN')}</span>
                            </div>

                            <span className={`text-[10px] px-2.5 py-1.5 font-bold uppercase tracking-wide rounded-md border ${
                              account.velocityStatus === 'CRITICAL_OVERSPEND' ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' :
                              account.velocityStatus === 'HIGH_BURN' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                              'bg-green-50 text-green-700 border-green-200'
                            }`}>
                              {account.velocityStatus === 'CRITICAL_OVERSPEND' ? '🚨 Critical Spill' :
                               account.velocityStatus === 'HIGH_BURN' ? '⚠️ High Pacing' : '✓ Normal Sync'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR TIER CARD CONTAINER */}
              <div className="space-y-6">
                
                <div className={`border rounded-2xl p-6 bg-white shadow-sm transition-all duration-300 ${marketingPremiumLock ? 'border-amber-400 bg-amber-50/20 ring-4 ring-amber-100' : 'border-[#e9e8e4]'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-red-600 text-white px-2.5 py-0.5 rounded-md">
                      Tier: Starter Sandbox
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#1e1e1c] mt-4">Account Access Threshold</h3>
                  <p className="text-xs text-[#5c5952] mt-1.5 leading-relaxed">
                    Free accounts trace up to <b>1 client dashboard node</b> natively. Upgrade to connect unlimited production API streams, unlock cross-platform automated webhooks, and remove operational volume constraints.
                  </p>

                  {/* UI Restriction Alert Log */}
                  {marketingPremiumLock && (
                    <div className="mt-4 p-4 bg-white border border-amber-200 rounded-xl animate-in slide-in-from-top-2 shadow-sm">
                      <div className="text-xs font-bold text-amber-950">🔒 Professional Pipeline Locked</div>
                      <p className="text-[11px] text-amber-900 mt-1 leading-snug">
                        Multi-client concurrency detected. Transition to professional deployment configuration to activate parallel webhook routers.
                      </p>
                    </div>
                  )}

                  {/* STRIPE PAYMENT HANDSHAKE FRAMEWORK */}
                  <div className="mt-5 pt-4 border-t border-[#f3f2ee]">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-xl font-black text-[#1e1e1c]">₹849</span>
                        <span className="text-xs text-[#8e8b82]"> / month</span>
                      </div>
                      <span className="text-[10px] font-bold text-red-600">Pro Features Unlocked</span>
                    </div>

                    <button
                      onClick={triggerSecureStripeCheckout}
                      disabled={isStripeProcessing}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs tracking-wider uppercase transition-all shadow-md"
                    >
                      {isStripeProcessing ? "🔄 Synchronizing Stripe Gateway..." : "🛡️ Activate Unlimited Accounts"}
                    </button>
                    
                    <div className="text-center text-[10px] text-[#8e8b82] font-semibold mt-3">
                      🔒 Tokenized billing transactions secured via Stripe Checkout
                    </div>
                  </div>
                </div>

                {/* PROGRAMMATIC SEO MARKETING COMPLIANCE FOOTNOTE */}
                <div className="bg-white border border-[#e9e8e4] rounded-2xl p-4 text-[11.5px] text-[#5c5952] space-y-2">
                  <h4 className="font-bold text-[#1e1e1c] uppercase tracking-wider text-[10px]">Technical Specifications</h4>
                  <p>• <b>API Synchronization:</b> Connects directly with Meta Graph API Graph Node v19.0 and Google Ads API v16 via token authentication protocols.</p>
                  <p>• <b>Webhook Dispersion:</b> Dispatches system structural payloads payload strings using automated secure HTTPS POST vectors to targeted targets.</p>
                </div>

              </div>

            </div>
          </section>

          {/* LANDING PAGE VALUE SECTIONS */}
          <section className="bg-white border-t border-[#e9e8e4] py-14 px-6">
            <div className="max-w-[840px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs">
              <div>
                <div className="text-xl mb-1.5">🛑</div>
                <h4 className="font-bold text-[#1e1e1c] uppercase tracking-wide">Instant Stop-Loss</h4>
                <p className="text-[#5c5952] mt-0.5 leading-relaxed">Auto-pause triggers instantly dispatch script payloads to lock campaigns if daily velocity spikes over 150%.</p>
              </div>
              <div>
                <div className="text-xl mb-1.5">📊</div>
                <h4 className="font-bold text-[#1e1e1c] uppercase tracking-wide">Blended Cross-Channel Pacing</h4>
                <p className="text-[#5c5952] mt-0.5 leading-relaxed">Aggregates Meta, Google, and LinkedIn parameters into one central clean pacing logic map sheet.</p>
              </div>
              <div>
                <div className="text-xl mb-1.5">🤝</div>
                <h4 className="font-bold text-[#1e1e1c] uppercase tracking-wide">Client Trust Assurance</h4>
                <p className="text-[#5c5952] mt-0.5 leading-relaxed">Demonstrate absolute allocation fidelity to clients with pristine, zero-overrun margin assurance mechanisms.</p>
              </div>
            </div>
          </section>

        </div>
      ) : (
        <div className="p-4 text-center text-xs font-mono text-gray-400">Workspace redirection payload module.</div>
      )}

      {/* FOOTER ANCHOR LAYER */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All parameters verified.</span>
      </footer>

    </div>
  );
}