export default interface UpdateDiscountRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: Number,
  /**
   * Title of the discount.
   */
  discount_name?: String,
  /**
   * The time when discount activity start. The new start time must later than original start time. Start time cannot be changed after discount starts.
   */
  start_time?: Number,
  /**
   * The time when discount activity end. The end time must be 1 hour later than start time. End time can only be shortened.
   */
  end_time?: Number,
  
}