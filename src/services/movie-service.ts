import ItemService from "./item-service";

class MovieService extends ItemService {
  itemType = "movie";
  constructor() {
    super("movie");
  }

  getPopular(config = {}) {
    return super.get("popular", config);
  }

  getMovie(id: number) {
    return super.get(`${id}`);
  }

  getCast(id: number) {
    return super.get(`${id}/credits`);
  }
}

export default new MovieService();
