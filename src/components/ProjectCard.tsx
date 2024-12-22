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

  const getImageUrl = (url: string) => {
    const fileName = url.split('\\').pop()?.split('/').pop();
    if (!fileName) return '/placeholder.svg';
    
    const categoryMatch = url.match(/مشروعات\s[^\\\/]+/);
    const category = categoryMatch ? categoryMatch[0] : '';
    
    return `/images/${category}/${fileName}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl border-4 border-[#F97316]/20 hover:border-[#F97316] w-full max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 relative">
          <div className="relative overflow-hidden" style={{ aspectRatio: '640/425' }}>
            <div className={`absolute inset-0 bg-gray-200 ${!isLoaded && !imageError ? 'animate-pulse' : ''}`} />
            <img
              src={imageError ? '/placeholder.svg' : getImageUrl(project.imageUrl)}
              alt={project.title}
              className={`h-full w-full object-cover transition-all duration-700 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              onLoad={() => setIsLoaded(true)}
              onError={handleImageError}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex justify-center p-2 sm:p-4 bg-white/90 backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              <Checkbox
                id={`check-${project.id}`}
                checked={isSelected}
                onCheckedChange={handleCheckboxChange}
                className="h-4 w-4 sm:h-6 sm:w-6 border-[#F97316] data-[state=checked]:bg-[#F97316] data-[state=checked]:border-[#F97316]"
              />
              <label htmlFor={`check-${project.id}`} className="text-base sm:text-lg font-medium text-gray-700">
                اختر المشروع
              </label>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-3 sm:p-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h3>
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
        </div>
      </div>
    </motion.div>
  );
};