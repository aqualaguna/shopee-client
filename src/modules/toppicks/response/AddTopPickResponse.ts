import { TopPickItem } from "./GetTopPickListResponse";

export default interface AddTopPickResponse {
  /**
   * Collection id
   */
  top_picks_id: number,
  /**
   * Whether it is activated or not.
   */
  is_activated: boolean,
  /**
   * Collection name
   */
  name: string,
  /**
   * Item list of the collection
   */
  items: TopPickItem
}