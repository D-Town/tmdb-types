interface Changes {
  key?: string;
  items?: Items[];
}

interface Items {
  id?: string;
  action?: string;
  time?: string;
  value?: Value | string;
  iso_639_1?: string;
  original_value?: string;
}

interface Value {
  episode_id?: number;
  episode_number?: number;
}

export {
  Changes
};
