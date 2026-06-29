"use client";

import React, { useState, useEffect } from 'react';
import { analyzeEcomFees, EcomCsvRow, LeakageReport } from '../modules/ecom/processor';
import { analyzeMarketingSpend, AdSetRow, MarketingLeakageReport } from '../modules/marketing/marketingProcessor';

export default function NotionWorkspace() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'ecom' | 'marketing'>('dashboard');
  const [report, setReport] = useState<LeakageReport | null>(null);
  const [marketingReport, setMarketingReport] = useState<MarketingLeakageReport | null>(null);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isCloudSyncing, setIsCloudSyncing] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('payment') === 'success') {
      setPaymentSuccess(true);
      setActiveTab('ecom');
      handleSimulateCsvDrop(false);
    }
  }, []);

  const handleSimulateCsvDrop = async (forceLock = true) => {
    setIsCloudSyncing(true);
    const mockCsvRows: EcomCsvRow[] = [
      { orderId: "ORD-9921", sku: "NEXL-CABLE-01", chargedFee: 45.00, expectedFee: 32.00 },
      { orderId: "ORD-9922", sku: "NEXL-HEAD-02", chargedFee: 85.50, expectedFee: 85.50 },
      { orderId: "ORD-9923", sku: "NEXL-CABLE-01", chargedFee: 45.00, expectedFee: 32.00 },
      { orderId: "ORD-9924", sku: "NEXL-WIRE-03", chargedFee: 120.00, expectedFee: 90.00 },
    ];
    
    const output = analyzeEcomFees(mockCsvRows);
    if (!forceLock || paymentSuccess) output.isLocked = false;

    setTimeout(() => {
      setReport(output);
      setIsCloudSyncing(false);
    }, 400);
  };

  const handleSimulateMarketingDrop = async () => {
    setIsCloudSyncing(true);
    const mockAdRows: AdSetRow[] = [
      { adSetName: "US_Lookalike_Purchasers_PerfMax", spend: 450.00, clicks: 120, conversions: 0, targetCpa: 25.00 },
      { adSetName: "EU_Interest_Broad_Retargeting", spend: 200.00, clicks: 85, conversions: 8, targetCpa: 20.00 },
      { adSetName: "CA_Competitor_Keywords_Search", spend: 310.00, clicks: 40, conversions: 1, targetCpa: 30.00 },
    ];

    const output = analyzeMarketingSpend(mockAdRows);
    if (paymentSuccess) output.isLocked = false;

    setTimeout(() => {
      setMarketingReport(output);
      setIsCloudSyncing(false);
    }, 400);
  };

  const handleCheckout = async () => {
    setIsLoadingPayment(true);
    try {
      const response = await fetch('/api/checkout', { method: 'POST' });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Stripe Configuration Redirect Simulated!");
        window.location.href = `${window.location.origin}?payment=success`;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingPayment(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-[#37352f] font-sans antialiased">
      
      {/* Sidebar Layout */}
      <aside className="w-60 bg-[#fbfbfa] border-r border-[#edece9] flex flex-col justify-between select-none">
        <div className="py-2.5 px-3">
          <div onClick={() => setActiveTab('dashboard')} className="flex items-center space-x-2 p-1.5 hover:bg-[rgba(55,53,47,0.04)] rounded cursor-pointer">
            <div className="w-5 h-5 bg-[#37352f] text-white rounded flex items-center justify-center font-bold text-xs">E</div>
            <span className="font-medium text-sm tracking-tight">extrct.app Workspace</span>
          </div>

          <div className="mt-6 px-2 py-1 text-xs font-semibold text-[#7c7b77] tracking-wider uppercase">
            Active Micro-Utilities
          </div>

          <div className="mt-1 space-y-0.5">
            <div 
              onClick={() => { setActiveTab('ecom'); setMarketingReport(null); }}
              className={`flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer text-sm ${activeTab === 'ecom' ? 'bg-[rgba(55,53,47,0.08)] font-medium' : 'hover:bg-[rgba(55,53,47,0.04)]'}`}
            >
              <span>📦</span>
              <span>Marketplace Fee Auditor</span>
            </div>
            <div 
              onClick={() => { setActiveTab('marketing'); setReport(null); }}
              className={`flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer text-sm ${activeTab === 'marketing' ? 'bg-[rgba(55,53,47,0.08)] font-medium' : 'hover:bg-[rgba(55,53,47,0.04)]'}`}
            >
              <span>📈</span>
              <span>Ad-Spend Budget Burn Alert</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Framework View */}
      <main className="flex-1 overflow-y-auto">
        <div className="h-11 px-6 border-b border-[#edece9] flex items-center text-sm text-[#7c7b77]">
          <span>Workspace</span>
          <span className="mx-1.5 text-xs">/</span>
          <span className="text-[#37352f] font-medium uppercase text-xs tracking-wider">
            {activeTab}
          </span>
        </div>

        <div className="max-w-3xl mx-auto px-12 pt-16 pb-24">
          
          {activeTab === 'dashboard' && (
            <div>
              <div className="flex items-center space-x-3 text-4xl mb-6">
                <span>🛑</span>
                <h1 className="text-4xl font-bold tracking-tight">Zero-Setup Leakage Detectors</h1>
              </div>
              <div className="space-y-3">
                <div onClick={() => setActiveTab('ecom')} className="border border-[#edece9] rounded-md p-4 hover:bg-[rgba(55,53,47,0.04)] cursor-pointer flex justify-between items-center bg-white">
                  <div className="flex items-center space-x-3"><span>📦</span><div><h3 className="font-medium text-sm">Marketplace Fee Auditor</h3><p className="text-xs text-[#7c7b77]">Find platform fee discrepancies.</p></div></div>
                </div>
                <div onClick={() => setActiveTab('marketing')} className="border border-[#edece9] rounded-md p-4 hover:bg-[rgba(55,53,47,0.04)] cursor-pointer flex justify-between items-center bg-white">
                  <div className="flex items-center space-x-3"><span>📈</span><div><h3 className="font-medium text-sm">Ad-Spend Budget Burn Alert</h3><p className="text-xs text-[#7c7b77]">Isolate non-performing bleeding ad networks budget.</p></div></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ecom' && (
            <div>
              <div className="flex items-center space-x-3 text-3xl font-bold mb-6"><span>📦</span><h1>Marketplace Fee Auditor</h1></div>
              <div onClick={() => handleSimulateCsvDrop(true)} className="border-2 border-dashed border-[#edece9] hover:border-[#37352f] rounded-lg p-12 text-center cursor-pointer bg-[#fbfbfa] mb-6">
                {isCloudSyncing ? <span>🔄 Syncing analytical logs...</span> : <span>📄 Simulate Amazon/Shopify Settlement Drop</span>}
              </div>
              {report && (
                <div className="border border-[#edece9] rounded-md p-6 bg-white">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-3 bg-[#fbfbfa] rounded border">Scanned Rows: <b>{report.totalAnalyzed}</b></div>
                    <div className="p-3 bg-[#fbfbfa] rounded border text-red-500">Overcharges: <b>{report.flaggedOrdersCount}</b></div>
                    <div className="p-3 bg-red-50 rounded border text-red-600">Leaked: <b>${report.totalRevenueLeaked}</b></div>
                  </div>
                  {report.isLocked && (
                    <div className="bg-[#fdebec] border rounded p-4 text-center">
                      <p className="text-xs mb-3">Unlock dispute-ready recovery data sheet.</p>
                      <button onClick={handleCheckout} className="bg-[#37352f] text-white text-xs py-2 px-4 rounded">Unlock for $10</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'marketing' && (
            <div>
              <div className="flex items-center space-x-3 text-3xl font-bold mb-6"><span>📈</span><h1>Ad-Spend Budget Burn Alert</h1></div>
              <div onClick={handleSimulateMarketingDrop} className="border-2 border-dashed border-[#edece9] hover:border-[#37352f] rounded-lg p-12 text-center cursor-pointer bg-[#fbfbfa] mb-6">
                {isCloudSyncing ? <span>🔄 Extracting Meta/Google Ads delivery matrix logs...</span> : <span>📄 Click to drop ad-performance campaign report dump</span>}
              </div>
              {marketingReport && (
                <div className="border border-[#edece9] rounded-md p-6 bg-white">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-3 bg-[#fbfbfa] rounded border">Total Spend Checked: <b>${marketingReport.totalSpendAnalyzed}</b></div>
                    <div className="p-3 bg-[#fbfbfa] rounded border text-red-500">Bleeding Ad-Sets: <b>{marketingReport.bleedingAdSetsCount}</b></div>
                    <div className="p-3 bg-red-50 rounded border text-red-600">Wasted Budget: <b>${marketingReport.estimatedWastedBudget}</b></div>
                  </div>
                  {marketingReport.isLocked && (
                    <div className="bg-[#fdebec] border rounded p-4 text-center">
                      <p className="text-xs mb-3">Unlock automated API script tools to instantly pause these bleeding targets dynamically.</p>
                      <button onClick={handleCheckout} className="bg-[#37352f] text-white text-xs py-2 px-4 rounded">Unlock Optimization Script for $10</button>
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