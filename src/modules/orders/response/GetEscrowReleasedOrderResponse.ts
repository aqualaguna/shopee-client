
export interface OrderReleaseItem {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  /**
   * Order's escrow amount.
   */
  payout_amount: number,
  /**
   * Timestamp of escrow amount transaction finished.
   */
  escrow_release_time: number,
}

export default interface GetEscrowReleasedOrderResponse {
  /**
   * Filtered orders' escrow information.
   */
  orders: OrderReleaseItem[],
  request_id: string,
}