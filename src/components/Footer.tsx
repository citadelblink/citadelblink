import React from 'react';
import { COMPANY_CONTACTS, WHATSAPP_PHONE, buildWhatsAppUrl, PREWRITTEN_MESSAGES } from '../data/citadelData';
import { Phone, MapPin, MessageSquare, Mail } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: (divisionName?: string) => void;
  onNavigateDivision?: (divisionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onNavigateDivision }) => {
  return (
    <footer className="border-t border-purple-100 dark:border-purple-900/40 bg-white dark:bg-[#07050F] text-slate-600 dark:text-slate-400 text-xs transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-display text-2xl font-bold text-purple-950 dark:text-white flex items-center gap-2.5">
              <img 
                src="/android-chrome-192x192.png" 
                alt="Citadel Logo" 
                className="w-7 h-7 object-contain shrink-0 drop-shadow-sm" 
              />
              Citadel Biz Link
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
              Integrated multi-venture commercial enterprise driving living standards, student welfare, motor mobility, member wealth, and agricultural commodities across Ilorin, Kwara State and Nigeria.
            </p>
            <div className="text-[11px] text-slate-500 space-y-1.5 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Address: Ilorin, Kwara State</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <a
                  href={buildWhatsAppUrl(PREWRITTEN_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 dark:hover:text-amber-400 font-bold transition-colors"
                >
                  Hotline / WhatsApp: <span className="tabular-nums">{WHATSAPP_PHONE}</span>
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <a href={`mailto:${COMPANY_CONTACTS.email}`} className="hover:text-purple-900 dark:hover:text-amber-300 underline font-medium">
                  {COMPANY_CONTACTS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Core Divisions */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-950 dark:text-white">
              Enterprise Divisions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigateDivision ? onNavigateDivision('citadel-hostels') : null}
                  className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left"
                >
                  Citadel Student Hostels (Ilorin)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateDivision ? onNavigateDivision('auto-hub') : null}
                  className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left"
                >
                  Citadel Auto Hub & Dealership
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateDivision ? onNavigateDivision('cooperative-society') : null}
                  className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left"
                >
                  Multipurpose Cooperative Society
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateDivision ? onNavigateDivision('agro-commodities') : null}
                  className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left"
                >
                  Agro Red Palm Oil Supplies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateDivision ? onNavigateDivision('cyber-center') : null}
                  className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left"
                >
                  Cyber Café & Business Center
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Facilities */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-950 dark:text-white">
              Quick Inquiries
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenInquiry('Hostel Inspection')} className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left">
                  Hostel Inspection Tours (Ilorin, Kwara State)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenInquiry('Cooperative Auto Financing')} className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left">
                  Car Financing & Instalments
                </button>
              </li>
              <li>
                <button onClick={() => onOpenInquiry('Target Savings Plan')} className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left">
                  Target Wealth 18% Savings
                </button>
              </li>
              <li>
                <button onClick={() => onOpenInquiry('Red Palm Oil Drums')} className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left">
                  Wholesale Palm Oil Supply (Ilorin, Kwara State)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenInquiry('CAC Company Incorporation')} className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors text-left">
                  CAC Business Registration (Ilorin, Kwara State)
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Assistance */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-950 dark:text-white">
              Direct Contact Desk
            </div>
            <div className="space-y-2 text-xs">
              <div className="text-purple-950 dark:text-purple-200 font-bold text-sm flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-amber-500" />
                <a 
                  href={buildWhatsAppUrl(PREWRITTEN_MESSAGES.general)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors tabular-nums"
                >
                  {WHATSAPP_PHONE}
                </a>
              </div>
              <div className="text-slate-500">
                <a href={`mailto:${COMPANY_CONTACTS.email}`} className="hover:text-purple-900 dark:hover:text-amber-300 underline font-medium">
                  {COMPANY_CONTACTS.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl(PREWRITTEN_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-purple-900 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 rounded-xl transition-all shadow-md shadow-purple-900/20 active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-purple-200" />
                  <span>Chat on WhatsApp ({WHATSAPP_PHONE})</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notices */}
        <div className="pt-8 border-t border-purple-100 dark:border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Citadel Biz Link Enterprises. Ilorin, Kwara State, Nigeria.
          </div>
          <div className="flex items-center gap-4">
            <span>CAC Regulated Multi-Enterprise</span>
            <span aria-hidden="true">·</span>
            <span>WhatsApp: {WHATSAPP_PHONE}</span>
            <span aria-hidden="true">·</span>
            <span>{COMPANY_CONTACTS.email}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
