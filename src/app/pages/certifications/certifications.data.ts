export type IssuerTheme = 'datacamp' | 'cisco' | 'google';

export interface CertificationEntry {
  title: string;
  issuerLabel: string;
  issuerTheme: IssuerTheme;
  verifyUrl: string;
}

export interface CertificationGroup {
  label: string;
  items: CertificationEntry[];
}

export const CERTIFICATION_GROUPS: CertificationGroup[] = [
  {
    label: 'AI',
    items: [
      {
        title: 'AI Engineer for Developers Associate',
        issuerLabel: 'DATACAMP',
        issuerTheme: 'datacamp',
        verifyUrl: '#',
      },
      {
        title: 'Understanding Prompt Engineering',
        issuerLabel: 'DATACAMP',
        issuerTheme: 'datacamp',
        verifyUrl: '#',
      },
    ],
  },
  {
    label: 'Data',
    items: [
      {
        title: 'Data Analyst Associate',
        issuerLabel: 'DATACAMP',
        issuerTheme: 'datacamp',
        verifyUrl: '#',
      },
    ],
  },
  {
    label: 'Cloud & Networking',
    items: [
      {
        title: 'CCNA: Switching, Routing, and Wireless Essentials',
        issuerLabel: 'CISCO',
        issuerTheme: 'cisco',
        verifyUrl: '#',
      },
      {
        title: 'Understanding Cloud Computing',
        issuerLabel: 'DATACAMP',
        issuerTheme: 'datacamp',
        verifyUrl: '#',
      },
    ],
  },
  {
    label: 'Project Management',
    items: [
      {
        title: 'Foundations of Project Management',
        issuerLabel: 'GOOGLE / COURSERA',
        issuerTheme: 'google',
        verifyUrl: '#',
      },
    ],
  },
];
