
export interface SimpleAirwayBill {
  /**
   * Shopee's unique identifier for an order.
   */
  orsersn: string,
  /**
   * The url of retrieving airway bill.
   */
  airway_bill: string
}

export interface AirwayError {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  
  error_code:string,
  /**
   * The detail information of this error.
   */
  error_description: string,
}

export default interface GetAirwayBillResponse {
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
    airway_bills: SimpleAirwayBill[],
    /**
     * This list contains the ordersn and error descriptions of all orders that failed to retrieve airway bill in this call.
     */
    errors: AirwayError[],
  },
  /**
   * This object contains the detailed breakdown for the result of this API call if the param is_batch is true.
   */
  batch_result: {
    /**
     * The number of orderSN to get airway bills in this call.
     */
    total_count: number,
    /**
     * The list contains urls of retrieving airway bill in PDF format. Each url contains the airway bills which is in the same logistics channel.
     */
    airway_bills: string[],
    /**
     * This list contains the ordersn of all orders that failed to retrieve airway bill in this call. AirwayBill is no longer fetchable after the order status is updated to SHIPPED.
     */
    errors: any,
  },
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}