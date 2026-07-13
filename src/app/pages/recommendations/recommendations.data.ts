export interface RecommendationEntry {
  paragraphs: string[];
  author: string;
  initials: string;
  role: string;
  date?: string;
}

export const RECOMMENDATIONS: RecommendationEntry[] = [
  {
    paragraphs: [
      'Earl consistently delivers production-ready code under tight deadlines. His work on our monitoring platform cut reporting time dramatically and set a new standard for the team.',
      'He has a rare ability to translate complex factory requirements into clean, intuitive interfaces that operators actually enjoy using.',
    ],
    author: 'Maria Santos',
    initials: 'MS',
    role: 'Engineering Manager at Hayakawa Electronics Philippines Corp.',
    date: 'JAN 2026',
  },
  {
    paragraphs: [
      'One of the most reliable student developers I have worked with. Earl leads by example — from architecture decisions to mentoring junior members across multiple club projects.',
    ],
    author: 'James Rivera',
    initials: 'JR',
    role: 'Faculty Advisor at AWS Cloud Club – PUP Manila',
    date: 'DEC 2025',
  },
  {
    paragraphs: [
      'Earl brings strong full-stack skills and exceptional UI sensibility. He transformed our legacy interfaces into polished, accessible experiences without disrupting delivery timelines.',
      'His attention to design systems and component consistency elevated the entire platform. I would work with him again without hesitation.',
    ],
    author: 'Angela Cruz',
    initials: 'AC',
    role: 'President at ACCESS – PUP',
    date: 'NOV 2025',
  },
  {
    paragraphs: [
      'His hackathon performance speaks for itself — fast execution, clean ML pipelines, and clear communication under pressure.',
    ],
    author: 'Daniel Tan',
    initials: 'DT',
    role: 'Organizer at Cursor Manila Hack Sprint',
    date: 'FEB 2026',
  },
  {
    paragraphs: [
      'Earl is the kind of developer who makes everyone around him better. He asks the right questions, documents thoroughly, and ships work that holds up in production.',
      'During our certificate generation tool build, he managed the team with clarity and kept us moving even when scope shifted mid-sprint.',
    ],
    author: 'Patricia Lim',
    initials: 'PL',
    role: 'Vice President at ICpEP.SE – PUP Manila',
    date: 'OCT 2025',
  },
  {
    paragraphs: [
      'Working with Earl on the Skill Builder LMS was a masterclass in modern frontend architecture. He thinks in systems, not just screens.',
    ],
    author: 'Carlos Mendoza',
    initials: 'CM',
    role: 'Cloud Lead at AWS Cloud Club – PUP Manila',
    date: 'SEP 2025',
  },
];
