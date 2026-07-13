export interface EducationHighlight {
  label: string;
  value: string;
}

export const EDUCATION = {
  startYear: '2023',
  endYear: '2027',
  institution: 'Polytechnic University of the Philippines',
  degree: 'BS Computer Engineering',
  specialization: 'Specialization in AI & Machine Learning',
  location: 'Sta. Mesa, Manila',
  highlights: [
    { label: 'Honors', value: 'President Lister' },
    {
      label: 'Scholarships',
      value:
        'CHED Merit Scholar, Presidential Scholar, CARD SME Scholar, DTI × Google Scholar, DataCamp Scholar',
    },
    {
      label: 'Recognition',
      value: 'DataCamp Scholar — Top 4 Learner for Machine Learning Team',
    },
    {
      label: 'Coursework',
      value:
        'Programming Logic & Design, Object-Oriented Programming, Data Structures and Algorithms',
    },
  ] satisfies EducationHighlight[],
};
