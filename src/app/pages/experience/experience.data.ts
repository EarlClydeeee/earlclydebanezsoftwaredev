export interface ExperienceRole {
  title: string;
  period: string;
  descriptions: string[];
  skills: string[];
  moreSkills?: number;
}

export interface ExperienceCompany {
  name: string;
  icon: string;
  type: string;
  totalDuration: string;
  location?: string;
  roles: ExperienceRole[];
}

export const EXPERIENCE_COMPANIES: ExperienceCompany[] = [
  {
    name: 'Hayakawa Electronics Philippines Corp.',
    icon: 'HE',
    type: 'Internship',
    totalDuration: '2025',
    location: 'Philippines',
    roles: [
      {
        title: 'Software Engineering Front-End Lead',
        period: '2025',
        descriptions: [
          'Developed and deployed the Output Monitoring System (OMS), a real-time web platform tracking 2M+ machine and applicator production cycles, significantly improving factory traceability.',
          'Architected a modular frontend with HTML, Tailwind CSS, and JavaScript; contributed to PHP/MySQL backend logic powering predictive maintenance and component lifespan tracking.',
          'Reduced factory reporting time by 80% through ETL pipeline design and a hybrid relational + JSON database schema, cutting downtime across production lines.',
        ],
        skills: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
        moreSkills: 1,
      },
    ],
  },
  {
    name: 'AWS Cloud Club – PUP Manila',
    icon: 'AC',
    type: 'Student Organization',
    totalDuration: '2023 – Present',
    location: 'Manila, Philippines',
    roles: [
      {
        title: 'Development Team',
        period: '2023 – PRESENT',
        descriptions: [
          'Built and maintained club-wide platforms including the Skill Builder LMS, AWS Cloud Club website, and TEDxPUP site using React, TypeScript, Astro, FastAPI, and Supabase.',
          'Spearheaded design and development of a gamified LMS platform used across 7 technical departments (AI, Data Science, Cloud, Web Dev, IoT, Security, Data Engineering).',
          'Followed professional Git workflows with structured branch naming and Conventional Commits across all collaborative codebases.',
        ],
        skills: ['React', 'TypeScript', 'Astro', 'FastAPI', 'Supabase'],
        moreSkills: 2,
      },
    ],
  },
  {
    name: 'PUP Microsoft Student Community',
    icon: 'MS',
    type: 'Student Organization',
    totalDuration: '2025 – Present',
    location: 'Manila, Philippines',
    roles: [
      {
        title: 'Software Development Co-Lead',
        period: '2025 – PRESENT',
        descriptions: [
          'Guides and mentors developers in modern software engineering workflows and frontend-backend integration practices.',
          'Leads hands-on sessions on UI architecture, modular design, and project scalability, encouraging open collaboration through Git-based workflows.',
          "Initiates development projects that align with Microsoft's mission of empowering student developers through community-driven learning.",
        ],
        skills: ['React', 'Git', 'UI Architecture', 'Full-Stack Development'],
      },
    ],
  },
  {
    name: 'ACCESS – PUP',
    icon: 'AX',
    type: 'Student Organization',
    totalDuration: '2023 – Present',
    location: 'Manila, Philippines',
    roles: [
      {
        title: 'Lead Senior Software Developer',
        period: '2023 – PRESENT',
        descriptions: [
          'Contributes to the engineering and technical initiatives of the organization by supporting academic, developmental, and competency-based programs for Computer Engineering students.',
          'Serves as one of the lead developers for the official ACCESS–PUP website, building modules focused on organizational transparency, streamlined announcements, and centralized student engagement.',
          'Co-developing the CPE Fair Management Platform — a full-stack system with bracket generation, match tracking, and leaderboard displays for department-wide competitions.',
        ],
        skills: ['Next.js', 'React', 'Full-Stack Development', 'Project Management'],
        moreSkills: 1,
      },
    ],
  },
  {
    name: 'AWS User Group Philippines',
    icon: 'UG',
    type: 'Community',
    totalDuration: '2025',
    location: 'Philippines · Remote',
    roles: [
      {
        title: 'Founding Engineer',
        period: '2025',
        descriptions: [
          'Conceptualized the official AWS Community Day event website for live session tracking, speaker details, and schedule management.',
          'Proposed the AWSUG NFC ID System — a full-stack solution for real-time attendee verification and event analytics.',
        ],
        skills: ['AWS', 'Full-Stack Development', 'Event Systems'],
      },
    ],
  },
  {
    name: 'ICpEP.SE – PUP Manila',
    icon: 'IC',
    type: 'Student Organization',
    totalDuration: '2025 – Present',
    location: 'Manila, Philippines',
    roles: [
      {
        title: 'Software Engineer & Project Manager',
        period: '2025 – PRESENT',
        descriptions: [
          "Led the planning, architecture, and development of ICpEP.SE's Certificate Generation Tool, a Next.js + Tailwind CSS web platform that automates certificate creation for large-scale events.",
          'Engineered core features such as CSV parsing, dynamic placeholders, real-time template previews, and batch PDF/PNG export, streamlining certificate generation for hundreds of recipients at once.',
          'Managed a cross-functional team by assigning modules, ensuring clean architecture, and enforcing DRY and version-controlled development workflows using Git. Oversaw UI/UX direction through Figma-based prototyping.',
        ],
        skills: ['Next.js', 'Tailwind CSS', 'Figma', 'Project Management'],
        moreSkills: 2,
      },
    ],
  },
  {
    name: 'Google Developer Group on Campus – PUP Manila',
    icon: 'GD',
    type: 'Student Organization',
    totalDuration: '2025 – Present',
    location: 'Manila, Philippines',
    roles: [
      {
        title: 'Data & Machine Learning Cadet',
        period: '2025 – PRESENT',
        descriptions: [
          'Collaborates on data-driven applications and AI prototypes; contributes to hackathons promoting Google Cloud, TensorFlow, and AI literacy.',
          'Gains hands-on experience in data preprocessing, visualization, and ML model experimentation using Python-based frameworks.',
        ],
        skills: ['Python', 'TensorFlow', 'Google Cloud', 'Machine Learning'],
      },
    ],
  },
];
