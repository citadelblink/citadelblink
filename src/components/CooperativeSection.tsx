import React, { useState } from 'react';
import { 
  PiggyBank, 
  TrendingUp, 
  Users, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight,
  BadgePercent,
  ExternalLink
} from 'lucide-react';
import { COOPERATIVE_PLANS } from '../data/citadelData';

interface CooperativeSectionProps {
  onJoinCooperative: (planName: string, details?: string) => void;
  onViewDedicatedPage?: () => void;
}

export const CooperativeSection: React.FC<CooperativeSectionProps> = ({ onJoinCooperative, onViewDedicatedPage }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(COOPERATIVE_PLANS[0].id);

  // Savings Estimator state
  const [monthlyContribution, setMonthlyContribution] = useState<number>(50000);
  const [savingMonths, setSavingMonths] = useState<number>(12);

  const annualRate = 0.18;
  const monthlyRate = annualRate / 12;
  
  const totalPrincipal = monthlyContribution * savingMonths;
  let estimatedMaturity = 0;
  for (let i = 1; i <= savingMonths; i++) {
    estimatedMaturity += monthlyContribution * Math.pow(1 + monthlyRate, savingMonths - i + 1);
  }
  estimatedMaturity = Math.round(estimatedMaturity);
  const interestEarned = estimatedMaturity - totalPrincipal;

  const formatNgn = (val: number) => {
    return '₦' + val.toLocaleString('en-NG');
  };

  return (
    <section id="cooperative" className="py-24 border-t border-purple-100 dark:border-purple-900/40 bg-[#FAF9F6] dark:bg-[#0C0816] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            Citadel Multipurpose Cooperative Society · Ilorin, Kwara State
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 dark:text-white [text-wrap:balance]">
            Empowering Members with High-Yield Savings, SME Credit & Asset Wealth.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Registered and member-governed in Ilorin, Kwara State, our cooperative enables students, traders, civil servants, and professionals to escape predatory bank charges while earning up to 18% annual returns.
          </p>
        </div>

        {/* Pillars of Financial Security */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-700 dark:text-purple-400" />
            </div>
            <h4 className="text-base font-bold text-purple-950 dark:text-white">Up to 18% Annual Dividend Yield</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Guaranteed capital growth backed by diversified tangible enterprise investments, vehicle leasing portfolios, and agribusiness wholesale operations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h4 className="text-base font-bold text-purple-950 dark:text-white">24-Hour SME Loan Approvals</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Need capital for inventory or school tuition? Active members access low-interest credit lines without oppressive collateral hurdles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-700 dark:text-purple-400" />
            </div>
            <h4 className="text-base font-bold text-purple-950 dark:text-white">Over 3,200 Active Members</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Join a vibrant community of like-minded builders with transparent digital ledgers and full voting rights at our Annual General Meetings in Ilorin.
            </p>
          </div>
        </div>

        {/* Cooperative Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {COOPERATIVE_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-purple-50/70 dark:bg-purple-950/40 border-purple-600 dark:border-purple-500 shadow-md'
                    : 'bg-white dark:bg-[#151024] border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">{plan.rate}</span>
                    <span className="text-slate-500 dark:text-slate-400">{plan.tenor}</span>
                  </div>

                  <div>
                    <h4 className="font-display text-lg font-bold text-purple-950 dark:text-white">{plan.name}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-purple-100 dark:border-purple-900/40">
                    {plan.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlanId(plan.id);
                      onJoinCooperative(plan.name);
                    }}
                    className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-purple-900 text-white hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 shadow-md shadow-purple-900/20'
                        : 'bg-purple-100 text-purple-950 hover:bg-purple-200 dark:bg-purple-950 dark:text-purple-200'
                    }`}
                  >
                    <span>Enroll in This Scheme</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Savings & Yield Simulator */}
        <div className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              <BadgePercent className="w-4 h-4" />
              <span>Interactive Wealth Growth Simulator</span>
            </div>
            {onViewDedicatedPage && (
              <button
                onClick={onViewDedicatedPage}
                className="text-xs font-bold text-purple-700 dark:text-purple-300 hover:text-amber-600 flex items-center gap-1"
              >
                <span>Full Cooperative Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <h3 className="font-display text-2xl font-bold text-purple-950 dark:text-white mb-2">
            Target Wealth Builder Yield Projection
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
            Calculate your estimated compounded payout when participating in our 18% annual target savings program.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-2">
                  <span>Monthly Contribution:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold tabular-nums">{formatNgn(monthlyContribution)} / month</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-2">
                  <span>Target Savings Duration:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold tabular-nums">{savingMonths} Months</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[6, 12, 18, 24].map((mo) => (
                    <button
                      key={mo}
                      type="button"
                      onClick={() => setSavingMonths(mo)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-colors ${
                        savingMonths === mo
                          ? 'bg-purple-900 text-white border-purple-900 dark:bg-purple-600 dark:border-purple-600 shadow-sm'
                          : 'bg-[#FAF9F6] dark:bg-[#0C0816] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
                      }`}
                    >
                      {mo} Months
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projection Output Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#FAF9F6] dark:bg-[#0C0816] border border-amber-400/30 space-y-6 shadow-md">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Projected Maturity Payout
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums mt-1">
                  {formatNgn(estimatedMaturity)}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-purple-100 dark:border-purple-900/40 text-xs">
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Total Capital Contributed:</span>
                  <span className="font-semibold tabular-nums">{formatNgn(totalPrincipal)}</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Estimated Dividend & Yield:</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400 tabular-nums">+{formatNgn(interestEarned)}</span>
                </div>
              </div>

              <button
                onClick={() => onJoinCooperative('Target Wealth Builder', `${formatNgn(monthlyContribution)}/month for ${savingMonths} months in Ilorin, Kwara State`)}
                className="btn-gold w-full py-3 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
              >
                <span>Start This Savings Plan Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-950" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
