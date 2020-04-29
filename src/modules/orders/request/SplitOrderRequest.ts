import { simpleitem } from "../response/SplitOrderResponse";

export default interface SplitOrderRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * Item information contained in fulfilment orders.
   */
  parcels: simpleitem
}