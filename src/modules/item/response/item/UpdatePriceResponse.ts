export interface ItemPriceModified {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: string,
  /**
   * The time when price of the item is updated.
   */
  modified_time: number,
  /**
   * Specify the revised price of the item.
   */
  price: number,
  /**
   * Specify the revised price of the item.
   */
  inflated_price: number

}
export default interface UpdatePriceResponse {
  item: ItemPriceModified,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}