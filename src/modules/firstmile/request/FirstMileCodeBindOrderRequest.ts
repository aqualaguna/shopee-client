
export interface OrderFmItem {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
  /**
   * The unique identifier for a fulfillment order.
   */
  forder_id?: string
}


export default interface FirstMileCodeBindOrderRequest {
  /**
   * The set of ordersn. You can specify up to 50 ordersns in this call.one fm_tn maximum number of total bind orders is 10000.
   */
  order_list: OrderFmItem[],
  /**
   * The first-mile tracking number.
   */
  fm_tn: string,
  /**
   * The shipment method for bound orders, should be pickup or dropoff.
   */
  shipment_method: string,
  /**
   * The identity of first-mile logistic channel
   */
  logistic_id: number,
  /**
   * The volume of the parcel.
   */
  volume?: number,
  /**
   * The weight of the parcel.
   */
  weight?: number,
  /**
   * The width of the parcel.
   */
  width?: number,
  /**
   * The length of the parcel.
   */
  length?: number,
  /**
   * The height of the parcel.
   */
  height?: number,
  /**
   * Use this field to specify the region you want to ship parcel.
   * sample: cn
   */
  area: string,
}