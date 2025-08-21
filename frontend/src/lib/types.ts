export type ServiceCategory = 'residential' | 'commercial';

export type ServiceType = 
  // Residential services
  | 'standard-cleaning'
  | 'deep-cleaning' 
  | 'move-in-out-cleaning'
  | 'apartment-cleaning'
  | 'specialty-cleaning'
  // Commercial services
  | 'office-cleaning'
  | 'retail-cleaning'
  | 'medical-clinic-cleaning'
  | 'restaurant-cleaning'
  | 'post-construction-cleaning';

export type ServiceImages = {
  before: string; // base64 data URL
  after: string;  // base64 data URL
};

export type Service = {
  _id?: string;
  category: ServiceCategory;
  serviceType: ServiceType;
  title: string;
  description: string;
  features: string[];
  duration?: string;
  price?: string;
  bestFor?: string;
  images: ServiceImages;
  order?: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};


