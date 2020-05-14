export default interface UpdateStockRequest {
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  item_id: number,
  /**
   * Specify the updated stock quantity. This value will be ignored if there is variation level stock input.
   */
  stock: number,

}