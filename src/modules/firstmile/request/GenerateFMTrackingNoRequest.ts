export default interface GenerateFMTrackingNoRequest {
  /**
   * This field is used for seller to specify the declare time.
   * sample : 2019-01-01
   */
  declare_date: string,
  /**
   * The number of first-mile tracking numbers generated.
   */
  quantity: number,
  /**
   * This object contains detailed breakdown for the seller address.
   */
  seller_info: {
    /**
     * The full address of the seller.
     */
    address: string,
    /**
     * Seller's name for the address.
     */
    name: string,
    /**
     * Seller's postal code.
     */
    zipcode: string,
    /**
     * Seller's location.
     */
    area: string,
    /**
     * Seller's phone number.
     */
    phone: string,
  }
}