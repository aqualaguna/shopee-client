export default interface UpdateTopPickRequest {
  /**
   * Collection id
   */
  top_picks_id: Number,
  /**
   * Collection name. 1 to 24 characters.
   */
  name: string,
  /**
   * The list of item id. Existed item_ids will overridden by the new_item_ids.
   */
  item_ids: Number[],
  /**
   * True or False. If true, it will activate this collection and deactivate the original one.
   */
  is_activated: boolean
}