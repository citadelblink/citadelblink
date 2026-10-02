import { Division, HostelRoom, Vehicle, CooperativePlan, AgroProduct, Testimonial } from '../types';
import lexusImg from '../assets/images/auto_lexus_rx_1790767556193.jpg';
import camryImg from '../assets/images/auto_camry_sedan_1790767567870.jpg';
import pradoImg from '../assets/images/toyota_prado_suv_1790767628286.jpg';
import corollaImg from '../assets/images/toyota_corolla_car_1790767640470.jpg';
import showroomImg from '../assets/images/auto_showroom_1790765859771.jpg';

export const CITADEL_DIVISIONS: Division[] = [
  {
    id: 'cyber-center',
    name: 'Cyber Café & Corporate Business Center',
    subtitle: 'High-Throughput Digital Services, Corporate Filings & Document Engineering',
    category: 'Digital & Corporate Services',
    description: 'A commercial tech workstation hub offering high-speed fiber internet, corporate CAC registration, accredited examination processing (JAMB/WAEC/NECO), large-format architectural plan plotting, digital graphic design, and document binding.',
    highlights: [
      'CAC Company Registration, TIN filing & SCUML compliance',
      'JAMB, WAEC, NECO & Post-UTME accredited registration center',
      'High-speed fiber workstations for remote workers & students',
      'Industrial color laser printing, architectural CAD plotting & lamination',
      'Visa applications, passport biometrics & document legalization'
    ],
    metrics: [
      { label: 'Operations Daily', value: '450+' },
      { label: 'CAC Businesses Incorporated', value: '1,280+' },
      { label: 'Uptime Reliability', value: '99.8%' }
    ],
    primaryAction: 'Book Workstation / Order Print',
    tag: 'Technology & Enterprise'
  },
  {
    id: 'citadel-hostels',
    name: 'Citadel Living & Student Hostels',
    subtitle: 'Serviced Student & Executive Accommodations with 24/7 Power',
    category: 'Student & Professional Housing',
    description: 'Premium serviced off-campus residences engineered for focused academics and serene living. Featuring continuous solar-hybrid power, uncapped Starlink & high-speed Wi-Fi, round-the-clock armed security, industrial water filtration, and quiet study lounges.',
    highlights: [
      'Uninterrupted 24/7 dual solar-hybrid inverter & soundproof generator backup',
      'Dedicated campus Wi-Fi powered by fiber & satellite arrays',
      'Controlled biometric gate entry, CCTV coverage & perimeter patrol',
      'Private ensuite bathrooms, fitted study tables, and wardrobe cabinetry',
      'Treated borehole water system with overhead reservoir towers'
    ],
    metrics: [
      { label: 'Annual Residents Housed', value: '380+' },
      { label: 'Power Availability', value: '24/7' },
      { label: 'Security Staffing', value: 'Round-the-Clock' }
    ],
    primaryAction: 'Check Room Availability',
    tag: 'Hospitality & Real Estate'
  },
  {
    id: 'auto-hub',
    name: 'Citadel Auto Hub & Dealership',
    subtitle: 'Verified Foreign-Used & Clean Title Automobile Dealership',
    category: 'Automotive Trade',
    description: 'Premier automotive sales and import dealership offering inspected Tokunbo and verified Nigerian-used vehicles. Every vehicle undergoes a strict 120-point mechanical and electrical audit with verifiable customs documentation and flexible instalment options.',
    highlights: [
      '100% verified Nigerian Customs duty documentation & clean title clearance',
      'Rigorous 120-point engine, transmission, chassis & electronics inspection',
      'Instalment acquisition structure through Citadel Cooperative Society',
      'Doorstep inter-state vehicle delivery across Nigeria with tracker installed',
      'Pre-purchase diagnostic scans and certified roadworthiness guarantee'
    ],
    metrics: [
      { label: 'Vehicles Sold & Delivered', value: '450+' },
      { label: 'Inspection Points Checked', value: '120' },
      { label: 'Customer Satisfaction', value: '98.4%' }
    ],
    primaryAction: 'Browse Inventory',
    tag: 'Automotive & Mobility'
  },
  {
    id: 'cooperative-society',
    name: 'Citadel Multipurpose Cooperative Society',
    subtitle: 'Regulated Financial Empowerment, High-Yield Savings & SME Loans',
    category: 'Financial Services',
    description: 'A licensed, member-driven financial cooperative designed to build wealth for traders, civil servants, students, and entrepreneurs. Offering high-yield target savings, affordable asset financing loans, low-interest microcredit, and annual dividend distributions.',
    highlights: [
      'Target Wealth Savings offering up to 18% annual yield with strict capital security',
      'Quick SME Working Capital microcredit for local vendors and business operators',
      'Asset Financing for vehicle acquisition, real estate, and industrial equipment',
      'Transparent quarterly statements and democratic member governance',
      'Emergency loan approvals within 24 to 48 hours for verified active members'
    ],
    metrics: [
      { label: 'Active Cooperative Members', value: '3,200+' },
      { label: 'Capital Disbursed to SMEs', value: '₦1.8B+' },
      { label: 'Annual Dividend Yield', value: 'Up to 18%' }
    ],
    primaryAction: 'Join the Cooperative',
    tag: 'Fintech & Microfinance'
  },
  {
    id: 'agro-commodities',
    name: 'Citadel Agro Commodities (Pure Red Palm Oil)',
    subtitle: 'Export-Grade Unadulterated Red Palm Oil Direct From Mill',
    category: 'Agriculture & Trade',
    description: 'Direct producers and wholesale suppliers of premium, unadulterated red palm oil sourced from sustainably harvested palm fruit bunches. Sifted, filtered, and hygienically bottled without synthetic colorants, chemical preservatives, or water dilution.',
    highlights: [
      '100% unadulterated cold-pressed virgin red palm oil rich in beta-carotene',
      'Export-grade quality parameters: Free Fatty Acid (FFA) consistently < 4%',
      'Available in 5L retail gallons, 25L commercial jerrycans, and 200L drums',
      'Reliable contract supplier for boarding schools, restaurants, bakeries & soap makers',
      'Direct farm-to-table shipping nationwide and containerized sea freight export'
    ],
    metrics: [
      { label: 'Annual Liters Distributed', value: '95,000L+' },
      { label: 'Purity Benchmark', value: '100% Uncut' },
      { label: 'Bulk Commercial Clients', value: '120+' }
    ],
    primaryAction: 'Request Bulk Quote',
    tag: 'Agribusiness & Export'
  }
];

export const HOSTEL_ROOMS: HostelRoom[] = [
  {
    id: 'room-executive-studio',
    name: 'Executive Single Studio',
    type: 'studio',
    pricePerSession: '₦480,000 / Academic Session',
    priceFormatted: 480000,
    occupancy: 'Single Occupancy (1 Resident)',
    features: [
      'Self-contained private kitchenette with heat extractor',
      'Private ensuite Italian tile bathroom & water heater',
      'Built-in ergonomic study desk with executive task chair',
      'Independent dedicated solar circuit + smart sub-meter',
      'Full-size orthopaedic mattress and double wardrobe',
      'Pre-wired for air conditioning & Starlink LAN port'
    ],
    availableUnits: 4,
    popular: true
  },
  {
    id: 'room-deluxe-single',
    name: 'Deluxe Ensuite Room',
    type: 'single',
    pricePerSession: '₦360,000 / Academic Session',
    priceFormatted: 360000,
    occupancy: 'Single Occupancy (1 Resident)',
    features: [
      'Ensuite modern bathroom with pressure shower',
      'Spacious study alcove with natural daylight window',
      'Shared modern communal kitchenette per floor',
      'High-speed Wi-Fi access point in corridor ceiling',
      '3/4 luxury foam mattress and lockable wardrobe',
      'Regular room cleaning and waste evacuation included'
    ],
    availableUnits: 8
  },
  {
    id: 'room-premium-double',
    name: 'Premium Double Suite (Shared)',
    type: 'shared',
    pricePerSession: '₦220,000 / Person / Session',
    priceFormatted: 220000,
    occupancy: 'Double Occupancy (2 Residents)',
    features: [
      'Dual separated single beds with privacy study partition',
      'Two distinct study desks and individualized wardrobes',
      'Ensuite bathroom with dual vanity storage',
      '24/7 light for laptops, phones, and study lamps',
      'High-speed unlimited Wi-Fi connection',
      'Cost-effective option with high living standards'
    ],
    availableUnits: 12
  }
];

export const VEHICLE_INVENTORY: Vehicle[] = [
  {
    id: 'veh-rx350-2021',
    make: 'Lexus',
    model: 'RX 350 F-Sport AWD',
    year: 2021,
    category: 'suv',
    priceNgn: 42000000,
    priceFormatted: '₦42,000,000',
    mileage: '38,200 miles',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    customsCleared: true,
    inspectionPassed: true,
    status: 'In Stock',
    image: lexusImg,
    features: ['Panoramic Glass Roof', '360 Birdview Camera', 'Mark Levinson Sound', 'Heated & Cooled Seats', 'Clean Carfax']
  },
  {
    id: 'veh-camry-2020',
    make: 'Toyota',
    model: 'Camry XSE V6',
    year: 2020,
    category: 'sedan',
    priceNgn: 26500000,
    priceFormatted: '₦26,500,000',
    mileage: '44,100 miles',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    customsCleared: true,
    inspectionPassed: true,
    status: 'In Stock',
    image: camryImg,
    features: ['Red Leather Interior', 'Adaptive Cruise Control', 'JBL Audio System', 'Dual Exhaust Sport Quad', 'Keyless Push Start']
  },
  {
    id: 'veh-prado-2019',
    make: 'Toyota',
    model: 'Land Cruiser Prado TX-L',
    year: 2019,
    category: 'suv',
    priceNgn: 54000000,
    priceFormatted: '₦54,000,000',
    mileage: '51,800 miles',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    customsCleared: true,
    inspectionPassed: true,
    status: 'In Stock',
    image: pradoImg,
    features: ['7-Seater Configuration', 'Cool Box Center Console', 'Active 4WD Terrain Select', 'Rear Climate Control', 'Tow Hitch Package']
  },
  {
    id: 'veh-corolla-2018',
    make: 'Toyota',
    model: 'Corolla LE',
    year: 2018,
    category: 'sedan',
    priceNgn: 14800000,
    priceFormatted: '₦14,800,000',
    mileage: '59,400 miles',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    customsCleared: true,
    inspectionPassed: true,
    status: 'In Stock',
    image: corollaImg,
    features: ['Outstanding Fuel Economy', 'Reverse Camera Display', 'Bluetooth Connectivity', 'Lane Departure Alert', 'Alloy Wheels']
  },
  {
    id: 'veh-c300-2020',
    make: 'Mercedes-Benz',
    model: 'C300 4MATIC Sedan',
    year: 2020,
    category: 'sedan',
    priceNgn: 33500000,
    priceFormatted: '₦33,500,000',
    mileage: '36,500 miles',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    customsCleared: true,
    inspectionPassed: true,
    status: 'In Stock',
    image: camryImg,
    features: ['Burmester Surround Sound', 'Ambient 64-Color Lighting', 'Apple CarPlay & Android Auto', 'Blind Spot Assist', 'Panoramic Sunroof']
  },
  {
    id: 'veh-highlander-2021',
    make: 'Toyota',
    model: 'Highlander Limited AWD',
    year: 2021,
    category: 'suv',
    priceNgn: 46000000,
    priceFormatted: '₦46,000,000',
    mileage: '32,100 miles',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    customsCleared: true,
    inspectionPassed: true,
    status: 'In Stock',
    image: pradoImg,
    features: ['Captain Chairs 2nd Row', 'Hands-Free Power Liftgate', 'JBL 11-Speaker Audio', 'Pre-Collision Safety System', 'Wireless Charging']
  },
  {
    id: 'veh-hiace-2017',
    make: 'Toyota',
    model: 'HiAce High-Roof Commercial Bus',
    year: 2017,
    category: 'commercial',
    priceNgn: 24500000,
    priceFormatted: '₦24,500,000',
    mileage: '72,000 miles',
    transmission: 'Manual',
    fuelType: 'Diesel',
    customsCleared: true,
    inspectionPassed: true,
    status: 'In Stock',
    image: showroomImg,
    features: ['16 Passenger Capacity', 'Dual AC Duct System', 'Heavy-Duty Suspension', 'Ideal for Transport & Logistics', 'Full Customs Papers']
  }
];

export const COOPERATIVE_PLANS: CooperativePlan[] = [
  {
    id: 'plan-target-wealth',
    name: 'Citadel Target Wealth Builder',
    type: 'savings',
    rate: '15% – 18% p.a.',
    tenor: '6 to 24 Months Lock-in',
    minAmount: '₦10,000 / month',
    description: 'Disciplined automated periodic savings for individuals, students, and businesses aiming to achieve defined capital targets with guaranteed above-inflation yield.',
    benefits: [
      'Compounded monthly interest credited directly to your digital ledger',
      'Strict zero-withdrawal policy during active tenure to ensure target achievement',
      'Free financial advisory session with certified cooperative wealth managers',
      'Can be pledged as collateral to unlock emergency credit facility'
    ]
  },
  {
    id: 'plan-sme-booster',
    name: 'SME Merchant Working Capital',
    type: 'loan',
    rate: '3.5% flat / month',
    tenor: '1 to 6 Months Repayment',
    minAmount: '₦100,000 to ₦5,000,000',
    description: 'Rapid, stress-free microcredit facility for traders, business center operators, retailers, and food vendors seeking inventory restocking funds.',
    benefits: [
      'Zero complex collateral: two verified active cooperative guarantors required',
      'Disbursement into your Nigerian commercial bank account within 24 hours',
      'Flexible weekly or monthly structured amortization schedule',
      'Early liquidation discount on outstanding interest charges'
    ]
  },
  {
    id: 'plan-asset-acquisition',
    name: 'Citadel Asset & Vehicle Acquisition Scheme',
    type: 'investment',
    rate: 'Cooperative Subsidized',
    tenor: 'Up to 18 Months',
    minAmount: '30% Equity Contribution',
    description: 'A structured financing bridge allowing members to acquire verified vehicles from Citadel Auto Hub or solar installations for their homes and businesses.',
    benefits: [
      'Direct coordination with Citadel Auto Hub inventory for verified cars',
      'Comprehensive insurance and real-time GPS tracker included in package',
      'Low equity down-payment with spread balance over up to 18 months',
      'Retain full commercial usage rights while repaying conveniently'
    ]
  }
];

export const AGRO_PRODUCTS: AgroProduct[] = [
  {
    id: 'agro-5l',
    size: '5 Liters Family Keg',
    volumeLiters: 5,
    unitPriceNgn: 11500,
    targetMarket: 'Households, Small Families, Personal Use',
    bestFor: 'Everyday home cooking, authentic traditional soups, long shelf-life storage',
    packaging: 'Food-grade leakproof plastic jerrycan with tamper-evident seal'
  },
  {
    id: 'agro-25l',
    size: '25 Liters Commercial Jerrycan',
    volumeLiters: 25,
    unitPriceNgn: 52000,
    targetMarket: 'Restaurants, Event Caterers, Hostels, Boarding Schools',
    bestFor: 'High-volume culinary operations, deep flavor concentration, bulk kitchen supply',
    packaging: 'Industrial heavy-duty yellow jerrycan with dual safety cap'
  },
  {
    id: 'agro-200l',
    size: '200 Liters Industrial Drum',
    volumeLiters: 200,
    unitPriceNgn: 395000,
    targetMarket: 'Wholesalers, Soap Manufacturers, Food Processors, Exporters',
    bestFor: 'Commercial redistribution, industrial manufacturing, sea cargo export',
    packaging: 'Steel or heavy HDPE industrial barrel with pressure seal clamp'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Adeola Balogun',
    role: 'Principal Partner',
    organization: 'Apex Legal & Advisory Services',
    division: 'Cyber & Business Center',
    quote: 'Citadel Business Center handled our corporate CAC filings, expedited our post-incorporation document legalization, and plotted architectural blueprints for our firm. Their speed and precision are unmatched in the region.',
    outcome: 'Completed CAC registration & TIN setup in 4 business days.'
  },
  {
    id: 'test-2',
    name: 'Oluwaseun Adeleke',
    role: 'Final Year Engineering Student',
    organization: 'Faculty of Technology',
    division: 'Citadel Living Hostels',
    quote: 'Living in Citadel Hostels completely removed the nightmare of power outages. The solar inverter runs 24 hours a day, the Starlink Wi-Fi allows me to attend remote tech masterclasses, and the study lounge is pure peace.',
    outcome: 'Zero missed online lectures with 100% study uptime.'
  },
  {
    id: 'test-3',
    name: 'Engr. Emeka Nwosu',
    role: 'Managing Director',
    organization: 'Nwosu Logistics & Haulage',
    division: 'Citadel Auto Hub',
    quote: 'I purchased our Toyota Land Cruiser Prado from Citadel Auto Hub. The vehicle arrived with pristine original customs papers, zero hidden electrical issues, and their mechanical team even walked me through the 120-point diagnostic scan.',
    outcome: 'Verified tokunbo vehicle delivered in under 48 hours.'
  },
  {
    id: 'test-4',
    name: 'Mrs. Folake Oshodi',
    role: 'Distributor & Restaurant Owner',
    organization: 'Taste of Heritage Restaurants',
    division: 'Agro Red Palm Oil',
    quote: 'Most palm oil sold in open markets is mixed with chemical colorants or water. Citadel Red Oil is 100% pure, thick, and natural. My customers immediately noticed the aroma difference in our ofada and native soups.',
    outcome: 'Purchasing 12 drums quarterly with zero batch defects.'
  }
];

export const COMPANY_CONTACTS = {
  phonePrimary: '08036955995',
  phoneFormatted: '+234 803 695 5995',
  whatsappNumber: '+2348036955995',
  whatsappDigits: '2348036955995',
  email: 'citadelblink@gmail.com',
  headquarters: 'Ilorin, Kwara State',
  hostelLocation: 'Ilorin, Kwara State',
  autoHubLocation: 'Ilorin, Kwara State',
  agroDepot: 'Ilorin, Kwara State',
  workingHours: 'Monday – Saturday: 8:00 AM – 7:30 PM (Hostels 24/7 Security & Solar Backup)'
};

export const WHATSAPP_PHONE = '08036955995';
export const WHATSAPP_INTL = '2348036955995';

/**
 * Builds a valid WhatsApp Web / App universal link with a prewritten URL-encoded message
 */
export const buildWhatsAppUrl = (message: string): string => {
  const cleanDigits = COMPANY_CONTACTS.whatsappDigits;
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message.trim())}`;
};

/**
 * Opens WhatsApp in a new browser tab with the prewritten message
 */
export const openWhatsApp = (message: string): void => {
  if (typeof window !== 'undefined') {
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Standardized prewritten messages for each division and communication channel
 */
export const PREWRITTEN_MESSAGES = {
  general: 'Hello Citadel Biz Link! I would like to inquire about your services and enterprise operations in Ilorin, Kwara State.',
  
  hostel: (roomTitle?: string, price?: string) => 
    `Hello Citadel Living Hostels! I am interested in inquiring about room availability and scheduling an inspection tour${roomTitle ? ` for ${roomTitle}` : ''}${price ? ` (${price})` : ''} in Ilorin, Kwara State.`,

  auto: (vehicleTitle?: string, price?: string) => 
    `Hello Citadel Auto Hub! I would like to inquire about ${vehicleTitle || 'vehicle inventory'}${price ? ` (${price})` : ''}. Please share physical inspection availability in Ilorin and financing options.`,

  cooperative: (planTitle?: string, details?: string) => 
    `Hello Citadel Multipurpose Cooperative Society! I would like to enroll/inquire regarding the ${planTitle || 'membership plan'}${details ? ` (${details})` : ''} in Ilorin, Kwara State.`,

  agro: (orderSummary?: string, priceEst?: string) => 
    `Hello Citadel Agro Commodities! I would like to place an order for 100% pure unadulterated red palm oil${orderSummary ? `: ${orderSummary}` : ''}${priceEst ? ` (Est: ${priceEst})` : ''} with delivery/pickup in Ilorin, Kwara State.`,

  cyber: (serviceName?: string, turnaround?: string) => 
    `Hello Citadel Cyber & Business Center! I would like to request ${serviceName || 'business center service'}${turnaround ? ` (Turnaround: ${turnaround})` : ''} at your Ilorin office.`,

  contactForm: (name: string, contact: string, division: string, details?: string) => 
    `Hello Citadel Biz Link (Ilorin Desk)!\n\n*New Direct Inquiry from Website*\n• Client: ${name}\n• Contact: ${contact}\n• Division: ${division}\n• Details: ${details || 'Consultation request'}\n• Location: Ilorin, Kwara State\n• Official Email: citadelblink@gmail.com`,

  inquiryModal: (ticketId: string, fullName: string, phone: string, email: string, division: string, notes: string) => 
    `Hello Citadel Biz Link (Ilorin HQ)!\n\n*Official Inquiry Ticket: ${ticketId}*\n• Name: ${fullName}\n• Phone / WhatsApp: ${phone}\n• Email: ${email || 'N/A'}\n• Target Division: ${division}\n• Request Details: ${notes || 'Priority Service Inbound'}\n• Location: Ilorin, Kwara State\n\nPlease connect me with the division desk officer.`
};
