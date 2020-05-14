import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import GetLogisticResponse from "./response/GetLogisticResponse";
import UpdateLogisticResponse from "./response/UpdateLogisticResponse";
import getParameterInitResponse from "./response/getParameterInitResponse";
import GetAddressResponse from "./response/GetAddressResponse";
import GetBranchResponse from "./response/GetBranchResponse";
import GetLogisticInfoResponse from "./response/GetLogisticInfoResponse";
import InitRequest from "./request/InitRequest";
import InitResponse from "./response/InitResponse";
import GetAirwayBillRequest from "./request/GetAirwayBillRequest";
import GetAirwayBillResponse from "./response/GetAirwayBillResponse";
import GetOrderLogisticResponse from "./response/GetOrderLogisticResponse";
import GetLogisticMessageRequest from "./request/GetLogisticMessageRequest";
import GetLogisticMessageResponse from "./response/GetLogisticMessageResponse";
import GetForderWaybillRequest from "./request/GetForderWaybillRequest";
import GetForderWaybillResponse from "./response/GetForderWaybillResponse";
import SetAddressResponse from "./response/SetAddressResponse";
import SetAddressRequest from "./request/SetAddressRequest";

export default class LogisticModule extends BaseModule {
  /**
   * Use this call to get all supported logistic channels.
   */
  getLogistic(): Promise<GetLogisticResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/channel/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/channel/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * For integrated logistics channel, use this call to get pickup address for pickup mode order.
   */
  getAddress(): Promise<GetAddressResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/address/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/address/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


   /**
   * For integrated logistics channel, use this call to get pickup timeslot for pickup mode order.
   * @param ordersn The order serial numbers.
   * @param address_id The identify of address.
   */
  getTimeSlot(ordersn: number, address_id: number): Promise<GetAddressResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/timeslot/get';
    let params: any = {
      ordersn,
      address_id,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/timeslot/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * For integrated logistics channel, use this call to get dropoff location for dropoff mode order.
   * @param ordersn The order serial numbers.
   */
  getBranch(ordersn: number): Promise<GetBranchResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/branch/get';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/branch/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

 
   /**
   * Get all the logistics info of an order to Init.
   * This API consolidates the output of GetParameterForInit, GetAddresss, GetTimeSlot and GetBranch based on each order so that developer can get all the required parameters ready in this API for Init.
   * This API is an alternative of GetParameterForInit, GetAddresss, GetTimeSlot and GetBranch as a set.
   * @param ordersn The order serial numbers.
   */
  getLogisticInfo(ordersn: number): Promise<GetLogisticInfoResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/init_info/get';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/init_info/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this call to initiate logistics including arrange Pickup, Dropoff or shipment for non-integrated logistic channels.
   * Should call shopee.logistics.GetLogisticInfo to fetch all required param first.
   * It's recommended to initiate logistics one hour AFTER the orders were placed since there is one-hour window buyer can cancel any order without request to seller.
   * @param request
   */
  init(request: InitRequest): Promise<InitResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/init';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/init' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
   /**
   * Use this API to get airway bill for orders.
   *  AirwayBill is only fetchable when the order status is under READY_TO_SHIP and RETRY_SHIP.
   * @param request
   */
  getAirwayBill(request: GetAirwayBillRequest): Promise<GetAirwayBillResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/airway_bill/get_mass';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/airway_bill/get_mass' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this call to get the logistics tracking information of an order.
   * @param request
   */
  getLogisticMessage(request: GetLogisticMessageRequest): Promise<GetLogisticMessageResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/tracking';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/tracking' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this API to get airwaybill for fulfillment orders.
   * @param request
   */
  getForderWaybill(request: GetForderWaybillRequest): Promise<GetForderWaybillResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/forder_waybill/get_mass';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/forder_waybill/get_mass' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this API to set default_address/pick_up_address/return_address of shop.
   * @param request
   */
  setAddress(request: SetAddressRequest): Promise<SetAddressResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/address/set';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/address/set' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this API to delete the address of shop by address_id.
   * @param address_id The identity of address
   */
  deleteAddress(address_id: number): Promise<SetAddressResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/address/delete';
    let params: any = {
      address_id,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/address/delete' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to fetch the logistics information of an order, these info can be used for airwaybill printing.
   * Dedicated for crossborder SLS order airwaybill. May not be applicable for local channel airwaybill.
   * @param ordersn  The order serial numbers.
   */
  getOrderLogistic(ordersn: number, forder_id?: string): Promise<GetOrderLogisticResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/order/get';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    if (forder_id && typeof forder_id == 'string') {
      params.forder_id = forder_id;
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/order/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Configure shop level logistics
   * @param logistic_id The identity of logistic channel
   * @param enabled Whether to enable this logistic channel
   * @param prefered Whether to make this logistic channel preferred. Indonestia logistics channel are not applicable.
   * @param cod Whether to enable COD for this logistic channel. Only COD supported channels are applicable.
   */
  updateShopLogistic(logistic_id: number, enabled?: boolean, prefered?: boolean, cod?: boolean): Promise<UpdateLogisticResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/channel/update';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      logistic_id,
    }
    if (typeof enabled == "boolean") {
      params.enabled = enabled;
    }
    if (typeof prefered == "boolean") {
      params.prefered = prefered;
    }
    if (typeof cod == "boolean") {
      params.cod = cod;
    }

    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/channel/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this call to get all required param for logistic initiation.
   * @param ordersn The identity of order
   */
  getParameterInit(ordersn: number): Promise<getParameterInitResponse> {
    let full_url = this.client.defaults.baseURL + 'logistics/init_parameter/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ordersn,
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('logistics/init_parameter/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  
}

