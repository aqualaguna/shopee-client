export default interface DeleteCategoryResponse {
 /**
   * ShopCategory's unique identifier.
   */
  shop_category_id: Number,
  /**
   * message from server
   */
  msg: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}