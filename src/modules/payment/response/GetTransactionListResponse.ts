
export enum TransactionStatus {
  FAILED = 'FAILED',
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  INITIAL = 'INITIAL'
}


export enum WalletType {
  ShopeePay= 'shopee pay',
  JKOPay = 'jko pay'
}
export interface PayOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * Name of the shop.
   */
  shop_name: String,
}

export interface Transaction {
  /**
   * The ID of transaction.
   */
  transaction_id: Number,
  /**
   * The status of the transaction，available values: FAILED,COMPLETED,PENDING,INITIAL.
   */
  status: TransactionStatus,
  /**
   * The type of wallet, available values: shopee pay, jko pay.
   */
  wallet_type: WalletType,
  /**
   * The type of transaction.
   */
  transaction_type: String,
  /**
   * The amount of transaction.
   */
  amount: Number,
  /**
   * The current balance of this account.
   */
  current_balance: Number,
  /**
   * The create time of the transaction.
   */
  create_time: Number,
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: String,
  /**
   * The serial number of return.
   */
  refund_sn: String,
  /**
   * The type of withdrawal.
   */
  withdrawal_type: String,
  /**
   * This field indicates the transaction fee.
   */
  transaction_fee: Number,
  /**
   * The detailed description of TOPUP SUCCESS and TOPUP FAILED.
   */
  description: String,
  /**
   * The name of buyer.
   */
  buyer_name: String,
  /**
   * List of ordersn included in the transaction.
   */
  pay_order_list: PayOrder[],
  /**
   * Name of the shop.
   */
  shop_name: String,
  /**
   * Withdraw ID when transaction type is withdraw_created, withdrawal_completed, withdrawal_cancelled.
   */
  withdraw_id: Number,
}

export default interface GetTransactionListResponse {
  /**
   * This is to indicate whether the transaction list is more than one page. If this value is true, you may want to continue to check next page to retrieve orders.
   */
  has_more: Boolean,
  transaction_list: Transaction[]
}