export default interface DeleteItemResponse {
  /**
   * List of invalid item ids.
   */
  invalid_item_id: Number[],
  /**
   * ShopCategory's unique identifier.
   */
  shop_category_id: Number,
  /**
   * Number of items in the shop category.
   */
  count: Number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}