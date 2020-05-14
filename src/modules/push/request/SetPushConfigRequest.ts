export default interface SetPushConfigRequest {
   /**
   * The callback url of push mechanism.
   */
  callback_url: string,
  detailed_config: {
    /**
     * 0 stands for off and 1 stands for on.
     */
    order_status: number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    order_tracking_number: number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    shop_update: number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    banned_item: number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    item_promotion: number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    reserved_stock_change: number,
  },
  /**
   * Use this filed to set shops that need to be blocked.
   */
  block_shopid: number,
}