
export interface CategoryItem {
  /**
   * The Identify of the parent of the category
   */
  parent_id: number,
  /**
   * This is to indicate whether the category has children.
   */
  has_children: boolean,
  /**
   * The Identify of each category
   */
  category_id: number,
  /**
   * The name of each category
   */
  category_name: string,
  /**
   * To indicate if this category supports size chart
   */
  is_supp_sizechart: boolean,
}

export default interface GetCategoriesByCountryResponse {
  /**
   * List of categories info.
   */
  categories: CategoryItem[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}