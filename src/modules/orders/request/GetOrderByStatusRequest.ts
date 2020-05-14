import { OrderStatus } from "../response/GetOrderListResponse";
import PaginationRequest from "../../category/request/PaginationRequest";

export default interface GetOrderByStatusRequest extends PaginationRequest {
  /**
   * The order_status filter for retriveing orders. Available value: ALL/UNPAID/READY_TO_SHIP/COMPLETED/IN_CANCEL/CANCELLED/TO_RETURN
   */
  order_status: OrderStatus,
  
  /**
   * The create_time_from and create_time_to fields specify a date range for retrieving orders (based on the order create time). The create_time_from field is the starting date range. The maximum date range that may be specified with the create_time_from and create_time_to fields is 15 days. Must include only create_time or update_time in the request.
   */
  create_time_from?: number,
  /**
   * The create_time_from and create_time_to fields specify a date range for retrieving orders (based on the order create time). The create_time_to field is the ending date range. The maximum date range that may be specified with the create_time_from and create_time_to fields is 15 days. Must include only create_time or update_time in the request.
   */
  create_time_to?: number,
}