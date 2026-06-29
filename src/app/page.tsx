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

interface UtmLinkNode {
  id: string;
  rawUrl: string;
  compiledUrl: string;
  source: string;
  medium: string;
  campaign: string;
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
  const [assetsList] = useState<PortalAssetNode[]>([
    { assetTitle: "Q2 Core Media Spend Matrix Layout", type: "Google Sheet", linkUrl: "https://docs.google.com/spreadsheets/d/1", deliveryStatus: 'LIVE' },
    { assetTitle: "Creative Assets Pitch Deck - Retro Aesthetic", type: "Figma File", linkUrl: "https://figma.com/file/2", deliveryStatus: 'IN_REVIEW' }
  ]);

  // UTM Generator States
  const [utmRawUrl, setUtmRawUrl] = useState<string>('https://vantageprintco.com/shop');
  const [utmSource, setUtmSource] = useState<string>('meta');
  const [utmMedium, setUtmMedium] = useState<string>('cpc');
  const [utmCampaign, setUtmCampaign] = useState<string>('retro_realities_launch');
  const [utmPremiumLock, setUtmPremiumLock] = useState<boolean>(false);
  const [generatedLinks, setGeneratedLinks] = useState<UtmLinkNode[]>([
    { id: '1', rawUrl: 'https://vantageprintco.com/shop', compiledUrl: 'https://vantageprintco.com/shop?utm_source=meta&utm_medium=cpc&utm_campaign=retro_realities_launch', source: 'meta', medium: 'cpc', campaign: 'retro_realities_launch' }
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
    if (subdomainPrefix.trim() !== '') { setPortalPremiumLock(true); return; }
    setActivePortalView(true);
  };

  // UTM Generator Functions
  const executeCompileUtmLink = () => {
    if (!utmRawUrl.trim() || !utmSource.trim() || !utmMedium.trim()) return;
    if (generatedLinks.length >= 2) { setUtmPremiumLock(true); return; }

    const cleanUrl = utmRawUrl.trim();
    const separator = cleanUrl.includes('?') ? '&' : '?';
    const cleanSource = utmSource.replace(/\s+/g, '_').toLowerCase();
    const cleanMedium = utmMedium.replace(/\s+/g, '_').toLowerCase();
    const cleanCampaign = utmCampaign.trim().replace(/\s+/g, '_').toLowerCase();

    let fullUtm = `${cleanUrl}${separator}utm_source=${cleanSource}&utm_medium=${cleanMedium}`;
    if (cleanCampaign) fullUtm += `&utm_campaign=${cleanCampaign}`;

    const newNode: UtmLinkNode = {
      id: Date.now().toString(),
      rawUrl: cleanUrl,
      compiledUrl: fullUtm,
      source: cleanSource,
      medium: cleanMedium,
      campaign: cleanCampaign
    };

    setGeneratedLinks([newNode, ...generatedLinks]);
  };

  const executeCopyLinkToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    alert("UTM string copied successfully to secure memory stack storage!");
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

      {/* ROUTER ROUTING RENDERING NODES */}
      {activeTool === 'dashboard' ? (
        <div>
          <section className="max-w-[900px] mx-auto px-6 text-center pt-20 pb-16">
            <h1 className="text-5xl font-black tracking-tight text-[#37352f] mb-4">
              10 Industries. 30 Micro-Tools. <br />
              <span className="text-blue-600">One Production Matrix.</span>
            </h1>
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
        <div className="p-8 text-center">Ad Burn Engine Component Container Active.</div>
      ) : activeTool === 'marketing_portal' ? (
        <div className="p-8 text-center">Whitelabel Portal Matrix Active.</div>
      ) : activeTool === 'marketing_utm' ? (
        
        /* ---------------------------------------------------------------------
           NEW: UTM CAMPAIGN LINK GENERATOR INTERACTIVE COMPONENT
           --------------------------------------------------------------------- */
        <div className="bg-[#fafafa]">
          
          <div className="hidden">
            <h1>Structured UTM Campaign Link Generator Engine</h1>
            <h2>Ensure spotless attribution metrics by modeling clean query syntax frameworks.</h2>
          </div>

          {/* HERO WORKSPACE BLOCK */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative">
            <div className="max-w-[820px] mx-auto">
              <span className="inline-flex items-center space-x-1.5 bg-indigo-50 text-indigo-700 font-bold px-3 py-1 rounded-full text-xs mb-4 border border-indigo-100 shadow-sm">
                <span>🔗</span> <span>Attribution Flow Assurance Matrix</span>
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] mb-6">
                Eliminate Analytics Discrepancies. <br />
                <span className="text-indigo-600">Standardize UTM Parameter Configurations.</span>
              </h1>
              <p className="text-base text-[#5c5952] max-w-2xl mx-auto mb-8">
                Spaces, lowercase formatting errors, and typos break Google Analytics multi-tenant aggregation tracking pipelines. Use this engine to auto-sanitize inputs seamlessly.
              </p>
            </div>
          </section>

          {/* WORKSPACE APP PIPELINE GRID */}
          <section className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* PARAMETER CONFIGURATION PANEL */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-[#1e1e1c] uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">
                  Matrix Input Terminal
                </h3>

                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Destination URL</label>
                    <input 
                      type="text"
                      value={utmRawUrl}
                      onChange={(e) => setUtmRawUrl(e.target.value)}
                      placeholder="https://example.com/landing"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Campaign Source</label>
                      <input 
                        type="text"
                        value={utmSource}
                        onChange={(e) => setUtmSource(e.target.value)}
                        placeholder="meta, google, newsletter"
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Campaign Medium</label>
                      <input 
                        type="text"
                        value={utmMedium}
                        onChange={(e) => setUtmMedium(e.target.value)}
                        placeholder="cpc, story, email"
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Campaign Name</label>
                    <input 
                      type="text"
                      value={utmCampaign}
                      onChange={(e) => setUtmCampaign(e.target.value)}
                      placeholder="summer_clearance_sale"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>
                </div>

                <button
                  onClick={executeCompileUtmLink}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all mt-2"
                >
                  Compile Tracking String
                </button>
              </div>

              {/* DYNAMIC LIST LAYER FEED */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* UPGRADE NOTIFICATION VAULT IF UNLOCKED TIER CAP */}
                {utmPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50/50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">⚠️ Bulk Matrix Batch Limit Reached</span>
                      <p className="text-[11px] text-amber-800 mt-0.5">Free generation logs are capped at 2 tracking elements. Upgrade token nodes to deploy nested tracking schemas.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-indigo-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0">
                      Unlock Bulk ($10 Tier)
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Active Output Vectors</span>
                    <span className="text-[10px] font-mono text-gray-400">Total Tokens: {generatedLinks.length}</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {generatedLinks.map((node) => (
                      <div key={node.id} className="p-5 space-y-3 hover:bg-[#faf9f6] transition-colors">
                        
                        <div className="flex flex-wrap gap-2">
                          <span className="text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-100 font-bold px-2 py-0.5 rounded">src: {node.source}</span>
                          <span className="text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-100 font-bold px-2 py-0.5 rounded">med: {node.medium}</span>
                          {node.campaign && (
                            <span className="text-[10px] font-mono bg-green-50 text-green-700 border border-green-100 font-bold px-2 py-0.5 rounded">camp: {node.campaign}</span>
                          )}
                        </div>

                        <div className="bg-[#fcfbfa] border border-[#e9e8e4] rounded-lg p-3 flex items-center justify-between gap-4">
                          <span className="text-xs font-mono text-gray-600 truncate flex-1 tracking-tight">
                            {node.compiledUrl}
                          </span>
                          <button
                            onClick={() => executeCopyLinkToClipboard(node.compiledUrl)}
                            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 shrink-0 bg-white border border-[#e9e8e4] px-3 py-1.5 rounded-md shadow-sm transition-colors"
                          >
                            Copy String
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </section>

        </div>
      ) : null}

      {/* FOOTER ANCHOR LAYER */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All parameters verified.</span>
      </footer>

    </div>
  );
}