import type { VideoSize } from './VideoSize';
import type { VideoType } from './VideoType';

interface Results {
  id: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key?: string;
  name?: string;
  site?: string;
  size?: VideoSize;
  type?: VideoType;
}

export type { Results };
