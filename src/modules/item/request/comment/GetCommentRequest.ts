import PaginationRequest from "../../../category/request/PaginationRequest";

export default interface GetCommentRequest extends PaginationRequest{
  /**
   * The identity of product item.
   */
  item_id: number,
  /**
   * The identity of comment.
   */
  cmt_id?: number,

}