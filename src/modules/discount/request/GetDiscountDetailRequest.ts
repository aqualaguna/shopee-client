import PaginationRequest from "../../category/request/PaginationRequest";

export default interface GetDiscountDetailRequest extends PaginationRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number,
}