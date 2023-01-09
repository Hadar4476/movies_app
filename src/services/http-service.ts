import axios from "axios";
import config from "../config";

export default class HttpService {
  routeName = "";
  baseUrl = "";

  constructor(routeName: string) {
    this.routeName = routeName;
    this.baseUrl = `${config.serverUrl}/${routeName}/`;
  }

  get(url: string, requestConfig = {}) {
    return axios.get(`${this.baseUrl}${url}`, {
      params: { ...config.params, ...requestConfig },
    });
  }
}
