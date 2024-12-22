import { CATEGORIES } from '@/lib/constants';
import { ProjectCategory } from '@/lib/types';
import { motion } from 'framer-motion';

interface CategoryNavProps {
  activeCategory: ProjectCategory | null;
  onCategoryChange: (category: ProjectCategory | null) => void;
}

export const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-4">
      <motion.button
        key="all"
        onClick={() => onCategoryChange(null)}
        className={`relative px-8 py-3 text-lg font-bold rounded-full transition-all duration-200
          ${activeCategory === null 
            ? 'text-white bg-emerald-600 shadow-lg scale-110' 
            : 'text-gray-600 hover:text-emerald-600'
          }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        جميع المشروعات
      </motion.button>
      {CATEGORIES.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`relative px-8 py-3 text-lg font-bold rounded-full transition-all duration-200
            ${activeCategory === category.id 
              ? 'text-white bg-emerald-600 shadow-lg scale-110' 
              : 'text-gray-600 hover:text-emerald-600'
            }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
};