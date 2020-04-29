
export enum PromotionType {
  product_promotion='product_promotion',
  flash_sale='flash_sale',
  add_on_deal_main='add_on_deal_main',
  add_on_deal_sub='add_on_deal_sub',
  group_by='group_by',
  bundle_deal='bundle_deal'
}

export interface Promotion {
  /**
   * Available type: product_promotion, flash_sale, add_on_deal_main, add_on_deal_sub, group_by, bundle_deal
   */
  promotion_type: PromotionType,
  /**
   * The ID of promotion.
   */
  promotion_id: Number,
  /**
   * ID of the variation that belongs to the same item.
   */
  variation_id: Number,
  /**
   * Start timestamp of promotion.
   */
  start_time: Number,
  /**
   * End timestamp of promotion.
   */
  end_time: Number,
  /**
   * The promotion price of item.
   */
  promotion_price: Number,
  /**
   * The Locked stock of item by promotion.
   */
  reserved_stock: Number,
  /**
   * The sold out timestamp of promotion stock.
   */
  stockout_time: Number,
  /**
   * The stage at which the promotion goes. Available values: ongoing/upcoming.
   */
  staging: String,

}

export interface PromotionError {
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  item_id: Number,
  /**
   * Error Message.
   */
  error_msg: String,

}
export interface PromotionItem {
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  item_id: Number,
  /**
   * Promotion information list.
   */
  promotions: Promotion[],
  /**
   * The list of error items.
   */
  errors: PromotionError[],
}

export default interface GetPromotionInfoResponse {
  /**
   * The set of item's promotion list.
   */
  items: PromotionItem[],
  request_id: String,
}