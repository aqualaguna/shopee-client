
export interface SuccItem {
  /**
   * The identity of comment.
   */
  cmt_id: number,

}

export interface ReplyError {
  /**
   * The identity of comment.
   */
  cmt_id: number,
  /**
   * Error message description.
   */
  error_msg: string,
}

export default interface ReplyCommentResponse {
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
  /**
   * list of success reply
   */
  succ_list: SuccItem[],
  /**
   * list of failed reply
   */
  errors: ReplyError[],
}