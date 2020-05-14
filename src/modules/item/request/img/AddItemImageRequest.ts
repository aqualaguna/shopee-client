export default interface AddItemImageRequest {
  /**
   * The identity of product item.
   */
  item_id: string,
  /**
   * Image URLs of the item. It contains at most 9 URLs. Could get the url by api GetItemDetail
   */
  images: string[],
}