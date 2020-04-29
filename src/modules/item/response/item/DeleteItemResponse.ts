export default interface DeleteItemResponse {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * message from server
   */
  msg: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String

}