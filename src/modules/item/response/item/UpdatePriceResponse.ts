export interface ItemPriceModified {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: String,
  /**
   * The time when price of the item is updated.
   */
  modified_time: Number,
  /**
   * Specify the revised price of the item.
   */
  price: Number,
  /**
   * Specify the revised price of the item.
   */
  inflated_price: Number

}
export default interface UpdatePriceResponse {
  item: ItemPriceModified,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}