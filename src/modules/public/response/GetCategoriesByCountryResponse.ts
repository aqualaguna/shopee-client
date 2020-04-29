
export interface CategoryItem {
  /**
   * The Identify of the parent of the category
   */
  parent_id: Number,
  /**
   * This is to indicate whether the category has children.
   */
  has_children: Boolean,
  /**
   * The Identify of each category
   */
  category_id: Number,
  /**
   * The name of each category
   */
  category_name: String,
  /**
   * To indicate if this category supports size chart
   */
  is_supp_sizechart: Boolean,
}

export default interface GetCategoriesByCountryResponse {
  /**
   * List of categories info.
   */
  categories: CategoryItem[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}