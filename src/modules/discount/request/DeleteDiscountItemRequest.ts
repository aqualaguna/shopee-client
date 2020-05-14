export default interface DeleteDiscountItemRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number,
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,
  /**
   * Shopee's unique identifier for a variation of an item. If there is no variation of this item, you don't need to input this param. Dafault is 0.
   */
  variation_id?: number,
  
}