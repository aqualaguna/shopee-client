export default interface InsertItemImgResponse {
  /**
   * item unique identifier
   */
  item_id: Number,
  /**
   * when modified
   */
  modified_time: Number,
  /**
   * list of images.
   */
  images: String[],
  /**
   * The position that insert the image. It starts with 1 and the max number is 9. If the position is bigger than existing position, the image would be placed on the last position.
   */
  request_id: String,
}