import React, { useState } from 'react';
import { 
  Zap, 
  Wifi, 
  ShieldCheck, 
  Droplets, 
  ArrowRight,
  UserCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { HOSTEL_ROOMS, COMPANY_CONTACTS } from '../data/citadelData';
import { HostelRoom } from '../types';
import hostelSuiteImg from '../assets/images/hostel_suite_1790765845464.jpg';

interface HostelSectionProps {
  onBookRoom: (roomName: string, price: string) => void;
  onViewDedicatedPage?: () => void;
}

export const HostelSection: React.FC<HostelSectionProps> = ({ onBookRoom, onViewDedicatedPage }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(HOSTEL_ROOMS[0].id);
  const selectedRoom: HostelRoom = HOSTEL_ROOMS.find(r => r.id === selectedRoomId) || HOSTEL_ROOMS[0];

  const amenities = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: '24/7 Solar-Hybrid Inverter',
      description: 'Continuous uninterrupted clean electricity for lighting, laptops, fans, and study devices without blackouts.'
    },
    {
      icon: <Wifi className="w-5 h-5 text-purple-700 dark:text-purple-400" />,
      title: 'Uncapped Campus Fiber & Starlink',
      description: 'High-speed broadband internet designed for coding, video lectures, online submissions, and research.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-700 dark:text-purple-400" />,
      title: 'Biometric Access & 24/7 Guards',
      description: 'Armed night patrols, CCTV coverage across common areas, and electronic biometric gate verification.'
    },
    {
      icon: <Droplets className="w-5 h-5 text-amber-500" />,
      title: 'Treated Borehole & Hot Water',
      description: 'Dual overhead industrial water reservoirs with multi-stage filtration for pure clean water.'
    }
  ];

  return (
    <section id="hostels" className="py-24 border-t border-purple-100 dark:border-purple-900/40 bg-[#FAF9F6] dark:bg-[#0C0816] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              Citadel Living & Student Residences · Ilorin, Kwara State
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 dark:text-white [text-wrap:balance]">
              Purpose-Built Student & Young Executive Living with Unbroken Power.
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Strategically located in Ilorin, Kwara State, removing all off-campus living friction with 24/7 solar backup.
          </div>
        </div>

        {/* Visual Showcase + Amenity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-amber-400/30 shadow-xl bg-white dark:bg-slate-900 group">
              <img
                src={hostelSuiteImg}
                alt="Citadel Executive Student Hostel Suite in Ilorin, Kwara State"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-[#151024]/95 backdrop-blur-md border border-amber-400/30 shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-950 dark:text-white">Residence Suite View</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Ilorin, Kwara State</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Fully furnished suites with ergonomic study chairs, built-in oak desks, and private bathrooms.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {amenities.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-purple-950 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Room Tier Selection & Availability Checker */}
        <div className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#151024] border border-purple-100 dark:border-purple-900/40 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-purple-950 dark:text-white">
                Available Room Floorplans & Session Rates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select your preferred room type to review inclusions and reserve for the upcoming academic session.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {onViewDedicatedPage && (
                <button
                  onClick={onViewDedicatedPage}
                  className="text-xs font-bold text-purple-700 dark:text-purple-300 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1"
                >
                  <span>Dedicated Hostel Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
              <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-md border border-emerald-200 dark:border-emerald-800/40">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Session Allocations Open</span>
              </div>
            </div>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {HOSTEL_ROOMS.map((room) => {
              const isSelected = room.id === selectedRoomId;
              return (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoomId(room.id)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-purple-50/60 dark:bg-purple-950/40 border-purple-700 dark:border-purple-500 shadow-md'
                      : 'bg-[#FAF9F6] dark:bg-[#120E22] border-slate-200 dark:border-purple-900/30 hover:border-purple-300'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {room.occupancy}
                      </span>
                      {room.popular && (
                        <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400">
                          Most Requested
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-lg font-bold text-purple-950 dark:text-white">{room.name}</h4>
                    
                    <div className="text-xl font-extrabold text-amber-700 dark:text-amber-400 tabular-nums">
                      {room.pricePerSession}
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Units Remaining: <span className="font-bold text-purple-900 dark:text-white tabular-nums">{room.availableUnits}</span>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-purple-100 dark:border-purple-900/40">
                      {room.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRoomId(room.id);
                        onBookRoom(room.name, room.pricePerSession);
                      }}
                      className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'btn-gold shadow-md'
                          : 'bg-purple-100 dark:bg-purple-950 text-purple-950 dark:text-amber-300 border border-purple-200 dark:border-purple-800 hover:border-amber-400'
                      }`}
                    >
                      <span>Reserve This Room</span>
                      <ArrowRight className="w-3.5 h-3.5 text-purple-950 dark:text-amber-400" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Room Confirmation Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-purple-50/50 dark:bg-[#120E22] border border-amber-400/30 text-xs text-slate-700 dark:text-slate-300">
            <div>
              Selected: <strong className="text-purple-950 dark:text-white">{selectedRoom.name}</strong> ({selectedRoom.occupancy}) · Located in <strong>Ilorin, Kwara State</strong>
            </div>
            <button
              onClick={() => onBookRoom(selectedRoom.name, selectedRoom.pricePerSession)}
              className="btn-gold px-5 py-2.5 text-xs font-bold rounded-xl transition-all shrink-0 active:scale-[0.98]"
            >
              Schedule In-Person Inspection Tour
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
