import { SipAfiliate} from "../../shop/response/getShop";

export interface Authed {
  /**
   * The two-digit code representing the country where the order was made.
   */
  country: string,
  /**
   * Shopee's unique identifier for a shop.
   */
  shopid: number,
  /**
   * The timestamp when the shop was authorized to the partner.
   */
  auth_time: number,
  /**
   * SIP affiliate shops info list
   */
  sip_a_shops: SipAfiliate[],
  /**
   * Use this field to indicate the expiration date for shop authorization.
   */
  expire_time: number,
}

export default interface GetShopByPartnerResponse {
  /**
   * A list of shops authorized to the partner.
   */
  authed_shops: Authed[],
  /**
   * The identifier of the API request for error tracking
   */
  request_id: string,
}