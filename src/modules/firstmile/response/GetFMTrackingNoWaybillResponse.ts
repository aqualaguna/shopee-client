
export interface GetFMBatchError {
  error_code: string,
  /**
   * The detail information of this error.
   */
  error_description: string,
  /**
   * The first-mile tracking number.
   */
  fm_tn: string
}

export interface SimpleFMTN {
  /**
   * The first-mile tracking number.
   */
  fm_tn: string,
  /**
   * The url of retrieving waybill.
   */
  waybill: string
}

export default interface GetFMTrackingNoWaybillResponse {
  /**
   * This object contains the detailed breakdown for the result of this API call if the param is_batch is true.
   */
  batch_result: {
    /**
     * The list contains urls of retrieving waybill in PDF format. Each url contains the airway bills which is in the same logistics channel.
     */
    waybills: string[],
    /**
     * The number of Tracking Number to get waybills in this call.
     */
    total_count: number,
    /**
     * This list contains the first-mile tracking number and error descriptions of all tracking numbers that failed to retrieve airway bill in this call.
     */
    errors: GetFMBatchError[]
  },
  /**
   * This object contains the detailed breakdown for the result of this API call if the param is_batch is false.
   */
  result: {
    /**
     * This Object contains the waybill to each tracking number.
     */
    waybills: SimpleFMTN[],
    /**
     * The number of Tracking Number to get waybills in this call.
     */
    total_count: number,
    /**
     * This list contains the first-mile tracking number and error descriptions of all tracking numbers that failed to retrieve airway bill in this call.
     */
    errors: GetFMBatchError[],
  },
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}