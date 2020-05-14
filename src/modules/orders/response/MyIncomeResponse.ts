
export interface OrderIncome {
  /**
   * The total amount that the seller is expected to receive for the order and will change before order completed. escrow_amount=buyer_total_amount+shopee_discount+voucher_from_shopee+coins+payment_promotion-buyer_transaction_fee-cross_border_tax-commission_fee-service_fee-seller_transaction_fee-seller_coin_cash_back-escrow_tax-drc_adjustable_refund+final_shipping_fee（could be positive/negative)
   */
  escrow_amount: Number,
  /**
   * The total amount that paid by buyer.buyer_total_amount= original price -seller_discount -shopee_discount -voucher_from_seller -voucher_from_shopee -coin -payment_promotion +buyer_paid_shipping_fee +buyer_transaction_fee +cross_border_tax
   */
  buyer_total_amount: Number,
  /**
   * The original price of the item before ANY promotion/discount in the listing currency. It returns the subtotal of that specific item if quantity exceeds 1.
   */
  original_price: Number,
  /**
   * Final sum of each item seller discount of a specific order.
   */
  seller_discount: Number,
  /**
   * Final sum of each item Shopee discount of a specific order. This amount will rebate to seller.
   */
  shopee_discount: Number,
  /**
   * Final value of voucher provided by Seller for the order.
   */
  voucher_from_seller: Number,
  /**
   * Final value of voucher provided by Shopee for the order.
   */
  voucher_from_shopee: Number,
  /**
   * Final value of coins used by seller for the order.
   */
  coins: Number,
  /**
   * The shipping fee paid by buyer.
   */
  buyer_paid_shipping_fee: Number,
  /**
   * Tansaction fee paid by buyer for the order.
   */
  buyer_transaction_fee: Number,
  /**
   * Amount incurred by Buyer for purchasing items outside of home country. Amount may change after Return Refund.
   */
  cross_border_tax: Number,
  /**
   * The amount offset via payment promotion.
   */
  payment_promotion: Number,
  /**
   * The commission fee charged by Shopee platform if applicable.
   */
  commission_fee: Number,
  /**
   * Amount charged by Shopee to seller for additional services.
   */
  service_fee: Number,
  /**
   * Tansaction fee paid by seller for the order.
   */
  seller_transaction_fee: Number,
  /**
   * Compensation to seller in case of lost parcel
   */
  seller_lost_compensation: Number,
  /**
   * Value of coins provided by Seller for purchasing with his or her store for the order.
   */
  seller_coin_cash_back: Number,
  /**
   * Cross-border tax imposed by the Indonesian government on sellers.
   */
  escrow_tax: Number,
  /**
   * Final adjusted amount that seller has to bear as part of escrow. This amount could be negative or positive. = min(actual_shipping_fee, shopee_shipping_rebate) + shipping_discount_from_3pl - actual_shipping_fee
   */
  final_shipping_fee: Number,
  /**
   * The final shipping cost of order and it is negative. For Non-integrated logistics channel is 0.
   */
  actual_shipping_fee: Number,
  /**
   * The platform shipping subsidy to the seller.
   */
  shopee_shipping_rebate: Number,
  /**
   * The discount of shipping fee from 3PL. Currently only applicable to ID
   */
  shipping_fee_discount_from_3pl: Number,
  /**
   * The shipping discount defined by seller.
   */
  seller_shipping_discount: Number,
  /**
   * The estimated shipping fee is an estimation calculated by Shopee based on specific logistics courier's standard.
   */
  estimated_shipping_fee: Number,
  /**
   * The list of voucher code provided by seller.
   */
  seller_voucher_code: string[],
  /**
   * The adjustable refund amount from Shopee Dispute Resolution Center.
   */
  drc_adjustable_refund: Number,
}

export default interface MyIncomeResponse {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  /**
   * The username of buyer.
   */
  buyer_user_name: string,
  /**
   * The list of the serial number of return.
   */
  returnsn_list: string[],
  order_income: OrderIncome,
  /**
   * The identifier for an API request for error tracking.
   */
  request_id: string,

}