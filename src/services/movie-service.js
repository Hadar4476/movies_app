import ItemService from "./item-service";

class MovieService extends ItemService {
  itemType = "movie";
  constructor() {
    super("movie");
  }

  getPopular(config) {
    return super.get("popular", config);
  }

  getMovie(id) {
    return super.get(`${id}`);
  }

  getCredits(id) {
    return super.get(`${id}/credits`);
  }
}

export default new MovieService();
