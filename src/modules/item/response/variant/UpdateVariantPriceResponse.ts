
export interface UpdatePriceItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: number,
  /**
   * The time when price of the variation of the item is updated.
   */
  modified_time: number,
  /**
   * Specify the revised price of one variation of the item.
   */
  price: number,
  /**
   * Use this field to indicate the after-tax price of variation.
   */
  inflated_price: number,
}

export default interface UpdateVariantPriceResponse {
  item: UpdatePriceItem,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}