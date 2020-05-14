export default interface  GetPushConfigResponse {
  /**
   * The callback url of push mechanism.
   */
  callback_url: string,
  /**
   * The shutdown time caused by low successful rate of push mechanism.
   */
  shut_time: Number,
  detailed_config: {
    /**
     * 0 stands for off and 1 stands for on.
     */
    order_status: Number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    order_tracking_number: Number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    shop_update: Number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    banned_item: Number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    item_promotion: Number,
    /**
     * 0 stands for off and 1 stands for on.
     */
    reserved_stock_change: Number,
  },
  /**
   * Use this filed to set shops that need to be blocked.
   */
  block_shopid: Number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}