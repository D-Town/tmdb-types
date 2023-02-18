import type { Path } from './Path';

interface GuestStar {
  character_name?: string;
  credit_id?: string;
  order?: number;
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: Path;
}

export type { GuestStar };
