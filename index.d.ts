// Type definitions for tmdb-types
// Project: 
// Definitions by: 
// Definitions: 

import type { Crew } from './types/shared/Crew';
import type { Episodes } from './types/shared/Episodes';
import type { Path } from './types/shared/Path';
import type { Posters } from './types/shared/Posters';
import type { Results } from './types/shared/Results';
import type { Results as TvSeasonsGetAccountStatesResults } from './types/tvSeasons/GetAccountStates';
import type { Changes as TvSeasonsGetChangesChanges } from './types/tvSeasons/GetChanges';
import type { Cast as TvSeasonsGetCreditsCast } from './types/tvSeasons/GetCredits';
import type { Translations as TvSeasonsGetTranslationsTranslations } from './types/tvSeasons/GetTranslations';
import type { Cast as TvSeasonsGetAggregateCreditsCast, Crew as TvSeasonsGetAggregateCreditsCrew } from './types/tvSeasons/GetAggregateCredits';

declare namespace TvSeasons {
  interface GetAccountStates {
    id?: number;
    results?: TvSeasonsGetAccountStatesResults[];
  }

  interface GetAggregateCredits {
    cast?: TvSeasonsGetAggregateCreditsCast[];
    crew?: TvSeasonsGetAggregateCreditsCrew[];
    id?: number;
  }

  interface GetChanges {
    changes: TvSeasonsGetChangesChanges[];
  }

  interface GetCredits {
    cast?: TvSeasonsGetCreditsCast[];
    crew?: Crew[];
    id?: number;
  }

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

  interface GetExternalIDs {
    freebase_mid?: string | null;
    freebase_id?: null | string;
    tvdb_id?: number | null;
    tvrage_id?: null | number;
    id?: number;
  }

  interface GetImages {
    id?: number;
    posters?: Posters[];
  }

  interface GetVideos {
    id?: number;
    results?: Results[];
  }

  interface GetTranslations {
    id?: number;
    translations?: TvSeasonsGetTranslationsTranslations[];
  }
}
