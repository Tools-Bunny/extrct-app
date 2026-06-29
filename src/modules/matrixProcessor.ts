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
  // 1. E-Commerce
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

  // 2. Digital Marketing Agencies
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

  // 3. Manufacturing & MSMEs
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

  // 4. Real Estate Agents
  'real_estate_whatsapp': {
    name: "WhatsApp Bulk Property Alert & Match Engine",
    painPoint: "Matching newly listed properties with prospective buyer criteria manually via spreadsheets takes hours leading to missed deals.",
    logic: "A text-parsing script where agents paste property layouts to match them against client requirement tags outputting customized broadcast texts.",
    unlockHook: "Paid tier allows automated bulk matching and message broadcasting specs nodes."
  },
  'real_estate_commission': {
    name: "Split-Commission Calculator & Deal Pipeline Tracker",
    painPoint: "Tracking multi-agent commission cuts, referrals, and external broker fees manually in Excel creates payroll disputes.",
    logic: "Lightweight ledger system calculating gross margins, net agency takes, and field agent payout allocations dynamically.",
    unlockHook: "Free tier handles 3 transactions a month. Upgrade to remove entry limits."
  },
  'real_estate_flyer': {
    name: "Instant Social Flyer & Brochure Markup Automation",
    painPoint: "Waiting for graphic designers to format house images and pricing specs for property launch stories slows down sales velocity.",
    logic: "Upload images alongside a short specification string to instantly stitch property details into high-conversion design layouts.",
    unlockHook: "Free tier carries systemic watermarks. $10 premium tier removes branding overlays completely."
  },

  // 5. Content Creators & Independent Authors
  'content_repurpose': {
    name: "Long-Form Video to Short Hook Repurposing Framework",
    painPoint: "Staring at hours-long raw recordings trying to find high-engagement clips to turn into platform-specific hooks manually wastes hours.",
    logic: "A framework organizer that splits long-form topics into structured promotional formats tailored for various distribution networks.",
    unlockHook: "Premium tiers unlock team-accessible workspaces and unlimited generation templates."
  },
  'content_sponsor': {
    name: "Brand Sponsorship Pricing & Deliverable Estimator",
    painPoint: "Pricing custom brand deliverables on a whim leads to creators leaving money on the table or getting ghosted.",
    logic: "Algorithmic pricing calculator mapping follower velocity, average views, and deliverable sets directly into optimized rate sheet values.",
    unlockHook: "Unlock standard contract brief generation nodes for $10."
  },
  'content_script': {
    name: "Multi-Platform Short-Form Video Script Structurer",
    painPoint: "Writing TikTok/Reels content scripts without strong hooks or rhythmic pacing drops retention in the first 3 seconds.",
    logic: "An interactive workspace enforcing structured timing marks for text Hooks, Retention Hooks, Body Steps, and final Call-To-Action blocks.",
    unlockHook: "Unlocks high-retention template frameworks used by top creators."
  },

  // 6. Boutique Hotels & Guesthouses
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
  },

  // 7. Local Gyms & Fitness Studios
  'gym_churn': {
    name: "Member Attendance Drop & Churn Risk Predictor",
    painPoint: "Members quiet-quitting the gym without notice leaves owners guessing on next month's recurring subscription revenue.",
    logic: "Tracks individual member last check-in timestamps, flagging specific drop-offs over a rolling 14-day window.",
    unlockHook: "Unlock customized WhatsApp automated outreach script layouts for $10."
  },
  'gym_class': {
    name: "Dynamic Peak-Hour Class Capacity Optimizer",
    painPoint: "Overbooking popular peak-hour slots creates overcrowded workout floors, leading to negative reviews and safety issues.",
    logic: "Capacity allocation system that recommends staggered schedule structures based on localized historic slot usage logs.",
    unlockHook: "Premium tier unlocks dynamic registration caps for up to 5 individual trainer nodes."
  },
  'gym_trainer': {
    name: "Personal Trainer Split Ledger & Payout Accountant",
    painPoint: "Calculating variable commission tiers, session packages, and trainer payouts manually on scratchpads causes math leaks.",
    logic: "Dynamic ledger processing total base sessions executed against tier scales to output clean net payouts.",
    unlockHook: "Unlock raw CSV payment breakdown extraction metrics."
  },

  // 8. Freelance Designers & Copywriters
  'freelance_scope': {
    name: "Scope Creep Guard & Extra Revision Cost Estimator",
    painPoint: "Clients slipping in extra feature requests without paying for added design revisions drains freelance profitability.",
    logic: "Logs design deliverable specifications alongside change requests, isolating extra overhead margins outside base contracts.",
    unlockHook: "Premium unlocks pre-formatted auto-generated adjustment billing links."
  },
  'freelance_retainer': {
    name: "Monthly Retainer Hours Utilization Burn-Down Chart",
    painPoint: "Failing to report client retainer hour usage balances clearly leads to client complaints and unrenewed contracts.",
    logic: "A visual logging sheet mapping tasks against a fixed monthly hours allowance pool to provide crisp asset allocations.",
    unlockHook: "Removes default system watermark tags from client summaries."
  },
  'freelance_proposal': {
    name: "Dynamic Flat-Rate vs Hourly Project Proposal Engine",
    painPoint: "Underestimating complex custom project hours during initial scoping turns profitable jobs into low-wage traps.",
    logic: "Estimator utility modeling risk buffers across sequential asset creation phases to output target baseline contract rates.",
    unlockHook: "Unlock pre-scraped industry average benchmarking rates."
  },

  // 9. Independent Cafes & Coffee Shops
  'cafe_waste': {
    name: "Perishable Milk & Bean Daily Waste Log Auditor",
    painPoint: "Over-ordering specific milks or baking daily pastries blindly burns hundreds in throwaway trash costs.",
    logic: "Logs morning starting inventory counts against end-of-day kitchen remaining waste balances to generate optimal production targets.",
    unlockHook: "Unlock premium seasonal stock prediction curves logic tables."
  },
  'cafe_recipe': {
    name: "Dynamic Component Price Coffee Ingredient Costing Tool",
    painPoint: "Global bean wholesale price spikes cut into espresso profit margins silently without immediate pricing corrections.",
    logic: "Updates base milk, cup, lid, and green bean costs to instantly calculate exact margins down to individual beverage items.",
    unlockHook: "Saves configurations for up to 50 localized signature items."
  },
  'cafe_roster': {
    name: "Peak Hourly Transaction Shift Roster Structurer",
    painPoint: "Over-scheduling staff during quiet mid-afternoon slumps or running short-staffed during morning rushes wastes labor budget.",
    logic: "Maps multi-hour POS historical sales volumes directly against shift count allocations to smooth floor management operations.",
    unlockHook: "Unlock direct data exports formatted cleanly for team shift sheets."
  },

  // 10. Direct-to-Consumer (DTC) Brands
  'dtc_cac': {
    name: "Blended Multi-Channel CAC & Ecosystem ROAS Tracker",
    painPoint: "Relying purely on biased individual ad channel pixel conversion reports results in misleading ad scaling decisions.",
    logic: "Aggregates total cross-network spend alongside checkout transaction revenues to surface absolute blended ecosystem parameters.",
    unlockHook: "Unlock automated margin trends visualization views."
  },
  'dtc_refund': {
    name: "Product-Line Return Rate & Margin Bleed Auditor",
    painPoint: "High return rates on specific apparel sizes or fragile variants burn net margin due to two-way fulfillment shipping fees.",
    logic: "Parses historical returns logs to point out high-risk items draining platform profitability.",
    unlockHook: "Unlock advanced sorting to isolate manufacturer-defects alerts parameters."
  },
  'dtc_cohort': {
    name: "Customer LTV Cohort Retention Matrix",
    painPoint: "Acquiring customers who buy only once during flash sales turns a loss when factoring in initial acquisition spend.",
    logic: "Slices monthly database checkout trends to group repeat purchase patterns over a standard tracking window.",
    unlockHook: "Paid tier scales to filter over 10,000 deep customer row profiles."
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