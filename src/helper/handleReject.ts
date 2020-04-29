import BaseError from "../error/response/BaseError";
import { AxiosResponse } from "axios";

export default function handleReject(resp : AxiosResponse) {
  let data = resp.data;
  if(data.error) {
    throw new BaseError(data.request_id, data.error, data.msg)
  }
  return data;
}