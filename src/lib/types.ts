export type ProjectCategory = 'food' | 'industrial' | 'service' | 'commercial';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory;
  capital: number;
  monthlyProfit: number;
  studyCost: number;
}