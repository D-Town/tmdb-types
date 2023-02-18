import type { Path } from './Path';

interface Crew {
  department?: string;
  job?: string;
  credit_id?: string;
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: Path;
}

export type { Crew };
