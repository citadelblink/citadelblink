import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare,
  Building2,
  Car,
  PiggyBank,
  Flame,
  Monitor,
  Zap,
  Wifi,
  FileCheck2,
  Calendar,
  Layers,
  Award,
  Gauge,
  Fuel,
  Calculator,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CITADEL_DIVISIONS, HOSTEL_ROOMS, VEHICLE_INVENTORY, COOPERATIVE_PLANS, AGRO_PRODUCTS, COMPANY_CONTACTS, WHATSAPP_PHONE, openWhatsApp, buildWhatsAppUrl, PREWRITTEN_MESSAGES } from '../data/citadelData';
import heroHqImg from '../assets/images/hero_citadel_hq_1790765826159.jpg';
import hostelSuiteImg from '../assets/images/hostel_suite_1790765845464.jpg';
import autoShowroomImg from '../assets/images/auto_showroom_1790765859771.jpg';
import agroPalmoilImg from '../assets/images/agro_palmoil_1790765876514.jpg';
import { Vehicle } from '../types';

interface ServiceDetailPageProps {
  divisionId: string;
  onBackToHome: () => void;
  onSelectOtherDivision: (id: string) => void;
  onOpenInquiry: (divisionName: string, initialDetails?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  divisionId,
  onBackToHome,
  onSelectOtherDivision,
  onOpenInquiry
}) => {
  const division = CITADEL_DIVISIONS.find(d => d.id === divisionId) || CITADEL_DIVISIONS[0];

  // Specific state per division
  const [selectedRoom, setSelectedRoom] = useState(HOSTEL_ROOMS[0]);
  const [selectedVehicleCategory, setSelectedVehicleCategory] = useState<'all' | 'suv' | 'sedan' | 'commercial'>('all');
  const [activeCarForCalc, setActiveCarForCalc] = useState<Vehicle>(VEHICLE_INVENTORY[0]);
  const [carDownPaymentPct, setCarDownPaymentPct] = useState<number>(35);
  const [carTenorMonths, setCarTenorMonths] = useState<number>(12);

  const [selectedAgroProduct, setSelectedAgroProduct] = useState(AGRO_PRODUCTS[1]);
  const [agroQty, setAgroQty] = useState(5);
  const [destination, setDestination] = useState('Ilorin, Kwara State');

  // Financing calculation for car
  const downPaymentNgn = Math.round(activeCarForCalc.priceNgn * (carDownPaymentPct / 100));
  const principalNgn = activeCarForCalc.priceNgn - downPaymentNgn;
  const coopMonthlyRate = 0.015;
  const totalInterestNgn = principalNgn * coopMonthlyRate * carTenorMonths;
  const totalPayableNgn = principalNgn + totalInterestNgn;
  const monthlyRepaymentNgn = Math.round(totalPayableNgn / carTenorMonths);

  const getImageForDivision = (id: string) => {
    switch (id) {
      case 'citadel-hostels':
        return hostelSuiteImg;
      case 'auto-hub':
        return autoShowroomImg;
      case 'agro-commodities':
        return agroPalmoilImg;
      default:
        return heroHqImg;
    }
  };

  const filteredCars = selectedVehicleCategory === 'all'
    ? VEHICLE_INVENTORY
    : VEHICLE_INVENTORY.filter(v => v.category === selectedVehicleCategory);

  const branch = {
    name: 'Citadel Operations Complex',
    address: 'Ilorin, Kwara State',
    hours: division.id === 'citadel-hostels' ? '24/7 Security & Solar Hub' : COMPANY_CONTACTS.workingHours
  };

  // Delivery calculator for Agro
  const agroTotal = selectedAgroProduct.unitPriceNgn * agroQty;
  const deliveryCost = destination.includes('Ilorin') ? 2500 : 7000;

  const handleWhatsApp = () => {
    const text = `Hello Citadel Biz Link! I am inquiring about ${division.name} in Ilorin, Kwara State. Please share pricing, availability, and inspection procedures.`;
    openWhatsApp(text);
  };

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-purple-100 dark:border-purple-900/40">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-900 dark:text-purple-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>← Back to All Services Overview</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span>Citadel Home</span>
            <span aria-hidden="true">/</span>
            <span>Divisions</span>
            <span aria-hidden="true">/</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">{division.name.split('&')[0]}</span>
          </div>
        </div>

        {/* Division Hero Banner with Rich Gold Accents */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-950 via-[#1c0e36] to-purple-950 text-white p-8 md:p-14 mb-16 shadow-2xl border border-amber-400/30">
          <div className="relative z-10 max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/15 px-3 py-1.5 rounded-lg border border-amber-400/40 backdrop-blur-sm">
              <Award className="w-4 h-4 text-amber-300" />
              <span>{division.tag} · Ilorin, Kwara State</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {division.name}
            </h1>

            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal">
              {division.subtitle}
            </p>

            {/* Address Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300/90 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Location: Ilorin, Kwara State</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => onOpenInquiry(division.name, `Priority Consultation for ${division.name}`)}
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm rounded-xl font-bold active:scale-[0.98]"
              >
                <span>{division.primaryAction}</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-amber-300 bg-purple-900/60 hover:bg-purple-900 border border-amber-400/40 hover:border-amber-400 rounded-xl transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Background Decorative Graphic */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none hidden lg:block overflow-hidden">
            <img 
              src={getImageForDivision(division.id)} 
              alt={division.name}
              className="w-full h-full object-cover scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Full Editorial Overview, Proof Points, Operational Schemas */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Division Description & Mandate */}
            <div className="space-y-4">
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Operational Mandate & Standards</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-purple-950 dark:text-white">
                Engineered for Institutional Reliability in Ilorin, Kwara State.
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {division.description}
              </p>
            </div>

            {/* Strategic Operational Highlights */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#151024] border border-amber-400/20 shadow-sm space-y-6">
              <h3 className="font-display text-xl font-bold text-purple-950 dark:text-purple-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span>Core Institutional Guarantees</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {division.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/50 dark:bg-[#1C1530] border border-purple-100 dark:border-purple-900/30">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Verified Metrics Bar in Pure Gold */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950 via-[#180e2e] to-purple-950 border border-amber-400/30 shadow-md">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-4">
                Performance Benchmarks · Citadel Biz Link
              </div>
              <div className="grid grid-cols-3 gap-4">
                {division.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-400 tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-purple-200 uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DEDICATED CAR PAGE CONTENT (auto-hub) */}
            {division.id === 'auto-hub' && (
              <div className="space-y-8">
                
                {/* Header & Category Filter Tabs */}
                <div className="p-8 rounded-3xl bg-white dark:bg-[#151024] border border-amber-400/25 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        Citadel Auto Hub Showroom · Ilorin, Kwara State
                      </div>
                      <h3 className="font-display text-2xl font-bold text-purple-950 dark:text-white mt-1">
                        Physical Vehicle Inventory in Ilorin
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        All vehicles are physically in stock, 100% customs cleared, and ready for immediate test-drive.
                      </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-1.5 p-1 bg-purple-50 dark:bg-[#1f1638] border border-amber-400/20 rounded-xl">
                      {(['all', 'suv', 'sedan', 'commercial'] as const).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedVehicleCategory(cat)}
                          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all capitalize ${
                            selectedVehicleCategory === cat
                              ? 'btn-gold shadow-sm'
                              : 'text-slate-600 dark:text-slate-300 hover:text-purple-950 dark:hover:text-white'
                          }`}
                        >
                          {cat === 'all' ? 'All Cars' : `${cat}s`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CARS GALLERY - Real photos and detailed specifications */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {filteredCars.map((veh) => {
                      const isSelectedForCalc = activeCarForCalc.id === veh.id;
                      return (
                        <div 
                          key={veh.id} 
                          className={`group rounded-2xl overflow-hidden border transition-all flex flex-col justify-between ${
                            isSelectedForCalc
                              ? 'border-amber-400 ring-2 ring-amber-400/40 bg-purple-50/40 dark:bg-[#1a1233] shadow-lg'
                              : 'border-purple-100 dark:border-purple-900/40 bg-white dark:bg-[#120E22] hover:border-amber-400/60 shadow-sm'
                          }`}
                        >
                          {/* Car Image with Badge */}
                          <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                            <img
                              src={veh.image}
                              alt={`${veh.year} ${veh.make} ${veh.model}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            
                            {/* Top Badges */}
                            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                              <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-400 to-amber-300 shadow-md">
                                {veh.category.toUpperCase()}
                              </span>
                              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white bg-emerald-700/90 backdrop-blur-sm border border-emerald-400/30 flex items-center gap-1 shadow-sm">
                                <ShieldCheck className="w-3 h-3 text-emerald-300" />
                                Customs Cleared
                              </span>
                            </div>

                            {/* Bottom Title on Image */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                              <div>
                                <span className="text-[11px] font-semibold text-amber-300">{veh.year} Model</span>
                                <h4 className="font-display text-base font-extrabold drop-shadow-sm">
                                  {veh.make} {veh.model}
                                </h4>
                              </div>
                            </div>
                          </div>

                          {/* Card Content & Specs */}
                          <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                            
                            <div>
                              {/* Price Row in High Contrast Gold */}
                              <div className="flex items-center justify-between pb-3 border-b border-purple-100 dark:border-purple-900/40">
                                <div>
                                  <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Outright Price</div>
                                  <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums">
                                    {veh.priceFormatted}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Inspection Status</div>
                                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    120-Point Passed
                                  </span>
                                </div>
                              </div>

                              {/* Specs Bar */}
                              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 py-3 border-b border-purple-100 dark:border-purple-900/40">
                                <div className="flex items-center gap-1.5">
                                  <Gauge className="w-3.5 h-3.5 text-amber-500" />
                                  <span className="font-medium">{veh.mileage}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Fuel className="w-3.5 h-3.5 text-amber-500" />
                                  <span className="font-medium">{veh.fuelType} · {veh.transmission}</span>
                                </div>
                              </div>

                              {/* Highlights */}
                              <div className="pt-3 space-y-1.5">
                                {veh.features.slice(0, 3).map((feat, i) => (
                                  <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                    <span className="truncate">{feat}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-4 space-y-2">
                              <button
                                onClick={() => {
                                  setActiveCarForCalc(veh);
                                  const calcEl = document.getElementById('car-financing-calculator');
                                  if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`w-full py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                                  isSelectedForCalc
                                    ? 'btn-gold shadow-md'
                                    : 'bg-purple-50 dark:bg-purple-950/60 text-purple-950 dark:text-amber-300 border border-purple-200 dark:border-purple-800 hover:border-amber-400'
                                }`}
                              >
                                <Calculator className="w-3.5 h-3.5 text-amber-500" />
                                <span>{isSelectedForCalc ? 'Selected in Installment Calculator' : 'Calculate Cooperative Installment'}</span>
                              </button>

                              <button
                                onClick={() => onOpenInquiry('Citadel Auto Hub', `Inspection & Diagnostic Request for ${veh.year} ${veh.make} ${veh.model} (${veh.priceFormatted}) in Ilorin, Kwara State`)}
                                className="w-full py-2 px-3 text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 dark:bg-purple-900 dark:hover:bg-purple-800 border border-amber-400/40 hover:border-amber-400 rounded-xl transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
                              >
                                <span>Book Test-Drive in Ilorin</span>
                                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                              </button>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* INTERACTIVE CAR FINANCING CALCULATOR */}
                <div id="car-financing-calculator" className="p-8 rounded-3xl bg-gradient-to-br from-purple-950 via-[#1c0f38] to-purple-950 border-2 border-amber-400/40 text-white shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-800/60 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-400">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Citadel Cooperative Partnership</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white mt-1">
                        Auto Installment Financing Simulator
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-amber-300 bg-amber-400/15 px-3 py-1.5 rounded-lg border border-amber-400/30">
                      Ilorin, Kwara State Scheme
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Controls */}
                    <div className="lg:col-span-7 space-y-5">
                      
                      {/* Selected Vehicle Selector */}
                      <div>
                        <label className="block text-xs font-semibold text-purple-200 mb-2">
                          Vehicle Selected for Financing
                        </label>
                        <select
                          value={activeCarForCalc.id}
                          onChange={(e) => {
                            const found = VEHICLE_INVENTORY.find(v => v.id === e.target.value);
                            if (found) setActiveCarForCalc(found);
                          }}
                          className="w-full rounded-xl bg-purple-900/60 border border-amber-400/40 px-4 py-3 text-xs sm:text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                          {VEHICLE_INVENTORY.map((c) => (
                            <option key={c.id} value={c.id} className="bg-purple-950 text-white">
                              {c.year} {c.make} {c.model} — {c.priceFormatted}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Equity Down Payment Slider */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                          <span className="text-purple-200">Equity Down Payment: {carDownPaymentPct}%</span>
                          <span className="font-bold text-amber-400 tabular-nums">₦{downPaymentNgn.toLocaleString('en-NG')}</span>
                        </div>
                        <input
                          type="range"
                          min="30"
                          max="60"
                          step="5"
                          value={carDownPaymentPct}
                          onChange={(e) => setCarDownPaymentPct(Number(e.target.value))}
                          className="w-full h-2 bg-purple-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
                        />
                        <div className="flex justify-between text-[11px] text-purple-300/70 mt-1">
                          <span>30% Minimum Down Payment</span>
                          <span>60% Maximum</span>
                        </div>
                      </div>

                      {/* Repayment Tenor Buttons */}
                      <div>
                        <label className="block text-xs font-semibold text-purple-200 mb-2">
                          Repayment Tenor (Citadel Cooperative)
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[6, 12, 18].map((months) => (
                            <button
                              key={months}
                              onClick={() => setCarTenorMonths(months)}
                              className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                                carTenorMonths === months
                                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-purple-950 border-amber-300 shadow-md'
                                  : 'bg-purple-900/50 text-purple-200 border-purple-700/60 hover:border-amber-400/50'
                              }`}
                            >
                              {months} Months
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Result Output Card */}
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-amber-400/40 backdrop-blur-md space-y-4 text-center sm:text-left">
                      <div className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                        Estimated Monthly Repayment
                      </div>
                      
                      <div className="text-3xl sm:text-4xl font-extrabold text-amber-300 tabular-nums drop-shadow-sm">
                        ₦{monthlyRepaymentNgn.toLocaleString('en-NG')}
                        <span className="text-xs text-purple-300 font-normal"> / month</span>
                      </div>

                      <div className="divide-y divide-purple-800/40 text-xs text-purple-200 space-y-2 pt-2">
                        <div className="flex justify-between pt-2">
                          <span className="text-purple-300">Initial Down Payment:</span>
                          <span className="font-bold text-white">₦{downPaymentNgn.toLocaleString('en-NG')}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span className="text-purple-300">Balance Financed:</span>
                          <span className="font-bold text-white">₦{principalNgn.toLocaleString('en-NG')}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span className="text-purple-300">Cooperative Tenor:</span>
                          <span className="font-bold text-amber-300">{carTenorMonths} Months</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span className="text-purple-300">Location for Pickup:</span>
                          <span className="font-bold text-white">Ilorin, Kwara State</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenInquiry('Citadel Auto Hub', `Cooperative Financing Application for ${activeCarForCalc.year} ${activeCarForCalc.make} ${activeCarForCalc.model}: Down Payment ₦${downPaymentNgn.toLocaleString('en-NG')}, Tenor ${carTenorMonths} months (₦${monthlyRepaymentNgn.toLocaleString('en-NG')}/month) in Ilorin, Kwara State`)}
                        className="btn-gold w-full py-3 px-4 text-xs font-bold rounded-xl mt-4 active:scale-[0.98]"
                      >
                        Apply for Vehicle Financing
                      </button>
                    </div>

                  </div>
                </div>

                {/* 120-Point Guarantee Banner */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#151024] border border-amber-400/30 flex items-center justify-between gap-6 flex-wrap shadow-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>Certified Roadworthiness Guarantee</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Every car comes with custom single goods declaration (SGD) receipts, roadworthiness certification, and a GPS tracking unit installed.
                    </p>
                  </div>
                  <div className="text-xs font-bold text-purple-950 dark:text-white bg-purple-50 dark:bg-[#1f1638] px-4 py-2 rounded-xl border border-purple-200 dark:border-purple-800">
                    Location: Ilorin, Kwara State
                  </div>
                </div>

              </div>
            )}

            {/* CYBER CENTER SERVICES */}
            {division.id === 'cyber-center' && (
              <div className="p-8 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-6">
                <h3 className="font-display text-xl font-bold text-purple-950 dark:text-purple-100 flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-amber-500" />
                  <span>Comprehensive Service Rate Matrix & Turnaround in Ilorin, Kwara State</span>
                </h3>
                <div className="divide-y divide-purple-100 dark:divide-purple-900/40 text-xs">
                  <div className="py-3 flex justify-between items-center font-semibold text-slate-500">
                    <span>Corporate / Document Service</span>
                    <span>Standard Turnaround</span>
                    <span>Official Base Rate</span>
                  </div>
                  <div className="py-3 flex justify-between items-center text-slate-800 dark:text-slate-200">
                    <span>CAC Business Name Registration (Sole Proprietor)</span>
                    <span className="text-slate-500">3–5 Working Days</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">₦28,000</span>
                  </div>
                  <div className="py-3 flex justify-between items-center text-slate-800 dark:text-slate-200">
                    <span>Limited Liability Company (LLC / LTD Formation)</span>
                    <span className="text-slate-500">5–7 Working Days</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">₦65,000</span>
                  </div>
                  <div className="py-3 flex justify-between items-center text-slate-800 dark:text-slate-200">
                    <span>Architectural CAD Blueprint Plotting (A0, A1, A2)</span>
                    <span className="text-slate-500">Immediate Walk-in</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">From ₦1,200/sheet</span>
                  </div>
                  <div className="py-3 flex justify-between items-center text-slate-800 dark:text-slate-200">
                    <span>JAMB / WAEC / NECO Accredited Biometric Processing</span>
                    <span className="text-slate-500">15–20 Mins Desk</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">Official Board Rate</span>
                  </div>
                  <div className="py-3 flex justify-between items-center text-slate-800 dark:text-slate-200">
                    <span>Dedicated High-Speed Fiber Workstation</span>
                    <span className="text-slate-500">Instant Access</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">₦800 / hr (₦4,500 / day)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-[#1a1233] border border-purple-100 dark:border-purple-900/40 flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-xs text-purple-950 dark:text-purple-200">
                    Location: <strong>Ilorin, Kwara State</strong> · High throughput laser and fiber facilities.
                  </div>
                  <button
                    onClick={() => onOpenInquiry('Cyber & Business Center', 'CAC or Printing Order in Ilorin, Kwara State')}
                    className="btn-gold px-4 py-2 text-xs font-bold rounded-xl shadow-md"
                  >
                    Initiate Document / CAC Order
                  </button>
                </div>
              </div>
            )}

            {/* HOSTELS SECTION */}
            {division.id === 'citadel-hostels' && (
              <div className="p-8 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-6">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h3 className="font-display text-xl font-bold text-purple-950 dark:text-purple-100 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-500" />
                    <span>Hostel Floorplans & Academic Session Allocations in Ilorin, Kwara State</span>
                  </h3>
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/15 px-3 py-1 rounded-md border border-amber-400/30">
                    Current Session Open
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {HOSTEL_ROOMS.map((room) => (
                    <div 
                      key={room.id}
                      onClick={() => setSelectedRoom(room)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        selectedRoom.id === room.id
                          ? 'border-amber-400 bg-purple-50/70 dark:bg-purple-950/40 shadow-md ring-1 ring-amber-400/30'
                          : 'border-slate-200 dark:border-purple-900/30 bg-slate-50/50 dark:bg-[#120E22]'
                      }`}
                    >
                      <div className="text-xs font-bold text-purple-900 dark:text-purple-200">{room.name}</div>
                      <div className="text-lg font-extrabold text-amber-600 dark:text-amber-400 tabular-nums mt-1">{room.pricePerSession}</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{room.occupancy}</p>
                      <div className="mt-3 text-[11px] text-slate-500 space-y-1">
                        <div>• 24/7 Solar Inverter Power</div>
                        <div>• Starlink Campus Wi-Fi</div>
                        <div>• Water Borehole & Security</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-xs text-purple-950 dark:text-purple-200">
                    Selected for reservation: <strong>{selectedRoom.name}</strong> ({selectedRoom.occupancy}) · Located in <strong>Ilorin, Kwara State</strong>
                  </div>
                  <button
                    onClick={() => onOpenInquiry('Citadel Living Hostels', `Reservation for ${selectedRoom.name} (${selectedRoom.pricePerSession}) in Ilorin, Kwara State`)}
                    className="btn-gold px-4 py-2 text-xs font-bold rounded-xl shadow-md"
                  >
                    Apply for Room Allocation
                  </button>
                </div>
              </div>
            )}

            {/* COOPERATIVE SECTION */}
            {division.id === 'cooperative-society' && (
              <div className="p-8 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-6">
                <h3 className="font-display text-xl font-bold text-purple-950 dark:text-purple-100 flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-amber-500" />
                  <span>Citadel Multipurpose Cooperative Bylaws & Schemes · Ilorin, Kwara State</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {COOPERATIVE_PLANS.map((plan) => (
                    <div key={plan.id} className="p-5 rounded-2xl border border-purple-100 dark:border-purple-900/30 bg-slate-50/50 dark:bg-[#120E22] space-y-3">
                      <div className="text-xs font-bold text-purple-900 dark:text-purple-200">{plan.name}</div>
                      <div className="text-xl font-extrabold text-amber-600 dark:text-amber-400">{plan.rate}</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{plan.description}</p>
                      <button
                        onClick={() => onOpenInquiry('Cooperative Society', `Enrollment in ${plan.name} in Ilorin, Kwara State`)}
                        className="btn-gold w-full py-2.5 text-xs font-bold rounded-xl shadow-md"
                      >
                        Enroll in Scheme
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AGRO COMMODITIES SECTION */}
            {division.id === 'agro-commodities' && (
              <div className="p-8 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-6">
                <h3 className="font-display text-xl font-bold text-purple-950 dark:text-purple-100 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-500" />
                  <span>Standard Packaging & Quality Parameters · Ilorin, Kwara State</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {AGRO_PRODUCTS.map((prod) => (
                    <div key={prod.id} className="p-5 rounded-2xl border border-purple-100 dark:border-purple-900/30 bg-slate-50/50 dark:bg-[#120E22] space-y-2">
                      <div className="text-xs font-bold text-purple-900 dark:text-purple-300">{prod.size}</div>
                      <div className="text-xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums">₦{prod.unitPriceNgn.toLocaleString()}</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{prod.bestFor}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-xs text-purple-950 dark:text-purple-200">
                    Bulk distribution from <strong>Ilorin, Kwara State</strong> with nationwide logistics.
                  </div>
                  <button
                    onClick={() => onOpenInquiry('Agro Red Palm Oil', 'Wholesale Bulk Supply Order in Ilorin, Kwara State')}
                    className="btn-gold px-4 py-2 text-xs font-bold rounded-xl shadow-md"
                  >
                    Request Bulk Supply Invoice
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Branch Desk Profile & Contact Box */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Location & Physical Presence Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151024] border border-amber-400/30 shadow-sm space-y-5">
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Operational Location
              </div>

              <div className="space-y-2">
                <h4 className="font-display text-lg font-bold text-purple-950 dark:text-purple-100">
                  {branch.name}
                </h4>
                <div className="text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2 font-semibold">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{branch.hours}</span>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-[#1C1530] border border-purple-100 dark:border-purple-900/30 space-y-2.5 text-xs">
                <div className="text-slate-500 dark:text-slate-400 uppercase font-semibold text-[10px]">
                  Direct Hotline & WhatsApp
                </div>
                <a 
                  href={buildWhatsAppUrl(`Hello Citadel Biz Link! I am inquiring about ${division.name} in Ilorin, Kwara State.`)}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="font-extrabold text-purple-950 dark:text-purple-100 text-sm hover:text-amber-500 flex items-center gap-2 tabular-nums"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>{WHATSAPP_PHONE}</span>
                </a>
                <div className="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Official Email:</span>
                  <a href={`mailto:${COMPANY_CONTACTS.email}`} className="font-semibold text-purple-900 dark:text-amber-400 underline">
                    {COMPANY_CONTACTS.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry(division.name, `Direct Desk Inbound for ${division.name} in Ilorin, Kwara State`)}
                className="btn-gold w-full py-3 px-4 text-xs font-bold rounded-xl active:scale-[0.98]"
              >
                Book Inspection / Consultation
              </button>
            </div>

            {/* Switch to Other Divisions */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-3">
              <div className="text-xs font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wider">
                Explore Other Citadel Divisions
              </div>
              <div className="space-y-1.5">
                {CITADEL_DIVISIONS.filter(d => d.id !== division.id).map((other) => (
                  <button
                    key={other.id}
                    onClick={() => {
                      onSelectOtherDivision(other.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{other.name.split('&')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
