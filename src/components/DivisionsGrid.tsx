import React from 'react';
import { 
  Building2, 
  Car, 
  PiggyBank, 
  Flame, 
  Monitor, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CITADEL_DIVISIONS } from '../data/citadelData';
import { Division } from '../types';

interface DivisionsGridProps {
  onOpenDetailedPage: (divisionId: string) => void;
  onOpenInquiry: (divisionName: string) => void;
}

export const DivisionsGrid: React.FC<DivisionsGridProps> = ({ 
  onOpenDetailedPage, 
  onOpenInquiry 
}) => {
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'cyber-center':
        return <Monitor className="w-6 h-6 text-purple-700 dark:text-purple-400" />;
      case 'citadel-hostels':
        return <Building2 className="w-6 h-6 text-purple-700 dark:text-purple-400" />;
      case 'auto-hub':
        return <Car className="w-6 h-6 text-purple-700 dark:text-purple-400" />;
      case 'cooperative-society':
        return <PiggyBank className="w-6 h-6 text-purple-700 dark:text-purple-400" />;
      case 'agro-commodities':
        return <Flame className="w-6 h-6 text-purple-700 dark:text-purple-400" />;
      default:
        return <Building2 className="w-6 h-6 text-purple-700 dark:text-purple-400" />;
    }
  };

  return (
    <section id="divisions" className="py-24 border-t border-purple-100 dark:border-purple-900/40 bg-white dark:bg-[#0E0A1A] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Services Directory</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 dark:text-white [text-wrap:balance]">
            Our Core Services & Commercial Divisions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Click on any service card below to open its dedicated detailed page with full pricing, operational capabilities, floor plans, inventories, and online reservation desks.
          </p>
        </div>

        {/* Services Cards Grid (Interactive Cards that navigate to dedicated pages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CITADEL_DIVISIONS.map((div, idx) => (
            <div
              key={div.id}
              onClick={() => onOpenDetailedPage(div.id)}
              className="group cursor-pointer rounded-2xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 hover:border-amber-400 dark:hover:border-amber-400/80 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-700 via-amber-400 to-purple-900 opacity-80 group-hover:h-1.5 transition-all" />

              <div className="space-y-5">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getDivisionIcon(div.id)}
                  </div>
                  <span className="font-display text-2xl font-black text-amber-500 dark:text-amber-400 tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    {div.category}
                  </div>
                  <h3 className="font-display text-xl font-bold text-purple-950 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    {div.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {div.description}
                  </p>
                </div>

                {/* Key Highlights list */}
                <div className="space-y-2 pt-2 border-t border-purple-100 dark:border-purple-900/40">
                  {div.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Primary Metric Pill-Free Box */}
                <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/30 flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">{div.metrics[0].label}</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400 tabular-nums">{div.metrics[0].value}</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-4 border-t border-purple-100 dark:border-purple-900/40 flex items-center justify-between">
                <span className="text-xs font-bold text-purple-900 dark:text-purple-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <span>View Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenInquiry(div.name);
                  }}
                  className="btn-gold px-3.5 py-1.5 text-xs font-bold rounded-lg shadow-sm"
                >
                  Quick Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
