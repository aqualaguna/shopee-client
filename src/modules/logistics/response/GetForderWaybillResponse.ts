
export interface Waybill {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  /**
   * The unique identifier for a fulfillment order.
   */
  forder_id: string,
  /**
   * The url of retrieving airway bill.
   */
  waybill: string
}

export interface WaybillError {
  /**
   * The ordersn of orders which occurred error.
   */
  ordersn: string,
  /**
   * The forder_id of fulfillment orders which occurred error.
   */
  forder_id: string,
  error_code: string,
  /**
   * The detail information of this error.
   */
  error_description: string,
}

export default interface GetForderWaybillResponse {
  /**
   * This object contains the detailed breakdown for the result of this API call if the param is_batch is false.
   */
  result: {
    /**
     * The number of ordersn to get airway bills in this call.
     */
    total_count: number,
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
    total_count: number,
    /**
     * This list contains the ordersn of all orders that failed to retrieve airway bill in this call. AirwayBill is no longer fetchable after the order status is updated to SHIPPED.
     */
    errors: WaybillError[],
    /**
     * The url of retrieving airway bill.
     */
    waybills: string[],
  },
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}