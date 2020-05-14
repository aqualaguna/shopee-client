import { LogisticFMStatus } from "./GetFmTnDetailResponse";

export interface FMTn {
  /**
   * The specified delivery date.
   */
  declare_date: string,
  /**
   * The logistics status for bound orders.
   */
  status: LogisticFMStatus,
  /**
   * The first-mile tracking number.
   */
  fm_tn: string,
  
}

export default interface GetShopFMTrackingNoResponse {
  /**
   * This is to indicate whether the order list is more than one page. If this value is true, you may want to continue to check next page to retrieve orders.
   */
  has_more: boolean,
  fm_tn_list: FMTn[],
  /**
   * The identifier for an API request for error tracking.
   */
  request_id: string,
}