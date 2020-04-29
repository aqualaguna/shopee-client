import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import GetOrderListRequest from "./request/GetOrderListRequest";
import GetOrderListResponse from "./response/GetOrderListResponse";
import GetOrderByStatusRequest from "./request/GetOrderByStatusRequest";
import GetOrderByStatusResponse from "./response/GetOrderByStatusResponse";
import GetOrderDetailResponse from "./response/GetOrderDetailResponse";
import GetEscrowDetailResponse from "./response/GetEscrowDetailResponse";
import CancelOrderRequest from "./request/CancelOrderRequest";
import CancelOrderResponse from "./response/CancelOrderResponse";
import AccceptBuyerCancelResponse from "./response/AccceptBuyerCancelResponse";
import RejectBuyerCancelResponse from "./response/RejectBuyerCancelResponse";
import GetForderInfoResponse from "./response/GetForderInfoResponse";
import GetEscrowReleasedOrderRequest from "./request/GetEscrowReleasedOrderRequest";
import GetEscrowReleasedOrderResponse from "./response/GetEscrowReleasedOrderResponse";
import SplitOrderRequest from "./request/SplitOrderRequest";
import SplitOrderResponse from "./response/SplitOrderResponse";
import UndoSplitResponse from "./response/UndoSplitResponse";
import PaginationRequest from "../category/request/PaginationRequest";
import GetUnbindOrderResponse from "./response/GetUnbindOrderResponse";
import MyIncomeResponse from "./response/MyIncomeResponse";

export default class OrderModule extends BaseModule {
  /**
   * GetOrdersList is the recommended call to use for order management.
   * Use this call to retrieve basic information of all orders which are updated within specific period of time.
   *  More details of each order can be retrieved from GetOrderDetails.
   * [Only the recent one month orders can be fetch through this API. Please use GetOrderBySatus API to fetch more orders.]
   * @param request 
   */
  getOrderList(request: GetOrderListRequest): Promise<GetOrderListResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/basics';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/basics' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * GetOrdersByStatus is the recommended call to use for order management.
   * Use this call to retrieve basic information of all orders which are specific status.
   * More details of each order can be retrieved from GetOrderDetails.
   * @param request 
   */
  getOrderByStatus(request: GetOrderByStatusRequest): Promise<GetOrderByStatusResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/get';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to retrieve detailed information about one or more orders based on OrderSN.
   * @param ordersn_list The set of ordersn. You can specify up to 50 ordersns in this call. 
   */
  getOrderDetail(ordersn_list: String[]): Promise<GetOrderDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/detail';
    let params: any = {
      ordersn_list,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/detail' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to retrieve detailed escrow information about one order based on OrderSN.
   * @param ordersn Shopee's unique identifier for an order.
   */
  getEscrowDetail(ordersn: String): Promise<GetEscrowDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/my_income';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/my_income' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to accept buyer cancellation
   * @param ordersn Shopee's unique identifier for an order.
   */
  acceptBuyerCancel(ordersn: String): Promise<AccceptBuyerCancelResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/buyer_cancellation/accept';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/buyer_cancellation/accept' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to reject buyer cancellation
   * @param ordersn Shopee's unique identifier for an order.
   */
  rejectBuyerCancel(ordersn: String): Promise<RejectBuyerCancelResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/buyer_cancellation/reject';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/buyer_cancellation/reject' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to retrieve detailed information of all the fulfill orders(forder) under a single regular order based on ordersn.
   * @param ordersn Shopee's unique identifier for an order.
   */
  getForderInfo(ordersn: String): Promise<GetForderInfoResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/forders/get';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/forders/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this API to cancel split order from the seller side.
   * @param ordersn Shopee's unique identifier for an order.
   */
  undoSplitOrder(ordersn: String): Promise<UndoSplitResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/unsplit';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/unsplit' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to add note for an order
   * @param ordersn Shopee's unique identifier for an order.
   * @param note The note seller made for own reference.
   */
  addOrderNote(ordersn: String, note: String): Promise<GetEscrowDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/note/add';
    let params: any = {
      ordersn,
      note,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/note/add' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this API to fetch the accounting detail of order.
   * @param ordersn Shopee's unique identifier for an order.
   */
  getIncome(ordersn: String): Promise<MyIncomeResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/income';
    let params: any = {
      ordersn,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/income' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to cancel an order from the seller side.
   * @param request 
   */
  cancelOrder(request:CancelOrderRequest): Promise<CancelOrderResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/cancel';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/cancel' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to get orders' release time and escrow amount.
   * @param request 
   */
  getEscrowReleasedOrder(request:GetEscrowReleasedOrderRequest): Promise<GetEscrowReleasedOrderResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/get_escrow_detail';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/get_escrow_detail' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this API to split order into fulfillment orders. This feature is only enabled for whitelisted shops.
   * @param request 
   */
  splitOrder(request:SplitOrderRequest): Promise<SplitOrderResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/split';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/split' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to get a list of unbind orders.
   * @param request 
   */
  getUnbindOrderList(request: PaginationRequest): Promise<GetUnbindOrderResponse> {
    let full_url = this.client.defaults.baseURL + 'orders/unbind/list';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('orders/unbind/list' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


}