import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import AddDiscountRequest from "./request/AddDiscountRequest";
import AddDiscountResponse from "./response/AddDiscountResponse";
import AddDiscountItemRequest from "./request/AddDiscountItemRequest";
import AddDiscountItemResponse from "./response/AddDiscountItemResponse";
import DeleteDiscountResponse from "./response/DeleteDiscountResponse";
import DeleteDiscountItemRequest from "./request/DeleteDiscountItemRequest";
import DeleteDiscountItemResponse from "./response/DeleteDiscountItemResponse";
import GetDiscountDetailRequest from "./request/GetDiscountDetailRequest";
import GetDiscountDetailResponse from "./response/GetDiscountDetailResponse";
import GetDiscountListRequest from "./request/GetDiscountListRequest";
import GetDiscountListResponse from "./response/GetDiscountListResponse";
import UpdateDiscountRequest from "./request/UpdateDiscountRequest";
import UpdateDiscountResponse from "./response/UpdateDiscountResponse";
import UpdateDiscountItemRequest from "./request/UpdateDiscountItemRequest";
import UpdateDiscountItemResponse from "./response/UpdateDiscountItemResponse";

export default class DiscountModule extends BaseModule {
  /**
   * Use this api to add shop discount activity
   * @param request 
   */
  addDiscount(request: AddDiscountRequest): Promise<AddDiscountResponse> {
    let full_url = this.client.defaults.baseURL + 'discount/add';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('discount/add' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to add shop discount item
   * @param request 
   */
  addDiscountItem(request: AddDiscountItemRequest): Promise<AddDiscountItemResponse> {
    let full_url = this.client.defaults.baseURL + 'discount/items/add';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('discount/items/add' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to delete one discount activity BEFORE it starts.
   * @param request 
   */
  deleteDiscount(discount_id: string): Promise<DeleteDiscountResponse> {
    let full_url = this.client.defaults.baseURL + 'discount/delete';
    let params: any = {
      discount_id,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('discount/delete' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

 /**
   * Use this api to delete items of the discount activity
   * @param request 
   */
  deleteDiscountItem(request: DeleteDiscountItemRequest): Promise<DeleteDiscountItemResponse> {
    let full_url = this.client.defaults.baseURL + 'discount/item/delete';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('discount/item/delete' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to get one shop discount activity detail
   * @param request 
   */
  getDiscountDetail(request: GetDiscountDetailRequest): Promise<GetDiscountDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'discount/detail';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('discount/detail' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to get shop discount activity list
   * @param request 
   */
  getDiscountList(request: GetDiscountListRequest): Promise<GetDiscountListResponse> {
    let full_url = this.client.defaults.baseURL + 'discount/get';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('discount/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


   /**
   * Use this api to update one discount information
   * @param request 
   */
  updateDiscount(request: UpdateDiscountRequest): Promise<UpdateDiscountResponse> {
    let full_url = this.client.defaults.baseURL + 'discount/update';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('discount/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to update items of the discount activity
   * @param request 
   */
  updateDiscountItem(request: UpdateDiscountItemRequest): Promise<UpdateDiscountItemResponse> {
    let full_url = this.client.defaults.baseURL + 'discount/items/update';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('discount/items/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

}