import { BaseAddress } from "./GetLogisticInfoResponse";

export interface AddressResponse extends BaseAddress {
  address_flag: string[]
}

export default interface GetAddressResponse {
  /**
   * All pickup address that you can choose.
   */
  address_list: AddressResponse[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}