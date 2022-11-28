export declare type EachBook = {
  _id: string;
  name: string;
};
export declare type BooksType = {
  docs: Array<EachBook>;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};
