import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Checkbox } from './ui/checkbox';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project, isSelected: boolean) => void;
}

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsSelected(checked);
    if (onSelect) {
      onSelect(project, checked);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl border-4 border-[#F97316]/20 hover:border-[#F97316] w-full max-w-7xl mx-auto p-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight flex-1">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 sm:gap-4 whitespace-nowrap">
            <Checkbox
              id={`check-${project.id}`}
              checked={isSelected}
              onCheckedChange={handleCheckboxChange}
              className="h-5 w-5 sm:h-6 sm:w-6 border-2 border-[#F97316] data-[state=checked]:bg-[#F97316] data-[state=checked]:border-[#F97316]"
            />
            <label htmlFor={`check-${project.id}`} className="text-base sm:text-lg font-medium text-gray-700">
              اختر المشروع
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:gap-4 text-right">
          <div className="flex items-center justify-between p-2 sm:p-4 bg-gray-50 rounded-xl">
            <span className="text-gray-600 font-medium text-base sm:text-lg md:text-xl">رأس المال:</span>
            <span className="font-bold text-gray-900 text-base sm:text-lg md:text-xl">{project.capital.toLocaleString()} جنيه</span>
          </div>
          <div className="flex items-center justify-between p-2 sm:p-4 bg-emerald-50 rounded-xl">
            <span className="text-emerald-700 font-medium text-base sm:text-lg md:text-xl">الأرباح الشهرية:</span>
            <span className="font-bold text-emerald-600 text-base sm:text-lg md:text-xl">{project.monthlyProfit.toLocaleString()} جنيه</span>
          </div>
          <div className="flex items-center justify-between p-2 sm:p-4 bg-blue-50 rounded-xl">
            <span className="text-blue-700 font-medium text-base sm:text-lg md:text-xl">تكلفة الدراسة:</span>
            <span className="font-bold text-blue-600 text-base sm:text-lg md:text-xl">{project.studyCost.toLocaleString()} جنيه</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};