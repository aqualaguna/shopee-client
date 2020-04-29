import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import GetTransactionListRequest from "./request/GetTransactionListRequest";
import GetTransactionListResponse from "./response/GetTransactionListResponse";

export default class PaymentModule extends BaseModule {

  /**
   * Use this API to get the transaction records of wallet.
   * @param request 
   */
  getTransactionList(request: GetTransactionListRequest): Promise<GetTransactionListResponse> {
    let full_url = this.client.defaults.baseURL + 'wallet/transaction/list';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('wallet/transaction/list' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

}
