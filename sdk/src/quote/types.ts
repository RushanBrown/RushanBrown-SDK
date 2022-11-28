export declare type EachQuote = {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
};
export declare type QuotesType = {
  docs: Array<EachQuote>;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};
