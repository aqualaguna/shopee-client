
export interface PaymentMethod {
  /**
   * The payment method
   */
  payment_method: String,
  /**
   * The country for this payment method
   */
  country: String,

}

export default interface GetPaymentListResponse {
  payment_method_list: PaymentMethod[],
  request_id: String,
}