import { DiscountItem } from "./AddDiscountRequest";

export default interface UpdateDiscountItemRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number,
  items: DiscountItem[],
}