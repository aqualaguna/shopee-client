export default interface UpdateResponse {
  /**
   * ID of the shop.
   */
  shopid?: number,
  /**
   * Name of the shop.
   */
  shop_name?: string,
  /**
   * Description of the shop.
   */
  shop_description?: string,
  /**
   * List of videos URLs of the shop.
   */
  videos?: string[],
  /**
   * List of images URLs of the shop.
   * please upload first using image upload
   */
  images?: string[],
  /**
   * Allow negotiations or not, 1: don't allow, 0: allow.
   */
  disable_make_offer?: boolean,
  /**
   * Display pickup address or not.
   */
  enable_display_unitno?: boolean,
  /**
   * message from server
   */
  warning: string,
  /**
   * request identification
   */
  request_id: string,
}