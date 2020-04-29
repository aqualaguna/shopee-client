

export interface TopPickItem {
  /**
   * Item ID
   */
  item_id: Number,
  /**
   * Item Name
   */
  item_name: String,
  /**
   * Item discounted price(original price if no discount). Item level price will return if it has variation.
   */
  item_price: Number,
  /**
   * The sales of the item
   */
  sales: Number,

}

export interface TopPick {
  /**
   * Collection name
   */
  name: String,
  /**
   * Collection ID
   */
  top_picks_id: Number,
  /**
   * True or False
   */
  is_activated: Boolean,
  /**
   * Item list of the collection
   */
  items: TopPickItem[],

}

export default interface GetTopPickListResponse {
  /**
   * Collection list
   */
  collections: TopPick[],
  request_id: String,
}