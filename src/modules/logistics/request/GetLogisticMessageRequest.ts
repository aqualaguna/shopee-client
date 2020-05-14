export default interface GetLogisticMessageRequest {
  /**
   * The order serial numbers.
   */
  ordersn: string,
  /**
   * The tracking number assigned by the shipping carrier for item shipment. If there are more than one tracking number in one order, this param is necessary.
   */
  tracking_number?: Number,
  /**
   * Shopee's unique identifier for a fulfillment order.
   */
  forder_id?: string,
}