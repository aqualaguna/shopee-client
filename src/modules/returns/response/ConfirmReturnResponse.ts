export default interface ConfirmReturnResponse {
  /**
   * The serial number of return.
   */
  returnsn: string,
  msg: string,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}