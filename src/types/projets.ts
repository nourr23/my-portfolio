export interface ProjectsProps {
  id: number;
  created_at?: string; // Assuming ISO string format for timestamps
  name: string;
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
  imgs?: string[]; // Gallery image URLs (stored as text[] in Postgres)
  url: string;
  playstore_url?: string | null;
  appstore_url?: string | null;
  // Backward-compatible aliases (if you used these column names in Supabase)
  playstorelink?: string | null;
  appstorelink?: string | null;
  logo?: string;
}
