import { LogisticStatus } from "./GetForderInfoResponse";

export interface UnbindItem {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * The Shopee logistics status for the order. Applicable values: See Data Definition- LogisticsStatus.
   */
  logistic_status: LogisticStatus,
  /**
   * The unique identifier for a fulfillment order.
   */
  forder_id: String,
}

export default interface GetUnbindOrderResponse {
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more: Boolean,
  orders: UnbindItem[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}