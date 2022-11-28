import { Base } from "../base";
import { CharactersType } from "./types";

const resource = "character";

export class Characters extends Base {
  getAllCharacters(): Promise<CharactersType> {
    return this.invoke(`/${resource}`);
  }
  getCharacterById(id: string): Promise<CharactersType> {
    return this.invoke(`/${resource}/${id}`);
  }
  getAllQuotesOfSingleCharacter(id: string): Promise<CharactersType> {
    return this.invoke(`/${resource}/${id}/quote`);
  }
}
