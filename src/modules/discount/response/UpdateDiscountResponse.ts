export default interface UpdateDiscountResponse {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number,
  /**
   * The time when discount is updated.
   */
  modify_time: number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}