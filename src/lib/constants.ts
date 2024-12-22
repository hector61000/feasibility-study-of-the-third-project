import { Project, ProjectCategory } from './types';
import { agriculturalProjects } from './projects/agricultural';
import { industrialProjects } from './projects/industrial';
import { serviceProjects } from './projects/service';
import { livestockProjects } from './projects/livestock';

export const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'agriculture', label: 'مشروعات الزراعية' },
  { id: 'industrial', label: 'مشروعات صناعية' },
  { id: 'service', label: 'مشروعات خدمية' },
  { id: 'livestock', label: 'مشروعات حيوانية' },
];

export const SAMPLE_PROJECTS: Project[] = [
  ...agriculturalProjects,
  ...industrialProjects,
  ...serviceProjects,
  ...livestockProjects,
];