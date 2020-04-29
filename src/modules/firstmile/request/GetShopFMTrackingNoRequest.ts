import PaginationRequest from "../../category/request/PaginationRequest";

export default interface GetShopFMTrackingNoRequest extends PaginationRequest{
  /**
   * The start time of declare_date.
   */
  from_date: String,
  /**
   * The end time of declare_date.
   */
  to_date: String,

}