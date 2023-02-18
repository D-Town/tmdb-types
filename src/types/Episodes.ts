import type { Crew } from './Crew';
import type { GuestStar } from './GuestStar';

interface Episodes {
  air_date?: string;
  episode_number?: number;
  crew?: Crew;
  guest_stars?: GuestStar;
  id?: number;
  name?: string;
  overview?: string;
  production_code?: string;
  season_number?: number;
  still_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export type { Episodes };
