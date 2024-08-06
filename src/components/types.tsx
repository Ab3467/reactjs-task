export type Project = {
    id: number;
    title: string;
    description: string;
    duedate: string;
  }
  
  export type Task = {
    id: number;
    text: string;
    ProId: number | null; // Ensure consistency here
  }
  