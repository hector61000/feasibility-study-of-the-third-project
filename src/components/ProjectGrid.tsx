import { Project, ProjectCategory } from '@/lib/types';
import { ProjectCard } from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectGridProps {
  projects: Project[];
  activeCategory: ProjectCategory | null;
  onProjectSelect?: (project: Project, isSelected: boolean) => void;
}

export const ProjectGrid = ({ projects, activeCategory, onProjectSelect }: ProjectGridProps) => {
  const filteredProjects = activeCategory
    ? projects.filter((project) => project.category === activeCategory)
    : projects;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-10">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard 
                project={project} 
                onSelect={onProjectSelect}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};