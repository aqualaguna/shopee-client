export default interface GenerateFMTrackingNoResponse {
  /**
   * The first-mile tracking number.
   */
  fm_tn_list: String[],
  /**
   * The identifier for an API request for error tracking.
   */
  request_id: String,
}