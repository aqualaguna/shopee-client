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
  a_shop_id: string,
  country: string,
}
export default interface GetShopResponse {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id: number,
  /**
   * Name of the shop.
   */
  shop_name: string,
  /**
   * The two-digit code representing the country where the order was made.
   */
  country: string,
  /**
   * Description of the shop.
   */
  shop_description: string,
  /**
   * List of videos URLs of the shop.
   */
  videos: string[],
  /**
   * List of images URLs of the shop.
   */
  images: string[],
  /**
   * Allow negotiations or not, 1: don't allow, 0: allow.
   */
  disable_make_offer: boolean,
  /**
   * Display pickup address or not.
   */
  enable_display_unitno: boolean,
  /**
   * Listing limitation of items for the shop.
   */
  item_limit: number,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
  /**
   * Applicable status: BANNED, FROZEN, NORMAL
   */
  status: ShopStatus,
  /**
   * Only for TW seller. The status of whether shop support installment: 1 means true and 0 means false
   */
  installment_status: number,
  /**
   * SIP affiliate shops info list
   */
  sip_a_shops: SipAfiliate[],
  /**
   * Use this filed to indicate whether the shop is a cross-border shop.
   */
  is_cb: boolean,
  /**
   * The days-to-ship value for non-pre orders.
   */
  non_pre_order_dts: number,
  /**
   * The timestamp when the shop was authorized to the partner.
   */
  auth_time: number,
  /**
   * Use this field to indicate the expiration date for shop authorization.
   */
  expire_time: number
}