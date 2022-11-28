import { Base } from "../base";
import { BooksType } from "./types";

const resource = "book";

export class Books extends Base {
  getAllBooks(): Promise<BooksType> {
    return this.invoke(`/${resource}`);
  }
  getBookById(id: string): Promise<BooksType> {
    return this.invoke(`/${resource}/${id}`);
  }
  getAllChaptersOfSingleBook(id: string): Promise<BooksType> {
    return this.invoke(`/${resource}/${id}/chapter`);
  }
}
