import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronDown, MapPin } from 'lucide-react';
import heroHqImg from '../assets/images/hero_citadel_hq_1790765826159.jpg';
import { COMPANY_CONTACTS } from '../data/citadelData';

interface HeroProps {
  onOpenInquiry: (defaultDivision?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-[#FAF9F6] dark:bg-[#0C0816] transition-colors duration-200">
      
      {/* Background glow effects with royal purple & warm gold */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 dark:bg-purple-600/15 blur-[140px]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-[450px] w-[450px] rounded-full bg-amber-500/10 dark:bg-amber-500/15 blur-[160px]" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-900 dark:text-amber-400 mb-6">
          <span>Est. 2017</span>
          <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
          <span>Headquarters: Ilorin, Kwara State</span>
          <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
          <span>Registered Nigerian Multi-Venture Enterprise</span>
        </div>

        {/* Main Grid: Value Proposition + Primary CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-purple-950 dark:text-white leading-[1.1] [text-wrap:balance]">
              Integrated Excellence in Living, Mobility, Commerce & Agriculture.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Citadel Biz Link unites premier student & executive hostels, high-speed digital business centers, certified automobile sales, member-first financial cooperative funding, and export-grade pure red palm oil under one trusted institutional umbrella in Ilorin, Kwara State.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenInquiry('General Enterprise Inquiry')}
                className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold rounded-xl active:scale-[0.98] whitespace-nowrap"
              >
                <span>Initiate Service or Reservation</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-purple-950 dark:text-amber-300 bg-white dark:bg-[#160f2b] hover:bg-purple-50 dark:hover:bg-[#20153d] border border-amber-400/40 hover:border-amber-400 rounded-xl transition-all whitespace-nowrap shadow-sm"
              >
                <span>Explore All Service Cards</span>
                <ChevronDown className="w-4 h-4 text-amber-500" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 border-t border-purple-100 dark:border-purple-900/40 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-700 dark:text-purple-400" />
                <span>100% Verified Customs Duty Papers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>24/7 Solar Grid in All Residences</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Zero-Additive Uncut Palm Oil</span>
              </div>
            </div>
          </div>

          {/* Marquee Visual Hero Carrier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-purple-100 dark:border-purple-900/40 shadow-2xl bg-white dark:bg-slate-900 group">
              <img
                src={heroHqImg}
                alt="Citadel Biz Link Commercial Headquarters in Ilorin, Kwara State"
                className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/30 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <div className="text-xs font-semibold text-amber-300 tracking-wider uppercase mb-1">
                  Enterprise Headquarters
                </div>
                <div className="text-lg font-bold text-white">
                  Citadel Commercial Hub & Complex
                </div>
                <div className="text-xs text-purple-200 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ilorin, Kwara State</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quantified Rigor Metrics Bar with Gold highlights */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 pt-10 border-t border-amber-400/20">
          <div className="space-y-1">
            <div className="font-display text-2xl lg:text-3xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums tracking-tight">
              12,400+
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
              Business Ops Executed
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-2xl lg:text-3xl font-extrabold text-purple-950 dark:text-white tabular-nums tracking-tight">
              380+
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
              Students & Execs Housed
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-2xl lg:text-3xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums tracking-tight">
              450+
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
              Vehicles Inspected & Sold
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-2xl lg:text-3xl font-extrabold text-amber-500 dark:text-amber-300 tabular-nums tracking-tight">
              ₦1.8B+
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
              Cooperative Capital Disbursed
            </div>
          </div>

          <div className="space-y-1 col-span-2 md:col-span-1">
            <div className="font-display text-2xl lg:text-3xl font-extrabold text-purple-950 dark:text-white tabular-nums tracking-tight">
              95,000L+
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
              Pure Red Oil Distributed / Year
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
