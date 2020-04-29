
export interface AddDiscountError {
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: Number,
  /**
   * error message.
   */
  error_msg: String,
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,

}

export default interface AddDiscountResponse {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: Number,
  /**
   * The number of items that add successfully.
   */
  count: Number,
  warning: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
  errors: AddDiscountError[]
}