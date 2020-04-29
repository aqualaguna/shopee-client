
export interface ReplyItem {
  /**
   * The identity of comment.
   */
  cmt_id: Number,
  /**
   * Content of the comment.
   */
  comment: String,

}

export default interface ReplyCommentRequest {
  cmt_list: ReplyItem[]
}