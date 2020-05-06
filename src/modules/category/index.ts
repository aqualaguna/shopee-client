import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import PaginationRequest from "./request/PaginationRequest";
import GetCategoryReponse, { Category } from "./response/getCategoryResponse";
import AddCategoryRequest from "./request/AddCategoryRequest";
import AddCategoryResponse from "./response/AddCategoryResponse";
import DeleteCategoryRequest from "./request/DeleteCategoryRequest";
import DeleteCategoryResponse from "./response/DeleteCategoryResponse";
import AddItemResponse from "./response/AddItemResponse";
import GetItemsRequest from "./request/GetItemsRequest";
import GetItemsResponse from "./response/GetItemsResponse";
import DeleteItemRequest from "./request/DeleteItemRequest";
import DeleteItemResponse from "./response/DeleteItemResponse";
import AddItemRequest from "./request/AddItemRequest";

export default class CategoryModule extends BaseModule {
  /**
   * Use this call to get list of in-shop categories.
   */
  getCategory(request: PaginationRequest): Promise<GetCategoryReponse> {
    let full_url = this.client.defaults.baseURL + 'shop_category/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop_category/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  
  /**
   * Use this call to add a new collecion
   */
  addCategory(request: AddCategoryRequest): Promise<AddCategoryResponse> {
    let full_url = this.client.defaults.baseURL + 'shop_category/add';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop_category/add' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
  /**
   * Use this call to delete a existing collecion
   * @param request 
   */
  deleteCategory(request: DeleteCategoryRequest): Promise<DeleteCategoryResponse> {
    let full_url = this.client.defaults.baseURL + 'shop_category/delete';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop_category/delete' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to update a existing collecion
   * @param request 
   */
  updateCategory(request: Category): Promise<DeleteCategoryResponse> {
    let full_url = this.client.defaults.baseURL + 'shop_categorys/update';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop_categorys/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


  /**
   * Use this call to add items list to certain shop_category

   * @param request 
   */
  addItems(request: AddItemRequest): Promise<AddItemResponse> {
    let full_url = this.client.defaults.baseURL + 'shop_category/add/items';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop_category/add/items' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


  /**
   * Use this call to get items list of certain shop_category
   * @param request 
   */
  getItems(request: GetItemsRequest): Promise<GetItemsResponse> {
    let full_url = this.client.defaults.baseURL + 'shop_category/get/items';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop_category/get/items' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

    /**
   * Use this call to get items list of certain shop_category
   * @param request 
   */
  deleteItems(request: DeleteItemRequest): Promise<DeleteItemResponse> {
    let full_url = this.client.defaults.baseURL + 'shop_category/del/items';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('shop_category/del/items' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
  

}