import { OrderStatus } from "./GetOrderListResponse";
import { PromotionType } from "../../item/response/get/GetPromotionInfoResponse";

export interface Address {
  /**
   * This object contains detailed breakdown for the recipient address.
   */
  name: string,
  /**
   * This object contains detailed breakdown for the recipient address.
   */
  phone: string,
  /**
   * The town of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  town: string,
  /**
   * The district of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  district: string,
  /**
   * The city of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  city: string,
  /**
   * The state/province of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  state: string,
  /**
   * The two-digit code representing the country of the Recipient.
   */
  country: string,
  /**
   * Recipient's postal code.
   */
  zipcode: string,
  /**
   * The full address of the recipient, including country, state, even street, and etc.
   */
  full_address: string,

}

export interface OrderItem {
  /**
   * ID of item
   */
  item_id: number,
  /**
   * Name of item
   */
  item_name: string,
  /**
   * A item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku: string,
  /**
   * ID of the variation that belongs to the same item.
   */
  variation_id: number,
  /**
   * Name of the variation that belongs to the same item.
   * A seller can offer variations of the same item. 
   * For example, the seller could create a fixed-priced listing for a t-shirt design and offer the shirt in different colors and sizes.
   * In this case, each color and size combination is a separate variation. Each variation can have a different quantity and price.
   */
  variation_name: string,
  /**
   * A variation SKU (stock keeping unit) is an identifier defined by a seller. It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type, size, and color, which are variations of one item in Shopee Listings.
   */
  variation_sku: string,
  /**
   * The number of identical items purchased at the same time by the same buyer from one listing/item.
   */
  variation_quantity_purchased: number,
  /**
   * The original price of the item in the listing currency.
   */
  variation_original_price: number,
  /**
   * The after-discount price of the item in the listing currency.
   * If there is no discount, this value will be same as that of variation_original_price.
   * In case of bundle deal item, this value will return 0 as by design bundle deal discount will not be breakdown to item/variation level.
   * Due to technical restriction, the value will return the price before bundle deal if we don't configure it to 0.
   * Please call GetEscrowDetails if you want to calculate item-level discounted price for bundle deal item.
   */
  variation_discounted_price: number,
  /**
   * This value indicates whether buyer buy the order item in wholesale price.
   */
  is_wholesale: boolean,
  /**
   * The weight of the item
   */
  weight: number,
  /**
   * To indicate if this item belongs to an addon deal.
   */
  is_add_on_deal: boolean,
  /**
   * To indicate if this item is main item or sub item. True means main item, false means sub item.
   */
  is_main_item: boolean,
  /**
   * A unique ID to distinguish groups of items in Cart, and Order. (e.g. AddOnDeal)
   */
  add_on_deal_id: number,
  /**
   * Available type：product_promotion, flash_sale, group_by, bundle_deal.
   */
  promotion_type: PromotionType,
  /**
   * The ID of the promotion.
   */
  promotion_id: number,
}

export enum CancelReason {
  OUT_OF_STOCK='OUT_OF_STOCK',
  CUSTOMER_REQUEST='CUSTOMER_REQUEST',
  UNDELIVERABLE_AREA='UNDELIVERABLE_AREA',
  COD_NOT_SUPPORTED='COD_NOT_SUPPORTED',
}

export interface Order {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  /**
   * The two-digit code representing the country where the order was made.
   */
  country: string,
  /**
   * The three-digit code representing the currency unit for which the order was paid.
   */
  currency: string,
  /**
   * This value indicates whether the order was a COD (cash on delivery) order.
   */
  cod: boolean,
  /**
   * This value indicates whether the order was a COD (cash on delivery) order.
   */
  tracking_no: string,
  /**
   * Shipping preparation time set by the seller when listing item on Shopee.
   */
  days_to_ship: number,
  /**
   * This object contains detailed breakdown for the recipient address.
   */
  recipient_address: Address,
  /**
   * The estimated shipping fee is an estimation calculated by Shopee based on specific logistics courier's standard.
   */
  estimated_shipping_fee: number,
  /**
   * The actual shipping cost of the order if available from external logistics partners.
   */
  actual_shipping_cost: number,
  /**
   * The total amount paid by the buyer for the order. This amount includes the total sale price of items, shipping cost beared by buyer; and offset by Shopee promotions if applicable. This value will only return after the buyer has completed payment for the order.
   */
  total_amount: number,
  /**
   * The total amount that the seller is expected to receive for the order. This amount includes buyer paid order amount (total_amount), all forms of Shopee platform subsidy; and offset by any cost and commission incurred.
   */
  escrow_amount: number,
  /**
   * Enumerated type that defines the current status of the order.
   */
  order_status: OrderStatus,
  /**
   * The logistics service provider that the buyer selected for the order to deliver items.
   */
  shipping_carrier: string,
  /**
   * The payment method that the buyer selected to pay for the order.
   * Applicable values: See Data Definition- Payment Methods
   */
  payment_method: string,
  /**
   * Only work for cross-border order.This value indicates whether the order contains goods that are required to declare at customs. "T" means true and it will mark as "T" on the shipping label; "F" means false and it will mark as "P" on the shipping label. This value is accurate ONLY AFTER the order trackingNo is generated, please capture this value AFTER your retrieve the trackingNo.
   */
  goods_to_declare: boolean,
  /**
   * Message to seller.
   */
  message_to_seller: string,
  /**
   * The note seller made for own reference.
   */
  note: string,
  /**
   * Update time for the note.
   */
  note_update_time: number,
  /**
   * Timestamp that indicates the date and time that the order was created.
   */
  create_time: number,
  /**
   * Timestamp that indicates the last time that there was a change in value of order, such as order status changed from 'Paid' to 'Completed'.
   */
  update_time: number,
  /**
   * This object contains the detailed breakdown for the result of this API call.
   */
  items: OrderItem[],
  /**
   * The time when the order status is updated from UNPAID to PAID. This value is NULL when order is not paid yet.
   */
  pay_time: number,
  /**
   * For Indonesia orders only. The name of the dropshipper.
   */
  dropshipper: string,
  /**
   * Last 4 digits of the credit card
   */
  credit_card_number: string,
  /**
   * The name of buyer
   */
  buyer_username: string,
  /**
   * The phone number of dropshipper
   */
  dropshipper_phone: string,
  /**
   * The deadline to ship out the parcel.
   */
  ship_by_date: number,
  /**
   * To indicate whether this order is split to fullfil order(forder) level. Call GetForderInfo if it's "true".
   */
  is_split_up: boolean,
  /**
   * Cancel reason from buyer.
   */
  buyer_cancel_reason: string,
  /**
   * Could be one of buyer, seller, system or Ops.
   */
  cancel_by: string,
  /**
   * The first-mile tracking number.
   */
  fm_tn: string,
  /**
   * Use this field to get reason for buyer, seller, and system cancellation.
   */
  cancel_reason: CancelReason,
  /**
   * Cross-border tax imposed by the Indonesian government on sellers.
   */
  escrow_tax: number,
}


export default interface GetOrderDetailResponse {
  /**
   * The set of orders that match the ordersn or filter criteria specified.
   */
  orders: Order[],
  /**
   * Orders that encountered error
   */
  errors: string[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}