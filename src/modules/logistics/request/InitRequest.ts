export default interface InitRequest {
  /**
   * The order serial numbers.
   */
  ordersn: String,
  /**
   * Required parameter ONLY if GetParameterForInit returns "pickup" or if GetLogisticsInfo returns "pickup" under "info_needed" for the same order. Developer should still include "pickup" field in the call even if "pickup" has empty value.
   */
  pickup?: {
    /**
     * The identity of address. Retrieved from shopee.logistics.GetAddress.
     */
    address_id?: Number,
    /**
     * The pickup time id. Retrieved from shopee.logistics.GetTimeSlot.
     */
    pickup_time_id?: String,
  },
  /**
   * Required parameter ONLY if GetParameterForInit returns "dropoff" or if GetLogisticsInfo returns "dropoff" under "info_needed" for the same order.
   * Developer should still include "dropoff" field in the call even if "dropoff" has empty value.
   * For logistic_id 80003 and 80004, both Regular and JOB shipping methods are supported.
   * If you choose Regular shipping method, please use "tracking_no" to call Init API.
   * If you choose JOB shipping method, please use "sender_real_name" to call Init API.
   * Note that only one of "tracking_no" and "sender_real_name" can be selected.
   */
  dropoff?: {
    /**
     * The identity of branch. Retrieved from shopee.logistics.GetBranch branch.
     */
    branch_id?: Number,
    /**
     * The real name of sender.
     */
    sender_real_name?: String,
    /**
     * Need input this field when "tracking_no" is returned from "info_need".
     * Please note that this tracking number is assigned by third-party shipping carrier for item shipment.
     */
    tracking_no?: String,
  },
  /**
   * Optional parameter when GetParameterForInit returns "non-integrated" or GetLogisticsInfo returns "non-integrated" under "info_needed".
   */
  non_integrated?: {
    /**
     * Optional parameter for non-integrated channel order. The tracking number assigned by the shipping carrier for item shipment.
     */
    tracking_no?: String,
  }
  /**
   * Shopee's unique identifier for a fulfillment order.
   */
  forder_id?: String,
}