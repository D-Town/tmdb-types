import type { Cast as CastBasic } from '../shared/Cast';
import type { Crew as CrewBasic } from '../shared/Crew';

interface Roles {
  credit_id?: string;
  character?: string;
  episode_count?: number;
}

interface Jobs {
  credit_id?: string;
  job?: string;
  episode_count?: number;
}

interface Cast extends CastBasic, Roles {}

interface Crew extends CrewBasic, Jobs {}

export {
  Cast, Crew
};
