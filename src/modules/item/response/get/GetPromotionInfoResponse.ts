
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
  promotion_id: number,
  /**
   * ID of the variation that belongs to the same item.
   */
  variation_id: number,
  /**
   * Start timestamp of promotion.
   */
  start_time: number,
  /**
   * End timestamp of promotion.
   */
  end_time: number,
  /**
   * The promotion price of item.
   */
  promotion_price: number,
  /**
   * The Locked stock of item by promotion.
   */
  reserved_stock: number,
  /**
   * The sold out timestamp of promotion stock.
   */
  stockout_time: number,
  /**
   * The stage at which the promotion goes. Available values: ongoing/upcoming.
   */
  staging: string,

}

export interface PromotionError {
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  item_id: number,
  /**
   * Error Message.
   */
  error_msg: string,

}
export interface PromotionItem {
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  item_id: number,
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
  request_id: string,
}