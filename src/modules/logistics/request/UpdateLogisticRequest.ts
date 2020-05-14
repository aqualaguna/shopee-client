export default interface UpdateLogisticRequest {
  /**
   * The identity of logistic channel
   */
  logistic_id: number,
  /**
   * Whether to enable this logistic channel
   */
  enabled?: boolean,
  /**
   * Whether to make this logistic channel preferred. Indonestia logistics channel are not applicable.
   */
  prefered?: boolean,
  /**
   * Whether to enable COD for this logistic channel. Only COD supported channels are applicable.
   */
  cod?: boolean,
}