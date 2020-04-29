export default interface AddItemImageResponse {
   /**
   * The identity of product item.
   */
  item_id: String,
  /**
   * Image URLs for fail download.
   */
  fail_image: String[],
  /**
   * Image URLs for item.
   */
  images: String[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,

}