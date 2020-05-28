export default interface InsertItemImgResponse {
  /**
   * item unique identifier
   */
  item_id: number,
  /**
   * when modified
   */
  modified_time: number,
  /**
   * list of images.
   */
  images: string[],
  /**
   * The position that insert the image. It starts with 1 and the max number is 9. If the position is bigger than existing position, the image would be placed on the last position.
   */
  request_id: string,
}