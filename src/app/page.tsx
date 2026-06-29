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
      { id: 'hotel_checkout', shortName: "⏰ Late-Checkout Upsell Automator", tagline: "Deploys departure extension upsell strings to guest chats." }
    ]
  }
};

interface RecipeCostNode {
  id: string;
  recipeName: string;
  rawIngredientCost: number;
  menuSellingPrice: number;
  actualFoodCostRatio: number;
  marginStatus: 'OPTIMAL_MARGIN' | 'INFLATION_COMPRESSED' | 'CRITICAL_BLEED';
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('cafe_costing'); // Locked to recipe costing tool node
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('cafe');

  // Shared Core Payments Configuration State
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // Recipe Costing Matrix State Parameters
  const [recipeTitle, setRecipeTitle] = useState<string>('');
  const [ingredientCost, setIngredientCost] = useState<number>(120);
  const [sellingPrice, setSellingPrice] = useState<number>(450);
  const [costingPremiumLock, setCostingPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [recipeLedger, setRecipeLedger] = useState<RecipeCostNode[]>([
    {
      id: "1",
      recipeName: "Signature Basil Alfredo Pasta",
      rawIngredientCost: 145,
      menuSellingPrice: 420,
      actualFoodCostRatio: 34.5,
      marginStatus: "INFLATION_COMPRESSED"
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
      alert("Stripe Verification Gateway: Connecting live wholesale ingredient index sync API nodes.");
    }, 1100);
  };

  // Algorithmic ratio validation analysis loop
  const executeCompileRecipeMargin = () => {
    if (!recipeTitle.trim() || ingredientCost <= 0 || sellingPrice <= 0) return;

    // Simulation limit threshold framework rule check
    if (recipeLedger.length >= 2) {
      setCostingPremiumLock(true);
      return;
    }

    const computedRatio = parseFloat(((ingredientCost / sellingPrice) * 100).toFixed(1));
    let status: 'OPTIMAL_MARGIN' | 'INFLATION_COMPRESSED' | 'CRITICAL_BLEED' = 'OPTIMAL_MARGIN';

    if (computedRatio > 40) status = 'CRITICAL_BLEED';
    else if (computedRatio > 30) status = 'INFLATION_COMPRESSED';

    const newRecipe: RecipeCostNode = {
      id: Date.now().toString(),
      recipeName: recipeTitle.trim(),
      rawIngredientCost: ingredientCost,
      menuSellingPrice: sellingPrice,
      actualFoodCostRatio: computedRatio,
      marginStatus: status
    };

    setRecipeLedger([newRecipe, ...recipeLedger]);
    setRecipeTitle('');
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

      {/* COMPONENT SWITCH DISPATCH ROUTER */}
      {activeTool === 'cafe_costing' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* BOT SEARCH CRAWLER ATTRIBUTION DATA ON-PAGE SEO METRICS */}
          <div className="hidden">
            <h1>Recipe Food-Cost & Inflation Tracker Engine | Restaurant Yield Finance</h1>
            <h2>Automated granular menu pricing calculators and ingredient inflation trackers for commercial kitchens.</h2>
            <p>Track retail kitchen food cost percentage margins, evaluate raw item wholesale pricing matrices, parse batch scale expenses logs, and intercept margin compression leaks instantly.</p>
          </div>

          {/* SaaS VALUE PROPOSITION HERO SECTION */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>🍳</span> <span>Granular Menu Food Cost Defense Core</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Stop Bleeding Profits on Menu Items. <br />
                <span className="text-emerald-600">Audit Exact Food Cost Percentages In Real-Time.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Volatile wholesale supply chains change ingredient quotes silently. If you do not adjust plate realizations against material updates, inflation strips away net profits entirely. Track ratio matrices right inside your kitchen layout.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#costing-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Open Food-Cost Terminal ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Sync Live Mandi Wholesale Index ($10)
                </button>
              </div>
            </div>
          </section>

          {/* APPLICATION RUNTIME TELEMETRY WORKSPACE */}
          <section id="costing-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* RECIPE FORM INPUT WIDGET PANEL */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Dish Metric Controls</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Menu Dish / Recipe Name</label>
                    <input 
                      type="text" 
                      value={recipeTitle}
                      onChange={(e) => setRecipeTitle(e.target.value)}
                      placeholder="e.g. Tandoori Paneer Tikka Platter"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Ingredient Cost (₹)</label>
                      <input 
                        type="number" 
                        value={ingredientCost}
                        onChange={(e) => setIngredientCost(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Menu Card Price (₹)</label>
                      <input 
                        type="number" 
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeCompileRecipeMargin}
                  disabled={!recipeTitle.trim() || ingredientCost <= 0 || sellingPrice <= 0}
                  className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Verify Ratio Matrix
                </button>
              </div>

              {/* LIVE DIAGNOSTICS STREAM MONITOR FEED GRID */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* GATED BEHIND RIGID SYSTEM CAPACITY CEILING BARRIERS */}
                {costingPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Menu Inventory Automation Vault Engaged</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free execution nodes catalog up to 2 active recipe instances simultaneously. Remit $10 to link dynamic webhook automation arrays that update prices whenever local vendor values shift.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-emerald-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-emerald-700 transition-colors">
                      Unlock Live Index
                    </button>
                  </div>
                )}

                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-[#fcfbfa] border-b border-[#e9e8e4] flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Granular Profit Target Logs</span>
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">Costing Engine Enabled</span>
                  </div>

                  <div className="divide-y divide-[#f3f2ee]">
                    {recipeLedger.map((node) => (
                      <div key={node.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors">
                        <div className="space-y-1">
                          <span className="font-bold text-xs sm:text-sm text-[#1e1e1c] block">{node.recipeName}</span>
                          <p className="text-xs text-gray-500">
                            Raw Material Investment: <b>₹{node.rawIngredientCost}</b> | Cards Tag Price: <span className="font-mono font-bold text-gray-900">₹{node.menuSellingPrice}</span>
                          </p>
                        </div>

                        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 pt-2 sm:pt-0 border-gray-100">
                          <span className={`text-[10px] px-2.5 py-0.5 rounded font-bold tracking-tight block border ${node.marginStatus === 'CRITICAL_BLEED' ? 'bg-red-50 text-red-700 border-red-100 animate-pulse' : node.marginStatus === 'INFLATION_COMPRESSED' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-green-50 text-green-700 border-green-100'}`}>
                            {node.marginStatus === 'CRITICAL_BLEED' ? '🚨 REPRICE PLATTER' : node.marginStatus === 'INFLATION_COMPRESSED' ? '⚠️ TIGHT MARGIN' : '✓ OPTIMAL CUT'}
                          </span>
                          <span className="font-mono text-xs font-black text-gray-900 mt-1.5 block">
                            {node.actualFoodCostRatio}% Cost Ratio
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* PROGRAMMATIC SEO VALUE PROPOSITION INFOGRAPHICS */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-2">Granular Revenue Security Blueprint</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The Menu Profit Reconstruction Loop</h2>
                <p className="text-xs text-gray-500 mt-2">How we structurally slice item ingredient bills to shield food service cash flows from market surges.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🧮 01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Ingredient Aggregation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Kitchen chefs compile item-level sub-component metrics down to the exact grams or milliliters utilized inside individual platters.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">⚖ 02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Food Cost Ratio Extraction</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">System background code structures analyze raw component price weights directly against active restaurant terminal card prices to output target ratios.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="text-xl mb-3">🛡 03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1">Repricing Intercept</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Alert nodes immediately flag items where food costs breach the target safety ceiling, prompting immediate portion control adjustments.</p>
                </div>
              </div>
            </div>
          </section>

          {/* EXCLUSIVE SaaS UNIQUE SELLING PROPOSITIONS (USPs) SYSTEM CONTENT */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Optimized For Scaling Culinary Entrepreneurs</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Ditch Vulnerable Spreadsheet Guesswork. <br />Govern Your True Platter Profitability.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Messy kitchen logs or estimated component formulas hide real supplier price surges. <b>extrct.app</b> delivers complete mathematical precision to ensure your hard-earned restaurant margins are preserved.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">📈</span>
                    <span className="font-bold text-xs text-gray-900 block">Inflation Defense</span>
                    <p className="text-[11px] text-gray-400 mt-1">Identifies cost increases early to prevent individual recipe profiles from running at a net loss.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">⏱</span>
                    <span className="font-bold text-xs text-gray-900 block">Instant Portion Audits</span>
                    <p className="text-[11px] text-gray-400 mt-1">Recalculate safety margins in under 10 seconds whenever a vendor slips in alternative pricing quotes.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* HIGH-CONVERTING ON-PAGE FAQ ACCORDION PATTERN BLOCK */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Asked Questions</h3>
                <p className="text-xs text-gray-400 mt-1">Everything you need to master about safeguarding commercial kitchen profit ratios.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "What is the standard ideal food cost ratio percentage for a healthy restaurant?",
                    a: "In commercial kitchen financial frameworks, a ratio between 28% to 35% is considered optimal. Squeezing above 40% compressed boundaries signals critical leakage that demands immediate recipe repricing or portion architecture shrinkage."
                  },
                  {
                    q: "How does the $10 mandate index tier level upgrade affect my calculation telemetry?",
                    a: "The standard trial configuration maps up to 2 active recipes locally. Stepping onto our professional node bridges live mandi wholesale data variables straight into your layout framework, updating cost weights automatically."
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

      {/* FOOTER BLOCK CONTAINER */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] py-8 text-center text-xs text-[#7c7b77]">
        <span>© 2026 extrct.app SaaS Global Operations Terminal. All system frameworks verified.</span>
      </footer>

    </div>
  );
}