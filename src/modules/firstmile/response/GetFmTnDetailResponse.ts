
export enum LogisticFMStatus {
  INIT = 'INIT',
  ORDER_CREATED = 'ORDER_CREATED',
  PICKED_UP = 'PICKED_UP',
  DELIVERED = 'DELIVERED',
  ORDER_RECEIVED = 'ORDER_RECEIVED',
  CANCELING = 'CANCELING',
  CANCELED = 'CANCELED'
}

export interface OrderFmItem {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * The unique identifier for a fulfillment order.
   */
  forder_id: String,
  /**
   * The tracking number of SLS for orders/forders.
   */
  sls_tn: String
}

export default interface GetFmTnDetailResponse {
  /**
   * The identity of logistic channel
   */
  logistic_id: Number,
  /**
   * The first-mile tracking number.
   */
  fm_tn: String,
  /**
   * The shipment method for bound orders, should be pickup or dropoff.
   */
  shipping_method: String,
  /**
   * The logistics status for first-mile tracking number. Status could be: INIT,ORDER_CREATED,PICKED_UP,DELIVERED,ORDER_RECEIVED,CANCELING,CANCELED.
   */
  status: LogisticFMStatus,
  orders: OrderFmItem[],
  /**
   * The specified delivery date.
   */
  declare_date: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}