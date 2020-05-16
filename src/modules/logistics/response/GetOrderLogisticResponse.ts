import { BaseAddress } from "./GetLogisticInfoResponse";

export interface FullAddress extends BaseAddress {
  /**
   * The full address of the recipient, including country, state, even street, and etc.
   */
  full_address: string
}
export interface LogisticOrder {
  /**
   * The logistics service provider that the buyer selected for the order to deliver items.
   */
  shipping_carrier: string,
  /**
   * The identity of logistic channel.
   */
  logistic_id: number,
  /**
   * Only work for cross-border order. This code is required at some sorting hub. Please ensure the service_code is INCLUDED on your shipping label, otherwise the parcel cannot be processed by the warehouse. If you didn't retrieve service_code after you first called this API, please try few more times within 30 minutes.
   */
  service_code: string,
  /**
   * Only work for cross-border order.The name of the carrier ships cross countries.
   */
  first_mile_name: string,
  /**
   * Only work for cross-border order.The name of the carrier delivers the parcels in local country.
   */
  last_mile_name: string,
  /**
   * Only work for cross-border order.This value indicates whether the order contains goods that are required to declare at customs. "T" means true and it will mark as "T" on the shipping label; "F" means false and it will mark as "P" on the shipping label. This value is accurate ONLY AFTER the order trackingNo is generated, please capture this value AFTER your retrieve the trackingNo.
   */
  goods_to_declare: boolean,
  /**
   * The tracking number assigned by the shipping carrier for item shipment.
   */
  tracking_no: string,
  
  zone: string,
  /**
   * Only work for cross-border order. The string use for waybill printing. The format is "S - country_code and lane_number". For example, S-TH01, S-TH02
   */
  lane_code: string,
  /**
   * Only work for cross-border order in some special shop. The address info of the warehouse.
   */
  warehouse_address: string,
  /**
   * Only work for cross-border order in some special shop. The ID of the warehouse.
   */
  warehouse_id: number,
  /**
   * This object contains detailed breakdown for the recipient address.
   */
  recepient_address: FullAddress,
  /**
   * This value indicates whether the order was a COD (cash on delivery) order.
   */
  cod: boolean,
  /**
   * The sort_code of recipient.
   */
  recipient_sort_code: {
    /**
     * The first-level sort_code of recipient.
     */
    first_recipient_sort_code: string,
    /**
     * The second-level sort_code of recipient.
     */
    second_recipient_sort_code: string,
    /**
     * The third-level sort_code of recipient.
     */
    third_recipient_sort_code: string,
  },
  /**
   * The sort_code of sender.
   */
  sender_sort_code: {
    /**
     * The first-level sort_code of sender.
     */
    first_sender_sort_code: string,
    /**
     * The second-level sort_code of sender.
     */
    second_sender_sort_code: string,
    /**
     * The third-level sort_code of sender.
     */
    third_sender_sort_code: string,
  }

}

export default interface GetOrderLogisticResponse {
  /**
   * The logistics of order.
   */
  logistics: LogisticOrder[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}