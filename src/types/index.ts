export interface Division {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  primaryAction: string;
  tag: string;
}

export interface HostelRoom {
  id: string;
  name: string;
  type: 'studio' | 'single' | 'shared';
  pricePerSession: string;
  priceFormatted: number;
  occupancy: string;
  features: string[];
  availableUnits: number;
  popular?: boolean;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  category: 'suv' | 'sedan' | 'commercial';
  priceNgn: number;
  priceFormatted: string;
  mileage: string;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid';
  customsCleared: boolean;
  inspectionPassed: boolean;
  status: 'In Stock' | 'Reserved';
  features: string[];
  image?: string;
}

export interface CooperativePlan {
  id: string;
  name: string;
  type: 'savings' | 'loan' | 'investment';
  rate: string;
  tenor: string;
  minAmount: string;
  description: string;
  benefits: string[];
}

export interface AgroProduct {
  id: string;
  size: string;
  volumeLiters: number;
  unitPriceNgn: number;
  targetMarket: string;
  bestFor: string;
  packaging: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  division: string;
  quote: string;
  outcome: string;
}
