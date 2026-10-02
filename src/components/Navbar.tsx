import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Sun, Moon } from 'lucide-react';
import { COMPANY_CONTACTS, WHATSAPP_PHONE, buildWhatsAppUrl, PREWRITTEN_MESSAGES } from '../data/citadelData';

interface NavbarProps {
  onOpenInquiry: (defaultDivision?: string) => void;
  onNavigateHome: () => void;
  onNavigateDivision: (divisionId: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenInquiry,
  onNavigateHome,
  onNavigateDivision,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'All Services', action: () => onNavigateHome() },
    { name: 'Hostel Living', action: () => onNavigateDivision('citadel-hostels') },
    { name: 'Auto Hub', action: () => onNavigateDivision('auto-hub') },
    { name: 'Cooperative', action: () => onNavigateDivision('cooperative-society') },
    { name: 'Red Palm Oil', action: () => onNavigateDivision('agro-commodities') },
    { name: 'Business Center', action: () => onNavigateDivision('cyber-center') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 dark:border-purple-900/40 bg-white/95 dark:bg-[#0C0816]/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark with emblem */}
        <button 
          onClick={onNavigateHome}
          className="font-display text-2xl font-bold tracking-tight text-purple-950 dark:text-white transition-opacity hover:opacity-90 flex items-center gap-2.5 text-left"
        >
          <img 
            src="/android-chrome-192x192.png" 
            alt="Citadel Logo" 
            className="w-8 h-8 object-contain shrink-0 drop-shadow-sm" 
          />
          <span>Citadel Biz Link</span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.action();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="transition-colors hover:text-amber-600 dark:hover:text-amber-400 hover:underline underline-offset-8 decoration-amber-400"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions + Dark Mode Switch */}
        <div className="hidden sm:flex items-center gap-4">
          
          {/* Ilorin Location badge */}
          <div className="hidden 2xl:flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/30">
            <span>Ilorin, Kwara State</span>
          </div>

          {/* Direct Phone / WhatsApp link */}
          <a
            href={buildWhatsAppUrl(PREWRITTEN_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat directly on WhatsApp (08036955995)"
            className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-purple-950 dark:text-purple-200 hover:text-amber-500 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span className="tabular-nums">{COMPANY_CONTACTS.phonePrimary}</span>
          </a>

          {/* Dark Mode Switch Button */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/60 border border-slate-200 dark:border-purple-900/50 transition-colors"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-purple-900" />
            )}
          </button>

          {/* Primary CTA button */}
          <button
            onClick={() => onOpenInquiry()}
            className="btn-gold flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl active:scale-[0.98] whitespace-nowrap"
          >
            <span>Inquire & Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-950" />
          </button>
        </div>

        {/* Mobile Actions: Dark Mode + Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/60 border border-slate-200 dark:border-purple-900/50"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-purple-300" /> : <Moon className="w-4 h-4 text-purple-900" />}
          </button>

          <button
            onClick={() => onOpenInquiry()}
            className="px-3 py-1.5 text-xs font-bold text-white bg-purple-900 dark:bg-purple-600 rounded-lg shadow-sm"
          >
            Inquire
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-purple-100 dark:border-purple-900/40 bg-white dark:bg-[#120E22] px-6 py-6 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300 py-1"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-purple-100 dark:border-purple-900/40 flex flex-col gap-3">
              <a
                href={buildWhatsAppUrl(PREWRITTEN_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-purple-900 dark:text-purple-300"
              >
                <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="tabular-nums">{COMPANY_CONTACTS.phonePrimary}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full text-center py-2.5 text-xs font-bold text-white bg-purple-900 dark:bg-purple-600 rounded-lg shadow-sm"
              >
                Book Service or Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
