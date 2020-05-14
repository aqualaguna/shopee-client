export default interface DeleteCategoryResponse {
 /**
   * ShopCategory's unique identifier.
   */
  shop_category_id: number,
  /**
   * message from server
   */
  msg: string,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}