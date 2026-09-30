import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Send,
  Phone
} from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/citadelData';

interface ContactSectionProps {
  onSuccessPrompt: (division: string, details: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessPrompt }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [division, setDivision] = useState('General Consultation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setSubmitted(true);
    onSuccessPrompt(division, `${name} (${contact}): ${message}`);
  };

  const branchLocations = [
    {
      title: 'Citadel Headquarters & Tech Complex',
      address: COMPANY_CONTACTS.headquarters,
      hours: 'Mon – Sat: 8:00 AM – 7:30 PM',
      focus: 'Cyber café, CAC corporate registrations, wide format printing & executive suites'
    },
    {
      title: 'Citadel Student Residences & Hostels',
      address: COMPANY_CONTACTS.hostelLocation,
      hours: 'Open 24/7 Security & Solar Backup',
      focus: 'Studio & single ensuite student accommodations, study lounges'
    },
    {
      title: 'Citadel Auto Hub & Inspection Lot',
      address: COMPANY_CONTACTS.autoHubLocation,
      hours: 'Mon – Sat: 8:00 AM – 6:30 PM',
      focus: 'Direct vehicle sales, diagnostic scans, cooperative auto financing lot'
    },
    {
      title: 'Citadel Agro Commodities Center',
      address: COMPANY_CONTACTS.agroDepot,
      hours: 'Mon – Sat: 7:30 AM – 6:00 PM',
      focus: 'Red palm oil bulk barrel loading, wholesale distribution & inter-state haulage'
    }
  ];

  return (
    <section id="contact" className="py-24 border-t border-purple-100 dark:border-purple-900/40 bg-[#FAF9F6] dark:bg-[#0C0816] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            Commercial Locations & Operations · Ilorin, Kwara State
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 dark:text-white [text-wrap:balance]">
            Physical Presence in Ilorin, Kwara State.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Visit any of our operational physical branches or reach out directly at <strong>{COMPANY_CONTACTS.phonePrimary}</strong> to coordinate bookings, order inspections, or consult on corporate registration.
          </p>
        </div>

        {/* 2-Column Grid: Branches + Quick Direct Dispatch Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Branch Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branchLocations.map((branch, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4 shrink-0 text-purple-700 dark:text-purple-400" />
                    <span>{branch.title}</span>
                  </div>
                  
                  <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {branch.address}
                  </div>

                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1 border-t border-purple-100 dark:border-purple-900/40">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{branch.hours}</span>
                  </div>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {branch.focus}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Phone / WhatsApp strip */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Central Inquiries Hotline</div>
                <div className="text-base font-extrabold text-purple-950 dark:text-white tabular-nums flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <a href={`tel:${COMPANY_CONTACTS.phonePrimary}`} className="hover:text-amber-600 transition-colors">
                    {COMPANY_CONTACTS.phonePrimary}
                  </a>
                  <span className="text-xs font-normal text-slate-500">({COMPANY_CONTACTS.phoneFormatted})</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_CONTACTS.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hello Citadel Biz Link Ilorin! I would like to inquire about your services.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 text-xs font-bold text-white bg-purple-900 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 rounded-xl transition-all shadow-md shadow-purple-900/20 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-purple-200" />
                <span>WhatsApp Desk (08036955995)</span>
              </a>
            </div>
          </div>

          {/* Quick Direct Message Form */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-xl">
            <h3 className="font-display text-xl font-bold text-purple-950 dark:text-white mb-1">
              Direct Desk Inbound
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Send a direct message to our Ilorin coordination team.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name or company"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Phone Number or Email
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. 080... or email"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Target Enterprise Division
                  </label>
                  <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-600"
                  >
                    <option value="Hostel Accommodation">Hostel Living & Room Inspection (Ilorin)</option>
                    <option value="Vehicle Purchase / Financing">Citadel Auto Hub Dealership</option>
                    <option value="Cooperative Society">Multipurpose Cooperative (Savings / Loan)</option>
                    <option value="Red Palm Oil Bulk Supply">Agro Commodities (Pure Red Palm Oil)</option>
                    <option value="Cyber / CAC / Printing">Cyber & Corporate Business Center (Unity Rd)</option>
                    <option value="General Consultation">General Commercial Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Message / Specification
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your timeline, room type, vehicle of interest, or oil quantity..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] dark:bg-[#0C0816] border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-3 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5 text-purple-950" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <div className="text-sm font-bold text-purple-950 dark:text-white">Message Dispatched!</div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you, <span className="font-semibold text-purple-900 dark:text-white">{name}</span>. Your brief regarding <span className="font-semibold text-amber-700 dark:text-amber-400">{division}</span> has been transferred to our Ilorin branch desk officer.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-purple-700 dark:text-amber-400 font-bold hover:underline pt-2 inline-block"
                >
                  Send another request
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
