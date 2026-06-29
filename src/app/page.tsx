"use client";

import React, { useState, useEffect } from 'react';
import { analyzeEcomFees, EcomCsvRow, LeakageReport } from '../modules/ecom/processor';
import { analyzeMarketingSpend, AdSetRow, MarketingLeakageReport } from '../modules/marketing/marketingProcessor';
import { analyzeInfluencerLeaks, CouponRow, InfluencerLeakageReport } from '../modules/influencer/influencerProcessor';

export default function NotionWorkspace() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'ecom' | 'marketing' | 'influencer'>('dashboard');
  const [report, setReport] = useState<LeakageReport | null>(null);
  const [marketingReport, setMarketingReport] = useState<MarketingLeakageReport | null>(null);
  const [influencerReport, setInfluencerReport] = useState<InfluencerLeakageReport | null>(null);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isCloudSyncing, setIsCloudSyncing] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('payment') === 'success') {
      setPaymentSuccess(true);
    }
  }, []);

  const handleSimulateCsvDrop = async (forceLock = true) => {
    setIsCloudSyncing(true);
    const mockCsvRows: EcomCsvRow[] = [
      { orderId: "ORD-9921", sku: "NEXL-CABLE-01", chargedFee: 45.00, expectedFee: 32.00 },
      { orderId: "ORD-9922", sku: "NEXL-HEAD-02", chargedFee: 85.50, expectedFee: 85.50 },
    ];
    const output = analyzeEcomFees(mockCsvRows);
    if (!forceLock || paymentSuccess) output.isLocked = false;
    setTimeout(() => { setReport(output); setIsCloudSyncing(false); }, 400);
  };

  const handleSimulateMarketingDrop = async () => {
    setIsCloudSyncing(true);
    const mockAdRows: AdSetRow[] = [
      { adSetName: "US_Lookalike_Purchasers_PerfMax", spend: 450.00, clicks: 120, conversions: 0, targetCpa: 25.00 },
    ];
    const output = analyzeMarketingSpend(mockAdRows);
    if (paymentSuccess) output.isLocked = false;
    setTimeout(() => { setMarketingReport(output); setIsCloudSyncing(false); }, 400);
  };

  const handleSimulateInfluencerDrop = async () => {
    setIsCloudSyncing(true);
    const mockCouponRows: CouponRow[] = [
      { code: "SARAH20", influencerName: "Sarah Jenkins", totalUsage: 500, totalDiscountGiven: 2500.00, organicTrafficRatio: 0.65 },
      { code: "MIKE10", influencerName: "Mike Tyson Vlogs", totalUsage: 120, totalDiscountGiven: 600.00, organicTrafficRatio: 0.15 },
    ];
    const output = analyzeInfluencerLeaks(mockCouponRows);
    if (paymentSuccess) output.isLocked = false;
    setTimeout(() => { setInfluencerReport(output); setIsCloudSyncing(false); }, 400);
  };

  const handleCheckout = async () => {
    setIsLoadingPayment(true);
    setTimeout(() => {
      window.location.href = `${window.location.origin}?payment=success`;
    }, 800);
  };

  return (
    <div className="flex min-h-screen bg-white text-[#37352f] font-sans antialiased">
      <aside className="w-60 bg-[#fbfbfa] border-r border-[#edece9] flex flex-col justify-between select-none">
        <div className="py-2.5 px-3">
          <div onClick={() => setActiveTab('dashboard')} className="flex items-center space-x-2 p-1.5 hover:bg-[rgba(55,53,47,0.04)] rounded cursor-pointer">
            <div className="w-5 h-5 bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-xs">E</div>
            <span className="font-medium text-sm tracking-tight">extrct.app Workspace</span>
          </div>
          <div className="mt-6 px-2 py-1 text-xs font-semibold text-[#7c7b77] tracking-wider uppercase">Active Micro-Utilities</div>
          <div className="mt-1 space-y-0.5">
            <div onClick={() => setActiveTab('ecom')} className={`flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer text-sm ${activeTab === 'ecom' ? 'bg-[rgba(55,53,47,0.08)] font-medium' : 'hover:bg-[rgba(55,53,47,0.04)]'}`}>
              <span>📦</span><span>Marketplace Fee Auditor</span>
            </div>
            <div onClick={() => setActiveTab('marketing')} className={`flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer text-sm ${activeTab === 'marketing' ? 'bg-[rgba(55,53,47,0.08)] font-medium' : 'hover:bg-[rgba(55,53,47,0.04)]'}`}>
              <span>📈</span><span>Ad-Spend Budget Burn Alert</span>
            </div>
            <div onClick={() => setActiveTab('influencer')} className={`flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer text-sm ${activeTab === 'influencer' ? 'bg-[rgba(55,53,47,0.08)] font-medium' : 'hover:bg-[rgba(55,53,47,0.04)]'}`}>
              <span>🔥</span><span>Influencer Coupon Leakage Tracker</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="h-11 px-6 border-b border-[#edece9] flex items-center text-sm text-[#7c7b77]">
          <span>Workspace</span><span className="mx-1.5 text-xs">/</span><span className="text-[#37352f] font-medium uppercase text-xs tracking-wider">{activeTab}</span>
        </div>
        <div className="max-w-3xl mx-auto px-12 pt-16 pb-24">
          
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">🛑 Zero-Setup Leakage Detectors</h1>
              <div className="space-y-3">
                <div onClick={() => setActiveTab('ecom')} className="border border-[#edece9] rounded-md p-4 hover:bg-[rgba(55,53,47,0.04)] cursor-pointer bg-white">📦 <b>Marketplace Fee Auditor</b></div>
                <div onClick={() => setActiveTab('marketing')} className="border border-[#edece9] rounded-md p-4 hover:bg-[rgba(55,53,47,0.04)] cursor-pointer bg-white">📈 <b>Ad-Spend Budget Burn Alert</b></div>
                <div onClick={() => setActiveTab('influencer')} className="border border-[#edece9] rounded-md p-4 hover:bg-[rgba(55,53,47,0.04)] cursor-pointer bg-white">🔥 <b>Influencer Coupon Leakage Tracker</b></div>
              </div>
            </div>
          )}

          {activeTab === 'ecom' && (
            <div>
              <h1 className="text-3xl font-bold mb-6">📦 Marketplace Fee Auditor</h1>
              <div onClick={() => handleSimulateCsvDrop(true)} className="border-2 border-dashed border-[#edece9] p-12 text-center cursor-pointer bg-[#fbfbfa] mb-6">📄 Simulate Settlement Drop</div>
              {report && (
                <div className="border border-[#edece9] p-6 rounded bg-white">
                  <p>Overcharges: <b>{report.flaggedOrdersCount}</b> | Leaked: <b>${report.totalRevenueLeaked}</b></p>
                  {report.isLocked && <button onClick={handleCheckout} className="mt-4 bg-[#37352f] text-white text-xs py-2 px-4 rounded">Unlock for $10</button>}
                </div>
              )}
            </div>
          )}

          {activeTab === 'marketing' && (
            <div>
              <h1 className="text-3xl font-bold mb-6">📈 Ad-Spend Budget Burn Alert</h1>
              <div onClick={handleSimulateMarketingDrop} className="border-2 border-dashed border-[#edece9] p-12 text-center cursor-pointer bg-[#fbfbfa] mb-6">📄 Drop Ad Report Dump</div>
              {marketingReport && (
                <div className="border border-[#edece9] p-6 rounded bg-white">
                  <p>Bleeding Ad-Sets: <b>{marketingReport.bleedingAdSetsCount}</b> | Wasted: <b>${marketingReport.estimatedWastedBudget}</b></p>
                  {marketingReport.isLocked && <button onClick={handleCheckout} className="mt-4 bg-[#37352f] text-white text-xs py-2 px-4 rounded">Unlock for $10</button>}
                </div>
              )}
            </div>
          )}

          {activeTab === 'influencer' && (
            <div>
              <h1 className="text-3xl font-bold mb-6">🔥 Influencer Coupon Leakage Tracker</h1>
              <div onClick={handleSimulateInfluencerDrop} className="border-2 border-dashed border-[#edece9] hover:border-[#37352f] rounded-lg p-12 text-center cursor-pointer bg-[#fbfbfa] mb-6">
                {isCloudSyncing ? <span>🔄 Auditing coupon affiliate logs...</span> : <span>📄 Click to drop Shopify/WooCommerce coupon logs</span>}
              </div>
              {influencerReport && (
                <div className="border border-[#edece9] rounded-md p-6 bg-white">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-3 bg-[#fbfbfa] rounded border">Total Discounts: <b>${influencerReport.totalDiscountsTracked}</b></div>
                    <div className="p-3 bg-[#fbfbfa] rounded border text-red-500">Leaked Codes: <b>{influencerReport.leakedCouponsCount}</b></div>
                    <div className="p-3 bg-red-50 rounded border text-red-600">Margin Loss: <b>${influencerReport.estimatedMarginLoss}</b></div>
                  </div>
                  {influencerReport.isLocked && (
                    <div className="bg-[#fdebec] border rounded p-4 text-center">
                      <p className="text-xs mb-3">Get automated script to dynamically disable coupon codes if hijacked by coupon aggregators.</p>
                      <button onClick={handleCheckout} className="bg-[#37352f] text-white text-xs py-2 px-4 rounded">Unlock Tracking Node for $10</button>
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