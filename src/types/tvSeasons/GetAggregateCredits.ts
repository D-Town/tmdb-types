import type { Cast as CastBasic } from '../Cast';
import type { Crew as CrewBasic } from '../Crew';

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

interface GetAggregateCredits {
  cast?: Cast[];
  crew?: Crew[];
  id?: number;
}

export {
  GetAggregateCredits
};
