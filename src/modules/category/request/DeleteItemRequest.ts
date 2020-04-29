export default interface DeleteItemRequest {
  /**
   * ShopCategory's unique identifier.
   */
  shop_category_id: Number, 
  /**
   * Shopee's unique identifiers list for an item.
   */
  items: Number[],
}