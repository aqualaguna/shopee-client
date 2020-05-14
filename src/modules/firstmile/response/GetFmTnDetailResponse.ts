
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
  ordersn: string,
  /**
   * The unique identifier for a fulfillment order.
   */
  forder_id: string,
  /**
   * The tracking number of SLS for orders/forders.
   */
  sls_tn: string
}

export default interface GetFmTnDetailResponse {
  /**
   * The identity of logistic channel
   */
  logistic_id: Number,
  /**
   * The first-mile tracking number.
   */
  fm_tn: string,
  /**
   * The shipment method for bound orders, should be pickup or dropoff.
   */
  shipping_method: string,
  /**
   * The logistics status for first-mile tracking number. Status could be: INIT,ORDER_CREATED,PICKED_UP,DELIVERED,ORDER_RECEIVED,CANCELING,CANCELED.
   */
  status: LogisticFMStatus,
  orders: OrderFmItem[],
  /**
   * The specified delivery date.
   */
  declare_date: string,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}