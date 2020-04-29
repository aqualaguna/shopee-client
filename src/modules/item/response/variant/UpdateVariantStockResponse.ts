import { ItemStockModified } from "../item/UpdateStockResponse";

export interface UpdateVariantStockItem extends ItemStockModified {
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: Number,
}

export default interface UpdateVariantStockResponse {
  item: UpdateVariantStockItem,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,

}