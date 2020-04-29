export default interface UpdateShopInfo {
  /**
   * Name of the shop.
   */
  shop_name?: String,
  /**
   * Description of the shop.
   */
  shop_description?: String,
  /**
   * List of videos URLs of the shop.
   */
  videos?: String[],
  /**
   * List of images URLs of the shop.
   * please upload first using image upload
   */
  images?: String[],
  /**
   * Allow negotiations or not, 1: don't allow, 0: allow.
   */
  disable_make_offer?: Boolean,
  /**
   * Display pickup address or not.
   */
  enable_display_unitno?: Boolean,
}