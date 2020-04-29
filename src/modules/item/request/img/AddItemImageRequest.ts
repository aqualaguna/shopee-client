export default interface AddItemImageRequest {
  /**
   * The identity of product item.
   */
  item_id: String,
  /**
   * Image URLs of the item. It contains at most 9 URLs. Could get the url by api GetItemDetail
   */
  images: String[],
}