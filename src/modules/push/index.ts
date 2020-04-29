import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import GetPushConfigResponse from "./response/GetPushConfigResponse";
import SetPushConfigRequest from "./request/SetPushConfigRequest";
import SetPushConfigResponse from "./response/SetPushConfigResponse";

export default class PushModule extends BaseModule {

  /**
   * Use this API to get the configuration information of push service.
   */
  getPushConfig(): Promise<GetPushConfigResponse> {
    let full_url = this.client.defaults.baseURL + 'push/get_config';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('push/get_config' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
  
  /**
   * Use this API to set the configuration information of push service.
   * @param request 
   */
  setPushConfig(request: SetPushConfigRequest): Promise<SetPushConfigResponse> {
    let full_url = this.client.defaults.baseURL + 'push/set_config';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('push/set_config' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

}
