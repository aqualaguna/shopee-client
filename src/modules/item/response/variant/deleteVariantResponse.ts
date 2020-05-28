import deleteVariantRequest from "../../request/variant/deleteVariantRequest";

export default interface deleteVariantResponse  extends deleteVariantRequest {
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
  /**
   * The time when stock of the variation is updated.
   */
  modified_time: number,

}