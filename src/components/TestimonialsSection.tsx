import React from 'react';
import { TESTIMONIALS } from '../data/citadelData';
import { Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-purple-100 dark:border-purple-900/40 bg-white dark:bg-[#0E0A1A] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-amber-400 mb-2">
            Verifiable Impact Across All Sectors
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 dark:text-white [text-wrap:balance]">
            Trusted by Students, Enterprise Directors, Motorists & Agro Buyers.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Real outcomes from verified clients in Ilorin, Kwara State and across Nigeria who depend on Citadel Biz Link daily.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                    {item.division}
                  </span>
                  <Quote className="w-5 h-5 text-purple-300 dark:text-purple-800" />
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-purple-100 dark:border-purple-900/40 space-y-2">
                <div className="flex items-start gap-2 text-xs text-purple-900 dark:text-purple-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Documented Outcome: {item.outcome}</span>
                </div>

                <div>
                  <div className="text-sm font-bold text-purple-950 dark:text-white">{item.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} · <span className="text-slate-700 dark:text-slate-300">{item.organization}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
