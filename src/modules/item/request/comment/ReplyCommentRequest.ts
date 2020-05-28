
export interface ReplyItem {
  /**
   * The identity of comment.
   */
  cmt_id: number,
  /**
   * Content of the comment.
   */
  comment: string,

}

export default interface ReplyCommentRequest {
  cmt_list: ReplyItem[]
}