import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import GenerateFMTrackingNoRequest from "./request/GenerateFMTrackingNoRequest";
import GenerateFMTrackingNoResponse from "./response/GenerateFMTrackingNoResponse";
import GetShopFMTrackingNoRequest from "./request/GetShopFMTrackingNoRequest";
import GetShopFMTrackingNoResponse from "./response/GetShopFMTrackingNoResponse";
import FirstMileCodeBindOrderRequest from "./request/FirstMileCodeBindOrderRequest";
import FirstMileCodeBindOrderResponse from "./response/FirstMileCodeBindOrderResponse";
import GetFmTnDetailResponse from "./response/GetFmTnDetailResponse";
import FirstMileUnbindRequest from "./request/FirstMileUnbindRequest";
import FirstMileUnbindResponse from "./response/FirstMileUnbindResponse";

export default class FirstMileModule extends BaseModule {
  /**
   * Use this API to generate first-mile tracking number for the shipment method of pickup.
   * Please note that the prerequisite for using this API is that the order status is ready_to_ship and the tracking number of order has been obtained.
   * Only applicable to cross-border sellers in China.
   * @param request 
   */
  generateFMTracking(request: GenerateFMTrackingNoRequest): Promise<GenerateFMTrackingNoResponse> {
    let full_url = this.client.defaults.baseURL + 'fm_tn/generate';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('fm_tn/generate' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


  /**
   * Use this API to fetch first-mile tracking numbers of the shop.
   * Only applicable to cross-border sellers in China.
   * @param request 
   */
  getShopFMTracking(request: GetShopFMTrackingNoRequest): Promise<GetShopFMTrackingNoResponse> {
    let full_url = this.client.defaults.baseURL + 'fm_tn/get';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('fm_tn/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this API to bind orders with the first-mile tracking number.
   * Only applicable to cross-border sellers in China.
   * @param request 
   */
  firstMileCodeBind(request: FirstMileCodeBindOrderRequest): Promise<FirstMileCodeBindOrderResponse> {
    let full_url = this.client.defaults.baseURL + 'fm_tn/bind';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('fm_tn/bind' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


   /**
   * Use this API to unbind orders with the first-mile tracking number.
   * Only applicable to cross-border sellers in China.
   * @param request 
   */
  firstMileUnbind(request: FirstMileUnbindRequest): Promise<FirstMileUnbindResponse> {
    let full_url = this.client.defaults.baseURL + 'fm_tn/unbind';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('fm_tn/unbind' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this API to fetch the detailed information of first-mile tracking number. 
   * Only applicable to cross-border sellers in China.
   * @param request 
   */
  getFmTnDetail(fm_tn: string): Promise<GetFmTnDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'fm_tn/detail';
    let params: any = {
      fm_tn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('fm_tn/detail' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use the API to get the waybill of first-mile tracking number.
   * Please note that this API only used for the shipment method of pickup.
   * Only applicable to cross-border sellers in China.
   * @param fm_tn_list The set of first-mile tracking numbers. Up to 50 tracking numbers in one call.
   * @param is_batch Option to get batch airway bills in single file. Default value is false.
   */
  getFmTrackingNoWaybill(fm_tn_list: string[],is_batch?: boolean): Promise<GetFmTnDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'fm_tn/waybill';
    let params: any = {
      fm_tn_list,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    if (typeof is_batch == 'boolean') {
      params.is_batch = is_batch
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('fm_tn/waybill' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to get all supported logistic channels for first mile.
   * Only applicable to cross-border sellers in China.
   * @param area Use this field to specify the region you want to ship parcel. sample: cn
   */
  getShopFMChannel(area: string): Promise<GetFmTnDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'fm_tn/channels';
    let params: any = {
      area,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('fm_tn/channels' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


}