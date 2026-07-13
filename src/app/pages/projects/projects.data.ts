export interface ProjectBadge {
  label: string;
  variant: 'primary' | 'secondary';
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectEntry {
  name: string;
  tagline: string;
  icon: string;
  iconBg: string;
  badges: ProjectBadge[];
  description: string;
  tags: string[];
  links?: ProjectLink[];
  featuredIn?: ProjectLink[];
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'Drowzi',
    tagline: 'Cursor Manila Hack Sprint',
    icon: 'Dr',
    iconBg: 'linear-gradient(135deg, #2d4a3e 0%, #1a2e26 100%)',
    badges: [
      { label: '1ST PLACE', variant: 'primary' },
      { label: 'HACKATHON 2026', variant: 'secondary' },
    ],
    description:
      'Won 1st Place at the Cursor Manila Hack Sprint. Built the ML pipeline for media processing and intelligent content handling that powered the winning submission.',
    tags: ['Python', 'OpenCV', 'DataPipe', 'Machine Learning'],
    featuredIn: [{ label: 'Cursor Manila Hack Sprint', url: '#' }],
  },
  {
    name: 'Barangay Mulawin',
    tagline: 'Official Community Web Portal',
    icon: 'BM',
    iconBg: 'linear-gradient(135deg, #3d5a80 0%, #293241 100%)',
    badges: [
      { label: 'LIVE', variant: 'primary' },
      { label: '12.5K RESIDENTS', variant: 'secondary' },
    ],
    description:
      'Mobile-first official website for Barangay Mulawin, Tanza, Cavite — giving ~12,500 residents 24/7 access to services, announcements, and leadership information.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [{ label: 'View Live Site ↗', url: '#' }],
  },
  {
    name: 'ACCESS',
    tagline: 'Organizational Directory & Asset Management',
    icon: 'AC',
    iconBg: 'linear-gradient(135deg, #5c4d7d 0%, #3d3355 100%)',
    badges: [
      { label: 'LEAD FRONTEND', variant: 'primary' },
      { label: 'SUPABASE RBAC', variant: 'secondary' },
    ],
    description:
      'Centralized web portal consolidating organizational governance and equipment asset tracking — with borrowing workflows, approval status, and auditable return logs.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
  },
  {
    name: 'AWSCCPUP',
    tagline: 'Membership Management System',
    icon: 'AW',
    iconBg: 'linear-gradient(135deg, #c45c26 0%, #8b3a12 100%)',
    badges: [
      { label: 'FULL STACK', variant: 'primary' },
      { label: 'ASTRO + FASTAPI', variant: 'secondary' },
    ],
    description:
      'Full-stack membership platform with public pages, member directory, profile management, and search/filter via FastAPI REST API with PostgreSQL.',
    tags: ['Astro', 'React', 'TypeScript', 'FastAPI', 'Python'],
  },
  {
    name: 'TEDxPUP',
    tagline: 'Official Event Website',
    icon: 'Tx',
    iconBg: 'linear-gradient(135deg, #c0392b 0%, #7b241c 100%)',
    badges: [{ label: 'OFFICIAL SITE', variant: 'primary' }],
    description:
      'Official TEDxPUP website — a structured, engaging platform showcasing event details for attendees and the wider community.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    links: [{ label: 'View Live Site ↗', url: '#' }],
  },
  {
    name: 'OMS',
    tagline: 'Output Monitoring System',
    icon: 'OM',
    iconBg: 'linear-gradient(135deg, #4a6670 0%, #2c3e50 100%)',
    badges: [
      { label: 'PRODUCTION', variant: 'primary' },
      { label: '2M+ OUTPUTS', variant: 'secondary' },
    ],
    description:
      'Real-time production monitoring platform tracking 2M+ machine outputs. Improved reporting efficiency by ~80% through a hybrid relational + JSON database schema.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
    featuredIn: [{ label: 'Hayakawa Electronics — Case Study ↗', url: '#' }],
  },
  {
    name: 'Skill Builder LMS',
    tagline: 'AWS Cloud Club Learning Platform',
    icon: 'SB',
    iconBg: 'linear-gradient(135deg, #e8a87c 0%, #a86b42 100%)',
    badges: [
      { label: '7 DEPARTMENTS', variant: 'primary' },
      { label: 'GAMIFIED LMS', variant: 'secondary' },
    ],
    description:
      'Leaderboard system with public landing and in-platform department rankings — driving member engagement across AI, Data Science, Cloud, Web Dev, IoT, Security, and Data Engineering.',
    tags: ['React', 'TypeScript', 'Express.js', 'Supabase', 'AWS'],
  },
  {
    name: 'ActiveCAMPUS GO',
    tagline: 'Gamified Fitness Platform',
    icon: 'GO',
    iconBg: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
    badges: [
      { label: 'TOP 8 PUP', variant: 'primary' },
      { label: 'PWA', variant: 'secondary' },
    ],
    description:
      'Real-time location-aware PWA promoting student wellness through step-based engagement and campus zone challenges using Google Maps API.',
    tags: ['Next.js', 'Node.js', 'Express', 'Firebase'],
  },
  {
    name: 'ID Finder',
    tagline: 'AWS Cloud Club System Upgrade',
    icon: 'ID',
    iconBg: 'linear-gradient(135deg, #566573 0%, #34495e 100%)',
    badges: [{ label: 'UI REDESIGN', variant: 'primary' }],
    description:
      'Complete frontend redesign — transformed from legacy RetroUI into a modern, production-grade interface aligned with the Skill Builder LMS visual system.',
    tags: ['Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Evidentia Manila',
    tagline: 'Civic Engagement Platform',
    icon: 'Ev',
    iconBg: 'linear-gradient(135deg, #1a5276 0%, #0e2a44 100%)',
    badges: [
      { label: 'CO-LEAD', variant: 'primary' },
      { label: 'GEMINI AI', variant: 'secondary' },
    ],
    description:
      'Civic engagement platform with real-time incident reporting, heatmap dashboards, Gemini AI auto-prioritization, and a barangay appointment scheduler — aligned with SDG 11 & 16.',
    tags: ['Civic Tech', 'Gemini AI', 'Hackathon', 'Full Stack'],
    featuredIn: [{ label: 'Sparkfest GDG PUP 2025 ↗', url: '#' }],
  },
  {
    name: 'Sort Viz',
    tagline: 'Sorting Algorithm Visualizer',
    icon: 'SV',
    iconBg: 'linear-gradient(135deg, #6c5ce7 0%, #4834d4 100%)',
    badges: [
      { label: 'LEAD UI/UX', variant: 'primary' },
      { label: 'EDUCATION', variant: 'secondary' },
    ],
    description:
      'Educational interface with animated representations of five sorting algorithms (Bubble, Selection, Insertion, Merge, Quicksort) — 30% clarity improvement in peer evaluations.',
    tags: ['Python', 'UI/UX', 'Documentation'],
  },
];
