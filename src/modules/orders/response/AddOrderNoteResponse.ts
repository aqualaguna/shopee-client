export default interface AddOrderNoteResponse {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * The success or error message.
   */
  msg: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,

}