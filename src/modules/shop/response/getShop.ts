/**
 * {
      shop_id: 198785094,
      shop_name: 'Atla Surabaya',
      country: 'ID',
      shop_description: 'untuk orderan yang masuk akan segera\n' +
        'kami proses. Terima Kasih\n' +
        '\n' +
        'Menjual berbagai macam barang kebutuhan Berkebun\n' +
        'Senin-Sabtu : 08.00-16.00\n' +
        'Minggu, Tgl Merah : Libur\n' +
        '\n' +
        'Sebelum membeli harap dibaca',
      videos: [],
      images: [],
      disable_make_offer: 1,
      enable_display_unitno: false,
      item_limit: 2000,
      request_id: '00c67fbd9ca4ce8d3f3aa45623e6cfb8',
      status: 'NORMAL',
      installment_status: 0,
      sip_a_shops: [],
      is_cb: false,
      non_pre_order_dts: 2,
      auth_time: 1587965484,
      expire_time: 1619501484
    }
 */

export enum ShopStatus {
  BANNED = 'BANNED',
  FROZEN = 'FROZEN',
  NORMAL = 'NORMAL'
}

export interface SipAfiliate {
  a_shop_id: String,
  country: String,
}
export default interface GetShopResponse {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id: Number,
  /**
   * Name of the shop.
   */
  shop_name: String,
  /**
   * The two-digit code representing the country where the order was made.
   */
  country: String,
  /**
   * Description of the shop.
   */
  shop_description: String,
  /**
   * List of videos URLs of the shop.
   */
  videos: String[],
  /**
   * List of images URLs of the shop.
   */
  images: String[],
  /**
   * Allow negotiations or not, 1: don't allow, 0: allow.
   */
  disable_make_offer: Boolean,
  /**
   * Display pickup address or not.
   */
  enable_display_unitno: Boolean,
  /**
   * Listing limitation of items for the shop.
   */
  item_limit: Number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
  /**
   * Applicable status: BANNED, FROZEN, NORMAL
   */
  status: ShopStatus,
  /**
   * Only for TW seller. The status of whether shop support installment: 1 means true and 0 means false
   */
  installment_status: Number,
  /**
   * SIP affiliate shops info list
   */
  sip_a_shops: SipAfiliate[],
  /**
   * Use this filed to indicate whether the shop is a cross-border shop.
   */
  is_cb: Boolean,
  /**
   * The days-to-ship value for non-pre orders.
   */
  non_pre_order_dts: Number,
  /**
   * The timestamp when the shop was authorized to the partner.
   */
  auth_time: Number,
  /**
   * Use this field to indicate the expiration date for shop authorization.
   */
  expire_time: Number
}