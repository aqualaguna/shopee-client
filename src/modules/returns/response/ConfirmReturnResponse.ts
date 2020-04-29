export default interface ConfirmReturnResponse {
  /**
   * The serial number of return.
   */
  returnsn: String,
  msg: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}