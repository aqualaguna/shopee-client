export default interface GenerateFMTrackingNoRequest {
  /**
   * This field is used for seller to specify the declare time.
   * sample : 2019-01-01
   */
  declare_date: String,
  /**
   * The number of first-mile tracking numbers generated.
   */
  quantity: Number,
  /**
   * This object contains detailed breakdown for the seller address.
   */
  seller_info: {
    /**
     * The full address of the seller.
     */
    address: String,
    /**
     * Seller's name for the address.
     */
    name: String,
    /**
     * Seller's postal code.
     */
    zipcode: String,
    /**
     * Seller's location.
     */
    area: String,
    /**
     * Seller's phone number.
     */
    phone: String,
  }
}