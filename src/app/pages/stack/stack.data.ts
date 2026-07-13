export interface StackGroup {
  title: string;
  items: string[];
}

export const STACK_GROUPS: StackGroup[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL', 'R', 'C++'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Astro', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST API', 'GPT API'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Vercel', 'Serverless Deployment'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Roboflow', 'OpenCV'],
  },
  {
    title: 'Data Science & Analysis',
    items: ['Kaggle', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Model Deployment',
    items: ['Flask', 'Streamlit', 'Gradio'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Figma', 'Conventional Commits'],
  },
  {
    title: 'Frameworks',
    items: ['Next.js', 'Astro', 'Laravel', 'Angular'],
  },
];
