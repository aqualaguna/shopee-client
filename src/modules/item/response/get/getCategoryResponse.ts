
export interface DayShip {
  /**
   * The maximum of dts，-1 means no dts.
   */
  max_limit: Number,
  /**
   * The minimum of dts，-1 means no dts.
   */
  min_limit: Number,
}
export interface CategoryItem {
  /**
   * The Identify of each category
   */
  category_id: Number,
  /**
   * The Identify of the parent of the category
   */
  parent_id: Number,
  /**
   * The name of each category
   */
  category_name: string,
  /**
   * This is to indicate whether the category has children. Attributes can ONLY be fetched for the category_id WITHOUT children.
   */
  has_children: boolean,
  /**
   * The limits of pre-order items' days_to_ship based on per category.
   */
  days_to_ship_limits: DayShip,
}

export default interface getCategoryResponse {
  categories: CategoryItem[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,

}