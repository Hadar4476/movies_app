import ItemService from "./item-service";

class SearchService extends ItemService {
  itemType = "search";
  constructor() {
    super("search");
  }

  searchMovie(config = {}) {
    return super.get("movie", config);
  }
}

export default new SearchService();
