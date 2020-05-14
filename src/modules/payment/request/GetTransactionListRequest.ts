import PaginationRequest from "../../category/request/PaginationRequest";
import { WalletType } from "../response/GetTransactionListResponse";

export default interface GetTransactionListRequest extends PaginationRequest {
  /**
   * The create_time_from field is the starting date range. The maximum date range that may be specified with the create_time_from and create_time_to fields is 15 days.
   */
  create_time_from?: number,
  /**
   * The create_time_to field is the ending date range. The maximum date range that may be specified with the create_time_from and create_time_to fields is 15 days.
   */
  create_time_to?: number,
  /**
   * This field indicates the wallet type.
   */
  wallet_type?: WalletType,
  /**
   * This field indicates the transaction type.
   */
  transaction_type?: string,
}