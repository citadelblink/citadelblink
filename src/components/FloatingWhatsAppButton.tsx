import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_PHONE, buildWhatsAppUrl, PREWRITTEN_MESSAGES } from '../data/citadelData';

interface FloatingWhatsAppButtonProps {
  currentDivision?: string;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ currentDivision }) => {
  const getPrewrittenText = () => {
    if (currentDivision && currentDivision !== 'home') {
      return `Hello Citadel Biz Link! I am on your website and would like to chat with an officer regarding ${currentDivision} in Ilorin, Kwara State.`;
    }
    return PREWRITTEN_MESSAGES.general;
  };

  const whatsappUrl = buildWhatsAppUrl(getPrewrittenText());

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Citadel Biz Link on WhatsApp at ${WHATSAPP_PHONE}`}
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-purple-950 hover:bg-purple-900 text-amber-300 font-bold text-xs rounded-full shadow-2xl hover:shadow-purple-950/40 transition-all duration-200 active:scale-95 border border-amber-400/60"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
        </span>
        <MessageSquare className="w-4 h-4 text-amber-400 fill-amber-400/20" />
        <span className="whitespace-nowrap">
          WhatsApp Desk: <span className="tabular-nums font-extrabold text-white">{WHATSAPP_PHONE}</span>
        </span>
      </a>
    </aside>
  );
};
