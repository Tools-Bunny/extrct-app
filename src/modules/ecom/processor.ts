export interface EcomCsvRow {
  orderId: string;
  sku: string;
  chargedFee: number;
  expectedFee: number;
}

export interface LeakageReport {
  totalAnalyzed: number;
  flaggedOrdersCount: number;
  totalRevenueLeaked: number;
  isLocked: boolean;
}

export function analyzeEcomFees(rows: EcomCsvRow[]): LeakageReport {
  let totalRevenueLeaked = 0;
  let flaggedOrdersCount = 0;

  rows.forEach((row) => {
    if (row.chargedFee > row.expectedFee) {
      totalRevenueLeaked += (row.chargedFee - row.expectedFee);
      flaggedOrdersCount++;
    }
  });

  return {
    totalAnalyzed: rows.length,
    flaggedOrdersCount,
    totalRevenueLeaked: parseFloat(totalRevenueLeaked.toFixed(2)),
    isLocked: true,
  };
}