export default interface DeleteDiscountResponse {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: Number,
  /**
   * The time when discount has been deleted.
   */
  modify_time: Number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}