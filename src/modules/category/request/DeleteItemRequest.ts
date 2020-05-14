export default interface DeleteItemRequest {
  /**
   * ShopCategory's unique identifier.
   */
  shop_category_id: number, 
  /**
   * Shopee's unique identifiers list for an item.
   */
  items: number[],
}