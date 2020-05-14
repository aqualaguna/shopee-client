export interface Image {
  /**
   * origin image url
   */
  image_url: string,
  /**
   * Shopee image url
   */
  shopee_image_url: string,
  
}
export default interface uploadResponse {
  /**
   * list image uploaded
   */
  images: Image[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}