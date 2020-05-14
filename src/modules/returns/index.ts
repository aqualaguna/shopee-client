import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import ConfirmReturnResponse from "./response/ConfirmReturnResponse";
import DisputeReturnRequest from "./request/DisputeReturnRequest";
import DisputeReturnResponse from "./response/DisputeReturnResponse";
import GetReturnListRequest from "./request/GetReturnListRequest";
import GetReturnListResponse from "./response/GetReturnListResponse";
import GetReturnDetailResponse from "./response/GetReturnDetailResponse";

export default class ReturnModule extends BaseModule {
  
  /**
   * Confirm return
   * @param returnsn serial number of return
   */
  confirmReturn(returnsn: string): Promise<ConfirmReturnResponse> {
    let full_url = this.client.defaults.baseURL + 'returns/confirm';
    let params: any = {
      returnsn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('returns/confirm' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Dispute return
   * @param request
   */
  disputeReturn(request: DisputeReturnRequest): Promise<DisputeReturnResponse> {
    let full_url = this.client.defaults.baseURL + 'returns/dispute';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('returns/dispute' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Get return list
   * @param request
   */
  getReturnList(request: GetReturnListRequest): Promise<GetReturnListResponse> {
    let full_url = this.client.defaults.baseURL + 'returns/get';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('returns/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to get detail information of a returned order
   * @param returnsn
   */
  getReturnDetail(returnsn: string): Promise<GetReturnDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'returns/detail';
    let params: any = {
      returnsn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('returns/detail' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


}