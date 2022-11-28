import { Base } from "../base";
import { ChaptersType } from "./types";

const resource = "chapter";

export class Chapters extends Base {
  getAllChapters(): Promise<ChaptersType> {
    return this.invoke(`/${resource}`);
  }
  getChaptersByBookId(id: string): Promise<ChaptersType> {
    return this.invoke(`/${resource}/${id}`);
  }
}
