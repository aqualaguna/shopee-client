import UpdateDiscountRequest from "../request/UpdateDiscountRequest";
import { DiscountStatus } from "./GetDiscountDetailResponse";

export interface DiscountListItem extends UpdateDiscountRequest {
  /**
   * The status of discount, applicable values: expired, ongoing, upcoming.
   */
  status: DiscountStatus,
}

export default interface GetDiscountListResponse {
  discount: DiscountListItem[],
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more: boolean,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}