

export interface Branch {
  /**
   * The identity of branch.
   */
  branch_id: Number,
  /**
   * The country of specify branch.
   */
  country: string,
  /**
   * The state of specify branch.
   */
  state: string,
  /**
   * The city of specify branch.
   */
  city: string,
  /**
   * The address description of specify branch.
   */
  address: string,
  /**
   * The zipcode of specify branch.
   */
  zipcode: string,
  /**
   * The district of specify branch.
   */
  district: string,
  /**
   * The town of specify branch.
   */
  town: string,

}

export default interface GetBranchResponse {
  /**
   * All dropoff branches you can choose.
   */
  branch: Branch[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}