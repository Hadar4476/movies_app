import HttpService from "./http-service";

export default class ItemService extends HttpService {
  constructor(routeName: string) {
    super(routeName);
  }

  get(url = "", config = {}) {
    return super.get(url, config);
  }
}
