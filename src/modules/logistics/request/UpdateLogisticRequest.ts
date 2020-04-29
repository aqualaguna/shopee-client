export default interface UpdateLogisticRequest {
  /**
   * The identity of logistic channel
   */
  logistic_id: Number,
  /**
   * Whether to enable this logistic channel
   */
  enabled?: Boolean,
  /**
   * Whether to make this logistic channel preferred. Indonestia logistics channel are not applicable.
   */
  prefered?: Boolean,
  /**
   * Whether to enable COD for this logistic channel. Only COD supported channels are applicable.
   */
  cod?: Boolean,
}