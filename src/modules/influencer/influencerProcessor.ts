export interface CouponRow {
  code: string;
  influencerName: string;
  totalUsage: number;
  totalDiscountGiven: number;
  organicTrafficRatio: number; // Ratio of users coming from coupon sites vs influencer link
}

export interface InfluencerLeakageReport {
  totalDiscountsTracked: number;
  leakedCouponsCount: number;
  estimatedMarginLoss: number;
  isLocked: boolean;
}

/**
 * Quantifies revenue leakage from influencer discount codes leaking to coupon aggregator sites.
 */
export function analyzeInfluencerLeaks(rows: CouponRow[]): InfluencerLeakageReport {
  let totalDiscountsTracked = 0;
  let leakedCouponsCount = 0;
  let estimatedMarginLoss = 0;

  rows.forEach((row) => {
    totalDiscountsTracked += row.totalDiscountGiven;
    
    // Condition: If organic/direct traffic using this code is higher than 40%, it means it's leaked on Honey/Coupert
    if (row.organicTrafficRatio > 0.40) {
      leakedCouponsCount++;
      // Loss is calculated as the discount given to non-influencer traffic
      estimatedMarginLoss += (row.totalDiscountGiven * row.organicTrafficRatio);
    }
  });

  return {
    totalDiscountsTracked: parseFloat(totalDiscountsTracked.toFixed(2)),
    leakedCouponsCount,
    estimatedMarginLoss: parseFloat(estimatedMarginLoss.toFixed(2)),
    isLocked: true,
  };
}