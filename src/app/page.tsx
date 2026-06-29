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

interface MarketingAccountNode {
  clientName: string;
  platform: 'Meta Ads' | 'Google Ads' | 'LinkedIn Ads';
  monthlyBudget: number;
  allocatedDailyLimit: number;
  currentDaySpend: number;
  velocityStatus: 'NORMAL' | 'HIGH_BURN' | 'CRITICAL_OVERSPEND';
}

interface PortalAssetNode {
  assetTitle: string;
  type: string;
  linkUrl: string;
  deliveryStatus: 'LIVE' | 'IN_REVIEW' | 'ARCHIVED';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('dashboard'); 
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('marketing');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('marketing');

  // Stripe Billing States
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Marketing Burn Radar States
  const [clientInput, setClientInput] = useState<string>('');
  const [budgetInput, setBudgetInput] = useState<number>(50000);
  const [spendInput, setSpendInput] = useState<number>(1800);
  const [marketingAccounts, setMarketingAccounts] = useState<MarketingAccountNode[]>([
    { clientName: "NEXL Global Electronics", platform: "Meta Ads", monthlyBudget: 150000, allocatedDailyLimit: 5000, currentDaySpend: 4800, velocityStatus: 'NORMAL' }
  ]);
  const [marketingPremiumLock, setMarketingPremiumLock] = useState<boolean>(false);

  // Whitelabel Portal States
  const [portalClientName, setPortalClientName] = useState<string>('');
  const [subdomainPrefix, setSubdomainPrefix] = useState<string>('');
  const [portalPremiumLock, setPortalPremiumLock] = useState<boolean>(false);
  const [activePortalView, setActivePortalView] = useState<boolean>(false);
  const [assetsList, setAssetsList] = useState<PortalAssetNode[]>([
    { assetTitle: "Q2 Core Media Spend Matrix Layout", type: "Google Sheet", linkUrl: "https://docs.google.com/spreadsheets/d/1", deliveryStatus: 'LIVE' },
    { assetTitle: "Creative Assets Pitch Deck - Retro Aesthetic", type: "Figma File", linkUrl: "https://figma.com/file/2", deliveryStatus: 'IN_REVIEW' }
  ]);

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
    if (marketingAccounts.length >= 1) { setMarketingPremiumLock(true); return; }
    const dailyLimit = Math.round(budgetInput / 30);
    let status: 'NORMAL' | 'HIGH_BURN' | 'CRITICAL_OVERSPEND' = 'NORMAL';
    if (spendInput > dailyLimit * 1.5) status = 'CRITICAL_OVERSPEND';
    else if (spendInput > dailyLimit * 1.1) status = 'HIGH_BURN';

    setMarketingAccounts([{ clientName: clientInput, platform: "Meta Ads", monthlyBudget: budgetInput, allocatedDailyLimit: dailyLimit, currentDaySpend: spendInput, velocityStatus: status }, ...marketingAccounts]);
    setClientInput(''); setSpendInput(0);
  };

  // Whitelabel Portal Functions
  const executeGeneratePortalRow = () => {
    if (!portalClientName.trim()) return;
    if (subdomainPrefix.trim() !== '') {
      setPortalPremiumLock(true);
      return;
    }
    setActivePortalView(true);
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

      {/* RENDER SWITCHER ROUTER HOOK */}
      {activeTool === 'dashboard' ? (
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

      ) : activeTool === 'marketing_burn' ? (
        
        <div className="bg-[#fafafa]">
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative">
            <div className="max-w-[820px] mx-auto">
              <span className="inline-flex items-center space-x-1.5 bg-red-50 text-red-700 font-bold px-3 py-1 rounded-full text-xs mb-4 border border-red-100 shadow-sm">
                <span>🚨</span> <span>Real-Time Ad Network Security Engine</span>
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] mb-6">Stop Paying Client Overspends Out of Pocket. <br /><span className="text-red-600">Track Real-Time Budget Burn Velocity.</span></h1>
              <p className="text-base text-[#5c5952] max-w-2xl mx-auto mb-8">Overspending client budgets due to platform notification lags results in agencies paying out of pocket. This system connects API metrics from Meta/Google ads.</p>
              <div className="flex gap-3 justify-center"><a href="#marketing-sandbox" className="bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl">Launch Account Sandbox Simulator ↓</a></div>
            </div>
          </section>
        </div>

      ) : activeTool === 'marketing_portal' ? (
        
        /* ---------------------------------------------------------------------
           NEW: WHITELABEL CLIENT NOTION/PORTAL GENERATOR INTERACTIVE COMPONENT
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa]">
          
          {/* SEO OVERLAY ANCHOR */}
          <div className="hidden">
            <h1>Whitelabel Client Notion Portal Generator | Custom Dashboard Engine</h1>
            <h2>One-click static client status matrix connected directly to database rows.</h2>
            <p>Deploy pristine whitelabel portfolio status frames with custom subdomains. Remove watermarks and share link assets instantly with your agency marketing clients.</p>
          </div>

          {/* HERO SALES SECTION */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>
            
            <div className="max-w-[840px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full text-xs mb-4 border border-blue-100 shadow-sm">
                <span>🌐</span> <span>Instant Contract Onboarding Core</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.15] mb-6">
                Stop Assembling Custom Dashboards Manually. <br />
                <span className="text-blue-600">Deploy Whitelabel Status Pages in Seconds.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                Building custom dashboards to present links, assets, and project statuses professionally to clients takes hours of manual assembly for every new contract. Our platform enables a one-click static client status dashboard connected to clean rows.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#portal-sandbox" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Open Portal Generation Engine ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-[#1e1e1c] font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] transition-all shadow-sm">
                  Unlock Custom Subdomains ($10 Tier)
                </button>
              </div>
            </div>
          </section>

          {/* INTERACTIVE COMPONENT WORKSPACE */}
          <section id="portal-sandbox" className="max-w-[1040px] mx-auto px-6 py-14">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* PORTAL GENERATOR CONFIGURATION SHELL */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6">
                  <h3 className="text-xs font-bold text-[#1e1e1c] uppercase tracking-wider mb-4">Portal Provisioning Config</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Target Client Corporate Name</label>
                      <input 
                        type="text"
                        value={portalClientName}
                        onChange={(e) => setPortalClientName(e.target.value)}
                        placeholder="e.g. Acme Retail Ventures"
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] text-[#1e1e1c] focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-[11px] font-bold text-gray-500 block">Custom Domain Prefix</label>
                        <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">Premium Feature</span>
                      </div>
                      <div className="flex rounded-lg overflow-hidden border border-[#e9e8e4] bg-[#faf9f6] focus-within:border-blue-500">
                        <input 
                          type="text"
                          value={subdomainPrefix}
                          onChange={(e) => setSubdomainPrefix(e.target.value)}
                          placeholder="acme"
                          className="w-1/2 p-2.5 text-xs bg-transparent focus:outline-none"
                        />
                        <span className="w-1/2 bg-gray-100 border-l border-[#e9e8e4] text-gray-400 p-2.5 text-[11px] font-mono flex items-center">
                          .extrct.app
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={executeGeneratePortalRow}
                    disabled={!portalClientName.trim()}
                    className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-100 disabled:text-gray-400 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Generate Dashboard Link
                  </button>
                </div>

                {/* PREMIUM TIER UPGRADE LOCK TRIGGER COMPONENT */}
                <div className={`border rounded-xl p-5 bg-white shadow-sm transition-all ${portalPremiumLock ? 'border-amber-400 ring-4 ring-amber-50 bg-amber-50/10' : 'border-[#e9e8e4]'}`}>
                  <h4 className="text-xs font-bold text-[#1e1e1c]">Tier Optimization Status</h4>
                  <p className="text-[11.5px] text-[#5c5952] mt-1 leading-relaxed">
                    Free generation tier appends the <b>"Powered by extrct.app" watermark</b> logo. Activating the $10 tier removes layout branding and unlocks custom multi-tenant tracking profiles natively.
                  </p>

                  {portalPremiumLock && (
                    <div className="mt-3 p-3 bg-white border border-amber-200 rounded-lg animate-in slide-in-from-top-1">
                      <span className="text-[11px] font-bold text-amber-950 block">🔒 Subdomain Control Vault Engaged</span>
                      <span className="text-[10px] text-amber-900 block mt-0.5">Please upgrade via Stripe processing matrix block to map separate subdomain layers securely.</span>
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-[#f3f2ee] flex items-center justify-between">
                    <div>
                      <span className="font-mono text-base font-black text-gray-900">₹849</span>
                      <span className="text-[10px] text-[#8e8b82]">/mo</span>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-blue-600 text-white font-bold text-[11px] px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
                      Upgrade Node
                    </button>
                  </div>
                </div>
              </div>

              {/* RENDER DYNAMIC LIVE PORTAL PREVIEW SHELL */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-md overflow-hidden min-h-[420px] flex flex-col">
                  
                  {/* BROWSER BAR FRAME */}
                  <div className="bg-[#fcfbfa] border-b border-[#e9e8e4] px-4 py-2.5 flex items-center space-x-2 select-none">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-300"></div>
                    </div>
                    <div className="flex-1 max-w-sm bg-white border border-[#e9e8e4] rounded-md mx-auto text-center py-0.5 text-[10px] font-mono text-[#7c7b77] tracking-tight truncate">
                      {subdomainPrefix.trim() ? subdomainPrefix.toLowerCase() : 'demo-client'}.extrct.app/portal-dashboard
                    </div>
                  </div>

                  {activePortalView ? (
                    /* DYNAMIC PORTAL UI */
                    <div className="p-8 flex-1 flex flex-col justify-between relative">
                      
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3 pb-4 border-b border-[#f3f2ee]">
                          <div className="w-10 h-10 bg-blue-600 rounded-xl text-white flex items-center justify-center font-bold text-lg shadow-sm">
                            {portalClientName.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h2 className="text-lg font-black text-[#1e1e1c]">{portalClientName} Partner Space</h2>
                            <p className="text-[11px] text-green-600 font-medium">● System active and synchronizing live asset pipelines</p>
                          </div>
                        </div>

                        {/* ASSET ITERATION LOOP GRID */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold text-[#8e8b82] uppercase tracking-wider block">Contractual Assets & Living Records</span>
                          {assetsList.map((asset, idx) => (
                            <div key={idx} className="border border-[#e9e8e4] p-3.5 rounded-lg flex items-center justify-between hover:bg-[#faf9f6] transition-colors">
                              <div className="space-y-0.5">
                                <span className="font-bold text-xs text-[#1e1e1c] block">{asset.assetTitle}</span>
                                <span className="text-[10px] font-mono bg-gray-100 text-gray-500 px-1.5 py-0.2 rounded font-semibold">{asset.type}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className={`text-[9px] px-2 py-0.5 rounded font-bold border ${asset.deliveryStatus === 'LIVE' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                                  {asset.deliveryStatus}
                                </span>
                                <a href="#link" onClick={(e) => e.preventDefault()} className="text-xs text-blue-600 font-bold hover:underline">Launch Link ↗</a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CONDITIONAL WATERMARK FOOTER VAULT LOGIC */}
                      <div className="pt-8 text-center border-t border-[#f3f2ee] flex items-center justify-between text-[11px]">
                        <span className="text-gray-400 font-medium">Secured Node Ecosystem</span>
                        <span className="font-bold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-1 rounded">
                          ⚡ Powered by extrct.app
                        </span>
                      </div>

                    </div>
                  ) : (
                    /* EMPTY BLANK PORTAL PROMPT SHELL */
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#faf9f6]">
                      <div className="text-3xl text-gray-300 mb-2">🌐</div>
                      <span className="text-xs font-bold text-gray-700">No Client Token Synced</span>
                      <p className="text-[11px] text-gray-400 max-w-xs mt-1">Fill out the corporate title parameters on the left pipeline terminal block to compute and mount your micro-dashboard visualization frame.</p>
                    </div>
                  )}

                </div>
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