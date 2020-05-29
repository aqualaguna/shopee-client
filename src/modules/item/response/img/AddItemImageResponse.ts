export default interface AddItemImageResponse {
   /**
   * The identity of product item.
   */
  item_id: number,
  /**
   * Image URLs for fail download.
   */
  fail_image: string[],
  /**
   * Image URLs for item.
   */
  images: string[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,

}