import { AddressResponse } from "./GetAddressResponse";
import { Pickup } from "./GetTimeSlotResponse";
import { Branch } from "./GetBranchResponse";

export interface BaseAddress {
  /**
   * This object contains detailed breakdown for the recipient address.
   */
  name: String,
  /**
   * This object contains detailed breakdown for the recipient address.
   */
  phone: String,
  /**
   * The town of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  town: String,
  /**
   * The district of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  district: String,
  /**
   * The city of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  city: String,
  /**
   * The state/province of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  state: String,
  /**
   * The two-digit code representing the country of the Recipient.
   */
  country: String,
  /**
   * Recipient's postal code.
   */
  zipcode: String,
}

export interface PAddress extends AddressResponse {
  /**
   * List of pickup_time information corresponding to the address_id.
   */
  time_slot_list: Pickup[],

}

export default interface GetLogisticInfoResponse {
  /**
   * Logistics information for pickup mode order.
   */
  pickup: {
    /**
     * List of available pickup address info.
     */
    address_list: PAddress[],
  },
  /**
   * Logistics information for dropoff mode order.
   */
  dropoff: {
    /**
     * List of available dropoff branches info.
     */
    branch_list: Branch[]
  },
  /**
   * The parameters required based on each specific order to Init.
   *  Must use the fields included under info_needed to call Init.
   * For logistic_id 80003 and 80004, both Regular and JOB shipping methods are supported.
   * If you choose Regular shipping method, please use "tracking_no" to call Init API.
   * If you choose JOB shipping method, please use "sender_real_name" to call Init API.
   * Note that only one of "tracking_no" and "sender_real_name" can be selected.
   */
  info_needed: {
    /**
     * Could contain 'address_id' and 'pickup_time_id'. Choose one address_id and its corresponding pickup_time_id to Init. If it has empty value, developer should still include "pickup" field in Init API.
     */
    pickup: String[],
    /**
     * Could contain 'branch_id', 'sender_real_name' or 'tracking_no'. If it contains 'branch_id', choose one to Init. If it contains 'sender_real_name' or 'tracking_no', should manually input these values in Init API. If it has empty value, developer should still include "dropoff" field in Init API.
     */
    dropoff: String[],
    /**
     * Could contain 'tracking_no'. If it contains 'tracking_no', should manually input these values in Init API. If it has empty value, developer should still include "non-integrated" field in Init API.
     */
    non_integrated: String[]
  },
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}