export declare type EachChapter = {
  _id: string;
  chapterName: string;
  book: string;
};
export declare type ChaptersType = {
  docs: Array<EachChapter>;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};
