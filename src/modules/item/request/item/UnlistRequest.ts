export interface ItemUnlist {
  /**
   * Item's unique identifier.
   */
  item_id: number,
  /**
   * True: unlist this item; False: list this item.
   */
  unlist: boolean
}