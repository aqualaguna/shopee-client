import { ItemStatus } from "../../request/item/AddItemRequest";

export interface SimpleVariant {
  /**
   * A variation SKU (stock keeping unit) is an identifier defined by a seller. It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type, size, and color, which are variations of one item in Shopee Listings.
   */
  variation_sku: String,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: String,
}
export interface GetListItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * Shopee's unique identifier for a shop.
   */
  shopid: Number,
  /**
   * The latest update time of the item.
   */
  updated_time: Number,
  /**
   * Enumerated type that defines the current status of the item. Applicable values: NORMAL, BANNED and UNLIST.
   */
  status: ItemStatus,
  /**
   * An item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku: String,
  /**
   * The variation list of item
   */
  variations: SimpleVariant[],
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  is_2tier_item: Boolean,
  /**
   * Only for TW seller. List of installments
   */
  tenures: Number[],

}
export default interface GetItemListReponse {
  items: GetListItem[],
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more: Boolean,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
  /**
   * total count of items.
   */
  total: Number,
}