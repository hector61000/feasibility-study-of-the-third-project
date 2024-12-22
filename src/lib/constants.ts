import { Project, ProjectCategory } from './types';

export const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'food', label: 'مشروعات غذائية' },
  { id: 'industrial', label: 'مشروعات صناعية' },
  { id: 'service', label: 'مشروعات خدمية' },
  { id: 'commercial', label: 'مشروعات تجارية' },
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'مشروع مطعم',
    description: '',
    capital: 50000,
    monthlyProfit: 10000,
    studyCost: 150,
    category: 'food',
    imageUrl: '/images/restaurant.jpg',
  },
  {
    id: 2,
    title: 'مشروع مصنع ملابس',
    description: '',
    capital: 100000,
    monthlyProfit: 20000,
    studyCost: 150,
    category: 'industrial',
    imageUrl: '/images/clothing_factory.jpg',
  },
  {
    id: 3,
    title: 'مشروع صالون تجميل',
    description: '',
    capital: 30000,
    monthlyProfit: 5000,
    studyCost: 150,
    category: 'service',
    imageUrl: '/images/beauty_salon.jpg',
  },
  {
    id: 4,
    title: 'مشروع متجر إلكتروني',
    description: '',
    capital: 20000,
    monthlyProfit: 7000,
    studyCost: 150,
    category: 'commercial',
    imageUrl: '/images/online_store.jpg',
  },
];