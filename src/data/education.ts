export interface Education {
  id: string;
  school: string;
  location: string;
  startYear: string;
  endYear: string;
  current?: boolean;
}

export const education: Education[] = [
  {
    id: 'upec-master',
    school: 'Université Paris-Est Créteil (UPEC)',
    location: 'Créteil, France',
    startYear: '2025',
    endYear: '2027',
    current: true,
  },
  {
    id: 'but-sorbonne',
    school: 'Université Sorbonne Paris Nord',
    location: 'Villetaneuse, France',
    startYear: '2021',
    endYear: '2024',
  },
];
