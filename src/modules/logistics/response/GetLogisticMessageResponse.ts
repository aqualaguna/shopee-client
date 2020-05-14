import { LogisticStatus } from "../../orders/response/GetForderInfoResponse";

export enum TrackingLogisticsStatus {
  INITIAL = 'INITIAL',
  ORDER_INIT = 'ORDER_INIT',
  ORDER_SUBMITTED = 'ORDER_SUBMITTED',
  ORDER_FINALIZED = 'ORDER_FINALIZED',
  ORDER_CREATED = 'ORDER_CREATED',
  PICKUP_REQUESTED = 'PICKUP_REQUESTED',
  PICKUP_PENDING = 'PICKUP_PENDING',
  PICKED_UP = 'PICKED_UP',
  DELIVERY_PENDING = 'DELIVERY_PENDING',
  DELIVERED = 'DELIVERED',
  PICKUP_RETRY = 'PICKUP_RETRY',
  TIMEOUT = 'TIMEOUT',
  LOST = 'LOST',
  UPDATE = 'UPDATE',
  UPDATE_SUBMITTED = 'UPDATE_SUBMITTED',
  UPDATE_CREATED = 'UPDATE_CREATED',
  RETURN_STARTED = 'RETURN_STARTED',
  RETURNED = 'RETURNED',
  RETURN_PENDING = 'RETURN_PENDING',
  RETURN_INITIATED = 'RETURN_INITIATED',
  EXPIRED = 'EXPIRED',
  CANCEL = 'CANCEL',
  CANCEL_CREATED = 'CANCEL_CREATED',
  CANCELED = 'CANCELED',
  FAILED_ORDER_INIT = 'FAILED_ORDER_INIT',
  FAILED_ORDER_SUBMITTED = 'FAILED_ORDER_SUBMITTED',
  FAILED_ORDER_CREATED = 'FAILED_ORDER_CREATED',
  FAILED_PICKUP_REQUESTED = 'FAILED_PICKUP_REQUESTED',
  FAILED_PICKED_UP = 'FAILED_PICKED_UP',
  FAILED_DELIVERED = 'FAILED_DELIVERED',
  FAILED_UPDATE_SUBMITTED = 'FAILED_UPDATE_SUBMITTED',
  FAILED_UPDATE_CREATED = 'FAILED_UPDATE_CREATED',
  FAILED_RETURN_STARTED = 'FAILED_RETURN_STARTED',
  FAILED_RETURNED = 'FAILED_RETURNED',
  FAILED_CANCEL_CREATED = 'FAILED_CANCEL_CREATED',
  FAILED_CANCELED = 'FAILED_CANCELED',
}

export interface TrackingInfo {
  /**
   * The time when logistics info has been updated.
   */
  ctime: Number,
  /**
   * The order logistics tracking info.
   */
  description: string,
  /**
   * The 3PL logistics status for the order. Applicable values: See Data Definition - TrackingLogisticsStatus.
   */
  status: TrackingLogisticsStatus,
}

export default interface GetLogisticMessageResponse {
  /**
   * The tracking number assigned by the shipping carrier for item shipment.
   */
  tracking_number: string,
  tracking_info: TrackingInfo[],
  /**
   * The Shopee logistics status for the order. Applicable values: See Data Definition- LogisticsStatus.
   */
  logistic_status: LogisticStatus,
  /**
   * The identifier of the API request for error tracking
   */
  request_id: string,
  /**
   * The order serial numbers.
   */
  order_sn: string,
  /**
   * Shopee's unique identifier for a fulfillment order.
   */
  forder_id: string,
}