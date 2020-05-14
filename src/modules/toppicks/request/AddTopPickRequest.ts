export default interface AddTopPickRequest {
  /**
   * Collection name. 1 to 24 characters.
   */
  name: string,
  /**
   * the list of item id. Allow 4 to 8 items in one collection.
   */
  item_ids: Number[],
  /**
   * True or False
   */
  is_activated: boolean,

}