import { Project, ProjectCategory } from './types';

export const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'agriculture', label: 'مشروعات الزراعية' },
  { id: 'industrial', label: 'مشروعات صناعية' },
  { id: 'service', label: 'مشروعات خدمية' },
  { id: 'livestock', label: 'مشروعات حيوانية' },
];

export const SAMPLE_PROJECTS: Project[] = [
  // مشروعات زراعية
  {
    id: 1,
    title: 'مشروع زراعة البرتقال',
    description: '',
    capital: 50000,
    monthlyProfit: 10000,
    studyCost: 150,
    category: 'agriculture',
    imageUrl: '/images/مشروعات الزراعيه/البرتقال.png',
  },
  {
    id: 2,
    title: 'مشروع زراعة البطاطس',
    description: '',
    capital: 40000,
    monthlyProfit: 8000,
    studyCost: 150,
    category: 'agriculture',
    imageUrl: '/images/مشروعات الزراعيه/زراعة-البطاطس.png',
  },
  // مشروعات صناعية
  {
    id: 3,
    title: 'مشروع تصنيع الصابون',
    description: '',
    capital: 30000,
    monthlyProfit: 6000,
    studyCost: 150,
    category: 'industrial',
    imageUrl: '/images/مشروعات صناعيه/تصنيع-الصابون.png',
  },
  {
    id: 4,
    title: 'مشروع تصنيع العطور',
    description: '',
    capital: 35000,
    monthlyProfit: 7000,
    studyCost: 150,
    category: 'industrial',
    imageUrl: '/images/مشروعات صناعيه/تصنيع-العطور-ومستحضرات-التجميل.png',
  },
  // مشروعات خدمية
  {
    id: 5,
    title: 'مشروع خدمات التسويق',
    description: '',
    capital: 20000,
    monthlyProfit: 5000,
    studyCost: 150,
    category: 'service',
    imageUrl: '/images/المشاريع الخدمية/التسويق-والأعلانات.png',
  },
  {
    id: 6,
    title: 'صالون تجميل',
    description: '',
    capital: 25000,
    monthlyProfit: 6000,
    studyCost: 150,
    category: 'service',
    imageUrl: '/images/المشاريع الخدمية/صالون-تجميل.png',
  },
  // مشروعات حيوانية
  {
    id: 7,
    title: 'مشروع تربية الأرانب',
    description: '',
    capital: 15000,
    monthlyProfit: 4000,
    studyCost: 150,
    category: 'livestock',
    imageUrl: '/images/مشاريع حيوانية ونباتيه/تربية-الأرانب.png',
  },
  {
    id: 8,
    title: 'مشروع تربية النحل',
    description: '',
    capital: 20000,
    monthlyProfit: 5000,
    studyCost: 150,
    category: 'livestock',
    imageUrl: '/images/مشاريع حيوانية ونباتيه/تربية-النحل.png',
  },
];