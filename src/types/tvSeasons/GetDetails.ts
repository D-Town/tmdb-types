import type { Episodes } from '../Episodes';
import type { Path } from '../Path';

interface GetDetails {
  _id?: string;
  air_date?: string;
  episodes?: Episodes[];
  name?: string;
  overview?: string;
  id?: number;
  poster_path?: Path;
  season_number?: number;
}

export {
  GetDetails
};
