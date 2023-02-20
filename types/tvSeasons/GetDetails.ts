import type { Episodes } from './../shared/Episodes';
import type { Path } from './../shared/Path';

/**
 * @interface
 * Get the TV season details by id
 */
interface GetDetails {
  /** Date for show the first time (country specific) */
  air_date?: string;
  /** Array with all episodes */
  episodes?: Episodes[];
  /** Name of the season */
  name?: string;
  /** Summery of this season */
  overview?: string;
  /** Season ID */
  id?: number;
  /** Image path for the season poster */
  poster_path?: Path;
  /** Season number */
  season_number?: number;
}

export {
  GetDetails
};
