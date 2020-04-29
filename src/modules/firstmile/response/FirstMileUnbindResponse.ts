import { FailFm } from "./FirstMileCodeBindOrderResponse";

export default interface FirstMileUnbindResponse {
  fm_tn: String,
  success: Boolean,
  fail_list: FailFm[],
}