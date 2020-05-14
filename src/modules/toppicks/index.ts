import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import GetTopPickListResponse from "./response/GetTopPickListResponse";
import AddTopPickRequest from "./request/AddTopPickRequest";
import AddTopPickResponse from "./response/AddTopPickResponse";
import UpdateTopPickRequest from "./request/UpdateTopPickRequest";
import UpdateTopPickResponse from "./response/UpdateTopPickResponse";
import DeleteTopPickResponse from "./response/DeleteTopPickResponse";

export default class TopPickModule extends BaseModule {

  /**
   * Get the list of all collections.
   */
  getTopPick(): Promise<GetTopPickListResponse> {
    let full_url = this.client.defaults.baseURL + 'top_picks/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('top_picks/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Add one collection. One shop can have up to 10 collections.
   * @param request
   */
  addTopPick(request: AddTopPickRequest): Promise<AddTopPickResponse> {
    let full_url = this.client.defaults.baseURL + 'top_picks/add';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('top_picks/add' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this API to update the collection name, the item list in a collection, or to activate a collection.
   * @param request
   */
  updateTopPick(request: UpdateTopPickRequest): Promise<UpdateTopPickResponse> {
    let full_url = this.client.defaults.baseURL + 'top_picks/update';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('top_picks/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this API to update the collection name, the item list in a collection, or to activate a collection.
   * @param request
   */
  deleteTopPick(top_picks_id : number): Promise<DeleteTopPickResponse> {
    let full_url = this.client.defaults.baseURL + 'top_picks/delete';
    let params: any = {
      top_picks_id,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('top_picks/delete' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

}