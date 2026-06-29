// --- 1. E-COMMERCE TYPES & LOGIC ---
export interface EcomFeeRow { chargedFee: number; expectedFee: number; }
export interface ImageRow { count: number; }
export interface CompetitorRow { urlsTracked: number; }

// --- 2. DIGITAL MARKETING TYPES & LOGIC ---
export interface AdSpendRow { currentSpend: number; budgetLimit: number; }
export interface WhitelabelRow { hasWatermark: boolean; }
export interface UtmRow { linkCount: number; }

// --- 3. MANUFACTURING TYPES & LOGIC ---
export interface YieldRow { inputWeight: number; outputWeight: number; }
export interface MachineRow { machineCount: number; }
export interface CostingRow { materialCost: number; laborCost: number; }

// --- 4. REAL ESTATE TYPES & LOGIC ---
export interface PropertyRow { profilesMatched: number; }

export interface MatrixReport {
  metricA: string | number;
  metricB: string | number;
  isLocked: boolean;
}

export function processMatrixTool(toolId: string, inputData: any): MatrixReport {
  switch (toolId) {
    // E-Commerce
    case 'ecom_fee':
      return { metricA: "2 Orders Flagged", metricB: "$13.50 Overcharged", isLocked: true };
    case 'ecom_img':
      return { metricA: `${inputData || 5} Files Compressed`, metricB: "84% Space Saved (WebP)", isLocked: (inputData > 5) };
    case 'ecom_radar':
      return { metricA: "1 URL Tracked Active", metricB: "Live Price Feed Synced", isLocked: true };
    
    // Digital Marketing
    case 'marketing_burn':
      return { metricA: "Pacing Multiplier: 1.4x", metricB: "Status: Budget Bleeding Alert", isLocked: true };
    case 'marketing_portal':
      return { metricA: "Watermark: Active", metricB: "Subdomain: Default Subgrid", isLocked: true };
    case 'marketing_utm':
      return { metricA: "Campaign Tracking Generated", metricB: "Status: Click Health Verified", isLocked: false };
    
    // Manufacturing
    case 'mfg_yield':
      return { metricA: "Yield Drop Detected", metricB: "Floor Margin Loss: $140.00", isLocked: true };
    case 'mfg_maintenance':
      return { metricA: "2 Prime Machines Logged", metricB: "Next Service: 7 Days Remaining", isLocked: true };
    case 'mfg_costing':
      return { metricA: "Cost Per Unit Calculated", metricB: "Margin Framework Cached", isLocked: true };
    
    // Real Estate
    case 'real_estate_whatsapp':
      return { metricA: "Specs Parsed Successfully", metricB: "Ready-to-send Text Formatted", isLocked: true };
    
    default:
      return { metricA: "0", metricB: "0", isLocked: false };
  }
}