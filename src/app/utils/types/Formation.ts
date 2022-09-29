export interface Formation {
  title: string;
  start_date: string;
  duration: number;
  trainer: Person;
}

export interface Person {
  firstname: string;
  lastname: string;
}

