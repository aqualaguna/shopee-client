export default interface SetItemInstallmentRequest {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,
  /**
   * List of installments, applicable values: 3, 6, 12, 24. If the list is empty, it means you wanna close the installment.
   */
  tenures: number[]
}