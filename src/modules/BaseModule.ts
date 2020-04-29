import { AxiosInstance } from "axios";
import { ShopeeApiConfig } from "../config";
import ClientNotSetError from "../error/ClientNotSetError";

export default class BaseModule {
  constructor(protected client: AxiosInstance, protected config: ShopeeApiConfig) {
    if (!client) {
      throw new ClientNotSetError("axios instance not defined.");
    }
  }

}