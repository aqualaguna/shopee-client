import { Item } from "./AddItemResponse";

export default interface updateItemResponse {
  /**
   * unique identifier for item.
   */
  item_id: String,
  /**
   * item modified
   */
  item: Item,
  warning: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}