export default interface GetRecommendCategoryResponse {
  /**
   * List of recommended category ids.
   */
  category_ids: Number[],
  /**
   * The identifier of the API request for error tracking
   */
  request_id: string,
}