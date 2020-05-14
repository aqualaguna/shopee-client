import { OrderFmItem } from "../response/GetFmTnDetailResponse";

export default interface FirstMileUnbindRequest {
  /**
   * The first-mile tracking number.
   */
  fm_tn: string,
  order_list: OrderFmItem[],
}