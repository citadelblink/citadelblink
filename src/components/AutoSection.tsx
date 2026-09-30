import React, { useState } from 'react';
import { 
  Car, 
  ShieldCheck, 
  Fuel, 
  Gauge, 
  FileCheck2, 
  Calculator, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { VEHICLE_INVENTORY, COMPANY_CONTACTS } from '../data/citadelData';
import { Vehicle } from '../types';
import autoShowroomImg from '../assets/images/auto_showroom_1790765859771.jpg';

interface AutoSectionProps {
  onVehicleInquiry: (vehicleTitle: string, price: string) => void;
  onViewDedicatedPage?: () => void;
}

export const AutoSection: React.FC<AutoSectionProps> = ({ onVehicleInquiry, onViewDedicatedPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(VEHICLE_INVENTORY[0]);
  
  // Financing Calculator States
  const [calcVehiclePrice, setCalcVehiclePrice] = useState<number>(VEHICLE_INVENTORY[0].priceNgn);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(40);
  const [tenorMonths, setTenorMonths] = useState<number>(12);

  const filteredVehicles = selectedCategory === 'all' 
    ? VEHICLE_INVENTORY 
    : VEHICLE_INVENTORY.filter(v => v.category === selectedCategory);

  const downPaymentAmount = Math.round(calcVehiclePrice * (downPaymentPercent / 100));
  const loanPrincipal = calcVehiclePrice - downPaymentAmount;
  const monthlyInterestRate = 0.015;
  const totalInterest = loanPrincipal * monthlyInterestRate * tenorMonths;
  const totalLoanRepayable = loanPrincipal + totalInterest;
  const monthlyRepayment = Math.round(totalLoanRepayable / tenorMonths);

  const formatNgn = (val: number) => {
    return '₦' + val.toLocaleString('en-NG');
  };

  return (
    <section id="autohub" className="py-24 border-t border-purple-100 dark:border-purple-900/40 bg-white dark:bg-[#0E0A1A] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Citadel Auto Hub & Dealership · Ilorin, Kwara State</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 dark:text-white [text-wrap:balance]">
            Verified Tokunbo & Clean Title Automobiles with 120-Point Audits.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Physical showroom lot situated in Ilorin, Kwara State. Buy outright or finance with spread payments through Citadel Cooperative.
          </p>
        </div>

        {/* Hero Showroom Carrier + Trust Guarantee */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-amber-400/30 shadow-xl bg-white dark:bg-slate-900 group">
              <img
                src={autoShowroomImg}
                alt="Citadel Auto Hub Showroom in Ilorin, Kwara State"
                className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-[#151024]/95 backdrop-blur-md border border-amber-400/30 shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-950 dark:text-white">Physical Auto Lot & Showroom</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Ilorin, Kwara State</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Over 35 premium sedans, commercial transporters, and AWD SUVs physically available for inspection.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 space-y-2">
              <div className="flex items-center gap-2 text-purple-900 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4 text-emerald-500" />
                <span>100% Genuine Customs Duty Documents</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We provide the original single-goods declaration (SGD) and assessment receipts verified directly with the Nigeria Customs Service e-portal before purchase.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>120-Point Multi-System Diagnostic Audit</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Full scan on engine compression, transmission shifting latency, airbag readiness, suspension bushings, and structural frame integrity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 space-y-2">
              <div className="flex items-center gap-2 text-purple-900 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Car className="w-4 h-4 text-amber-500" />
                <span>Nationwide GPS & Doorstep Delivery</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct pickup in Ilorin, Kwara State and rapid interstate haulage across Nigeria with live GPS tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-purple-950 dark:text-white">
              Featured Vehicle Inventory
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Available at our lot in Ilorin, Kwara State. Select any vehicle to test financing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onViewDedicatedPage && (
              <button
                onClick={onViewDedicatedPage}
                className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 flex items-center gap-1.5"
              >
                <span>Open Full Dealership Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}

            <div className="flex items-center gap-1.5 p-1 bg-purple-50 dark:bg-[#151024] border border-amber-400/20 rounded-xl">
              {['all', 'suv', 'sedan', 'commercial'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors capitalize ${
                    selectedCategory === cat
                      ? 'btn-gold shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-purple-950 dark:hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'All Vehicles' : `${cat}s`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vehicles Grid with CAR PHOTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredVehicles.map((vehicle) => {
            const isTarget = selectedVehicle.id === vehicle.id;
            return (
              <div
                key={vehicle.id}
                className={`rounded-2xl border transition-all flex flex-col justify-between overflow-hidden ${
                  isTarget
                    ? 'bg-purple-50/70 dark:bg-purple-950/40 border-amber-400 ring-2 ring-amber-400/30 shadow-lg'
                    : 'bg-[#FAF9F6] dark:bg-[#151024] border-purple-100 dark:border-purple-900/40 hover:border-amber-400/50 shadow-sm'
                }`}
              >
                {/* Vehicle Photo with Status Pill */}
                <div className="relative h-48 overflow-hidden bg-slate-900 group">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase text-purple-950 bg-gradient-to-r from-amber-400 to-amber-300 shadow">
                      {vehicle.year} Model
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white bg-emerald-700/90 border border-emerald-400/30 shadow flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-300" />
                      Customs Paid
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-xs text-amber-300 font-semibold">{vehicle.category.toUpperCase()}</div>
                    <div className="font-display text-base font-bold drop-shadow-sm">{vehicle.make} {vehicle.model}</div>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Outright Asking Price</div>
                      <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums">
                        {vehicle.priceFormatted}
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 py-2.5 border-y border-purple-100 dark:border-purple-900/40">
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-amber-500" />
                        <span>{vehicle.mileage}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-amber-500" />
                        <span>{vehicle.fuelType}</span>
                      </div>
                      <div className="col-span-2 text-slate-500 text-[11px]">
                        Transmission: {vehicle.transmission} · Verified Tokunbo
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1">
                      {vehicle.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <button
                      onClick={() => {
                        setSelectedVehicle(vehicle);
                        setCalcVehiclePrice(vehicle.priceNgn);
                        const calcEl = document.getElementById('coop-financing-calc');
                        if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                        isTarget
                          ? 'btn-gold shadow-md'
                          : 'bg-purple-100 dark:bg-purple-950 text-purple-950 dark:text-amber-300 border border-purple-200 dark:border-purple-800 hover:border-amber-400'
                      }`}
                    >
                      <Calculator className="w-3.5 h-3.5 text-amber-500" />
                      <span>{isTarget ? 'Active in Calculator Below' : 'Simulate Installment Plan'}</span>
                    </button>

                    <button
                      onClick={() => onVehicleInquiry(`${vehicle.year} ${vehicle.make} ${vehicle.model}`, vehicle.priceFormatted)}
                      className="w-full py-2 px-3 text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 border border-amber-400/40 hover:border-amber-400 rounded-xl transition-colors text-center shadow-sm"
                    >
                      Inquire / Inspect in Ilorin, Kwara State
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Financing Calculator Module */}
        <div id="coop-financing-calc" className="p-8 sm:p-10 rounded-3xl bg-purple-50/70 dark:bg-[#120E22] border-2 border-amber-400/30 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-200 dark:border-purple-900/60 pb-6">
            <div>
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Citadel Cooperative Vehicle Scheme · Ilorin, Kwara State</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-purple-950 dark:text-white mt-1">
                Automated Auto Financing Simulator
              </h3>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Selected Vehicle: <strong className="text-purple-950 dark:text-white">{selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-2">
                  <span>Down Payment Equity:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-extrabold tabular-nums">{downPaymentPercent}% ({formatNgn(downPaymentAmount)})</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="70"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>30% Minimum Down Payment</span>
                  <span>70% Maximum</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-2">
                  <span>Repayment Tenor:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-extrabold tabular-nums">{tenorMonths} Months</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[6, 12, 18, 24].map((mo) => (
                    <button
                      key={mo}
                      type="button"
                      onClick={() => setTenorMonths(mo)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        tenorMonths === mo
                          ? 'btn-gold shadow-sm'
                          : 'bg-white dark:bg-[#0C0816] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-purple-900/40 hover:border-amber-400'
                      }`}
                    >
                      {mo} Months
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Calculation Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0C0816] border border-amber-400/30 space-y-6 shadow-md">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Estimated Monthly Repayment
                </div>
                <div className="font-display text-3xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums mt-1">
                  {formatNgn(monthlyRepayment)}
                  <span className="text-xs text-slate-500 font-normal"> / month</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-purple-100 dark:border-purple-900/40 text-xs">
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Total Vehicle Cost:</span>
                  <span className="font-semibold tabular-nums">{formatNgn(calcVehiclePrice)}</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Initial Down Payment ({downPaymentPercent}%):</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400 tabular-nums">{formatNgn(downPaymentAmount)}</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Balance Financed:</span>
                  <span className="font-semibold tabular-nums">{formatNgn(totalLoanRepayable)}</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Inspection & Pickup Location:</span>
                  <span className="font-bold text-purple-950 dark:text-white">Ilorin, Kwara State</span>
                </div>
              </div>

              <button
                onClick={() => onVehicleInquiry(`Financing Application: ${selectedVehicle.make} ${selectedVehicle.model}`, `Down: ${formatNgn(downPaymentAmount)} / ${tenorMonths} Mo @ ${formatNgn(monthlyRepayment)}/mo in Ilorin, Kwara State`)}
                className="btn-gold w-full py-3 px-4 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 active:scale-[0.98]"
              >
                <span>Apply for Vehicle Financing</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-950" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
