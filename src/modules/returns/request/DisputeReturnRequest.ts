
export enum DisputeReason {
  NON_RECEIPT = 'NON_RECEIPT',
  OTHER = 'OTHER',
  NOT_RECEIVED = 'NOT_RECEIVED'
}

export default interface DisputeReturnRequest {
  /**
   * The serial number of return.
   */
  returnsn: string,
  /**
   * Seller's email.
   */
  email: string,
  /**
   * The reason for seller dispute the return. Available value: NON_RECEIPT/OTHER/NOT_RECEIVED. See Data Definition- ReturnDisputeReason
   */
  dispute_reason: DisputeReason,
  /**
   * The reason description for seller dispute the return.
   */
  dispute_text_reason: string,
  /**
   * Image URLs that seller provide. Seller can upload up 3 images at most.
   */
  images: string[],
}