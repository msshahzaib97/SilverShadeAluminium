export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  image: string;
  additionalImages?: string[];
  year: string;
  scope: string;
  description: string;
  systemUsed: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  location: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  systemSpecification?: string;
  projectLocation: string;
  propertyType: 'villa' | 'apartment' | 'commercial' | 'retail' | 'other';
  projectDetails: string;
  preferredContact: 'whatsapp' | 'phone' | 'email';
}
