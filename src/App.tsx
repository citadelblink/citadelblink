import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DivisionsGrid } from './components/DivisionsGrid';
import { HostelSection } from './components/HostelSection';
import { AutoSection } from './components/AutoSection';
import { CooperativeSection } from './components/CooperativeSection';
import { AgroSection } from './components/AgroSection';
import { BusinessCenterSection } from './components/BusinessCenterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ServiceDetailPage } from './components/ServiceDetailPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDivision, setModalDivision] = useState<string>('General Inquiry');
  const [modalDetails, setModalDetails] = useState<string>('');

  // Active view: 'home' or a specific division ID ('cyber-center', 'citadel-hostels', etc.)
  const [currentView, setCurrentView] = useState<string>('home');

  // Dark Mode Switch (defaults to Light Mode: white/off-white primary as requested)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('citadel_theme');
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('citadel_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('citadel_theme', 'light');
    }
  }, [isDarkMode]);

  // Sync hash routing for deep-linking and browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['cyber-center', 'citadel-hostels', 'auto-hub', 'cooperative-society', 'agro-commodities'].includes(hash)) {
        setCurrentView(hash);
      } else if (hash === 'home' || !hash) {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const openInquiryModal = (division = 'General Inquiry', details = '') => {
    setModalDivision(division);
    setModalDetails(details);
    setModalOpen(true);
  };

  const closeInquiryModal = () => {
    setModalOpen(false);
  };

  const handleNavigateToDetailedPage = (divisionId: string) => {
    setCurrentView(divisionId);
    window.location.hash = divisionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0C0816] text-[#1E1B2E] dark:text-[#F3F1FA] transition-colors duration-200">
      
      {/* Top Bar Contract Navbar with Dark Mode Toggle */}
      <Navbar 
        onOpenInquiry={() => openInquiryModal('General Enterprise Inquiry')} 
        onNavigateHome={handleNavigateHome}
        onNavigateDivision={handleNavigateToDetailedPage}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main>
        {currentView === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero 
              onOpenInquiry={() => openInquiryModal('General Enterprise Inquiry')} 
              onExploreServices={() => {
                const el = document.getElementById('divisions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Core Services Listed as Cards on Landing Page */}
            <DivisionsGrid 
              onOpenDetailedPage={handleNavigateToDetailedPage}
              onOpenInquiry={(divisionName) => openInquiryModal(divisionName)} 
            />

            {/* 01. Citadel Living & Hostels Section */}
            <HostelSection 
              onBookRoom={(roomName, price) => 
                openInquiryModal('Citadel Living Hostels', `Reservation for ${roomName} (${price})`)
              } 
              onViewDedicatedPage={() => handleNavigateToDetailedPage('citadel-hostels')}
            />

            {/* 02. Citadel Auto Hub Dealership */}
            <AutoSection 
              onVehicleInquiry={(vehicleTitle, price) => 
                openInquiryModal('Citadel Auto Hub', `Inquiry / Financing for ${vehicleTitle} (${price})`)
              } 
              onViewDedicatedPage={() => handleNavigateToDetailedPage('auto-hub')}
            />

            {/* 03. Citadel Multipurpose Cooperative */}
            <CooperativeSection 
              onJoinCooperative={(planName, details) => 
                openInquiryModal('Cooperative Society', `Membership Enrollment: ${planName} ${details ? `(${details})` : ''}`)
              } 
              onViewDedicatedPage={() => handleNavigateToDetailedPage('cooperative-society')}
            />

            {/* 04. Citadel Agro Commodities (Red Palm Oil) */}
            <AgroSection 
              onOrderAgro={(orderSummary, estimatedPrice) => 
                openInquiryModal('Agro Red Palm Oil', `Bulk Order: ${orderSummary} (Est: ${estimatedPrice})`)
              } 
              onViewDedicatedPage={() => handleNavigateToDetailedPage('agro-commodities')}
            />

            {/* 05. Cyber Café & Business Center */}
            <BusinessCenterSection 
              onServiceSelect={(serviceName, turnaround) => 
                openInquiryModal('Cyber & Business Center', `Service Request: ${serviceName} (Turnaround: ${turnaround})`)
              } 
              onViewDedicatedPage={() => handleNavigateToDetailedPage('cyber-center')}
            />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Contact & Branches Section in Ilorin, Kwara State */}
            <ContactSection 
              onSuccessPrompt={(division, details) => 
                openInquiryModal(division, details)
              } 
            />
          </>
        ) : (
          /* Dedicated Detailed Page for Selected Service */
          <ServiceDetailPage
            divisionId={currentView}
            onBackToHome={handleNavigateHome}
            onSelectOtherDivision={handleNavigateToDetailedPage}
            onOpenInquiry={openInquiryModal}
          />
        )}
      </main>

      {/* Quiet Structured Footer */}
      <Footer 
        onOpenInquiry={(division) => openInquiryModal(division || 'General Inquiry')} 
        onNavigateDivision={handleNavigateToDetailedPage}
      />

      {/* Multi-Purpose Interactive Inquiry & Reservation Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={closeInquiryModal}
        initialDivision={modalDivision}
        initialDetails={modalDetails}
      />
    </div>
  );
}
