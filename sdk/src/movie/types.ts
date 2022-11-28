export declare type EachMovie = {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
};
export declare type MoviesType = {
  docs: Array<EachMovie>;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};
