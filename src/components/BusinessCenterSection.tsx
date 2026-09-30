import React, { useState } from 'react';
import { 
  Monitor, 
  Printer, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Clock,
  ExternalLink
} from 'lucide-react';

interface BusinessCenterSectionProps {
  onServiceSelect: (serviceName: string, turnaround: string) => void;
  onViewDedicatedPage?: () => void;
}

export const BusinessCenterSection: React.FC<BusinessCenterSectionProps> = ({ onServiceSelect, onViewDedicatedPage }) => {
  const [activeTab, setActiveTab] = useState<'corporate' | 'print' | 'academic' | 'workstation'>('corporate');

  const servicesData = {
    corporate: {
      title: 'Corporate Legalization & CAC Business Registration · Ilorin, Kwara State',
      description: 'Accredited agents assisting entrepreneurs and established firms with business names, limited liability company (LLC) incorporation, SCUML anti-money laundering permits, and FIRS Tax Identification Numbers (TIN).',
      items: [
        { name: 'Business Name Registration (Sole Proprietorship)', time: '3–5 Business Days', fee: 'From ₦28,000' },
        { name: 'Private Limited Company (LTD / LLC Formation)', time: '5–7 Business Days', fee: 'From ₦65,000' },
        { name: 'Annual Returns Filing & Status Reports', time: '48 Hours', fee: 'From ₦15,000' },
        { name: 'TIN & SCUML Certificate Clearance', time: '3 Business Days', fee: 'From ₦25,000' }
      ]
    },
    print: {
      title: 'Industrial Printing & Architectural Plotting',
      description: 'Equipped with commercial Konica Minolta laser color production presses and HP DesignJet wide-format plotters for construction blueprints, event brochures, and project binding.',
      items: [
        { name: 'Architectural CAD Blueprint Plotting (A0, A1, A2)', time: 'Instant / Same-Day', fee: 'From ₦1,200 / sheet' },
        { name: 'Heavy-Duty Laser Color Printing & Scanning', time: 'Instant Walk-in', fee: 'From ₦150 / page' },
        { name: 'Hardcover Gold-Foil Thesis Binding', time: '24 Hours', fee: 'From ₦4,500 / copy' },
        { name: 'Conference ID Cards, Lanyards & Corporate Lamination', time: 'Same-Day', fee: 'From ₦800 / unit' }
      ]
    },
    academic: {
      title: 'Accredited Examination & Academic Verification Hub',
      description: 'Official biometric registration center for national exam bodies with verified internet links, finger-scan readers, and certified proctor standards for Kwara candidates.',
      items: [
        { name: 'JAMB UTME / Direct Entry Official Registration', time: '15 Minutes Walk-in', fee: 'Official Reg Fee' },
        { name: 'WAEC / NECO / NABTEB Private Candidates', time: 'Instant Biometric Capture', fee: 'Official Reg Fee' },
        { name: 'Post-UTME Portal Uploads & Screening Verification', time: 'Same-Day Delivery', fee: 'Subsidized' },
        { name: 'NYSC Mobilization & Call-up Letter Clearance', time: 'Instant Processing', fee: 'Subsidized' }
      ]
    },
    workstation: {
      title: 'High-Speed Fiber Workstations & Remote Desk Hub',
      description: 'Quiet air-conditioned workstations connected to low-latency dedicated fiber broadband with uninterrupted inverter power, dual monitors, and technical support on desk.',
      items: [
        { name: 'Hourly Internet & Workstation Access', time: 'Pay-As-You-Use', fee: '₦800 / hour' },
        { name: 'Full-Day Remote Worker Pass (9 AM – 6 PM)', time: 'Guaranteed Desk + Power', fee: '₦4,500 / day' },
        { name: 'Weekly Dedicated Desk Subscription', time: 'Monday to Saturday', fee: '₦22,000 / week' },
        { name: 'Secure Document Scanning & Cloud Vault Backup', time: 'Instant', fee: 'From ₦100 / doc' }
      ]
    }
  };

  const currentCategory = servicesData[activeTab];

  return (
    <section id="business-center" className="py-24 border-t border-purple-100 dark:border-purple-900/40 bg-[#FAF9F6] dark:bg-[#0C0816] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            Cyber & Corporate Business Center · Ilorin, Kwara State
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 dark:text-white [text-wrap:balance]">
            Precision Document Engineering, CAC Filings & Gigabit Workstations.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            From university students submitting research dissertations to business owners incorporating corporate enterprises, our commercial hub in Ilorin, Kwara State delivers speed, compliance, and zero downtime.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <button
            onClick={() => setActiveTab('corporate')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeTab === 'corporate'
                ? 'bg-purple-900 text-white border-purple-900 dark:bg-purple-600 dark:border-purple-600 shadow-md'
                : 'bg-white dark:bg-[#151024] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
            }`}
          >
            <Briefcase className={`w-5 h-5 mb-2 ${activeTab === 'corporate' ? 'text-white' : 'text-purple-700 dark:text-purple-400'}`} />
            <div className="text-xs font-bold">CAC & Corporate</div>
            <div className={`text-[11px] mt-0.5 ${activeTab === 'corporate' ? 'text-purple-200' : 'text-slate-500'}`}>
              LLC, TIN & SCUML
            </div>
          </button>

          <button
            onClick={() => setActiveTab('print')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeTab === 'print'
                ? 'bg-purple-900 text-white border-purple-900 dark:bg-purple-600 dark:border-purple-600 shadow-md'
                : 'bg-white dark:bg-[#151024] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
            }`}
          >
            <Printer className={`w-5 h-5 mb-2 ${activeTab === 'print' ? 'text-white' : 'text-purple-700 dark:text-purple-400'}`} />
            <div className="text-xs font-bold">Plotting & Print</div>
            <div className={`text-[11px] mt-0.5 ${activeTab === 'print' ? 'text-purple-200' : 'text-slate-500'}`}>
              CAD, Laser & Binding
            </div>
          </button>

          <button
            onClick={() => setActiveTab('academic')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeTab === 'academic'
                ? 'bg-purple-900 text-white border-purple-900 dark:bg-purple-600 dark:border-purple-600 shadow-md'
                : 'bg-white dark:bg-[#151024] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
            }`}
          >
            <GraduationCap className={`w-5 h-5 mb-2 ${activeTab === 'academic' ? 'text-white' : 'text-purple-700 dark:text-purple-400'}`} />
            <div className="text-xs font-bold">Exam Portal Desk</div>
            <div className={`text-[11px] mt-0.5 ${activeTab === 'academic' ? 'text-purple-200' : 'text-slate-500'}`}>
              JAMB, WAEC & NECO
            </div>
          </button>

          <button
            onClick={() => setActiveTab('workstation')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeTab === 'workstation'
                ? 'bg-purple-900 text-white border-purple-900 dark:bg-purple-600 dark:border-purple-600 shadow-md'
                : 'bg-white dark:bg-[#151024] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
            }`}
          >
            <Monitor className={`w-5 h-5 mb-2 ${activeTab === 'workstation' ? 'text-white' : 'text-purple-700 dark:text-purple-400'}`} />
            <div className="text-xs font-bold">Fiber Workstations</div>
            <div className={`text-[11px] mt-0.5 ${activeTab === 'workstation' ? 'text-purple-200' : 'text-slate-500'}`}>
              Gigabit Internet & Desks
            </div>
          </button>
        </div>

        {/* Active Category Display */}
        <div className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-purple-950 dark:text-white">
                {currentCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {onViewDedicatedPage && (
                <button
                  onClick={onViewDedicatedPage}
                  className="text-xs font-bold text-purple-700 dark:text-purple-300 hover:text-amber-600 flex items-center gap-1"
                >
                  <span>Full Services Matrix</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
              <div className="text-xs text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 px-3.5 py-2 rounded-lg flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Walk-ins & Remote Orders Welcome</span>
              </div>
            </div>
          </div>

          {/* Service Items List */}
          <div className="divide-y divide-purple-100 dark:divide-purple-900/40 border-y border-purple-100 dark:border-purple-900/40 mb-8">
            {currentCategory.items.map((item, index) => (
              <div 
                key={index} 
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-purple-50/40 dark:hover:bg-purple-950/20 px-2 rounded-xl transition-colors"
              >
                <div className="space-y-1">
                  <div className="text-sm font-bold text-purple-950 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 dark:text-purple-400" />
                    <span>{item.name}</span>
                  </div>
                  <div className="text-xs text-slate-500 pl-6 flex items-center gap-2">
                    <span>Turnaround: {item.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-6 sm:pl-0">
                  <span className="text-xs font-extrabold text-amber-700 dark:text-amber-400 tabular-nums">
                    {item.fee}
                  </span>
                  <button
                    onClick={() => onServiceSelect(item.name, item.time)}
                    className="btn-gold px-3.5 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap shadow-sm"
                  >
                    Request Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              <span>100 Mbps Low-Latency Fiber Backhaul</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Konica Minolta Color Laser Presses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Official Accredited Portal Desk</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
