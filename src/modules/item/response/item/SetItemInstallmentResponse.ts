export default interface SetItemInstallmentResponse {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,
  /**
   * List of installments
   */
  tenures: number[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}