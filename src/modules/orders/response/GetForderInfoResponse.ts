
export enum LogisticStatus {
  LOGISTICS_NOT_START = 'LOGISTICS_NOT_START',
  LOGISTICS_REQUEST_CREATED = 'LOGISTICS_REQUEST_CREATED',
  LOGISTICS_PICKUP_DONE = 'LOGISTICS_PICKUP_DONE',
  LOGISTICS_PICKUP_RETRY = 'LOGISTICS_PICKUP_RETRY',
  LOGISTICS_PICKUP_FAILED = 'LOGISTICS_PICKUP_FAILED',
  LOGISTICS_DELIVERY_DONE = 'LOGISTICS_DELIVERY_DONE',
  LOGISTICS_DELIVERY_FAILED = 'LOGISTICS_DELIVERY_FAILED',
  LOGISTICS_REQUEST_CANCELED = 'LOGISTICS_REQUEST_CANCELED',
  LOGISTICS_COD_REJECTED = 'LOGISTICS_COD_REJECTED',
  LOGISTICS_READY = 'LOGISTICS_READY',
  LOGISTICS_INVALID = 'LOGISTICS_INVALID',
  LOGISTICS_LOST = 'LOGISTICS_LOST',
  LOGISTICS_UNKNOWN = 'LOGISTICS_UNKNOWN',
}


export interface TrackingLog {
  /**
   * The time when logistics info has been updated.
   */
  ctime: Number,
  /**
   * The order logistics tracking info.
   */
  description: String,
}

export interface ForderItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: Number,
  /**
   * The number of identical items/variations purchased at the same time by the same buyer from one listing/item.
   */
  num: Number,
  /**
   * The original price of the item in the listing currency.
   */
  item_price: Number,
  /**
   * The original price of the variation in the listing currency.
   */
  variation_price: Number,
}

export interface LogisticInfo {
  /**
   * The logistics service provider that the buyer selected for the order to deliver items.
   */
  shipping_carrier: String,
  /**
   * Only work for cross-border order. This value indicates whether the order contains goods that are required to declare at customs. "T" means true and it will mark as "T" on the shipping label; "F" means false and it will mark as "P" on the shipping label. This value is accurate ONLY AFTER the order trackingNo is generated, please capture this value AFTER your retrieve the trackingNo.
   */
  goods_to_declare:  Boolean,
  /**
   * Only work for cross-border order. This code is required at some sorting hub. Please ensure the service_code is INCLUDED on your shipping label, otherwise the parcel cannot be processed by the warehouse. If you didn't retrieve service_code after you first called this API, please try few more times within 30 minutes.
   */
  service_code: String,
  /**
   * The tracking number of fullfill order assigned by the shipping carrier for item shipment.
   */
  tracking_no: String,
}

export interface Forder {
  /**
   * The unique identifier for a fulfill order.
   */
  forder_id: String,
  /**
   * The fulfill order logistics status. Applicable values: See Data Definition - LogisticsStatus.
   */
  status: LogisticStatus,
  /**
   * The fulfill order logistics status. Applicable values: See Data Definition - LogisticsStatus.
   */
  tracking_log: TrackingLog[],
  /**
   * The items included in this fulfill order.
   */
  items: ForderItem[],
  logistic_info: LogisticInfo[],
  /**
   * The first-mile tracking number.
   */
  fm_tn: String,
}

export default interface GetForderInfoResponse {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: String,
  /**
   * The fulfill order list
   */
  forder_list : Forder[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}