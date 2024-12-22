import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Checkbox } from './ui/checkbox';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project, isSelected: boolean) => void;
}

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsSelected(checked);
    onSelect?.(project, checked);
  };

  const handleImageError = () => {
    setImageError(true);
    console.error(`Failed to load image: ${project.imageUrl}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl border-2 border-[#F97316]/20 hover:border-[#F97316] w-full max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 relative aspect-[16/9] md:aspect-[4/3]">
          <div className={`absolute inset-0 bg-gray-200 ${!isLoaded && !imageError ? 'animate-pulse' : ''}`} />
          <img
            src={imageError ? '/placeholder.svg' : project.imageUrl}
            alt={project.title}
            className={`h-full w-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={handleImageError}
          />
        </div>
        <div className="w-full md:w-3/5 p-6 md:p-8 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3 text-right">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-600 font-medium text-base md:text-lg">رأس المال:</span>
              <span className="font-bold text-gray-900 text-base md:text-lg">{project.capital.toLocaleString()} جنيه</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl">
              <span className="text-emerald-700 font-medium text-base md:text-lg">الأرباح الشهرية:</span>
              <span className="font-bold text-emerald-600 text-base md:text-lg">{project.monthlyProfit.toLocaleString()} جنيه</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
              <span className="text-blue-700 font-medium text-base md:text-lg">تكلفة الدراسة:</span>
              <span className="font-bold text-blue-600 text-base md:text-lg">{project.studyCost.toLocaleString()} جنيه</span>
            </div>
          </div>
          <div className="flex justify-end pt-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id={`check-${project.id}`}
                checked={isSelected}
                onCheckedChange={handleCheckboxChange}
                className="h-5 w-5 border-[#F97316] data-[state=checked]:bg-[#F97316] data-[state=checked]:border-[#F97316]"
              />
              <label htmlFor={`check-${project.id}`} className="text-base md:text-lg font-medium text-gray-700">
                اختر المشروع
              </label>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};