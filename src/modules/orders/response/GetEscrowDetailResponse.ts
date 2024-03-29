

export interface Income {
  /**
   * The three-digit code representing the currency unit used for all transactional amount under
   */
  local_currency: string,
  /**
   * The total amount paid by the buyer for the order. This amount includes the total sale price of items, shipping cost beared by buyer; and offset by Shopee promotions if applicable.
   */
  total_amount: number,
  /**
   * Final value of coins used by seller for the order.
   */
  coin: number,
  /**
   * Final value of voucher provided by Shopee for the order.
   */
  voucher: number,
  /**
   * Final value of voucher provided by Seller for the order.
   */
  voucher_seller: number,
  /**
   * Final sum of each item Shopee discount of a specific order. This amount will rebate to seller.
   */
  seller_rebate: number,
  /**
   * The final shipping cost of order and it is negative. For Non-integrated logistics channel is 0.
   */
  actual_shipping_cost: number,
  /**
   * The platform shipping subsidy to the seller.
   */
  shipping_fee_rebate: number,
  /**
   * The commission fee charged by Shopee platform if applicable.
   */
  commission_fee: number,
  /**
   * The voucher code or promotion code the buyer used.
   */
  voucher_code: string,
  /**
   * The voucher name or promotion name the buyer used.
   */
  voucher_name: string,
  /**
   * The total amount that the seller is expected to receive for the order and will change before order completed.
   * escrow_amount=total_amount+voucher+credit_card_promotion+seller_rebate+coin-commission_fee-credit_card_transaction_fee-cross_border_tax-service_fee-buyer_shopee_kredit-seller_coin_cash_back+final_shipping_fee-seller_return_refund_amount.
   */
  escrow_amount: number,
  /**
   * Amount incurred by Buyer for purchasing items outside of home country. Amount may change after Return Refund.
   */
  cross_border_tax: number,
  /**
   * The amount offset via payment promotion.
   */
  credit_card_promotion: number,
  /**
   * Include buyer transaction fee and seller transaction fee.
   */
  credit_card_transaction_fee: number,
  /**
   * Amount charged by Shopee to seller for additional services.
   */
  service_fee: number,
  /**
   * Amount charged by Shopee to Buyer for using ShopeeKredit for the order. Currently only applicable in ID.
   */
  buyer_shopee_kredit: number,
  /**
   * Value of coins provided by Seller for purchasing with his or her store for the order.
   */
  seller_coin_cash_back: number,
  /**
   * Final adjusted amount that seller has to bear as part of escrow.
   * This amount could be negative or positive.
   */
  final_shipping_fee: number,
  /**
   * Amount returned to Seller in the event of partial return.
   */
  seller_return_refund_amount:number,
  /**
   * True means incoming won't change any more.
   */
  is_completed: boolean,
  /**
   * Use this field to fetch the list of voucher codes.
   */
  voucher_code_list: string[],
  /**
   * The transaction_fee of seller.
   */
  seller_transaction_fee: number,
  /**
   * The transaction_fee of buyer.
   */
  buyer_transaction_fee: number,

}

export interface BankAccount {
  /**
   * Name of the seller's receiving bank
   */
  bank_name: string,
  /**
   * Account number of the seller's receiving bank
   */
  bank_account_number: string,
  /**
   * The two-digit code representing country of the seller's receiving bank account
   */
  bank_account_country: string,
}

export interface EscrowOrderItem {
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
   * Name of the variation that belongs to the same item. A seller can offer variations of the same item. For example, the seller could create a fixed-priced listing for a t-shirt design and offer the shirt in different colors and sizes. In this case, each color and size combination is a separate variation. Each variation can have a different quantity and price.
   */
  variation_name: string,
  /**
   * A variation SKU (stock keeping unit) is an identifier defined by a seller. It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type, size, and color, which are variations of one item in Shopee Listings.
   */
  variation_sku: string,
  /**
   * This value indicates the number of identical items purchased at the same time by the same buyer from one listing/item.
   */
  quantity_purchased: number,
  /**
   * The original price of the item before ANY promotion/discount in the listing currency. It returns the subtotal of that specific item if quantity exceeds 1.
   */
  original_price:number,
  /**
   * The after-discount price of the item in the listing currency.
   *  It returns the subtotal of that specific item if quantity exceeds 1.
   * If there is no discount, this value will be the same as that of original_price.
   * In case of bundle deal item, this value will return 0 as by design bundle deal discount will not be breakdown to item/variation level.
   * Due to technical restriction, the value will return the price before bundle deal if we don’t configure it to 0.
   * Please use the value under "income_details" and "activity" to calculate the bundle deal discount breakdown on item level
   */
  discounted_price: number,
  /**
   * The offset of this item when the buyer consumed Shopee Coins upon checkout.
   * In case of bundle deal item, this value will return 0. 
   * Due to technical restriction, this field will return incorrect value under bundle deal case if we don’t configure it to 0.
   * Please use the value under "income_details" and "activity" to calculate the breakdown on item level.
   */
  discount_from_coin: number,
  /**
   * The offset of this item when the buyer use Shopee voucher.
   * In case of bundle deal item, this value will return 0. 
   * Due to technical restriction, this field will return incorrect value under bundle deal case if we don’t configure it to 0.
   * Please use the value under "income_details" and "activity" to calculate the breakdown on item level.
   */
  discount_from_voucher: number,
  /**
   * The offset of this item when the buyer use seller-specific voucher.
   * In case of bundle deal item, this value will return 0.
   *  Due to technical restriction, this field will return incorrect value under bundle deal case if we don’t configure it to 0.
   * Please use the value under "income_details" and "activity" to calculate the breakdown on item level.
   */
  discount_from_voucher_seller: number,
  /**
   * Platform subsidy to the seller for this item.
   * In case of bundle deal item, this value will return 0.
   *  Due to technical restriction, this field will return incorrect value under bundle deal case if we don’t configure it to 0.
   * Please use the value under "income_details" and "activity" to calculate the breakdown on item level.
   */
  seller_rebate: number,
  /**
   * This value indicates the actual price the buyer pay.
   * In case of bundle deal item, this value will return 0 as by design bundle deal discount will not be breakdown to item/variation level.
   *  Due to technical restriction, the value will return the price before bundle deal if we don't configure it to 0.
   *  Please use the value under "income_details" and "activity" to calculate the bundle deal discount breakdown on item level.
   */
  deal_price: number,
  /**
   * This value indicate the offset via credit card promotion.
   * In case of bundle deal item, this value will return 0.
   *  Due to technical restriction, this field will return incorrect value under bundle deal case if we don’t configure it to 0.
   * Please use the value under "income_details" and "activity" to calculate the breakdown on item level.
   */
  credit_card_promotion: number,
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

  
}

export interface ActivityItem {
  /**
   * ID of item.
   */
  item_id: number,
  /**
   * ID of the variation that belongs to the same item.
   */
  variation_id: number,
  /**
   * The number of identical items purchased at the same time by the same buyer from one listing/item.
   */
  quantity_purchased: number,
  /**
   * The price used to participate activity. E.g. itemA original price is $10, promo price is $9, and bundle deal is buy 2 get 20% off equals to $14.4. The original_price value will be $9 in this case.
   */
  original_price: number,

}

export interface Activity {
  /**
   * ID of activity.
   */
  activity_id: number,
  /**
   * Type of activity. Currently only one type: bundle_deal
   */
  activity_type: string,
  /**
   * The original TOTAL price of ALL items in one activity(e.g. bundle deal. Define by activity_id) in the listing currency.
   */
  original_price: number,
  /**
   * The after-discocunt TOTAL price of ALL items in one activity(e.g. bundle deal. Define by activity_id) in the listing currency.
   */
  discounted_price: number,
  /**
   * This object contains the items in this activity.
   */
  items: ActivityItem[],
}

export interface EscrowOrder {
  /**
   * My Income infomation
   */
  ordersn: string,
  /**
   * The two-digit code representing the country where the order was made.
   */
  country: string,
  /**
   * This object contains detailed income breakdown for the order.
   */
  income_details: Income,
  /**
   * The logistics service provider that the buyer selected for the order to deliver items.
   */
  shipping_carrier: string,
  /**
   * The three-digit code representing the currency unit of total order amount (escorw_amount) at the point of payment to the seller.
   */
  escrow_currency: string,
  /**
   * The exchange rate used by Shopee to convert local_currency to escrow_currency.
   */
  exchange_rate: string|number,
  /**
   * The payment channel that the seller selected to receive escrow for the order.
   */
  escrow_channel: string,
  /**
   * The unique identifier for a payee by the 3rd party payment service provider selected in escrow_channel.
   */
  payee_id: number,
  /**
   * This object contains detailed breakdown for bank account of the seller if selected escorw_channel is Bank Transfer.
   */
  bank_account: BankAccount,
  /**
   * This object contains the detailed breakdown for all the items in this order, including regular items(non-activity) and activity items.
   */
  items: EscrowOrderItem[],
  /**
   * This object contains the activity in this order.
   */
  activity: Activity[],
  /**
   * Cross-border tax imposed by the Indonesian government on sellers.
   */
  escrow_tax: number,
}

export default interface GetEscrowDetailResponse {
  /**
   * My Income infomation
   */
  order: EscrowOrder,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}