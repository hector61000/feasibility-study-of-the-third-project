import { CATEGORIES, SAMPLE_PROJECTS } from '@/lib/constants';
import { ProjectCategory } from '@/lib/types';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CategoryNavProps {
  activeCategory: ProjectCategory | null;
  onCategoryChange: (category: ProjectCategory | null) => void;
}

export const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  const handleCategoryClick = (category: ProjectCategory) => {
    if (activeCategory === category) {
      onCategoryChange(null);
    } else {
      onCategoryChange(category);
    }
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-3 px-2 sm:px-6 py-4 sm:py-8">
      {CATEGORIES.map((category) => (
        <div key={category.id} className="flex-1 min-w-[200px] max-w-[300px]">
          <motion.button
            onClick={() => handleCategoryClick(category.id)}
            className={`w-full relative px-3 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 border-4
              ${activeCategory === category.id 
                ? 'text-white bg-emerald-600 border-emerald-700 shadow-lg' 
                : 'text-emerald-700 border-emerald-500 hover:bg-emerald-50'
              }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {category.label}
          </motion.button>
        </div>
      ))}
    </div>
  );
};