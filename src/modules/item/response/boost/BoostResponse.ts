
export interface BoostFail {
  /**
   * to indicate error type.
   */
  error_code: String,
  /**
   * Failed item id.
   */
  id: Number,
  /**
   * error description
   */
  description: String,
}
export interface BoostBatchResult {
  /**
   * A list of item ids which have been boosted successfully.
   */
  successes: Number[],
  /**
   * A list of failed-to-boost items, including error details.
   */
  failures: BoostFail[],
}

export default interface BoostResponse {
  /**
   * batch result details
   */
  batch_result: BoostBatchResult,
  /**
   * The identifier of the API request for error tracking
   */
  request_id: String,
}