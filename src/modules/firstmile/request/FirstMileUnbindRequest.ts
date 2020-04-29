import { OrderFmItem } from "../response/GetFmTnDetailResponse";

export default interface FirstMileUnbindRequest {
  /**
   * The first-mile tracking number.
   */
  fm_tn: String,
  order_list: OrderFmItem[],
}