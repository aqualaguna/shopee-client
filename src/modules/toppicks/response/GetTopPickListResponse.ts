

export interface TopPickItem {
  /**
   * Item ID
   */
  item_id: number,
  /**
   * Item Name
   */
  item_name: string,
  /**
   * Item discounted price(original price if no discount). Item level price will return if it has variation.
   */
  item_price: number,
  /**
   * The sales of the item
   */
  sales: number,

}

export interface TopPick {
  /**
   * Collection name
   */
  name: string,
  /**
   * Collection ID
   */
  top_picks_id: number,
  /**
   * True or False
   */
  is_activated: boolean,
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
  request_id: string,
}