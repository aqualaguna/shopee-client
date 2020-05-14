export default interface UndoSplitResponse {
  /**
   * Whether or not the split order has been cancelled.
   */
  result: string,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}