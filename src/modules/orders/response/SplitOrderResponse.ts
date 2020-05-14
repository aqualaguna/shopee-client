
export interface simpleitem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
}
export interface SplitItem {
  /**
   * Shopee's unique identifier for a fulfillment order.
   */
  forder_id: string,
  /**
   * Item information contained in fulfillment orders.Number of items must be greater than or equal to 2. eg.[[{"item_id": 123}],[{"item_id": 456}]]
   */
  items: simpleitem[],
}

export default interface SplitOrderResponse {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  /**
   * Information of fulfillment orders.
   */
  forders: SplitItem[],
  /**
   * The identifier of the API request for error tracking
   */
  request_id: string,
}