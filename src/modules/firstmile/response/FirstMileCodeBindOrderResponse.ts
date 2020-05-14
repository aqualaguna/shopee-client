
export interface FailFm {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  /**
   * Shopee's unique identifier for an order.
   */
  forder_id: string,
  /**
   * The reason why the order/fulfillment order cannot be bound.
   */
  reason: string
}

export default interface FirstMileCodeBindOrderResponse {
  /**
   * This is to indicate whether orders are bound successfully.
   */
  success: boolean,
  /**
   * The first-mile tracking number.
   */
  fm_tn: string,
  fail_list: FailFm[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string
}