import { Item } from "./AddItemResponse";

export default interface updateItemResponse {
  /**
   * unique identifier for item.
   */
  item_id: string,
  /**
   * item modified
   */
  item: Item,
  warning: string,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}