

export interface Failure {
  /**
   * The identifier for an API request for error tracking
   */
  item_id: Number,
  /**
   * The identifier for an API request for error tracking
   */
  error_description: String,
}

export interface BatchResult {
  /**
   * List of item_id which have been updated successfully.
   */
  modifications: String[],
  /**
   * The identifier for an API request for error tracking
   */
  failures: Failure[],
}

export default interface UpdatePriceBatchResponse {
  /**
   * Result of batch updating.
   */
  batch_result: BatchResult[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}