export interface ProjectsProps {
  id: number;
  created_at?: string; // Assuming ISO string format for timestamps
  name?: string;
  year?: number;
  order: number;
  technologies?: string;
  back_end?: string;
  front_end?: string;
  database?: string;
  organization?: number; // Assuming it's optional as it's partially visible
  important?: boolean;
  mobile: boolean;
  description: string;
  image?: string[]; // Assuming it's an array of image URLs stored as text[]
  url?: string;
  logo?: string;
}
