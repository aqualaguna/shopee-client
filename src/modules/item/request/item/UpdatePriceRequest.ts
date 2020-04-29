export default interface UpdatePriceRequest {
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  item_id: Number,
  /**
   * Specify the revised price of the item. This value will be ignored if there is variation level price input.
   */
  price: Number,
}