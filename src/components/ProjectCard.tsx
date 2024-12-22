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
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200 w-full max-w-3xl mx-auto"
    >
      <div className="aspect-[640/425] relative overflow-hidden">
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
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
            <Checkbox
              id={`check-${project.id}`}
              checked={isSelected}
              onCheckedChange={handleCheckboxChange}
              className="border-[#F97316] data-[state=checked]:bg-[#F97316] data-[state=checked]:border-[#F97316]"
            />
            <label htmlFor={`check-${project.id}`} className="text-sm font-medium text-gray-700">
              اختر المشروع
            </label>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {project.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 text-right">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600 font-medium">رأس المال:</span>
            <span className="font-bold text-gray-900">{project.capital.toLocaleString()} جنيه</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
            <span className="text-emerald-700 font-medium">الأرباح الشهرية:</span>
            <span className="font-bold text-emerald-600">{project.monthlyProfit.toLocaleString()} جنيه</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-700 font-medium">تكلفة الدراسة:</span>
            <span className="font-bold text-blue-600">{project.studyCost.toLocaleString()} جنيه</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};