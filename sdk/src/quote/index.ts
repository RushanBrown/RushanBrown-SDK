import { Base } from "../base";
import { QuotesType } from "./types";

const resource = "quote";

export class Quotes extends Base {
  getAllQuotes(): Promise<QuotesType> {
    return this.invoke(`/${resource}`);
  }
  getQuotesById(id: string): Promise<QuotesType> {
    return this.invoke(`/${resource}/${id}`);
  }
}
