import PaginationRequest from "../../category/request/PaginationRequest";

export default interface GetOrderListRequest extends PaginationRequest{
  /**
   * The create_time_from and create_time_to fields specify a date range for retrieving orders (based on the order create time). The create_time_from field is the starting date range. The maximum date range that may be specified with the create_time_from and create_time_to fields is 15 days. Must include only create_time or update_time in the request.
   */
  create_time_from?: Number,
  /**
   * The create_time_from and create_time_to fields specify a date range for retrieving orders (based on the order create time). The create_time_to field is the ending date range. The maximum date range that may be specified with the create_time_from and create_time_to fields is 15 days. Must include only create_time or update_time in the request.
   */
  create_time_to?: Number,
  /**
   * The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the order update time). The update_time_from field is the starting date range. The maximum date range that may be specified with the update_time_from and update_time_to fields is 15 days. Must include only create_time or update_time in the request.
   */
  update_time_from?: Number,
  /**
   * The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the order update time). The update_time_to field is the ending date range. The maximum date range that may be specified with the update_time_from and update_time_to fields is 15 days. Must include only create_time or update_time in the request.
   */
  update_time_to?: Number,
}