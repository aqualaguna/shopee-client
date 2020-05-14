
export interface PaymentMethod {
  /**
   * The payment method
   */
  payment_method: string,
  /**
   * The country for this payment method
   */
  country: string,

}

export default interface GetPaymentListResponse {
  payment_method_list: PaymentMethod[],
  request_id: string,
}