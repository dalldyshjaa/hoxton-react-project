export type JobType = {
  slug: string;
  company_name: string;
  title: string;
  descripiton: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: number;
  full_time: boolean;
  country: string;
};
