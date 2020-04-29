
export interface GetShopLogistic {
  /**
   * The identity of logistic channel.
   */
  logistic_id: Number,
  /**
   * The name of logistic.
   */
  logistic_name: String,
  /**
   * The shipment method for bound orders, should be pickup or dropoff.
   */
  shipment_method: String,
}

export default interface GetShopFirstMileChannelResponse {
  logistics: GetShopLogistic[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}