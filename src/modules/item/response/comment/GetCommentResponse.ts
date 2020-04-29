
export enum CommentStatus {
  DELETE ='DELETE',
  NORMAL ='NORMAL',
  VALID ='VALID',
  HIDDEN ='HIDDEN',
}

export enum CommentEditable {
  EXPIRED='EXPIRED',
  EDITABLE='EDITABLE',
  HAVE_EDIT_ONCE='HAVE_EDIT_ONCE',
}

export interface Comment {
  /**
   * The identity of comment.
   */
  cmt_id: Number,
  /**
   * Content of the comment.
   */
  comment: String,
  /**
   * Username of the buyer who posted the comment.
   */
  buyer_username: String,
  /**
   * Commented ordersn
   */
  ordersn: String,
  /**
   * Commented item's id
   */
  item_id: Number,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: Number,
  /**
   * The create time of the comment
   */
  create_time: Number,
  /**
   * The status of comment, available values: DELETE/NORMAL/VALID/HIDDEN
   */
  status: CommentStatus,
  /**
   * Buyer's rating for the item
   */
  rating_star: Number,
  /**
   * The edit status of comment, available values: EXPIRED/EDITABLE/HAVE_EDIT_ONCE
   */
  editable: CommentEditable,
  cmt_reply: {
    /**
     * The content of reply
     */
    reply: String,
    /**
     * The status of comment, available values: DELETE/NORMAL/VALID/HIDDEN
     */
    status: CommentStatus
  }
}

export default interface GetCommentResponse {
  /**
   * This is to indicate whether the comment list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of comments.
   */
  more: Boolean,
  item_cmt_list: Comment[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String
}