export default interface InsertItemImgRequest {
  /**
   * The identity of product item.
   */
  item_id: Number,
  /**
   * Image URL of the item.
   */
  image_url: string,
  /**
   * The position that insert the image. It starts with 1 and the max number is 9. If the position is bigger than existing position, the image would be placed on the last position.
   */
  image_position: Number
  
}