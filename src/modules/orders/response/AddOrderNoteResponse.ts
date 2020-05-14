export default interface AddOrderNoteResponse {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  /**
   * The success or error message.
   */
  msg: string,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,

}