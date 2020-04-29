import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import GetShopResponse from "./response/getShop";
import UpdateShopInfo from "./request/updateShopInfo";
import UpdateResponse from "./response/updateResponse";
import setInstallmentResponse from "./response/setInstallmentResponse";
import SetInstallmentStatusRequest from "./request/SetInstallmentStatusRequest";

export default class ShopModule extends BaseModule {
  
  /**
   * Use this call to get information of shop
   */
  getShop() : Promise<GetShopResponse> {
    let full_url = this.client.defaults.baseURL + 'shop/get';
    
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000)
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('/shop/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
  
  /**
   * Use this call to update information of shop
   * @param request 
   */
  updateShop(request: UpdateShopInfo) : Promise<UpdateResponse> {
    let full_url = this.client.defaults.baseURL + 'shop/update';
    
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('/shop/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Shop performance includes the indexes from "My Performance" of Seller Center.
   */
  getPerformance() {
    let full_url = this.client.defaults.baseURL + 'shop/performance';
    
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop/performance' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Only for TW whitelisted shop.Use this API to set the installment status of shop.
   * @param request 
   */
  setInstallmentStatus(request: SetInstallmentStatusRequest): Promise<setInstallmentResponse> {
    let full_url = this.client.defaults.baseURL + 'shop/set_installment_status';
    
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop/set_installment_status' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
  
}