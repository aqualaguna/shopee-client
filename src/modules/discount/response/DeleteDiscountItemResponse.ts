import DeleteDiscountResponse from "./DeleteDiscountResponse";

export default interface DeleteDiscountItemResponse extends DeleteDiscountResponse {
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  item_id: number,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: number,

}