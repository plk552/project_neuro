
export type Category = 'Cameras' | 'Lenses' | 'Lighting' | 'Audio' | 'Accessories';

export interface Equipment {
  id: string;
  name: string;
  brand: string;
  category: Category;
  description: string;
  fullDescription?: string;
  pricePerDay: number;
  imageUrl: string;
  specs: string[];
  includedItems?: string[];
}

export interface Tariff {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
