import HttpService from "./http-service";

export default class ItemService extends HttpService {
  constructor(routeName) {
    super(routeName);
  }

  get(config = {}) {
    return super.get(config);
  }

  saveItem(data, config = {}) {
    return super.post("", data, config);
  }

  updateItem(id, data, config = {}) {
    return super.patch(id, data, config);
  }

  deleteItem(id, config = {}) {
    return super.delete(id, config);
  }
}
