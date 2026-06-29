export interface AdSetRow {
  adSetName: string;
  spend: number;
  clicks: number;
  conversions: number;
  targetCpa: number; // Target Cost Per Acquisition
}

export interface MarketingLeakageReport {
  totalSpendAnalyzed: number;
  bleedingAdSetsCount: number;
  estimatedWastedBudget: number;
  isLocked: boolean;
}

/**
 * Analyzes live ad performance inputs to detect unoptimizing budget bleed.
 */
export function analyzeMarketingSpend(rows: AdSetRow[]): MarketingLeakageReport {
  let estimatedWastedBudget = 0;
  let bleedingAdSetsCount = 0;
  let totalSpendAnalyzed = 0;

  rows.forEach((row) => {
    totalSpendAnalyzed += row.spend;
    // Condition: If spend is high but conversions are zero, or actual CPA is double the target CPA
    const actualCpa = row.conversions > 0 ? row.spend / row.conversions : row.spend;
    
    if (row.conversions === 0 && row.spend > (row.targetCpa * 1.5)) {
      estimatedWastedBudget += row.spend;
      bleedingAdSetsCount++;
    } else if (actualCpa > (row.targetCpa * 2)) {
      estimatedWastedBudget += (row.spend - (row.conversions * row.targetCpa));
      bleedingAdSetsCount++;
    }
  });

  return {
    totalSpendAnalyzed: parseFloat(totalSpendAnalyzed.toFixed(2)),
    bleedingAdSetsCount,
    estimatedWastedBudget: parseFloat(estimatedWastedBudget.toFixed(2)),
    isLocked: true,
  };
}