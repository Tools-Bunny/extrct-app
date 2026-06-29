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

interface MenuItemNode {
  id: string;
  itemName: string;
  category: string;
  price: number;
  isAvailable: boolean;
}

export default function AppCoreArchitecture() {
  const [activeTool, setActiveTool] = useState<string>('cafe_qr'); // Active view locked to dynamic QR menu setup
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('cafe');

  // Shared Core Billing Handshake States
  const [isStripeProcessing, setIsStripeProcessing] = useState<boolean>(false);

  // QR Presenter Dashboard States
  const [dishName, setDishName] = useState<string>('');
  const [dishCategory, setDishCategory] = useState<string>('Main Course');
  const [dishPrice, setDishPrice] = useState<number>(250);
  const [qrPremiumLock, setQrPremiumLock] = useState<boolean>(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const [menuItems, setMenuItems] = useState<MenuItemNode[]>([
    {
      id: "1",
      itemName: "Spicy Paneer Tikka Wrap",
      category: "Quick Bites",
      price: 180,
      isAvailable: true
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
      alert("Stripe Checkout Framework: Initializing persistent standalone hosting server node tokens for custom domains.");
    }, 1100);
  };

  // Menu layout deployment compiler block
  const executeCompileMenuItem = () => {
    if (!dishName.trim() || dishPrice <= 0) return;

    // Simulation cap threshold checking for free accounts
    if (menuItems.length >= 3) {
      setQrPremiumLock(true);
      return;
    }

    const newItem: MenuItemNode = {
      id: Date.now().toString(),
      itemName: dishName.trim(),
      category: dishCategory,
      price: dishPrice,
      isAvailable: true
    };

    setMenuItems([...menuItems, newItem]);
    setDishName('');
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

      {/* COMPONENT LAYER ROUTER VIEW CONTROL */}
      {activeTool === 'cafe_qr' ? (
        
        <div className="bg-[#fafafa]">
          
          {/* SEARCH ATTRIBUTION DATA ENGINE ON-PAGE SEO SPEC */}
          <div className="hidden">
            <h1>Dynamic QR Code Digital Menu Presenter Engine | Restaurant Tech SaaS</h1>
            <h2>Instant standalone mobile digital menu template configs and reprinting cost mitigators.</h2>
            <p>Deploy responsive online restaurant menus, alter platter card item valuations instantly, arrange custom ingredient category splits, and distribute clean mobile scans for dining tables natively.</p>
          </div>

          {/* SaaS UNIQUE HERO SALES WORKSPACE SECTION */}
          <section className="bg-white border-b border-[#e9e8e4] pt-20 pb-16 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e3e2de_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
            
            <div className="max-w-[860px] mx-auto relative z-10">
              <span className="inline-flex items-center space-x-1.5 bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm">
                <span>📱</span> <span>Zero-Reprint Digital Menu Architect</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1e1e1c] leading-[1.12] mb-6">
                Stop Re-Printing Paper Menus. <br />
                <span className="text-indigo-600">Update Platter Card Prices Instantly.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5c5952] max-w-2xl mx-auto leading-relaxed mb-8">
                Wasting thousands on print shops whenever ingredient rates fluctuate burns away valuable cafe cash flows. Build your clean, standalone digital menu link and let diners browse items seamlessly from table scans.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#menu-terminal" className="w-full sm:w-auto bg-[#1e1e1c] text-white font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-md">
                  Launch Menu Setup Terminal ↓
                </a>
                <button onClick={triggerSecureStripeCheckout} className="w-full sm:w-auto bg-white border border-[#e9e8e4] text-gray-800 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-[#faf9f6] shadow-sm transition-all">
                  Unlock Custom Brand Domain Hosting ($10)
                </button>
              </div>
            </div>
          </section>

          {/* APPLICATION INTERACTIVE TELEMETRY CONTAINER */}
          <section id="menu-terminal" className="max-w-[1040px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* ENTRY FORMS COMPONENT WIDGET PANEL */}
              <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-sm p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-[#f3f2ee]">Menu Item Constructor</h3>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 block mb-1">Item Title on Card</label>
                    <input 
                      type="text" 
                      value={dishName}
                      onChange={(e) => setDishName(e.target.value)}
                      placeholder="e.g. Double Cheese Margherita Pizza"
                      className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Category Slice</label>
                      <select
                        value={dishCategory}
                        onChange={(e) => setDishCategory(e.target.value)}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-bold text-gray-700"
                      >
                        <option value="Quick Bites">Quick Bites</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Mocktails/Beverages">Beverages</option>
                        <option value="Desserts">Desserts</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 block mb-1">Customer Price (₹)</label>
                      <input 
                        type="number" 
                        value={dishPrice}
                        onChange={(e) => setDishPrice(Number(e.target.value))}
                        className="w-full p-2.5 border border-[#e9e8e4] rounded-lg text-xs bg-[#faf9f6] font-mono focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeCompileMenuItem}
                  disabled={!dishName.trim() || dishPrice <= 0}
                  className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white disabled:bg-gray-100 disabled:text-gray-400 font-bold text-xs py-3 rounded-lg uppercase tracking-wider transition-all"
                >
                  Deploy Item to Live Feed
                </button>
              </div>

              {/* MOBILES DEMO SIMULATOR RESPONSE CELL SCREEN */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* RIGID STRIPE GATING TRIGGER CONTAINER BARRIER */}
                {qrPremiumLock && (
                  <div className="border border-amber-300 bg-amber-50 p-4 rounded-xl flex items-center justify-between animate-in fade-in">
                    <div className="max-w-md">
                      <span className="text-xs font-bold text-amber-950 block">🔒 Menu Capacity Gating Active (Free Tier)</span>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">Free local configurations map up to 3 item cards to manage memory slots. Upgrade to our $10 premium standalone layer to secure unlimited platter items and hosted custom domain setups.</p>
                    </div>
                    <button onClick={triggerSecureStripeCheckout} className="bg-indigo-600 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0 hover:bg-indigo-700 transition-colors">
                      Unlock Full Menu
                    </button>
                  </div>
                )}

                {/* VISUAL DEVICE LOOK MENU DISPLAY CONTAINER */}
                <div className="bg-white border border-[#e9e8e4] rounded-xl shadow-md overflow-hidden max-w-sm mx-auto border-t-[12px] border-t-black rounded-b-2xl">
                  <div className="px-5 py-4 bg-gray-50 border-b border-[#e9e8e4] text-center">
                    <span className="text-xs font-black tracking-widest uppercase text-gray-900 block">✨ THE LOCAL BISTRO ✨</span>
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-tight block mt-0.5">Scan Table Vector Connection: Live</span>
                  </div>

                  <div className="p-4 space-y-3 min-h-[280px] bg-white divide-y divide-gray-100">
                    {menuItems.map((item) => (
                      <div key={item.id} className="pt-3 flex justify-between items-center first:pt-0">
                        <div>
                          <span className="text-xs font-bold text-gray-800 block">{item.itemName}</span>
                          <span className="text-[10px] bg-gray-100 font-mono text-gray-500 px-1.5 py-0.2 rounded border border-gray-100 inline-block mt-0.5">
                            {item.category}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-black text-indigo-600">
                          ₹{item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-gray-50 text-center border-t border-[#edece9]">
                    <div className="w-16 h-16 bg-white border border-gray-200 mx-auto rounded flex items-center justify-center shadow-sm">
                      <span className="text-2xl">📱</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 mt-1.5 block">Standalone QR Target Link Active</span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* PROGRAMMATIC SEO INFOGRAPHICS MAPS SECTION */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-2">Automated Menu Architecture</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">The Instant Digital Deployment Loop</h2>
                <p className="text-xs text-gray-500 mt-2">How raw pricing updates reflect instantly onto diners' smartphones without print-shop delays.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-xs mb-4">01</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Card Injection</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Manager changes specific platter items, price boundaries, or availability parameters straight inside the central interface terminal dashboard.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs mb-4">02</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Live Matrix Refresh</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">The internal dynamic cloud framework compiles parameters natively, updating the live menu page view across all dining table endpoints simultaneously.</p>
                </div>
                <div className="p-6 bg-[#fafafa] border border-[#e9e8e4] rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs mb-4">03</div>
                  <h4 className="font-bold text-sm text-[#1e1e1c] mb-1.5">Frictionless Browsing</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Guests scan the fixed tabletop vector tags to pull up clean, responsive card schemas, maximizing speed of order entry routines.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SaaS VALUE DRIVING REVENUE USPs CARD GRIDS */}
          <section className="border-t border-[#edece9] bg-[#fbfbfa] py-16 px-6">
            <div className="max-w-[1040px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">High Speed Modern Restaurant Utilities</span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Intercept Material Cost Volatility <br />With Agile Menu Pricing.</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Heavy point-of-sale restaurant software ecosystems lock digital menus behind massive setup rules, complicated dashboard clicks, and expensive monthly fees. <b>extrct.app</b> gives you complete, independent pricing freedom.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">🛑</span>
                    <span className="font-bold text-xs text-gray-900 block">Zero Re-Printing Costs</span>
                    <p className="text-[11px] text-gray-400 mt-1">Change item parameters inside 5 seconds without spending a rupee on paper setups.</p>
                  </div>
                  <div className="p-5 bg-white border border-[#e9e8e4] rounded-xl shadow-sm">
                    <span className="text-xl block mb-1">📱</span>
                    <span className="font-bold text-xs text-gray-900 block">Ultra-Responsive Speed</span>
                    <p className="text-[11px] text-gray-400 mt-1">Lightweight design parameters render instantly on any basic mobile layout or device screen.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DYNAMIC ON-PAGE HIGH-CONVERTING FAQ ACCORDION PATTERNS */}
          <section className="border-t border-[#edece9] bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Frequently Answered Queries</h3>
                <p className="text-xs text-gray-400 mt-1">Everything you need to master about configuring tabletop digital menu vectors.</p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    q: "Do restaurant guests need a separate device application to pull up the digital menu?",
                    a: "Not at all. The standalone presentation engine compiles a highly compressed standard responsive web route. Guests simply scan the table QR sticker with their device's built-in native camera to read menu cards instantly."
                  },
                  {
                    q: "What properties execute inside the premium custom domain upgrade tier?",
                    a: "The standard trial layer hosts your layout config vectors under an extrct.app sub-route. Upgrading to our premium setup allows you to map your own corporate custom domain (e.g. menu.yourcafe.com) to reinforce brand presence."
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