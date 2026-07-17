export interface StackItem {
  name: string;
  icon?: string;
  logo?: string;
}

export interface StackGroup {
  title: string;
  items: StackItem[];
}

export function stackLogoUrl(item: StackItem): string | null {
  if (item.logo) {
    return item.logo;
  }

  if (item.icon) {
    return `https://cdn.simpleicons.org/${item.icon}`;
  }

  return null;
}

export const STACK_GROUPS: StackGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' },
      { name: 'PHP', icon: 'php' },
      { name: 'SQL', icon: 'postgresql' },
      { name: 'R', icon: 'r' },
      { name: 'C++', icon: 'cplusplus' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Astro', icon: 'astro' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Flask', icon: 'flask' },
      { name: 'REST API', icon: 'openapi' },
      { name: 'GPT API', icon: 'openai' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: 'amazonwebservices' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Serverless Deployment', icon: 'serverless' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    items: [
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'Scikit-learn', icon: 'scikitlearn' },
      { name: 'Roboflow', icon: 'roboflow' },
      { name: 'OpenCV', icon: 'opencv' },
    ],
  },
  {
    title: 'Data Science & Analysis',
    items: [
      { name: 'Kaggle', icon: 'kaggle' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Seaborn' },
    ],
  },
  {
    title: 'Model Deployment',
    items: [
      { name: 'Flask', icon: 'flask' },
      { name: 'Streamlit', icon: 'streamlit' },
      { name: 'Gradio', icon: 'gradio' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Conventional Commits', icon: 'git' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Astro', icon: 'astro' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Angular', icon: 'angular' },
    ],
  },
];
