export interface Formation {
  title: string;
  start_date: string;
  duration: number;
  trainer: Person;
  topics: string[];
  students: Person[];
  tags: Tag[]; // "equivalent" à string[]
}

export interface Person {
  firstname: string;
  lastname: string;
}

type Tag = 'FRONT' | 'BACK' | 'DESIGN' | 'SERVER' | 'DEVELOPMENT';

