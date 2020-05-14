import PaginationRequest from "../../category/request/PaginationRequest";

export default interface GetEscrowReleasedOrderRequest extends PaginationRequest {
  /**
   * Release time range to filter order escrow information.
   */
  release_time_from: number,
  /**
   * Release time range to filter order escrow information. The value should be higher than release_time_from.
   */
  release_time_to: number,
}