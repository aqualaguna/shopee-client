export default interface UpdateLogisticResponse {
  /**
   * Shopee's unique identifier for a shop.
   */
  shopid: Number,
  /**
   * The identity of logistic channel
   */
  logistic_id: Number,
  /**
   * Whether this logistic channel is enabled
   */
  enabled: boolean,
  /**
   * Whether this logistic channel is preferred
   */
  prefered: boolean,
  /**
   * WHether COD is enabled for this channel
   */
  cod: boolean,
  /**
   * The identifier of the API request for error tracking
   */
  request_id: string, 
}