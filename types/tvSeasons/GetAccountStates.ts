interface Value {
  value?: number;
}

interface Results {
  id?: number;
  episode_number?: number;
  rated?: Value | boolean;
}

interface GetAccountStates {
  id?: number;
  results?: Results[];

}

export {
  GetAccountStates
};
