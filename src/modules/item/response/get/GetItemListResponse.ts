import { ItemStatus } from "../../request/item/AddItemRequest";

export interface SimpleVariant {
  /**
   * A variation SKU (stock keeping unit) is an identifier defined by a seller. It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type, size, and color, which are variations of one item in Shopee Listings.
   */
  variation_sku: string,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: string,
}
export interface GetListItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,
  /**
   * Shopee's unique identifier for a shop.
   */
  shopid: number,
  /**
   * The latest update time of the item.
   */
  updated_time: number,
  /**
   * Enumerated type that defines the current status of the item. Applicable values: NORMAL, BANNED and UNLIST.
   */
  status: ItemStatus,
  /**
   * An item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku: string,
  /**
   * The variation list of item
   */
  variations: SimpleVariant[],
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  is_2tier_item: boolean,
  /**
   * Only for TW seller. List of installments
   */
  tenures: number[],

}
export default interface GetItemListReponse {
  items: GetListItem[],
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more: boolean,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
  /**
   * total count of items.
   */
  total: number,
}