"use client";

import React, { useState } from 'react';
import { processMatrixTool, MatrixReport } from '../modules/matrixProcessor';

type ToolType = 
  | 'dashboard' | 'ecom_fee' | 'ecom_img' | 'ecom_radar'
  | 'marketing_burn' | 'marketing_portal' | 'marketing_utm'
  | 'mfg_yield' | 'mfg_maintenance' | 'mfg_costing'
  | 'real_estate_whatsapp';

type IndustryType = 'ecom' | 'marketing' | 'mfg' | 'real_estate';

export default function SolopreneurMegaMenuPlatform() {
  const [activeTool, setActiveTool] = useState<ToolType>('dashboard');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryType>('ecom');
  const [currentOutput, setCurrentOutput] = useState<MatrixReport | null>(null);
  const [imageCount, setImageCount] = useState<number>(6);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const selectToolFromMenu = (toolId: ToolType) => {
    setActiveTool(toolId);
    setCurrentOutput(null);
    setIsMegaMenuOpen(false);
  };

  const triggerToolSimulation = (toolId: ToolType, customInput?: any) => {
    setIsProcessing(true);
    const result = processMatrixTool(toolId, customInput);
    setTimeout(() => {
      setCurrentOutput(result);
      setIsProcessing(false);
    }, 300);
  };

  const handleCheckout = () => {
    alert("Redirecting to $10 Tier Premium Secure Stripe Unlock Node Gateway...");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#37352f] font-sans antialiased text-[14px] relative">
      
      {/* GLOBAL TOP NAVIGATION BAR */}
      <header className="h-16 bg-white border-b border-[#edece9] sticky top-0 z-50 px-8 flex items-center justify-between select-none">
        <div className="flex items-center space-x-8">
          
          {/* Logo Branding */}
          <div onClick={() => { setActiveTool('dashboard'); setCurrentOutput(null); }} className="flex items-center space-x-2 cursor-pointer">
            <div className="w-6 h-6 bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-xs">M</div>
            <span className="font-bold text-base tracking-tight text-[#37352f]">extrct.app</span>
          </div>

          {/* Navigation Links with Interactive Dropdown Container */}
          <nav className="relative flex items-center h-full">
            <button 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className={`flex items-center space-x-1 font-medium text-sm px-3 py-1.5 rounded-md transition-colors ${isMegaMenuOpen ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}
            >
              <span>Solutions</span>
              <span className={`text-[10px] transform transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* THE MEGA MENU DROPDOWN PANEL */}
            {isMegaMenuOpen && (
              <div className="absolute top-[52px] left-0 w-[640px] bg-white border border-[#edece9] shadow-xl rounded-xl overflow-hidden flex z-50">
                
                {/* Left Columns: Industries Selector Panel */}
                <div className="w-[220px] bg-[#fbfbfa] border-r border-[#edece9] p-3 space-y-[2px]">
                  <div className="px-2 py-1.5 text-[11px] font-bold text-[#7c7b77] uppercase tracking-wider">Industries</div>
                  
                  <div 
                    onMouseEnter={() => setHoveredIndustry('ecom')}
                    className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === 'ecom' ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.03)]'}`}
                  >
                    <span>📦 E-Commerce</span>
                    {hoveredIndustry === 'ecom' && <span className="text-[10px] text-[#7c7b77]">→</span>}
                  </div>

                  <div 
                    onMouseEnter={() => setHoveredIndustry('marketing')}
                    className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === 'marketing' ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.03)]'}`}
                  >
                    <span>📈 Marketing Agencies</span>
                    {hoveredIndustry === 'marketing' && <span className="text-[10px] text-[#7c7b77]">→</span>}
                  </div>

                  <div 
                    onMouseEnter={() => setHoveredIndustry('mfg')}
                    className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === 'mfg' ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.03)]'}`}
                  >
                    <span>🏗️ Manufacturing & MSMEs</span>
                    {hoveredIndustry === 'mfg' && <span className="text-[10px] text-[#7c7b77]">→</span>}
                  </div>

                  <div 
                    onMouseEnter={() => setHoveredIndustry('real_estate')}
                    className={`px-3 py-2 rounded-lg cursor-pointer text-[13px] font-medium flex items-center justify-between transition-colors ${hoveredIndustry === 'real_estate' ? 'bg-[rgba(55,53,47,0.06)] text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.03)]'}`}
                  >
                    <span>🏡 Real Estate</span>
                    {hoveredIndustry === 'real_estate' && <span className="text-[10px] text-[#7c7b77]">→</span>}
                  </div>
                </div>

                {/* Right Columns: Target Micro-Utilities Content Links */}
                <div className="flex-1 p-4 bg-white space-y-1">
                  <div className="px-2 pb-2 text-[11px] font-bold text-[#7c7b77] uppercase tracking-wider border-b border-[#f1f0ee] mb-2">Available Operational Tools</div>
                  
                  {/* E-Com Target Panel Links */}
                  {hoveredIndustry === 'ecom' && (
                    <>
                      <div onClick={() => selectToolFromMenu('ecom_fee')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">📑 Fee & Overcharge Auditor</div>
                        <div className="text-[12px] text-[#7c7b77]">Audits structural weight tier discrepancies.</div>
                      </div>
                      <div onClick={() => selectToolFromMenu('ecom_img')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">🗜️ Image WebP Compressor</div>
                        <div className="text-[12px] text-[#7c7b77]">Batch conversion pipeline for rapid asset loads.</div>
                      </div>
                      <div onClick={() => selectToolFromMenu('ecom_radar')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">📡 Competitor Price Radar</div>
                        <div className="text-[12px] text-[#7c7b77]">Automated daily listing scraper maps.</div>
                      </div>
                    </>
                  )}

                  {/* Digital Marketing Target Panel Links */}
                  {hoveredIndustry === 'marketing' && (
                    <>
                      <div onClick={() => selectToolFromMenu('marketing_burn')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">🚨 Ad-Spend Budget Burn Alert</div>
                        <div className="text-[12px] text-[#7c7b77]">Triggers active pacing alarms across networks.</div>
                      </div>
                      <div onClick={() => selectToolFromMenu('marketing_portal')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">🌐 Whitelabel Notion Client Portal</div>
                        <div className="text-[12px] text-[#7c7b77]">One-click clean portfolio statuses sharing hubs.</div>
                      </div>
                      <div onClick={() => selectToolFromMenu('marketing_utm')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">🔗 UTM Campaign Link Generator</div>
                        <div className="text-[12px] text-[#7c7b77]">Structured matrix arrays for clean attribution.</div>
                      </div>
                    </>
                  )}

                  {/* Manufacturing Target Panel Links */}
                  {hoveredIndustry === 'mfg' && (
                    <>
                      <div onClick={() => selectToolFromMenu('mfg_yield')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">📉 Raw Material Yield Detector</div>
                        <div className="text-[12px] text-[#7c7b77]">Flags floor drops against standard input logs.</div>
                      </div>
                      <div onClick={() => selectToolFromMenu('mfg_maintenance')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">🔧 Maintenance Scheduler Alert</div>
                        <div className="text-[12px] text-[#7c7b77]">Backend alerts sequence before deadlines.</div>
                      </div>
                      <div onClick={() => selectToolFromMenu('mfg_costing')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">🧮 Production Batch Costing Tool</div>
                        <div className="text-[12px] text-[#7c7b77]">Real-time unit costing calculators.</div>
                      </div>
                    </>
                  )}

                  {/* Real Estate Target Panel Links */}
                  {hoveredIndustry === 'real_estate' && (
                    <>
                      <div onClick={() => selectToolFromMenu('real_estate_whatsapp')} className="p-2 rounded-lg hover:bg-[rgba(55,53,47,0.04)] cursor-pointer group">
                        <div className="font-semibold text-sm text-[#37352f]">💬 WhatsApp Bulk Match Engine</div>
                        <div className="text-[12px] text-[#7c7b77]">Instantly parses specs into bulk messages.</div>
                      </div>
                    </>
                  )}
                </div>

              </div>
            )}
          </nav>
        </div>

        <div className="text-xs text-[#7c7b77] border border-[#edece9] px-3 py-1 rounded-full bg-[#fbfbfa]">
          Ecosystem: <b>Active</b>
        </div>
      </header>

      {/* BACKGROUND DISMISSER LAYER */}
      {isMegaMenuOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsMegaMenuOpen(false)} />}

      {/* CORE WORKSPACE CONTENT DEPLOYMENT HUB */}
      <main className="max-w-[760px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-white border border-[#edece9] rounded-xl shadow-sm p-12 min-h-[420px]">
          
          {/* DASHBOARD ENTRY VIEW ELEMENT */}
          {activeTool === 'dashboard' && (
            <div className="text-center pt-8">
              <h1 className="text-4xl font-bold tracking-tight text-[#37352f] mb-3">Welcome to Platform Matrix Terminal</h1>
              <p className="text-[#7c7b77] text-base max-w-md mx-auto mb-8">Click on the <b>Solutions dropdown</b> menu above to launch any of your 10 elite tailored platform utilities instantly.</p>
              <div className="w-16 h-16 border-2 border-dashed border-[#edece9] rounded-xl flex items-center justify-center text-2xl mx-auto opacity-60">🎛️</div>
            </div>
          )}

          {/* DYNAMIC VIEW FOR SELECTIVE NODE CHANNELS */}
          {activeTool !== 'dashboard' && (
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#7c7b77] mb-2">
                <span>Active Terminal Node</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f] mb-4 capitalize">
                {activeTool.split('_').join(' ')}
              </h1>
              
              <p className="text-sm text-[#605e59] mb-8 leading-relaxed bg-[#fbfbfa] p-4 border border-[#edece9] rounded-lg">
                {activeTool === 'ecom_fee' && "🚨 Pain Point: Marketplaces miscalculate weight dimensions or referral fee tiers leading to leaked revenue."}
                {activeTool === 'ecom_img' && "🚨 Pain Point: Large product images slow down page load speeds dropping conversion rates and increasing cart abandonment."}
                {activeTool === 'ecom_radar' && "🚨 Pain Point: Checking competing product listings manually to adjust daily pricing models takes hours every morning."}
                {activeTool === 'marketing_burn' && "🚨 Pain Point: Overspending client budgets due to platform notification lags results in agencies paying out of pocket."}
                {activeTool === 'marketing_portal' && "🚨 Pain Point: Building custom dashboards to present links assets and project statuses professionally to clients takes hours of manual setup."}
                {activeTool === 'marketing_utm' && "🚨 Pain Point: Broken or unorganized UTM parameters ruin analytics tracking wasting thousands in ad spend attribution mistakes."}
                {activeTool === 'mfg_yield' && "🚨 Pain Point: Unexpected waste during production or items expiring in the warehouse burns through factory margins silently."}
                {activeTool === 'mfg_maintenance' && "🚨 Pain Point: Unexpected machinery breakdowns stall production floors costing thousands in idle labor and delayed orders."}
                {activeTool === 'mfg_costing' && "🚨 Pain Point: Wholesale material costs and electricity rates shift constantly causing factory owners to price bulk orders at a loss."}
                {activeTool === 'real_estate_whatsapp' && "🚨 Pain Point: Matching newly listed properties with prospective buyer criteria manually via spreadsheets takes hours leading to missed deals."}
              </p>

              {activeTool === 'ecom_img' && (
                <div className="mb-4 flex items-center space-x-3 bg-white border p-3 rounded-lg max-w-xs">
                  <label className="text-xs font-medium text-[#7c7b77]">Batch Scale Upload Check:</label>
                  <input type="number" value={imageCount} onChange={(e) => setImageCount(Number(e.target.value))} className="w-16 border rounded p-1 text-xs text-center outline-none" />
                </div>
              )}

              {/* Centralized Upload Drop Area Node Box */}
              <div 
                onClick={() => triggerToolSimulation(activeTool, activeTool === 'ecom_img' ? imageCount : null)} 
                className="border-2 border-dashed border-[#edece9] hover:border-[#37352f] rounded-xl p-14 text-center cursor-pointer mb-8 transition-all bg-[#fbfbfa]"
              >
                {isProcessing ? (
                  <span className="text-sm font-medium text-[#7c7b77] animate-pulse">Running matrix functional processing arrays...</span>
                ) : (
                  <span className="text-sm font-medium text-[#37352f]">📄 Click to simulate dragging & dropping raw dataset file log matrix</span>
                )}
              </div>

              {/* Metrics Output Generation Drawer Panel */}
              {currentOutput && (
                <div className="space-y-4 border-t border-[#edece9] pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#fbfbfa] border rounded-lg"><span className="text-xs text-[#7c7b77] uppercase font-bold tracking-wider block mb-1">Telemetry Output A</span><b className="text-base text-[#37352f]">{currentOutput.metricA}</b></div>
                    <div className="p-4 bg-[#fbfbfa] border rounded-lg"><span className="text-xs text-[#7c7b77] uppercase font-bold tracking-wider block mb-1">Telemetry Output B</span><b className="text-base text-red-600">{currentOutput.metricB}</b></div>
                  </div>

                  {currentOutput.isLocked && (
                    <div className="bg-[#fdebec] border border-[#f5c2c2] rounded-xl p-6 text-center">
                      <p className="text-sm text-[#601a1a] mb-4 font-medium">
                        {activeTool === 'ecom_fee' && "Highlights exact lines where you overpaid. Pay $10 to unlock the pre-filled dispute sheet export to claim refunds."}
                        {activeTool === 'ecom_img' && "Free tier limits processing to 5 images per batch. Premium unlocks bulk processing of up to 1000 variants instantly."}
                        {activeTool === 'ecom_radar' && "Free accounts track 1 URL. Paid accounts unlock real-time tracking and automated alerts."}
                        {activeTool === 'marketing_burn' && "Free tier tracks 1 client account; paid tier scales to support unlimited ad accounts."}
                        {activeTool === 'marketing_portal' && "Free pages carry your platform's watermark. The $10 tier removes it and unlocks custom subdomains."}
                        {activeTool === 'mfg_yield' && "Flags exact department leaks. Pay $10 to unlock historical waste trends analytics and export deep logs."}
                        {activeTool === 'mfg_maintenance' && "Free tier tracks 2 primary machines. Premium unlocks unlimited machine logging and sends automated alerts."}
                        {activeTool === 'mfg_costing' && "Free tier allows calculation but doesn't save configurations. Premium stores custom templates for up to 50 product categories."}
                        {activeTool === 'real_estate_whatsapp' && "Paid tier allows automated bulk matching and message broadcasting specs nodes."}
                      </p>
                      <button onClick={handleCheckout} className="bg-[#37352f] text-white text-xs font-semibold py-2 px-5 rounded-lg hover:bg-[#2c2a27] transition-all shadow-sm">
                        Unlock Premium Operational Node ($10)
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}