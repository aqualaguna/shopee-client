export default interface AddItemResponse {
  /**
   * List of invalid item ids.
   */
  invalid_item_id: number[],
  /**
   * ShopCategory's unique identifier.
   */
  shop_category_id: number,
  /**
   * number of items in the shop category.
   */
  count: number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}