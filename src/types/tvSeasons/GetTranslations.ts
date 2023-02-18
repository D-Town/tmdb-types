interface Data {
  name?: string;
  overview?: string;
}

interface Translations {
  iso_3166_1?: string;
  iso_639_1?: string;
  name?: string;
  english_name?: string;
  data?: Data;
}

interface GetTranslations {
  id?: number;
  translations?: Translations[];
}

export {
  GetTranslations
};
