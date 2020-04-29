import { TopPickItem } from "./GetTopPickListResponse";

export default interface AddTopPickResponse {
  /**
   * Collection id
   */
  top_picks_id: Number,
  /**
   * Whether it is activated or not.
   */
  is_activated: Boolean,
  /**
   * Collection name
   */
  name: String,
  /**
   * Item list of the collection
   */
  items: TopPickItem
}