
export interface AddDiscountError {
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: number,
  /**
   * error message.
   */
  error_msg: string,
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,

}

export default interface AddDiscountResponse {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number,
  /**
   * The number of items that add successfully.
   */
  count: number,
  warning: string,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
  errors: AddDiscountError[]
}