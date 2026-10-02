import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_CONTACTS, WHATSAPP_PHONE, openWhatsApp, PREWRITTEN_MESSAGES } from '../data/citadelData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDivision?: string;
  initialDetails?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialDivision = 'General Inquiry',
  initialDetails = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [division, setDivision] = useState(initialDivision);
  const [notes, setNotes] = useState(initialDetails);
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'phone' | 'email'>('whatsapp');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setDivision(initialDivision || 'General Inquiry');
      setNotes(initialDetails || '');
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen, initialDivision, initialDetails]);

  if (!isOpen) return null;

  const handleLaunchWhatsApp = (customTicket?: string) => {
    const activeTicket = customTicket || ticketId || ('CTL-' + Math.floor(100000 + Math.random() * 900000));
    const prewritten = PREWRITTEN_MESSAGES.inquiryModal(
      activeTicket,
      fullName || 'Prospective Client',
      phone || 'WhatsApp Direct User',
      email || 'citadelblink@gmail.com',
      division,
      notes || 'Priority Consultation Request'
    );
    openWhatsApp(prewritten);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage('Please provide your full name and a reachable phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedTicket = 'CTL-' + Math.floor(100000 + Math.random() * 900000);
      setTicketId(generatedTicket);
      setIsSubmitting(false);
      setIsSuccess(true);
      // Automatically launch WhatsApp with prewritten message
      handleLaunchWhatsApp(generatedTicket);
    }, 350);
  };

  const handleQuickWhatsAppNow = () => {
    const quickPrewritten = `Hello Citadel Biz Link (08036955995)! I would like to inquire about ${division} in Ilorin, Kwara State.${notes ? ` Note: ${notes}` : ''}`;
    openWhatsApp(quickPrewritten);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/70 dark:bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-2xl p-6 sm:p-8 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-purple-900 dark:hover:text-white rounded-lg hover:bg-purple-50 dark:hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
              WhatsApp Desk & Direct Inquiries · Ilorin HQ
            </div>
            <h3 className="font-display text-2xl font-bold text-purple-950 dark:text-white">
              Connect with Citadel Biz Link
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-4">
              All communications route directly to WhatsApp <strong className="text-purple-950 dark:text-white">{WHATSAPP_PHONE}</strong> with a structured prewritten brief.
            </p>

            {/* Quick 1-Click WhatsApp Shortcut */}
            <div className="mb-5 p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 flex items-center justify-between gap-3">
              <div className="text-xs">
                <div className="font-bold text-purple-950 dark:text-white">Fast Track via WhatsApp</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">Open prewritten chat directly with desk officer</div>
              </div>
              <button
                type="button"
                onClick={handleQuickWhatsAppNow}
                className="btn-gold py-2 px-3 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-sm active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 text-purple-950" />
                <span>Chat Now ({WHATSAPP_PHONE})</span>
              </button>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-300">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Full Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Dr. Babatunde Williams"
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Phone / WhatsApp <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0803 695 5995"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Citadel Division of Interest
                </label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Citadel Living Hostels">Citadel Living & Student Hostels (Ilorin)</option>
                  <option value="Citadel Auto Hub">Citadel Auto Hub (Car Purchase / Financing)</option>
                  <option value="Cooperative Society">Citadel Multipurpose Cooperative (Savings / Loans)</option>
                  <option value="Agro Red Palm Oil">Citadel Agro Commodities (Pure Red Palm Oil)</option>
                  <option value="Cyber & Business Center">Cyber Café & Corporate Business Center (Unity Rd)</option>
                  <option value="General Inquiry">General Enterprise Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Specific Requirements or Prewritten Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Provide preferred room tier, vehicle model, palm oil volume, or service request..."
                  className="w-full px-3.5 py-2 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Primary Routing Channel
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'whatsapp', label: 'WhatsApp (08036955995)' },
                    { id: 'phone', label: 'Direct Call' },
                    { id: 'email', label: 'Email Desk' }
                  ].map((chan) => (
                    <button
                      key={chan.id}
                      type="button"
                      onClick={() => setPreferredContact(chan.id as any)}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border transition-colors truncate ${
                        preferredContact === chan.id
                          ? 'bg-purple-900 text-white border-purple-900 dark:bg-purple-600 dark:border-purple-600 shadow-sm'
                          : 'bg-[#FAF9F6] dark:bg-[#0C0816] text-slate-600 dark:text-slate-400 border-purple-100 dark:border-purple-900/40 hover:border-purple-300'
                      }`}
                    >
                      {chan.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-3.5 px-4 text-xs font-bold disabled:opacity-50 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span>Processing Ticket...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry to Division Officer</span>
                      <ArrowRight className="w-4 h-4 text-purple-950" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                <span>Enterprise Email: <a href="mailto:citadelblink@gmail.com" className="text-purple-700 dark:text-amber-400 font-semibold underline">citadelblink@gmail.com</a></span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-600 dark:text-amber-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-display text-2xl font-bold text-purple-950 dark:text-white">
              WhatsApp Prewritten Chat Ready!
            </h3>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] dark:bg-[#0C0816] border border-amber-400/30 text-xs text-slate-700 dark:text-slate-300 space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-500">Tracking Reference:</span>
                <span className="font-bold text-amber-600 dark:text-amber-400 tabular-nums">{ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Division:</span>
                <span className="font-bold text-purple-950 dark:text-white">{division}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Recipient WhatsApp:</span>
                <span className="font-bold text-purple-950 dark:text-white tabular-nums">{WHATSAPP_PHONE}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Official Email:</span>
                <span className="font-medium text-slate-900 dark:text-white">{COMPANY_CONTACTS.email}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Your inquiry has been formulated into a prewritten WhatsApp message. If the chat window did not open automatically, click the button below to connect with our desk officer at <strong className="text-purple-950 dark:text-white">{WHATSAPP_PHONE}</strong>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => handleLaunchWhatsApp(ticketId)}
                className="btn-gold flex-1 py-3 px-4 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-purple-950" />
                <span>Open WhatsApp ({WHATSAPP_PHONE})</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 text-xs font-bold text-purple-950 dark:text-white bg-purple-100 dark:bg-purple-950/60 hover:bg-purple-200 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

