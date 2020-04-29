
export interface SimpleOrder {
  /**
   * The order serial numbers. Make sure the order has trackingNo generated before calling this API.
   */
  ordersn: String,
}

export default interface GetForderWaybillRequest {
  /**
   * The set of order serial numbers. Up to 50 ordersn in one call.
   */
  orders_list: SimpleOrder[],
  /**
   * The unique identifier for a fulfillment order.
   */
  forder_id?: String,
  /**
   * This field is used for logistic_id 80003 and 80004,true standards for JOB shipping method, false standards for Regular shipping method.
   */
  is_job?: Boolean,
  /**
   * Option to get batch airway bills in single file. Default value is false.
   */
  is_batch?: Boolean,
  
}