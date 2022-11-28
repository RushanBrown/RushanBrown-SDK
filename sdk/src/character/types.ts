export declare type EachCharacter = {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
};
export declare type CharactersType = {
  docs: Array<EachCharacter>;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};
