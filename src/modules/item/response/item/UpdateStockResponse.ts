
export interface ItemStockModified {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * The time when stock of the item is updated.
   */
  modified_time: Number,
  /**
   * Specify the updated stock quantity.
   */
  stock: Number,

}

export default interface UpdateStockResponse {
  item: ItemStockModified[]
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,

}