export default interface getParameterInitResponse {
  /**
   * Could contain 'address_id', 'pickup_time_id'. If it contains 'address_id', should call shopee.logistics.GetAddress to get address list, then choose one of the address to init logistic. If it contains pickup_time_id, should call shopee.logistics.GetTimeSlot to get timeslot list, then choose one of the time to init logistic. If it has empty value, developer should still include "pickup" field in Init API.
   */
  pickup: String[],
  /**
   * Could contain 'branch_id', 'sender_real_name' or 'tracking_no'. If it contains 'branch_id', should call shopee.logistics.GetBranch to get branch list. If it contains 'sender_real_name' or 'tracking_no', should manually input these values in Init API. If it has empty value, developer should still include "dropoff" field in Init API.
   */
  dropoff: String[],
  /**
   * Could contain 'tracking_no'. If it contains 'tracking_no', should manually input these values in Init API. If it has empty value, developer should still include "non-integrated" field in Init API.
   */
  non_integrated: String[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}