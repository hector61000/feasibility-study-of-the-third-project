import { CATEGORIES } from '@/lib/constants';
import { ProjectCategory } from '@/lib/types';
import { motion } from 'framer-motion';

interface CategoryNavProps {
  activeCategory: ProjectCategory | null;
  onCategoryChange: (category: ProjectCategory | null) => void;
}

export const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-8">
      <motion.button
        key="all"
        onClick={() => onCategoryChange(null)}
        className={`relative px-10 py-4 text-xl font-bold rounded-xl transition-all duration-300 border-4
          ${activeCategory === null 
            ? 'text-white bg-emerald-600 border-emerald-700 shadow-lg scale-105' 
            : 'text-emerald-700 border-emerald-500 hover:bg-emerald-50'
          }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        جميع المشروعات
      </motion.button>
      {CATEGORIES.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`relative px-10 py-4 text-xl font-bold rounded-xl transition-all duration-300 border-4
            ${activeCategory === category.id 
              ? 'text-white bg-emerald-600 border-emerald-700 shadow-lg scale-105' 
              : 'text-emerald-700 border-emerald-500 hover:bg-emerald-50'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
};