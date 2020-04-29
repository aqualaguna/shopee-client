

export interface Branch {
  /**
   * The identity of branch.
   */
  branch_id: Number,
  /**
   * The country of specify branch.
   */
  country: String,
  /**
   * The state of specify branch.
   */
  state: String,
  /**
   * The city of specify branch.
   */
  city: String,
  /**
   * The address description of specify branch.
   */
  address: String,
  /**
   * The zipcode of specify branch.
   */
  zipcode: String,
  /**
   * The district of specify branch.
   */
  district: String,
  /**
   * The town of specify branch.
   */
  town: String,

}

export default interface GetBranchResponse {
  /**
   * All dropoff branches you can choose.
   */
  branch: Branch[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}