
export interface FailFm {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * Shopee's unique identifier for an order.
   */
  forder_id: String,
  /**
   * The reason why the order/fulfillment order cannot be bound.
   */
  reason: String
}

export default interface FirstMileCodeBindOrderResponse {
  /**
   * This is to indicate whether orders are bound successfully.
   */
  success: Boolean,
  /**
   * The first-mile tracking number.
   */
  fm_tn: String,
  fail_list: FailFm[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String
}