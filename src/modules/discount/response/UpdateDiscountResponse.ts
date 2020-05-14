export default interface UpdateDiscountResponse {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: Number,
  /**
   * The time when discount is updated.
   */
  modify_time: Number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}