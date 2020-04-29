
export interface Waybill {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * The unique identifier for a fulfillment order.
   */
  forder_id: String,
  /**
   * The url of retrieving airway bill.
   */
  waybill: String
}

export interface WaybillError {
  /**
   * The ordersn of orders which occurred error.
   */
  ordersn: String,
  /**
   * The forder_id of fulfillment orders which occurred error.
   */
  forder_id: String,
  error_code: String,
  /**
   * The detail information of this error.
   */
  error_description: String,
}

export default interface GetForderWaybillResponse {
  /**
   * This object contains the detailed breakdown for the result of this API call if the param is_batch is false.
   */
  result: {
    /**
     * The number of ordersn to get airway bills in this call.
     */
    total_count: Number,
    /**
     * This Object contains the airway bill to each order.
     */
    waybills: Waybill[],
  },
  /**
   * This list contains the ordersn and error descriptions of all orders that failed to retrieve airway bill in this call.
   */
  errors: WaybillError[],
  /**
   * This object contains the detailed breakdown for the result of this API call if the param is_batch is true.
   */
  batch_result: {
    /**
     * The number of orderSN to get airway bills in this call.
     */
    total_count: Number,
    /**
     * This list contains the ordersn of all orders that failed to retrieve airway bill in this call. AirwayBill is no longer fetchable after the order status is updated to SHIPPED.
     */
    errors: WaybillError[],
    /**
     * The url of retrieving airway bill.
     */
    waybills: String[],
  },
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}