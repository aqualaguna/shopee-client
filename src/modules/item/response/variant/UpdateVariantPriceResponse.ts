
export interface UpdatePriceItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: Number,
  /**
   * The time when price of the variation of the item is updated.
   */
  modified_time: Number,
  /**
   * Specify the revised price of one variation of the item.
   */
  price: Number,
  /**
   * Use this field to indicate the after-tax price of variation.
   */
  inflated_price: Number,
}

export default interface UpdateVariantPriceResponse {
  item: UpdatePriceItem,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}