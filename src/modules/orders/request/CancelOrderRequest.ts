import { CancelReason } from "../response/GetOrderDetailResponse";

export default interface CancelOrderRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * The reason seller want to cancel this order. Applicable values: OUT_OF_STOCK, CUSTOMER_REQUEST, UNDELIVERABLE_AREA, COD_NOT_SUPPORTED.
   */
  cancel_reason: CancelReason,
  /**
   * ID of item. Required when cancel_reason is OUT_OF_STOCK.
   */
  item_id?: Number,
  /**
   * ID of the variation that belongs to the same item.Required when cancel_reason is OUT_OF_STOCK.
   */
  variation_id? :Number,

  
}