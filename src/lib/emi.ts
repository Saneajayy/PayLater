export function calculateEmi(mrp: number, tenureMonths: number, annualInterestRate: number): number {
  if (annualInterestRate === 0) {
    return Math.round(mrp / tenureMonths);
  }
  
  const r = annualInterestRate / 12 / 100;
  const n = tenureMonths;
  const principal = mrp;
  
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return Math.round(emi);
}
