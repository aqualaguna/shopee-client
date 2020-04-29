
export enum OrderStatus {
  UNPAID ='UNPAID',
  READY_TO_SHIP ='READY_TO_SHIP',
  RETRY_SHIP ='RETRY_SHIP',
  SHIPPED ='SHIPPED',
  TO_CONFIRM_RECEIVE ='TO_CONFIRM_RECEIVE',
  IN_CANCEL ='IN_CANCEL',
  CANCELLED ='CANCELLED',
  TO_RETURN ='TO_RETURN',
  COMPLETED ='COMPLETED',
}

export interface OrderSimple {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * Enumerated type that defines the current status of the order. Applicable values: See Data Definition- OrderStatus.
   */
  order_status: OrderStatus,
  /**
   * Timestamp that indicates the last time that there was a change in value of order, such as order status changed from 'Paid' to 'Completed'.
   */
  updated_time: Number,
}

export default interface GetOrderListResponse {
  /**
   * The set of orders that match the ordersn or filter criteria specified.
   */
  orders: OrderSimple[],
  /**
   * This is to indicate whether the order list is more than one page. If this value is true, you may want to continue to check next page to retrieve orders.
   */
  more: Boolean,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}