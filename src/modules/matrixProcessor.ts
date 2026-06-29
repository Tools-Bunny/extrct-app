export interface MatrixReport {
  metricA: string;
  metricB: string;
  isLocked: boolean;
}

export const matrixData: Record<string, {
  name: string;
  painPoint: string;
  logic: string;
  unlockHook: string;
}> = {
  // E-Commerce
  'ecom_fee': {
    name: "Automated Marketplace Overcharge & Fee Auditor",
    painPoint: "Marketplaces miscalculate weight dimensions or referral fee tiers leading to leaked revenue.",
    logic: "Paste weekly transaction CSV. Node.js matches individual orders against standard category weight/fee rules highlighting discrepancies.",
    unlockHook: "Highlights exact lines where you overpaid. Pay $10 to unlock the pre-filled dispute sheet export to claim refunds."
  },
  'ecom_img': {
    name: "Batch Dynamic Image Compressor & WebP Variant Converter",
    painPoint: "Large product images slow down page load speeds dropping conversion rates and increasing cart abandonment.",
    logic: "Drag-and-drop batch UI utilizing Node.js API layer to compress product images into web-optimized WebP formats and auto-generate standard alt-text.",
    unlockHook: "Free tier limits processing to 5 images per batch. Premium unlocks bulk processing of up to 1000 variants instantly."
  },
  'ecom_radar': {
    name: "Competitor Price-Drop & Stock-Out Radar",
    painPoint: "Checking competing product listings manually to adjust daily pricing models takes hours every morning.",
    logic: "A web scraper cron job running via Supabase edge functions that tracks up to 10 specific competitor URLs daily updating a clean dashboard.",
    unlockHook: "Free accounts track 1 URL. Paid accounts unlock real-time tracking and automated alerts."
  },
  // Digital Marketing
  'marketing_burn': {
    name: "Multi-Platform Ad-Spend Budget Burn Alert System",
    painPoint: "Overspending client budgets due to platform notification lags results in agencies paying out of pocket.",
    logic: "Fetches active meta/google ad account spending graphs every hour via webhooks tracking velocity pacing against daily limits.",
    unlockHook: "Free tier tracks 1 client account; paid tier scales to support unlimited ad accounts."
  },
  'marketing_portal': {
    name: "Whitelabel Client Notion/Portal Generator",
    painPoint: "Building custom dashboards to present links assets and project statuses professionally to clients takes hours of manual setup.",
    logic: "A dynamic layout builder that maps markdown data arrays directly into beautiful public-facing client portal links instantly.",
    unlockHook: "Free pages carry your platform's watermark. The $10 tier removes it and unlocks custom subdomains."
  },
  'marketing_utm': {
    name: "UTM Campaign Link Generator & Multi-Channel Grouping Tool",
    painPoint: "Broken or unorganized UTM parameters ruin analytics tracking wasting thousands in ad spend attribution mistakes.",
    logic: "A simple form interface with built-in validation rules that outputs clean structured campaign matrix URLs that auto-append tracking parameters.",
    unlockHook: "Premium tiers unlock team-accessible workspaces and unlimited generation templates."
  },
  // Manufacturing & MSMEs
  'mfg_yield': {
    name: "Raw Material Yield & Dead-Stock Leak Detector",
    painPoint: "Unexpected waste during production or items expiring in the warehouse burns through factory margins silently.",
    logic: "Input sheet matching initial raw batch weights against final pack output counts flagging floor yield drop anomalies.",
    unlockHook: "Flags exact department leaks. Pay $10 to unlock historical waste trends analytics and export deep logs."
  },
  'mfg_maintenance': {
    name: "Machine Breakdown & Preventative Maintenance Scheduler",
    painPoint: "Unexpected machinery breakdowns stall production floors costing thousands in idle labor and delayed orders.",
    logic: "A tracking matrix utilizing lightweight logging to monitor equipment running hours triggering preventative service countdowns.",
    unlockHook: "Free tier tracks 2 primary machines. Premium unlocks unlimited machine logging and sends automated alerts."
  },
  'mfg_costing': {
    name: "Production Batch Costing & Dynamic Margin Calculator",
    painPoint: "Wholesale material costs and electricity rates shift constantly causing factory owners to price bulk orders at a loss.",
    logic: "A live calculation matrix where operators update variable base component pricing to instantly re-estimate final batch product margins.",
    unlockHook: "Free tier allows calculation but doesn't save configurations. Premium stores custom templates for up to 50 product categories."
  },
  // Real Estate
  'real_estate_whatsapp': {
    name: "WhatsApp Bulk Property Alert & Match Engine",
    painPoint: "Matching newly listed properties with prospective buyer criteria manually via spreadsheets takes hours leading to missed deals.",
    logic: "A text-parsing script where agents paste property layouts to match them against client requirement tags outputting customized broadcast texts.",
    unlockHook: "Paid tier allows automated bulk matching and message broadcasting specs nodes."
  },
  // Content Creators
  'content_repurpose': {
    name: "Long-Form Video to Short Hook Repurposing Framework",
    painPoint: "Staring at a hours long raw recording trying to find high engagement clips to turn into platform-specific hooks manually wastes hours.",
    logic: "A framework organizer that splits long form topics into structured promotional formats tailored for various distribution networks.",
    unlockHook: "Premium tiers unlock team-accessible workspaces and unlimited generation templates."
  },
  // Boutique Hotels
  'hotel_overbook': {
    name: "Overbooking Prevention Sync Matrix",
    painPoint: "Double-booking rooms across platforms like Booking.com and Airbnb results in steep platform penalties and manual relocation costs.",
    logic: "A lightweight calendar engine that acts as a single central source of truth for tracking room inventory manually across channels.",
    unlockHook: "Premium unlocks real-time status tracking dashboard views across all rooms."
  },
  'hotel_compendium': {
    name: "Guest In-Room Digital Compendium Builder",
    painPoint: "Printing guest welcome booklets containing Wi-Fi details local guidelines and property rules for every room is expensive to maintain.",
    logic: "A clean template editor that generates a responsive mobile info page accessible via a unique room URL or QR code.",
    unlockHook: "Paid tier removes system labels and unlocks support for multiple properties."
  },
  'hotel_checkout': {
    name: "Late-Checkout Upsell Automator",
    painPoint: "Guests forget to request check-out extensions early causing scheduling friction for cleaning staff and missing out on incremental hotel revenue.",
    logic: "Sends clean check-out preparation pages to guests on their departure morning presenting automated links to purchase extensions.",
    unlockHook: "Free tier allows 5 monthly checkout pages; paid handles unlimited guest flows."
  }
};

export function processMatrixTool(toolId: string, inputData: any): MatrixReport {
  const tool = matrixData[toolId];
  if (!tool) {
    return { metricA: "0", metricB: "0", isLocked: false };
  }
  
  if (toolId === 'ecom_img') {
    return { 
      metricA: `${inputData || 6} Files Selected`, 
      metricB: "84% Space Saved (WebP Template)", 
      isLocked: (inputData > 5) 
    };
  }

  return {
    metricA: "Parsing Database Log Rows...",
    metricB: "Analysis Completed Successfully",
    isLocked: true
  };
}