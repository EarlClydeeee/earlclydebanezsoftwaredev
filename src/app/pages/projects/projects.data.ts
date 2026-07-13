export type ProjectCategory = 'software' | 'hardware';

export interface ProjectBadge {
  label: string;
  variant: 'primary' | 'secondary';
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectEntry {
  category: ProjectCategory;
  name: string;
  tagline: string;
  icon: string;
  iconBg: string;
  badges: ProjectBadge[];
  description: string;
  tags: string[];
  links?: ProjectLink[];
  featuredIn?: ProjectLink[];
  featured?: boolean;
  objectives?: string[];
  scope?: string;
  limitations?: string[];
  significance?: string;
}

export const SOFTWARE_PROJECTS: ProjectEntry[] = [
  {
    category: 'software',
    name: 'PaperTradeX',
    tagline: 'AI Paper Trading Simulator',
    icon: 'PT',
    iconBg: 'linear-gradient(135deg, #e8a87c 0%, #a86b42 100%)',
    badges: [
      { label: 'LIVE', variant: 'primary' },
      { label: 'AI COACH', variant: 'secondary' },
    ],
    description:
      'Unified crypto + stock paper trading simulator with live market data and an AI bias coach that flags FOMO, panic selling, overconfidence, and more after every trade — building a behavioral fingerprint over time.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CoinGecko', 'Finnhub', 'Recharts'],
    links: [
      { label: 'Live Demo ↗', url: 'https://paper-trade-x-brown.vercel.app' },
      { label: 'GitHub ↗', url: 'https://github.com/EarlClydeeee/PaperTradeX' },
    ],
    featured: true,
  },
  {
    category: 'software',
    name: 'Brain Tumor Classifier',
    tagline: 'ResNet50 + ONNX Browser Inference',
    icon: 'BT',
    iconBg: 'linear-gradient(135deg, #6c5ce7 0%, #4834d4 100%)',
    badges: [
      { label: 'ML / CV', variant: 'primary' },
      { label: 'ONNX RUNTIME', variant: 'secondary' },
    ],
    description:
      'Train ResNet50 on the Brain Tumor MRI Dataset (4 classes, ~7k images) in Colab, export to ONNX, and run browser-based inference in a Next.js demo — glioma, meningioma, no tumor, and pituitary classification.',
    tags: ['Python', 'PyTorch', 'Next.js', 'ONNX', 'ResNet50', 'OpenCV'],
    links: [
      { label: 'Live Demo ↗', url: 'https://py-react-onnx-resnet50.vercel.app' },
      { label: 'GitHub ↗', url: 'https://github.com/EarlClydeeee/py-react-onnx-resnet50' },
    ],
  },
  {
    category: 'software',
    name: 'Kolektibo',
    tagline: 'AI-Governed Group Treasury on Stellar',
    icon: 'Kl',
    iconBg: 'linear-gradient(135deg, #1a5276 0%, #0e2a44 100%)',
    badges: [
      { label: 'HACKATHON', variant: 'primary' },
      { label: 'SOROBAN', variant: 'secondary' },
    ],
    description:
      'AI treasurer for Filipino group funds (_pondohan_, barangay projects, co-ops) — every payout enforced by a Soroban smart contract with M-of-N approvals. Monorepo: Rust contract, Capacitor-ready PWA, and OpenAI backend.',
    tags: ['Stellar', 'Soroban', 'Rust', 'React', 'TypeScript', 'Supabase', 'OpenAI'],
    links: [{ label: 'GitHub ↗', url: 'https://github.com/EarlClydeeee/kolektibo' }],
    featuredIn: [
      { label: 'APAC Stellar Hackathon 2026 ↗', url: 'https://github.com/EarlClydeeee/kolektibo' },
    ],
  },
  {
    category: 'software',
    name: 'Certivo',
    tagline: 'Next.js Certifications Platform',
    icon: 'Ce',
    iconBg: 'linear-gradient(135deg, #3d5a80 0%, #293241 100%)',
    badges: [
      { label: 'NEXT.JS', variant: 'primary' },
      { label: 'FULL STACK', variant: 'secondary' },
    ],
    description:
      'Next.js application for managing and presenting professional certifications — portfolio-ready credential showcase with a modern app-router architecture.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    links: [{ label: 'GitHub ↗', url: 'https://github.com/EarlClydeeee/nextjs-certivo' }],
  },
  {
    category: 'software',
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
    tags: ['Python', 'OpenCV', 'DataPipe', 'Machine Learning', 'Rapid Prototyping'],
    featuredIn: [{ label: 'Cursor Manila Hack Sprint ↗', url: '#' }],
  },
  {
    category: 'software',
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
    links: [{ label: 'Live Site ↗', url: '#' }],
  },
  {
    category: 'software',
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
    category: 'software',
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
    category: 'software',
    name: 'TEDxPUP',
    tagline: 'Official Event Website',
    icon: 'Tx',
    iconBg: 'linear-gradient(135deg, #c0392b 0%, #7b241c 100%)',
    badges: [{ label: 'OFFICIAL SITE', variant: 'primary' }],
    description:
      'Official TEDxPUP website — a structured, engaging platform showcasing event details for attendees and the wider community.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    links: [{ label: 'Live Site ↗', url: '#' }],
  },
  {
    category: 'software',
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
    category: 'software',
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
    category: 'software',
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
    category: 'software',
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
    category: 'software',
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
    category: 'software',
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

export const HARDWARE_PROJECTS: ProjectEntry[] = [
  {
    category: 'hardware',
    name: 'Helmivo',
    tagline: 'ESP32 Smart Helmet / Accident Detection',
    icon: 'Hv',
    iconBg: 'linear-gradient(135deg, #2d5a52 0%, #1a3530 100%)',
    badges: [
      { label: 'ESP32', variant: 'primary' },
      { label: 'IOT + GPS', variant: 'secondary' },
    ],
    description:
      'Arduino firmware for an ESP32-based smart helmet prototype: MPU6050 motion sensing, u-blox GPS over UART, Wi-Fi AP with web dashboard, Telegram alerts, and GPIO for relay (helmet lights) and buzzer. Includes accident detection flow with cancel window and tester APIs.',
    tags: ['ESP32', 'C++', 'MPU6050', 'GPS', 'Telegram', 'WebServer'],
    links: [
      {
        label: 'GitHub ↗',
        url: 'https://github.com/EarlClydeeee/esp32_smart_accident_detection',
      },
    ],
    featured: true,
  },
  {
    category: 'hardware',
    name: 'Smart Entry Gate',
    tagline: 'Arduino RFID & PIN Access Control',
    icon: 'SG',
    iconBg: 'linear-gradient(135deg, #566573 0%, #2c3e50 100%)',
    badges: [
      { label: 'ARDUINO UNO', variant: 'primary' },
      { label: 'EMBEDDED', variant: 'secondary' },
    ],
    description:
      'Prototype smart entry gate system for automated access control, gate operation, real-time status display, and basic visitor monitoring — built for schools, offices, labs, and small facilities that need affordable entry management.',
    tags: ['Arduino', 'RFID RC522', 'EEPROM', 'Servo', 'PIR / IR', 'I2C LCD', 'SPI'],
    links: [
      {
        label: 'GitHub ↗',
        url: 'https://github.com/EarlClydeeee/arduino-automated-watering-system',
      },
    ],
    objectives: [
      'Authenticate users via RFID cards/tags and PIN entry',
      'Store authorized RFID UIDs on the Arduino Uno onboard EEPROM',
      'Open and close the gate automatically with a servo motor',
      'Detect motion and object presence using PIR and IR sensors',
      'Show real-time status on a 16×2 I2C LCD',
      'Provide green, red, and yellow LED access feedback',
      'Trigger buzzer or relay on denied access or alert conditions',
      'Support override, reset, and mode-selection push buttons',
      'Count successful entries for basic visitor monitoring',
    ],
    scope:
      'RFID (RC522) and 4×4 keypad PIN access, EEPROM-backed UID storage, servo gate arm, PIR motion + IR proximity auto-close, LCD messaging, LED/buzzer/relay alerts, push-button override/reset/mode, and entry counter.',
    limitations: [
      'Prototype only — not a commercial security product',
      'EEPROM limits how many RFID UIDs can be stored',
      'Requires stable 5 V supply; servo needs separate 5 V 1 A supply',
      'No cloud database, mobile app, or web monitoring',
      'Lower security than commercial biometric systems; RFID cards can be lost or duplicated',
      'Outdoor use needs enclosure and weather protection',
      'Visitor count may be inaccurate if multiple people pass at once',
    ],
    significance:
      'Helps reduce manual gate operation, improve monitoring, and prevent unauthorized entry for security staff and administrators. Applies microcontroller programming, SPI/I2C, sensor integration, PWM, EEPROM, relay control, and embedded system design.',
  },
];

export const PROJECTS: ProjectEntry[] = [...SOFTWARE_PROJECTS, ...HARDWARE_PROJECTS];
