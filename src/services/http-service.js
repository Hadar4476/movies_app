import axios from "axios";
import config from "../config";

export default class HttpService {
  baseUrl = null;

  constructor(routeName) {
    this.routeName = routeName;
    this.baseUrl = `${config.serverUrl}/${routeName}/`;
  }

  get(requestConfig = {}) {
    return axios.get(this.baseUrl, {
      params: { ...config.params, ...requestConfig },
    });
  }

  post(url = "", data, requestConfig = {}) {
    return axios.post(`${this.baseUrl}${url}`, data, {
      params: { ...config.params, ...requestConfig },
    });
  }

  put(url = "", data, requestConfig = {}) {
    return axios.put(`${this.baseUrl}${url}`, data, {
      params: { ...config.params, ...requestConfig },
    });
  }

  patch(url = "", data, requestConfig = {}) {
    return axios.patch(`${this.baseUrl}${url}`, data, {
      params: { ...config.params, ...requestConfig },
    });
  }

  delete(url = "", requestConfig = {}) {
    return axios.delete(`${this.baseUrl}${url}`, {
      params: { ...config.params, ...requestConfig },
    });
  }
}
