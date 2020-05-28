export interface ItemId {
    /**
     * Shopee's unique identifier for an item.
     */
    item_id: number
}
export default interface GetItemsResponse {
  items: ItemId[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,

}