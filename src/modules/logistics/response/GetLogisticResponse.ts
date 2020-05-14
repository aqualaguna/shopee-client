
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
  size_id: number,
  /**
   * The name of size.
   */
  name: string,
  /**
   * The pre-defined shipping fee for the specific size.
   */
  default_price: number,
}

export interface Logistic {
  /**
   * The identity of logistic channel
   */
  logistic_id: number,
  /**
   * The name of logistic channel
   */
  logistic_name: string,
  /**
   * This is to indicate whether this logistic channel supports COD
   */
  has_cod: boolean,
  /**
   * Whether this logistic channel is enabled on shop level.
   */
  enabled: boolean,
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
    item_max_weight: number,
    /**
     * The min weight for an item on this logistic channel. If the value is 0 or null, that means there is no limit.
     */
    item_min_weight: number
  },
  /**
   * The dimension limit for this logistic channel.
   */
  item_max_dimension: {
    /**
     * The max height limit.
     */
    height: number,
    /**
     * The max length limit.
     */
    length: number,
    /**
     * The max width limit.
     */
    width: number,
    /**
     * The unit for the limit.
     */
    unit: string,
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
  request_id: string,
}