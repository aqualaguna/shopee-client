import { Return } from "./GetReturnListResponse";

export default interface GetReturnDetailResponse extends Return {
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}