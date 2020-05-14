
export interface VariationDiscount {
  /**
   * Shopee's unique identifier for a variation of an item. If there is no variation of this item, you don't need to input this param. Dafault is 0.
   */
  variation_id: number,
  /**
   * The discount price of the item.
   */
  variation_promotion_price: number,
}

export interface DiscountItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,
  variations?: VariationDiscount[],
  /**
   * The discount price of the item. If the item has no variation, this param is necessary.
   */
  item_promotion_price: number,
  /**
   * The max number of this product in the promotion price.
   */
  purchase_limit: number,

}

export default interface AddDiscountRequest {
  /**
   * Title of the discount.
   */
  discount_name: string,
  /**
   * The time when discount activity start.
   */
  start_time: number,
  /**
   * The time when discount activity end.
   */
  end_time: number,
  /**
   * Max item to upload is 50 in one API call.
   */
  items?: DiscountItem[],

  
}