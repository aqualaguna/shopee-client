import { DiscountItem } from "./AddDiscountRequest";

export default interface AddDiscountItemRequest {
  discount_id: Number,
  items: DiscountItem[],
}