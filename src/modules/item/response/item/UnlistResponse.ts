import { ItemUnlist } from "../../request/item/UnlistRequest";

export interface FailedItem {
  item_id: Number,
  error_description: string,
}

export default interface UnlistResponse {
  /**
   * List of item ids which failed to update status, including their reasons
   */
  failed: FailedItem[],
  success: ItemUnlist[], 
  /**
   * The identifier of the API request for error tracking
   */
  request_id: string,

}