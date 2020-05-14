export default interface GetAirwayBillRequest {
  /**
   * The set of order serial numbers. Up to 50 ordersn in one call.
   */
  ordersn_list: string[],
  /**
   * Option to get batch airway bills in single file. Default value is false.
   */
  is_batch? :boolean,
  extinfo: {
    /**
     * Use this field to fetch AirwayBill for JOB shipping method.
     */
    job_ordersn_list?: string[]
  }
}