export default interface SetItemInstallmentResponse {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * List of installments
   */
  tenures: Number[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}