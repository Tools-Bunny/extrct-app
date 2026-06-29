"use client";

import React, { useState, useEffect } from 'react';
import { analyzeEcomFees, EcomCsvRow, LeakageReport } from '../modules/ecom/processor';
import { analyzeMarketingSpend, AdSetRow, MarketingLeakageReport } from '../modules/marketing/marketingProcessor';
import { analyzeInfluencerLeaks, CouponRow, InfluencerLeakageReport } from '../modules/influencer/influencerProcessor';
import { processImageBatch, ImageBatchRow, CompressionReport } from '../modules/ecom/imageProcessor';

export default function NotionWorkspace() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'ecom' | 'img_comp' | 'marketing' | 'influencer'>('dashboard');
  const [report, setReport] = useState<LeakageReport | null>(null);
  const [marketingReport, setMarketingReport] = useState<MarketingLeakageReport | null>(null);
  const [influencerReport, setInfluencerReport] = useState<InfluencerLeakageReport | null>(null);
  const [imageReport, setImageReport] = useState<CompressionReport | null>(null);
  
  const [imageCount, setImageCount] = useState<number>(3); // Free tier sim
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isCloudSyncing, setIsCloudSyncing] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('payment') === 'success') {
      setPaymentSuccess(true);
    }
  }, []);

  const handleSimulateCsvDrop = async () => {
    setIsCloudSyncing(true);
    const mockCsvRows: EcomCsvRow[] = [{ orderId: "ORD-9921", sku: "NEXL-CABLE-01", chargedFee: 45.0, expectedFee: 32.0 }];
    const output = analyzeEcomFees(mockCsvRows);
    if (paymentSuccess) output.isLocked = false;
    setTimeout(() => { setReport(output); setIsCloudSyncing(false); }, 350);
  };

  const handleSimulateImageDrop = async (count: number) => {
    setIsCloudSyncing(true);
    const mockImages: ImageBatchRow[] = [
      { id: "1", originalName: "product_front.png", originalSizeKb: 1200, compressedSizeKb: 180 },
      { id: "2", originalName: "product_back.png", originalSizeKb: 950, compressedSizeKb: 140 },
    ];
    const output = processImageBatch(mockImages, count);
    if (paymentSuccess) output.isBulkLocked = false;
    setTimeout(() => { setImageReport(output); setIsCloudSyncing(false); }, 350);
  };

  const handleSimulateMarketingDrop = async () => {
    setIsCloudSyncing(true);
    const mockAdRows: AdSetRow[] = [{ adSetName: "US_Lookalike_PerfMax", spend: 450.0, clicks: 120, conversions: 0, targetCpa: 25.0 }];
    const output = analyzeMarketingSpend(mockAdRows);
    if (paymentSuccess) output.isLocked = false;
    setTimeout(() => { setMarketingReport(output); setIsCloudSyncing(false); }, 350);
  };

  const handleSimulateInfluencerDrop = async () => {
    setIsCloudSyncing(true);
    const mockCouponRows: CouponRow[] = [{ code: "SARAH20", influencerName: "Sarah Jenkins", totalUsage: 500, totalDiscountGiven: 2500.0, organicTrafficRatio: 0.65 }];
    const output = analyzeInfluencerLeaks(mockCouponRows);
    if (paymentSuccess) output.isLocked = false;
    setTimeout(() => { setInfluencerReport(output); setIsCloudSyncing(false); }, 350);
  };

  const handleCheckout = () => {
    window.location.href = `${window.location.origin}?payment=success`;
  };

  return (
    <div className="flex min-h-screen bg-white text-[#37352f] font-sans antialiased text-[15px]">
      
      {/* Notion Sidebar */}
      <aside className="w-[240px] bg-[#fbfbfa] border-r border-[#edece9] flex flex-col justify-between select-none shrink-0">
        <div className="py-2.5 px-3">
          
          {/* Workspace Title */}
          <div onClick={() => setActiveTab('dashboard')} className="flex items-center space-x-2 p-1.5 hover:bg-[rgba(55,53,47,0.04)] rounded-md cursor-pointer transition-colors duration-150">
            <div className="w-[18px] h-[18px] bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-[10px]">E</div>
            <span className="font-semibold text-sm tracking-tight text-[#37352f]">extrct.app Workspace</span>
          </div>

          {/* Section: E-Commerce */}
          <div className="mt-5 px-2 py-1 text-[11px] font-semibold text-[#7c7b77] tracking-wider uppercase">📦 E-Commerce</div>
          <div className="mt-0.5 space-y-[2px]">
            <div onClick={() => setActiveTab('ecom')} className={`flex items-center space-x-2 px-2 py-1.5 rounded-md cursor-pointer text-sm ${activeTab === 'ecom' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              <span className="text-xs">📑</span><span>Marketplace Fee Auditor</span>
            </div>
            <div onClick={() => setActiveTab('img_comp')} className={`flex items-center space-x-2 px-2 py-1.5 rounded-md cursor-pointer text-sm ${activeTab === 'img_comp' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              <span className="text-xs">🖼️</span><span>Image Variant Converter</span>
            </div>
          </div>

          {/* Section: Digital Marketing */}
          <div className="mt-5 px-2 py-1 text-[11px] font-semibold text-[#7c7b77] tracking-wider uppercase">📈 Digital Marketing</div>
          <div className="mt-0.5 space-y-[2px]">
            <div onClick={() => setActiveTab('marketing')} className={`flex items-center space-x-2 px-2 py-1.5 rounded-md cursor-pointer text-sm ${activeTab === 'marketing' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              <span className="text-xs">🚨</span><span>Ad-Spend Burn Alert</span>
            </div>
            <div onClick={() => setActiveTab('influencer')} className={`flex items-center space-x-2 px-2 py-1.5 rounded-md cursor-pointer text-sm ${activeTab === 'influencer' ? 'bg-[rgba(55,53,47,0.06)] font-medium text-[#37352f]' : 'text-[#5a5750] hover:bg-[rgba(55,53,47,0.04)]'}`}>
              <span className="text-xs">🔗</span><span>Coupon Leakage Tracker</span>
            </div>
          </div>

        </div>
        <div className="p-3 border-t border-[#edece9] text-[11px] text-[#7c7b77] flex items-center justify-between">
          <span>Status: Live Production</span>
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </div>
      </aside>

      {/* Notion Main Body */}
      <main className="flex-1 bg-white overflow-y-auto">
        {/* Notion Breadcrumbs Bar */}
        <div className="h-11 px-12 border-b border-[#edece9] flex items-center text-[13px] text-[#7c7b77]">
          <span className="hover:text-[#37352f] cursor-pointer" onClick={() => setActiveTab('dashboard')}>Workspace</span>
          <span className="mx-2 text-[#edece9]">/</span>
          <span className="text-[#37352f] font-normal capitalize">
            {activeTab === 'dashboard' ? 'Overview' : activeTab.replace('_', ' ')}
          </span>
        </div>

        {/* Notion Document Layout Container */}
        <div className="max-w-[700px] mx-auto px-12 pt-14 pb-28">
          
          {/* DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#37352f] mb-2 flex items-center space-x-3">
                <span>🛑</span> <span>Solopreneur Platform Matrix</span>
              </h1>
              <p className="text-[#7c7b77] text-[15px] mb-8">Select a dedicated leakage utility tracking engine from your active master deployment lists below.</p>
              
              <div className="space-y-2">
                <div onClick={() => setActiveTab('ecom')} className="flex items-center justify-between p-3 border border-[#edece9] rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3"><span>📑</span><span className="font-medium text-[#37352f]">Marketplace Fee Auditor</span></div>
                  <span className="text-xs text-[#7c7b77]">Open page →</span>
                </div>
                <div onClick={() => setActiveTab('img_comp')} className="flex items-center justify-between p-3 border border-[#edece9] rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3"><span>🖼️</span><span className="font-medium text-[#37352f]">Batch Dynamic Image Compressor</span></div>
                  <span className="text-xs text-[#7c7b77]">Open page →</span>
                </div>
                <div onClick={() => setActiveTab('marketing')} className="flex items-center justify-between p-3 border border-[#edece9] rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3"><span>🚨</span><span className="font-medium text-[#37352f]">Multi-Platform Ad-Spend Budget Burn Alert</span></div>
                  <span className="text-xs text-[#7c7b77]">Open page →</span>
                </div>
                <div onClick={() => setActiveTab('influencer')} className="flex items-center justify-between p-3 border border-[#edece9] rounded-md hover:bg-[rgba(55,53,47,0.02)] cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3"><span>🔗</span><span className="font-medium text-[#37352f]">Influencer Coupon Leakage Tracker</span></div>
                  <span className="text-xs text-[#7c7b77]">Open page →</span>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 1: MARKETPLACE FEE AUDITOR */}
          {activeTab === 'ecom' && (
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f] mb-6 flex items-center space-x-2">
                <span>📑</span> <span>Marketplace Fee Auditor</span>
              </h1>
              <p className="text-sm text-[#7c7b77] mb-4">Paste weekly transaction CSV. Code matches individual orders against standard category weight/fee rules highlighting discrepancies.</p>
              
              <div onClick={handleSimulateCsvDrop} className="border border-dashed border-[#edece9] hover:bg-[rgba(55,53,47,0.02)] rounded-md p-10 text-center cursor-pointer mb-6 transition-all">
                {isCloudSyncing ? <span className="text-sm text-[#7c7b77]">Processing database records...</span> : <span className="text-sm text-[#37352f]">📄 Drop settlement transaction CSV report dump</span>}
              </div>

              {report && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#fbfbfa] border border-[#edece9] rounded-md"><span className="text-xs text-[#7c7b77] block">Flagged Claims</span><b className="text-lg text-red-500">{report.flaggedOrdersCount}</b></div>
                    <div className="p-3 bg-[#fbfbfa] border border-[#edece9] rounded-md"><span className="text-xs text-[#7c7b77] block">Leaked Capital</span><b className="text-lg text-red-600">${report.totalRevenueLeaked}</b></div>
                  </div>
                  {report.isLocked && (
                    <div className="bg-[#fdebec] border border-[#f5c2c2] rounded-md p-4 text-center">
                      <p className="text-xs text-[#601a1a] mb-3 font-medium">Pay $10 to unlock the pre-filled dispute sheet export to claim refunds.</p>
                      <button onClick={handleCheckout} className="bg-[#37352f] text-white text-xs font-medium py-1.5 px-4 rounded hover:bg-[#2c2a27]">Unlock full export tier</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TOOL 2: BATCH IMAGE COMPRESSOR */}
          {activeTab === 'img_comp' && (
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f] mb-6 flex items-center space-x-2">
                <span>🖼️</span> <span>Batch Dynamic Image Compressor</span>
              </h1>
              <p className="text-sm text-[#7c7b77] mb-4">Drag-and-drop batch UI utilizing production processing to compress product images into web-optimized WebP variants.</p>
              
              <div className="mb-4 flex items-center space-x-3 bg-[#fbfbfa] border border-[#edece9] p-3 rounded-md">
                <label className="text-xs font-medium text-[#7c7b77]">Simulate Upload Count:</label>
                <input type="number" value={imageCount} onChange={(e) => setImageCount(Number(e.target.value))} className="w-16 border rounded p-1 text-xs text-center outline-none" />
              </div>

              <div onClick={() => handleSimulateImageDrop(imageCount)} className="border border-dashed border-[#edece9] hover:bg-[rgba(55,53,47,0.02)] rounded-md p-10 text-center cursor-pointer mb-6 transition-all">
                {isCloudSyncing ? <span className="text-sm text-[#7c7b77]">Compressing binary assets...</span> : <span className="text-sm text-[#37352f]">📁 Drop high-res product visual variants folder</span>}
              </div>

              {imageReport && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#fbfbfa] border border-[#edece9] rounded-md"><span className="text-xs text-[#7c7b77] block">Processed Count</span><b className="text-lg text-[#37352f]">{imageReport.totalImagesProcessed} files</b></div>
                    <div className="p-3 bg-[#fbfbfa] border border-[#edece9] rounded-md"><span className="text-xs text-[#7c7b77] block">Total Kilobytes Optimization Saved</span><b className="text-lg text-green-600">{imageReport.totalSpaceSavedKb} KB</b></div>
                  </div>
                  {imageReport.isBulkLocked && (
                    <div className="bg-[#fdebec] border border-[#f5c2c2] rounded-md p-4 text-center">
                      <p className="text-xs text-[#601a1a] mb-3 font-medium">Free tier limits processing to 5 images per batch. Premium unlocks bulk processing of up to 1000 variants instantly.</p>
                      <button onClick={handleCheckout} className="bg-[#37352f] text-white text-xs font-medium py-1.5 px-4 rounded hover:bg-[#2c2a27]">Unlock 1000 bulk variants for $10</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TOOL 3: AD-SPEND BURN ALERT */}
          {activeTab === 'marketing' && (
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f] mb-6 flex items-center space-x-2">
                <span>🚨</span> <span>Ad-Spend Budget Burn Alert</span>
              </h1>
              <p className="text-sm text-[#7c7b77] mb-4">Calculates daily burn rates and tracks pacing metrics to isolate non-performing client bleeding ad budgets.</p>
              
              <div onClick={handleSimulateMarketingDrop} className="border border-dashed border-[#edece9] hover:bg-[rgba(55,53,47,0.02)] rounded-md p-10 text-center cursor-pointer mb-6 transition-all">
                {isCloudSyncing ? <span className="text-sm text-[#7c7b77]">Parsing active network graphs...</span> : <span className="text-sm text-[#37352f]">📊 Drop ad performance delivery matrix logs</span>}
              </div>

              {marketingReport && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#fbfbfa] border border-[#edece9] rounded-md"><span className="text-xs text-[#7c7b77] block">Bleeding Ad-Sets</span><b className="text-lg text-red-500">{marketingReport.bleedingAdSetsCount}</b></div>
                    <div className="p-3 bg-[#fbfbfa] border border-[#edece9] rounded-md"><span className="text-xs text-[#7c7b77] block">Estimated Budget Wasted</span><b className="text-lg text-red-600">${marketingReport.estimatedWastedBudget}</b></div>
                  </div>
                  {marketingReport.isLocked && (
                    <div className="bg-[#fdebec] border border-[#f5c2c2] rounded-md p-4 text-center">
                      <p className="text-xs text-[#601a1a] mb-3 font-medium">Free tier tracks 1 client account. The $10 tier unlocks automated alerts and scales to support unlimited ad accounts.</p>
                      <button onClick={handleCheckout} className="bg-[#37352f] text-white text-xs font-medium py-1.5 px-4 rounded hover:bg-[#2c2a27]">Unlock Unlimited Accounts</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TOOL 4: COUPON LEAKAGE TRACKER */}
          {activeTab === 'influencer' && (
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#37352f] mb-6 flex items-center space-x-2">
                <span>🔗</span> <span>Influencer Coupon Leakage Tracker</span>
              </h1>
              <p className="text-sm text-[#7c7b77] mb-4">Tracks affiliate discount coupon codes leaking to coupon aggregator websites hijacking margins.</p>
              
              <div onClick={handleSimulateInfluencerDrop} className="border border-dashed border-[#edece9] hover:bg-[rgba(55,53,47,0.02)] rounded-md p-10 text-center cursor-pointer mb-6 transition-all">
                {isCloudSyncing ? <span className="text-sm text-[#7c7b77]">Auditing affiliate logs...</span> : <span className="text-sm text-[#37352f]">📄 Drop platform discount usage logs</span>}
              </div>

              {influencerReport && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#fbfbfa] border border-[#edece9] rounded-md"><span className="text-xs text-[#7c7b77] block">Leaked Affiliate Codes</span><b className="text-lg text-red-500">{influencerReport.leakedCouponsCount}</b></div>
                    <div className="p-3 bg-[#fbfbfa] border border-[#edece9] rounded-md"><span className="text-xs text-[#7c7b77] block">Estimated Margin Loss</span><b className="text-lg text-red-600">${influencerReport.estimatedMarginLoss}</b></div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}