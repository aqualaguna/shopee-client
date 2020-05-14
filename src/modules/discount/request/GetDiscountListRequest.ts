import PaginationRequest from "../../category/request/PaginationRequest";

export enum DiscountStatusList {
  EXPIRED= 'EXPIRED',
  ONGOING= 'ONGOING',
  UPCOMING= 'UPCOMING',
  ALL= 'ALL'
}

export default interface GetDiscountListRequest extends PaginationRequest {
  /**
   * The status filter for retriveing discount list. Available value: UPCOMING/ONGOING/EXPIRED/ALL.
   */
  discount_status: DiscountStatusList,
  /**
   * The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the discount update time). The create_time_from field is the starting date range. The maximum date range that may be specified with the update_time_from and update_time_to fields is 15 days.
   */
  update_time_from?: number,
  /**
   * The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the discount update time). The create_time_from field is the starting date range. The maximum date range that may be specified with the update_time_from and update_time_to fields is 15 days.
   */
  update_time_to?: number,
}