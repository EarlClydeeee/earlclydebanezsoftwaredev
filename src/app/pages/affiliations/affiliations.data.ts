export interface AffiliationEntry {
  badge: string;
  org: string;
  role: string;
  link?: string;
}

export const AFFILIATIONS: AffiliationEntry[] = [
  { badge: 'ACCESS', org: 'ACCESS – PUP', role: 'Lead Senior Software Developer' },
  { badge: 'AWS', org: 'AWS Cloud Club – PUP Manila', role: 'Development Team', link: '#' },
  { badge: 'MS', org: 'PUP Microsoft Student Community', role: 'Software Development Co-Lead' },
  {
    badge: 'GDG',
    org: 'Google Developer Group on Campus – PUP Manila',
    role: 'Data & Machine Learning Cadet',
  },
  {
    badge: 'IC',
    org: 'ICpEP.SE – PUP Manila',
    role: 'Software Engineer & Project Manager',
  },
  {
    badge: 'COE',
    org: 'College of Engineering Student Council – PUP',
    role: 'Senior Councilor',
  },
  { badge: 'SIN', org: 'SINAG Student Innovation Program', role: 'President' },
  { badge: 'OM', org: 'ONE MULAWIN', role: 'Secretary' },
];
