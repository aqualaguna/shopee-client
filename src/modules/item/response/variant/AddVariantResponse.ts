import { Variant } from "../item/AddItemResponse";

export interface AddVariantItem extends Variant {
  /**
   * Use this field to indicate the after-tax original price of variation.
   */
  inflated_original_price: Number,
  /**
   * Use this field to indicate the after-tax price of variation.

   */
  inflated_price: Number,
}

export default interface AddVariantResponse {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
  variations: AddVariantItem[],
  /**
   * The time when stock of the variation is updated.
   */
  modified_time: Number,
}