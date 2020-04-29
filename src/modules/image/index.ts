import BaseModule from "../BaseModule";
import UploadRequest from "./request/uploadRequest";
import uploadResponse from "./response/uploadResponse";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";

export default class ImageModule extends BaseModule {
  uploadImage(request: UploadRequest): Promise<uploadResponse> {
    let full_url = this.client.defaults.baseURL + 'image/upload';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('image/upload' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
}