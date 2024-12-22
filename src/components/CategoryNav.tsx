import { CATEGORIES } from '@/lib/constants';
import { ProjectCategory } from '@/lib/types';
import { motion } from 'framer-motion';

interface CategoryNavProps {
  activeCategory: ProjectCategory | null;
  onCategoryChange: (category: ProjectCategory | null) => void;
}

export const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-8">
      <motion.button
        key="all"
        onClick={() => onCategoryChange(null)}
        className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200
          ${activeCategory === null 
            ? 'text-white bg-emerald-600 shadow-lg' 
            : 'text-gray-600 hover:text-emerald-600'
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
          className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200
            ${activeCategory === category.id 
              ? 'text-white bg-emerald-600 shadow-lg' 
              : 'text-gray-600 hover:text-emerald-600'
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