import { Item } from "../item/AddItemResponse";

export interface ItemDetail extends Item {
  /**
   * Only for TW seller. List of installments
   */
  tenures: Number[],
  /**
   * Use this field to get Wthe locked stock of item by promotions.
   */
  reserved_stock: Number,
  /**
   * Use this field to indicate the after-tax price.
   */
  inflated_price: Number,
  /**
   * Use this field to indicate the after-tax original price.
   */
  inflated_original_price: Number,
}

export default interface getItemDetailResponse {
  item: Item,
  /**
   * Warning returned when the category or attributes are missing/invalid.
   */
  warning: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}