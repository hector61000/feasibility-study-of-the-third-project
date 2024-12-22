import { useState } from 'react';
import { ProjectCategory, Project } from '@/lib/types';
import { SAMPLE_PROJECTS } from '@/lib/constants';
import { CategoryNav } from '@/components/CategoryNav';
import { ProjectGrid } from '@/components/ProjectGrid';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { OrderForm } from '@/components/OrderForm';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleProjectSelect = (project: Project, isSelected: boolean) => {
    if (isSelected) {
      setSelectedProjects([...selectedProjects, project]);
    } else {
      setSelectedProjects(selectedProjects.filter(p => p.id !== project.id));
    }
  };

  const totalCost = selectedProjects.reduce((sum, project) => sum + project.studyCost, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#a4c23e] to-[#8ba834] font-[Cairo]" dir="rtl">
      <header className="relative bg-gradient-to-r from-[#234426] to-[#2c5530] shadow-2xl border-b-4 border-[#F97316]/20">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="text-right pr-4 sm:pr-12 relative">
            <div className="absolute top-0 right-0 h-full w-16 sm:w-32 opacity-10 bg-[url('/decorative-pattern.svg')] bg-repeat-y"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1 sm:mb-2 font-['Noto_Kufi_Arabic'] relative z-10">
              <span className="text-[#F97316] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">جرين</span>{' '}
              <span className="text-[#F2FCE2] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">لايت</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-semibold tracking-wide mb-1 drop-shadow-md font-['Noto_Kufi_Arabic']">
              للمشروعات ودراسات الجدوى
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProjectGrid
          projects={SAMPLE_PROJECTS}
          activeCategory={activeCategory}
          onProjectSelect={handleProjectSelect}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed ${
            isMobile ? 'bottom-4 left-4 scale-75 origin-bottom-left' : 'bottom-8 left-8'
          } bg-gradient-to-br from-[#F97316] to-[#ea580c] rounded-2xl p-4 shadow-2xl border-2 border-white/80 backdrop-blur-sm z-50`}
          style={{ width: '180px', height: '120px' }}
        >
          <div className="text-xl font-bold mb-2 text-white drop-shadow">
            الإجمالي: {totalCost.toLocaleString()} جنيه
          </div>
          <Button 
            onClick={() => setIsOrderFormOpen(true)}
            className="w-full bg-white text-[#F97316] hover:bg-gray-100 font-bold text-base py-2 rounded-xl transition-all duration-300 hover:scale-105"
          >
            اطلب الآن
          </Button>
        </motion.div>

        <OrderForm 
          isOpen={isOrderFormOpen}
          onClose={() => setIsOrderFormOpen(false)}
          selectedProjects={selectedProjects}
          totalCost={totalCost}
        />
      </main>

      <footer className="bg-[#234426] text-white py-4 text-center mt-20">
        <p className="text-base sm:text-lg">جميع الحقوق محفوظة لشركة جرين لايت © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;