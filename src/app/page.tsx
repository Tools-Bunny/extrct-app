"use client";

import React, { useState } from 'react';
import { processMatrixTool, MatrixReport } from '../modules/matrixProcessor';

type ToolType = 
  | 'dashboard' | 'ecom_fee' | 'ecom_img' | 'ecom_radar'
  | 'marketing_burn' | 'marketing_portal' | 'marketing_utm'
  | 'mfg_yield' | 'mfg_maintenance' | 'mfg_costing'
  | 'real_estate_whatsapp';

export default function SolopreneurWorkspace() {
  const [activeTab, setActiveTab] = useState<ToolType>('dashboard');
  const [currentOutput, setCurrentOutput] = useState<MatrixReport | null>(null);
  const [imageCount, setImageCount] = useState<number>(6); // For Tool 2 limits testing
  const [isProcessing, setIsProcessing] = useState(false);

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
    <div className="flex min-h-screen bg-white text-[#37352f] font-sans antialiased text-[14px]">
      
      {/* Pixel-Perfect Notion Sidebar */}
      <aside className="w-[260px] bg-[#fbfbfa] border-r border-[#edece9] flex flex-col justify-between select-none shrink-0 overflow-y-auto">
        <div className="py-3 px-3">
          
          {/* Workspace Switcher Component */}
          <div onClick={() => { setActiveTab('dashboard'); setCurrentOutput(null); }} className="flex items-center space-x-2 p-1.5 hover:bg-[rgba(55,53,47,0.04)] rounded-md cursor-pointer transition-colors">
            <div className="w-[20px] h-[20px] bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-[11px]">M</div>
            <span className="font-semibold text-sm tracking-tight text-[#37352f]">Master Matrix Workspace</span>
          </div>

          {/* INDUSTRY CATEGORY 1 */}
          <div className="mt-5 px-2 py-1 text-[11px] font-semibold text-[#7c7b77] tracking-wider uppercase">📦 E-Commerce</div>
          <div className="space-y-[1px]">
            <div onClick={() => { setActiveTab('ecom_fee'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'ecom_fee' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              📑 Fee & Overcharge Auditor
            </div>
            <div onClick={() => { setActiveTab('ecom_img'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'ecom_img' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              Im🗜️ Image WebP Compressor
            </div>
            <div onClick={() => { setActiveTab('ecom_radar'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'ecom_radar' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              📡 Competitor Price Radar
            </div>
          </div>

          {/* INDUSTRY CATEGORY 2 */}
          <div className="mt-5 px-2 py-1 text-[11px] font-semibold text-[#7c7b77] tracking-wider uppercase">📈 Marketing Agencies</div>
          <div className="space-y-[1px]">
            <div onClick={() => { setActiveTab('marketing_burn'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'marketing_burn' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              🚨 Ad-Spend Budget Burn Alert
            </div>
            <div onClick={() => { setActiveTab('marketing_portal'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'marketing_portal' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              🌐 Whitelabel Notion Client Portal
            </div>
            <div onClick={() => { setActiveTab('marketing_utm'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'marketing_utm' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              🔗 UTM Campaign Link Generator
            </div>
          </div>

          {/* INDUSTRY CATEGORY 3 */}
          <div className="mt-5 px-2 py-1 text-[11px] font-semibold text-[#7c7b77] tracking-wider uppercase">🏗️ Manufacturing & MSMEs</div>
          <div className="space-y-[1px]">
            <div onClick={() => { setActiveTab('mfg_yield'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'mfg_yield' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              📉 Raw Material Yield Detector
            </div>
            <div onClick={() => { setActiveTab('mfg_maintenance'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'mfg_maintenance' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              🔧 Maintenance Scheduler Alert
            </div>
            <div onClick={() => { setActiveTab('mfg_costing'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'mfg_costing' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              🧮 Production Batch Costing Tool
            </div>
          </div>

          {/* INDUSTRY CATEGORY 4 */}
          <div className="mt-5 px-2 py-1 text-[11px] font-semibold text-[#7c7b77] tracking-wider uppercase">🏡 Real Estate</div>
          <div className="space-y-[1px]">
            <div onClick={() => { setActiveTab('real_estate_whatsapp'); setCurrentOutput(null); }} className={`px-2 py-1.5 rounded-md cursor-pointer text-[13px] truncate ${activeTab === 'real_estate_whatsapp' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              💬 WhatsApp Bulk Alert Match Engine
            </div>
          </div>

        </div>
      </aside>

      {/* Main Container Content */}
      <main className="flex-1 bg-white overflow-y-auto">
        <div className="h-11 px-12 border-b border-[#edece9] flex items-center text-[13px] text-[#7c7b77]">
          <span>Index</span><span className="mx-2 text-[#edece9]">/</span>
          <span className="text-[#37352f] uppercase text-xs font-mono tracking-wider">{activeTab.replace('_', ' ')}</span>
        </div>

        <div className="max-w-[720px] mx-auto px-12 pt-14 pb-28">
          
          {/* DASHBOARD HOMEPAGE INTERFACE */}
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#37352f] mb-2">Platform Matrix Terminal</h1>
              <p className="text-[#7c7b77] text-[15px] mb-8">All 10 elite solopreneur utilities compiled dynamically from deployment index profiles.</p>
              
              <div className="grid grid-cols-1 gap-2">
                <div onClick={() => setActiveTab('ecom_fee')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">📦 <b>E-Com:</b> Automated Marketplace Overcharge & Fee Auditor</div>
                <div onClick={() => setActiveTab('ecom_img')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">📦 <b>E-Com:</b> Batch Dynamic Image Compressor & WebP Variant Converter</div>
                <div onClick={() => setActiveTab('ecom_radar')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">📦 <b>E-Com:</b> Competitor Price-Drop & Stock-Out Radar</div>
                
                <div onClick={() => setActiveTab('marketing_burn')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">📈 <b>Marketing:</b> Multi-Platform Ad-Spend Budget Burn Alert System</div>
                <div onClick={() => setActiveTab('marketing_portal')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">📈 <b>Marketing:</b> Whitelabel Client Notion/Portal Generator</div>
                <div onClick={() => setActiveTab('marketing_utm')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">📈 <b>Marketing:</b> UTM Campaign Link Generator Tool</div>
                
                <div onClick={() => setActiveTab('mfg_yield')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">🏗️ <b>Manufacturing:</b> Raw Material Yield & Dead-Stock Leak Detector</div>
                <div onClick={() => setActiveTab('mfg_maintenance')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">🏗️ <b>Manufacturing:</b> Machine Breakdown & Preventative Maintenance Scheduler</div>
                <div onClick={() => setActiveTab('mfg_costing')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">🏗️ <b>Manufacturing:</b> Production Batch Costing & Dynamic Margin Calculator</div>
                
                <div onClick={() => setActiveTab('real_estate_whatsapp')} className="p-3 border rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer">🏡 <b>Real Estate:</b> WhatsApp Bulk Property Alert & Match Engine</div>
              </div>
            </div>
          )}

          {/* DYNAMIC UTILITY VIEWS RENDERING TARGETS */}
          {activeTab !== 'dashboard' && (
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2 capitalize text-[#37352f]">
                {activeTab.split('_').join(' ')}
              </h1>
              
              {/* Context Pain-Point Details Rendering Injection */}
              <div className="text-sm text-[#7c7b77] mb-6">
                {activeTab === 'ecom_fee' && "Marketplaces miscalculate weight dimensions or referral fee tiers leading to leaked revenue."}
                {activeTab === 'ecom_img' && "Large product images slow down page load speeds dropping conversion rates and increasing cart abandonment."}
                {activeTab === 'ecom_radar' && "Checking competing product listings manually to adjust daily pricing models takes hours every morning."}
                {activeTab === 'marketing_burn' && "Overspending client budgets due to platform notification lags results in agencies paying out of pocket."}
                {activeTab === 'marketing_portal' && "Building custom dashboards to present links assets and project statuses professionally to clients takes hours."}
                {activeTab === 'marketing_utm' && "Broken or unorganized UTM parameters ruin analytics tracking wasting thousands in ad spend attribution mistakes."}
                {activeTab === 'mfg_yield' && "Unexpected waste during production or items expiring in the warehouse burns through factory margins silently."}
                {activeTab === 'mfg_maintenance' && "Unexpected machinery breakdowns stall production floors costing thousands in idle labor and delayed orders."}
                {activeTab === 'mfg_costing' && "Wholesale material costs and electricity rates shift constantly causing factory owners to price bulk orders at a loss."}
                {activeTab === 'real_estate_whatsapp' && "Matching newly listed properties with prospective buyer criteria manually via spreadsheets takes hours leading to missed deals."}
              </div>

              {/* Specific Custom UI Controls Extension for Image Tool Hooks */}
              {activeTab === 'ecom_img' && (
                <div className="mb-4 flex items-center space-x-3 bg-[#fbfbfa] border p-3 rounded-md">
                  <label className="text-xs font-medium text-[#7c7b77]">Test Batch Upload Counter:</label>
                  <input type="number" value={imageCount} onChange={(e) => setImageCount(Number(e.target.value))} className="w-16 border rounded p-1 text-xs text-center outline-none" />
                </div>
              )}

              {/* Centralized Standard Drag & Drop File Container Simulation Node */}
              <div 
                onClick={() => triggerToolSimulation(activeTab, activeTab === 'ecom_img' ? imageCount : null)} 
                className="border border-dashed border-[#edece9] hover:bg-[rgba(55,53,47,0.01)] rounded-md p-12 text-center cursor-pointer mb-6 transition-all"
              >
                {isProcessing ? (
                  <span className="text-sm text-[#7c7b77] animate-pulse">Running matrix functional logic checks...</span>
                ) : (
                  <span className="text-sm text-[#37352f]">📄 Drop industry raw data tracking file logs / database dump here</span>
                )}
              </div>

              {/* Metric Outputs UI Terminal Panel */}
              {currentOutput && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#fbfbfa] border rounded-md"><span className="text-xs text-[#7c7b77] block">Telemetry Module A</span><b className="text-md text-[#37352f]">{currentOutput.metricA}</b></div>
                    <div className="p-3 bg-[#fbfbfa] border rounded-md"><span className="text-xs text-[#7c7b77] block">Telemetry Module B</span><b className="text-md text-red-600">{currentOutput.metricB}</b></div>
                  </div>

                  {currentOutput.isLocked && (
                    <div className="bg-[#fdebec] border border-[#f5c2c2] rounded-md p-4 text-center">
                      <p className="text-xs text-[#601a1a] mb-3 font-medium">
                        {activeTab === 'ecom_fee' && "Highlights exact lines where you overpaid. Pay $10 to unlock pre-filled dispute sheet export."}
                        {activeTab === 'ecom_img' && "Free tier limits processing to 5 images per batch. Premium unlocks bulk processing of up to 1000 variants instantly."}
                        {activeTab === 'ecom_radar' && "Free accounts track 1 URL. Paid accounts unlock real-time tracking and automated alerts."}
                        {activeTab === 'marketing_burn' && "Free tier tracks 1 client account; paid tier scales to support unlimited ad accounts."}
                        {activeTab === 'marketing_portal' && "Free pages carry your platform's watermark. The $10 tier removes it and unlocks custom subdomains."}
                        {activeTab === 'mfg_yield' && "Flags exact department leaks. Pay $10 to unlock historical waste trends analytics and export deep logs."}
                        {activeTab === 'mfg_maintenance' && "Free tier tracks 2 primary machines. Premium unlocks unlimited machine logging and sends automated alerts."}
                        {activeTab === 'mfg_costing' && "Free tier allows calculation but doesn't save configurations. Premium stores custom templates for up to 50 product categories."}
                        {activeTab === 'real_estate_whatsapp' && "Paid tier allows automated bulk matching and message broadcasting nodes."}
                      </p>
                      <button onClick={handleCheckout} className="bg-[#37352f] text-white text-xs font-medium py-1.5 px-4 rounded hover:bg-[#2c2a27]">
                        Trigger $10 Gateway Tier Unlock
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