export default interface CancelOrderResponse {
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
  /**
   * The time when the order is updated.
   */
  modified_time: Number,
}