import { FailFm } from "./FirstMileCodeBindOrderResponse";

export default interface FirstMileUnbindResponse {
  fm_tn: string,
  success: boolean,
  fail_list: FailFm[],
}