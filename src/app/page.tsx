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

interface MockFile {
  name: string;
  originalSize: number;
  compressedSize: number;
  reduction: number;
  altText: string;
  status: 'PENDING' | 'COMPRESSED';
}

interface AuditRow {
  orderId: string;
  sku: string;
  chargedFee: number;
  expectedFee: number;
  variance: number;
  status: 'OVERCHARGED' | 'CORRECT';
}

export default function MasterSaaSApplicationGrid() {
  const [activeTool, setActiveTool] = useState<string>('dashboard');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryKey>('ecom');
  const [notionActiveTab, setNotionActiveTab] = useState<IndustryKey>('ecom');

  // Tool 1: Auditor States
  const [csvInput, setCsvInput] = useState<string>('');
  const [auditResults, setAuditResults] = useState<AuditRow[] | null>(null);
  const [totalLeakage, setTotalLeakage] = useState<number>(0);
  const [isAuditing, setIsAuditing] = useState<boolean>(false);

  // Tool 2: Compressor States
  const [batchFiles, setBatchFiles] = useState<MockFile[]>([]);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [premiumPayloadTriggered, setPremiumPayloadTriggered] = useState<boolean>(false);

  const selectToolFromMenu = (toolId: string) => {
    setActiveTool(toolId);
    setIsMegaMenuOpen(false);
  };

  // Tool 1 Logic
  const handleSampleLoad = () => {
    setCsvInput("ORDER_ID,SKU,CHARGED_FEE\nOD8237482,NEXL-WIRELESS-HEADPHONE,180\nOD8237483,NEXL-DATA-CABLE,95\nOD8237484,NEXL-WIRELESS-HEADPHONE,210");
  };

  const runFeeAuditLogic = () => {
    if (!csvInput.trim()) return;
    setIsAuditing(true);
    setTimeout(() => {
      const rows = csvInput.split('\n').slice(1);
      let cumulativeLeak = 0;
      const compiled: AuditRow[] = rows.map((rowStr) => {
        const parts = rowStr.split(',');
        if (parts.length < 3) return null;
        const orderId = parts[0];
        const sku = parts[1];
        const chargedFee = parseFloat(parts[2]) || 0;
        let expectedFee = sku.includes('WIRELESS-HEADPHONE') ? 145 : 55;
        const variance = chargedFee - expectedFee;
        if (variance > 0) cumulativeLeak += variance;
        return { orderId, sku, chargedFee, expectedFee, variance: variance > 0 ? variance : 0, status: variance > 0 ? 'OVERCHARGED' : 'CORRECT' };
      }).filter(Boolean) as AuditRow[];
      setAuditResults(compiled);
      setTotalLeakage(cumulativeLeak);
      setIsAuditing(false);
    }, 600);
  };

  // Tool 2 Compressor Logic
  const handleBatchSimulationInsert = (count: number) => {
    setPremiumPayloadTriggered(false);
    if (count > 5) {
      setPremiumPayloadTriggered(true);
    }
    
    const mockTemplates = [
      { name: "product_front_alpha.png", size: 2450 },
      { name: "variant_angle_blue.jpg", size: 1820 },
      { name: "lifestyle_model_hd.png", size: 4120 },
      { name: "packaging_box_flat.jpg", size: 1150 },
      { name: "texture_close_up.png", size: 3100 },
      { name: "extra_dimensions_view.png", size: 2890 },
      { name: "unboxing_thumbnail_raw.jpg", size: 3900 }
    ];

    const targetCount = Math.min(count, mockTemplates.length);
    const generation: MockFile[] = [];
    
    for (let i = 0; i < targetCount; i++) {
      generation.push({
        name: mockTemplates[i].name,
        originalSize: mockTemplates[i].size,
        compressedSize: 0,
        reduction: 0,
        altText: '',
        status: 'PENDING'
      });
    }
    setBatchFiles(generation);
  };

  const processImagesToWebP = () => {
    if (batchFiles.length === 0) return;
    setIsCompressing(true);

    setTimeout(() => {
      const processed = batchFiles.map((f) => {
        const targetRatio = 0.18; // ~82% reduction rate parameters
        const comp = Math.round(f.originalSize * targetRatio);
        
        // Autogenerate standard clean alt-text descriptive labels
        let cleanLabel = f.name.replace(/_|-/g, ' ').replace(/\.jpg|\.png/g, '');
        let generatedAlt = `E-commerce listing asset showing item details for ${cleanLabel}`;

        return {
          ...f,
          compressedSize: comp,
          reduction: 82,
          altText: generatedAlt,
          status: 'COMPRESSED' as const
        };
      });
      setBatchFiles(processed);
      setIsCompressing(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-white text-[#37352f] font-sans antialiased text-[15px] relative">
      
      {/* HEADER NAVBAR LINKS CONTAINER */}
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

      {/* RENDER BRANCH ROUTER */}
      {activeTool === 'dashboard' ? (
        
        <div>
          {/* Main Notion style homepage dashboard anchor links trigger */}
          <section className="max-w-[900px] mx-auto px-6 text-center pt-20 pb-16">
            <h1 className="text-5xl font-bold tracking-tight text-[#37352f] mb-4">Run E-Commerce Asset Toolsets</h1>
            <p className="text-sm text-[#7c7b77] mb-6">Select specific tools from the top Solutions bar to view internal parameters.</p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => selectToolFromMenu('ecom_fee')} className="border px-4 py-2 rounded-xl text-xs font-semibold">1. Fee Auditor</button>
              <button onClick={() => selectToolFromMenu('ecom_img')} className="bg-[#37352f] text-white px-4 py-2 rounded-xl text-xs font-bold">2. Image Compressor →</button>
            </div>
          </section>
        </div>

      ) : activeTool === 'ecom_fee' ? (
        
        /* TOOL 1 VIEW */
        <div className="max-w-[960px] mx-auto px-6 py-12">
          <h1 className="text-2xl font-bold">Automated Marketplace Overcharge & Fee Auditor</h1>
          <button onClick={handleSampleLoad} className="text-xs text-blue-600 underline block mt-2">Load Data</button>
          <textarea value={csvInput} onChange={(e) => setCsvInput(e.target.value)} className="w-full border h-32 mt-2 font-mono p-2 text-xs" />
          <button onClick={runFeeAuditLogic} className="bg-blue-600 text-white text-xs px-4 py-2 mt-2 rounded">Run Audit</button>
        </div>

      ) : activeTool === 'ecom_img' ? (
        
        /* -------------------------------------------------------------
           COMPLETE INDEPENDENT PAGE COMPONENT: IMAGE WEBP COMPRESSOR
           ------------------------------------------------------------- */
        <div className="bg-[#fafafa] min-h-[calc(100vh-64px)] py-12">
          <main className="max-w-[960px] mx-auto px-6">
            
            {/* Spec Heading Node */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-xs text-emerald-600 font-bold uppercase tracking-wide mb-1">
                <span>🗜️ Asset Optimization Layer</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f]">
                Batch Dynamic Image Compressor & WebP Variant Converter
              </h1>
              <p className="text-[#5a5750] text-sm mt-1 max-w-2xl">
                Large product images slow down page load speeds dropping conversion rates. Drag-and-drop batch tools convert product images into web-optimized WebP formats and auto-generate clean structured standard alt-text logs.
              </p>
            </div>

            {/* Layout Processing Workstations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              
              {/* Left Sandbox Column: Batch Triggers */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white border border-[#edece9] rounded-xl shadow-sm p-6 text-center">
                  <div className="border-2 border-dashed border-[#edece9] hover:border-[#37352f] rounded-xl p-8 bg-[#fbfbfa] transition-all">
                    <span className="text-2xl block mb-2">📸</span>
                    <div className="text-xs font-bold text-[#37352f] uppercase tracking-wider mb-2">Select Simulation Batch Variant</div>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <button 
                        onClick={() => handleBatchSimulationInsert(4)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#37352f] text-xs font-semibold rounded-lg transition-colors"
                      >
                        Insert 4 Standard Assets (Free Tier)
                      </button>
                      <button 
                        onClick={() => handleBatchSimulationInsert(7)}
                        className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold rounded-lg transition-colors"
                      >
                        Insert 7 Heavy Assets (Triggers Alert)
                      </button>
                    </div>
                  </div>

                  {batchFiles.length > 0 && (
                    <button
                      onClick={processImagesToWebP}
                      disabled={isCompressing}
                      className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg text-xs transition-all tracking-wide uppercase shadow-sm"
                    >
                      {isCompressing ? "Executing Compression Matrix Engine..." : "Optimize Batch Payload"}
                    </button>
                  )}
                </div>

                {/* Processing Monitor Spreadsheet Layer */}
                {batchFiles.length > 0 && (
                  <div className="bg-white border border-[#edece9] rounded-xl shadow-sm overflow-hidden animate-in fade-in">
                    <div className="px-6 py-3.5 bg-[#fbfbfa] border-b border-[#edece9] flex justify-between items-center">
                      <h3 className="text-xs font-bold text-[#37352f] uppercase tracking-wider">Asset Operations Logs</h3>
                      <span className="text-[11px] font-mono text-gray-500">{batchFiles.length} files targeted</span>
                    </div>

                    <div className="divide-y divide-[#f1f0ee]">
                      {batchFiles.map((file, idx) => (
                        <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50">
                          <div>
                            <div className="font-mono text-xs font-bold text-[#37352f] flex items-center space-x-2">
                              <span>{file.name}</span>
                              {file.status === 'COMPRESSED' && (
                                <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.2 rounded uppercase font-bold font-sans">WebP Active</span>
                              )}
                            </div>
                            <div className="text-[11.5px] text-[#7c7b77] mt-0.5 font-sans italic">
                              {file.status === 'COMPRESSED' ? `Alt: "${file.altText}"` : "Awaiting compression vector sequence..."}
                            </div>
                          </div>

                          <div className="text-right shrink-0 flex items-center space-x-4">
                            <div className="font-mono text-xs text-gray-500">
                              <div>{(file.originalSize / 1020).toFixed(1)} MB</div>
                              {file.status === 'COMPRESSED' && (
                                <div className="text-emerald-600 font-bold">→ {(file.compressedSize / 1020).toFixed(1)} MB</div>
                              )}
                            </div>
                            {file.status === 'COMPRESSED' && (
                              <div className="bg-emerald-50 text-emerald-700 font-bold font-mono text-xs px-2 py-1 rounded">
                                -{file.reduction}%
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar SaaS Paywall Lock Block */}
              <div className="space-y-4">
                
                {/* 10-to-1000 Hook Validation Box */}
                <div className={`border rounded-xl p-6 shadow-sm transition-all duration-300 ${premiumPayloadTriggered ? 'border-amber-300 bg-amber-50/40 shadow-md' : 'border-[#edece9] bg-white'}`}>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                    SaaS Limit Shield
                  </span>
                  <h3 className="text-base font-bold text-[#37352f] mt-3">Free Tier Limitation Nodes</h3>
                  <p className="text-xs text-[#7c7b77] mt-1 leading-relaxed">
                    Free tier limits processing to <b>5 images per batch</b>. Premium tiers unlock bulk processing configurations for up to 1000 items instantly.
                  </p>

                  {premiumPayloadTriggered && (
                    <div className="mt-4 p-3 bg-white border border-amber-200 rounded-lg animate-in slide-in-from-top-2">
                      <div className="text-xs font-bold text-amber-900 flex items-center space-x-1">
                        <span>⚠️ Processing Limit Overage</span>
                      </div>
                      <p className="text-[11.5px] text-amber-800 mt-0.5">
                        You have queued <b>{batchFiles.length} variants</b>. Free tier will drop assets beyond index 5. Unlock premium dashboard to clean entire directories.
                      </p>
                      <button
                        onClick={() => alert("Redirecting to premium tier subscription sequence portal...")}
                        className="w-full mt-3 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded-lg text-xs tracking-wide uppercase transition-all"
                      >
                        Unlock Instant Bulk Processing
                      </button>
                    </div>
                  )}
                </div>

                {/* Meta Parameters Spec Cards */}
                <div className="bg-white border border-[#edece9] rounded-xl p-4 text-xs">
                  <div className="font-bold uppercase tracking-wider text-[10px] text-gray-400 mb-2">Technical Matrix Spec</div>
                  <div className="text-gray-600 leading-relaxed space-y-1">
                    <div>• Format: <code>image/webp</code> lossy profile</div>
                    <div>• Meta Strip: Auto-scrub EXIF geo coordinates</div>
                    <div>• Resolution Limits: Bound to 2048px maximum width</div>
                  </div>
                </div>

              </div>

            </div>
          </main>
        </div>

      ) : (
        <div className="p-12 text-center text-xs font-mono text-gray-400">Endpoint active</div>
      )}

      {/* FOOTER SYSTEM SYSTEM */}
      <footer className="border-t border-[#edece9] bg-[#fbfbfa] pt-16 pb-12 select-none">
        <div className="max-w-[900px] mx-auto px-6 text-center text-xs text-[#7c7b77]">
          <span>© 2026 extrct.app Terminal Technologies Inc. All parameters synced.</span>
        </div>
      </footer>

    </div>
  );
}