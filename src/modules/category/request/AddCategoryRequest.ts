export default interface AddCategoryRequest {
  /**
   * ShopCategory's name.
   */
  name: String,
  /**
   * ShopCategory's sort weight.
   */
  sort_weight?: Number
}