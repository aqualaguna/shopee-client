import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import GetShopByPartnerResponse from "./response/GetShopByPartnerResponse";
import GetCategoriesByCountryRequest from "./request/GetCategoriesByCountryRequest";
import GetCategoriesByCountryResponse from "./response/GetCategoriesByCountryResponse";

export default class PublicModule extends BaseModule {

  /**
   * Use this call to get basic info of shops which have authorized to the partner.
   * @param partner_id Partner ID is assigned upon registration is successful. Required for all requests.
   */
  getShopByPartner(partner_id: number): Promise<GetShopByPartnerResponse> {
    let full_url = this.client.defaults.baseURL + 'shop/get_partner_shop';
    let params: any = {
      partner_id,
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop/get_partner_shop' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this call to get basic info of shops which have authorized to the partner.
   * @param request
   */
  getCategoryByCountry(request: GetCategoriesByCountryRequest): Promise<GetCategoriesByCountryResponse> {
    let full_url = this.client.defaults.baseURL + 'item/categories/get_by_country';
    let params: any = {
      ...request,
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/categories/get_by_country' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * The supported payment method list by country
   * @param partner_id Partner ID is assigned upon registration is successful. Required for all requests.
   * @param country ID/MY/SG/VN/PH/TH/TW
   */
  getPaymentList(partner_id: number, country?: string): Promise<GetCategoriesByCountryResponse> {
    let full_url = this.client.defaults.baseURL + 'payment/list';
    let params: any = {
      partner_id,
      timestamp: Math.round(Date.now() / 1000),
    }
    if(country && typeof country == 'string') {
      params.country = country;
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('payment/list' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

}