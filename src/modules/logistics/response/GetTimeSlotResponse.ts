
export interface Pickup {
  /**
   * The identity of pickuptime.
   */
  pickup_time_id: string,
  /**
   * The date of pickup time. In timestamp.
   */
  date: Number,
  /**
   * The text description of pickup time. Only applicable for certain channels.
   */
  time_text: string,
}

export default interface GetTimeSlotResponse {
  pickup_time: Pickup[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}