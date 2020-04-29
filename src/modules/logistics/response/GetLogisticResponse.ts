
export enum FeeType {
  SIZE_SELECTION= 'SIZE_SELECTION',
  SIZE_INPUT= 'SIZE_INPUT',
  FIXED_DEFAULT_PRICE= 'FIXED_DEFAULT_PRICE',
  CUSTOM_PRICE= 'CUSTOM_PRICE',
}

export interface Size {
  /**
   * The identity of size.
   */
  size_id: Number,
  /**
   * The name of size.
   */
  name: String,
  /**
   * The pre-defined shipping fee for the specific size.
   */
  default_price: Number,
}

export interface Logistic {
  /**
   * The identity of logistic channel
   */
  logistic_id: Number,
  /**
   * The name of logistic channel
   */
  logistic_name: String,
  /**
   * This is to indicate whether this logistic channel supports COD
   */
  has_cod: Boolean,
  /**
   * Whether this logistic channel is enabled on shop level.
   */
  enabled: Boolean,
  /**
   * See Define FeeType, related to FeeType Value
   */
  fee_type: FeeType,
  /**
   * Only for fee_type is SIZE_SELECTION
   */
  sizes: Size[],
  /**
   * The weight limit for this logistic channel.
   */
  weight_limit: {
    /**
     * The max weight for an item on this logistic channel.If the value is 0 or null, that means there is no limit.
     */
    item_max_weight: Number,
    /**
     * The min weight for an item on this logistic channel. If the value is 0 or null, that means there is no limit.
     */
    item_min_weight: Number
  },
  /**
   * The dimension limit for this logistic channel.
   */
  item_max_dimension: {
    /**
     * The max height limit.
     */
    height: Number,
    /**
     * The max length limit.
     */
    length: Number,
    /**
     * The max width limit.
     */
    width: Number,
    /**
     * The unit for the limit.
     */
    unit: String,
  }
}

export default interface GetLogisticResponse {
  /**
   * The logistics channel list
   */
  logistics: Logistic[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}