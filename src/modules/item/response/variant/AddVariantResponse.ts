import { Variant } from "../item/AddItemResponse";

export interface AddVariantItem extends Variant {
  /**
   * Use this field to indicate the after-tax original price of variation.
   */
  inflated_original_price: number,
  /**
   * Use this field to indicate the after-tax price of variation.

   */
  inflated_price: number,
}

export default interface AddVariantResponse {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
  variations: AddVariantItem[],
  /**
   * The time when stock of the variation is updated.
   */
  modified_time: number,
}