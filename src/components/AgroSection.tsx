import React, { useState } from 'react';
import { 
  Flame, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Package, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { AGRO_PRODUCTS, COMPANY_CONTACTS, WHATSAPP_PHONE, openWhatsApp } from '../data/citadelData';
import { AgroProduct } from '../types';
import agroPalmoilImg from '../assets/images/agro_palmoil_1790765876514.jpg';

interface AgroSectionProps {
  onOrderAgro: (orderSummary: string, estimatedPrice: string) => void;
  onViewDedicatedPage?: () => void;
}

export const AgroSection: React.FC<AgroSectionProps> = ({ onOrderAgro, onViewDedicatedPage }) => {
  const [selectedProduct, setSelectedProduct] = useState<AgroProduct>(AGRO_PRODUCTS[1]);
  const [quantity, setQuantity] = useState<number>(4);
  const [destination, setDestination] = useState<string>('Kwara / Ilorin (Local)');

  const deliveryRates: Record<string, number> = {
    'Kwara / Ilorin (Local)': 2500,
    'Oyo / Ibadan': 5500,
    'Lagos Hub': 6500,
    'Abuja FCT / Niger': 12000,
    'Kogi / Osun': 6000,
    'Export Freight (Quoted)': 45000
  };

  const productTotal = selectedProduct.unitPriceNgn * quantity;
  const deliveryFee = deliveryRates[destination] || 5000;
  const grandTotal = productTotal + deliveryFee;

  const formatNgn = (val: number) => {
    return '₦' + val.toLocaleString('en-NG');
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello Citadel Agro Commodities (08036955995)! I would like to order: ${quantity} unit(s) of ${selectedProduct.size} (${formatNgn(productTotal)}), Destination: ${destination}. Total estimate: ${formatNgn(grandTotal)}. Please confirm current dispatch availability in Ilorin, Kwara State.`;
    openWhatsApp(message);
  };

  return (
    <section id="red-oil" className="py-24 border-t border-purple-100 dark:border-purple-900/40 bg-white dark:bg-[#0E0A1A] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            Citadel Agro Commodities · Ilorin, Kwara State
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 dark:text-white [text-wrap:balance]">
            100% Unadulterated Virgin Red Palm Oil Direct from Sustainable Mills.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Eliminating adulteration, chemicals, and counterfeit oil. Dispatched from our central logistics depot in Ilorin, Kwara State, for households, caterers, schools, and global exporters.
          </p>
        </div>

        {/* Visual Media + Purity Standard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-amber-400/30 shadow-xl bg-white dark:bg-slate-900 group">
              <img
                src={agroPalmoilImg}
                alt="Pure Uncut Red Palm Oil - Citadel Agro Commodities Ilorin, Kwara State"
                className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-[#151024]/95 backdrop-blur-md border border-amber-400/30 shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-950 dark:text-white">Direct Farm Extraction</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Ilorin, Kwara State</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Naturally golden-red, rich in natural beta-carotene and Vitamin E, with zero artificial dye or chemical blending.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 space-y-2">
              <div className="flex items-center gap-2 text-purple-800 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Zero Sudan Dye or Synthetic Colorants</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Tested for purity. We never blend palm oil with petroleum solvents or prohibited textile coloring agents. Safe for human consumption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Low Free Fatty Acid (FFA &lt; 4%)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Processed within 24 hours of palm bunch harvesting to prevent rapid acidification, preserving natural aroma, taste, and long shelf life.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 space-y-2">
              <div className="flex items-center gap-2 text-purple-900 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                <span>Kwara & Nationwide Fleet Haulage</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Supplying 10 to 500 drums consistently throughout the year without seasonal supply disruptions for commercial food businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Product Sizes Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {AGRO_PRODUCTS.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-purple-50/70 dark:bg-purple-950/40 border-purple-600 dark:border-purple-500 shadow-md'
                    : 'bg-[#FAF9F6] dark:bg-[#151024] border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-800 dark:text-amber-400 font-bold">{prod.volumeLiters} Liters Capacity</span>
                    <span className="text-slate-500 dark:text-slate-400">{prod.packaging.split(' ')[0]}</span>
                  </div>

                  <div>
                    <h4 className="font-display text-lg font-bold text-purple-950 dark:text-white">{prod.size}</h4>
                    <div className="text-2xl font-extrabold text-amber-700 dark:text-amber-400 tabular-nums mt-1">
                      {formatNgn(prod.unitPriceNgn)}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{prod.bestFor}</p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(prod);
                    }}
                    className={`w-full py-2.5 px-3 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-purple-900 text-white dark:bg-purple-600 shadow-sm'
                        : 'bg-purple-100 text-purple-950 hover:bg-purple-200 dark:bg-purple-950 dark:text-purple-200'
                    }`}
                  >
                    <span>{isSelected ? 'Active in Calculator' : 'Select Package'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Bulk Supply Quote Generator */}
        <div className="p-8 lg:p-10 rounded-3xl bg-[#FAF9F6] dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider">
              <Package className="w-4 h-4" />
              <span>Interactive Wholesale & Dispatch Quote</span>
            </div>
            {onViewDedicatedPage && (
              <button
                onClick={onViewDedicatedPage}
                className="text-xs font-bold text-purple-700 dark:text-purple-300 hover:text-purple-900 flex items-center gap-1"
              >
                <span>Full Agro Commodities Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <h3 className="font-display text-2xl font-bold text-purple-950 dark:text-white mb-2">
            Instant Red Palm Oil Bulk Order Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
            Select packaging size, quantity, and destination to review total invoice projection and dispatch times from Ilorin.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                  Packaging Specification:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {AGRO_PRODUCTS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProduct(p)}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition-colors ${
                        selectedProduct.id === p.id
                          ? 'bg-purple-900 text-white border-purple-900 dark:bg-purple-600 dark:border-purple-600 shadow-sm'
                          : 'bg-white dark:bg-[#0C0816] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
                      }`}
                    >
                      {p.size.split(' ')[0]} {p.size.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-2">
                  <span>Number of Units:</span>
                  <span className="text-purple-900 dark:text-purple-300 font-bold tabular-nums">{quantity} Units ({quantity * selectedProduct.volumeLiters} Liters total)</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl bg-white dark:bg-[#0C0816] border border-purple-200 dark:border-purple-800/40 text-purple-950 dark:text-white font-bold hover:bg-purple-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                    className="flex-1 py-2 px-4 bg-white dark:bg-[#0C0816] border border-purple-200 dark:border-purple-800/40 rounded-xl text-sm text-slate-900 dark:text-white font-medium text-center focus:outline-none focus:border-purple-600"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-xl bg-white dark:bg-[#0C0816] border border-purple-200 dark:border-purple-800/40 text-purple-950 dark:text-white font-bold hover:bg-purple-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                  Delivery Destination:
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full py-2.5 px-3 bg-white dark:bg-[#0C0816] border border-purple-200 dark:border-purple-800/40 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-600"
                >
                  {Object.keys(deliveryRates).map((loc) => (
                    <option key={loc} value={loc} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Estimated Total Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0C0816] border border-amber-400/30 space-y-6 shadow-md">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Total Order Estimate
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums mt-1">
                  {formatNgn(grandTotal)}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-purple-100 dark:border-purple-900/40 text-xs">
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Product Subtotal:</span>
                  <span className="font-semibold tabular-nums">{formatNgn(productTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Total Volume:</span>
                  <span className="font-semibold tabular-nums">{quantity * selectedProduct.volumeLiters} Liters</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">Haulage Dispatch (Ilorin, Kwara State):</span>
                  <span className="font-semibold tabular-nums">{formatNgn(deliveryFee)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onOrderAgro(`${quantity} units of ${selectedProduct.size} in Ilorin, Kwara State`, formatNgn(grandTotal))}
                  className="btn-gold w-full py-3 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
                >
                  <span>Place Supply Order Online</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-950" />
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-2.5 px-4 text-xs font-bold text-purple-950 dark:text-amber-300 bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800/80 hover:border-amber-400 rounded-xl transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98] shadow-sm"
                >
                  <span>Instant WhatsApp Order (08036955995)</span>
                  <ExternalLink className="w-3 h-3 text-amber-500" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
