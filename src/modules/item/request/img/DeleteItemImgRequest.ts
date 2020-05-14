export default interface DeleteItemImgRequest {
  /**
   * The identity of product item.
   */
  item_id: Number,
  /**
   * Image URLs of the item. It contains at most 9 URLs.Could get the url by api GetItemDetail
   */
  images?: string[],
  /**
   * Image positions of the item. Positions start with 1 and the max number is 9. If the position can not match the old image position, this position would be ignored It contains at most 9 positions. Param position and param images can not been empty at the same time.If there are images and positions at the same time, positions is ignored.
   */
  positions?: Number[],

}