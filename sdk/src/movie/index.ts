import { Base } from "../base";
import { MoviesType } from "./types";

const resource = "movie";

export class Movies extends Base {
  getAllMovies(): Promise<MoviesType> {
    return this.invoke(`/${resource}`);
  }
  getMovieById(id: string): Promise<MoviesType> {
    return this.invoke(`/${resource}/${id}`);
  }
  getAllQuotesOfSingleMovie(id: string): Promise<MoviesType> {
    return this.invoke(`/${resource}/${id}/quote`);
  }
}
