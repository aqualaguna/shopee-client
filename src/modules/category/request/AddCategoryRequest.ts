export default interface AddCategoryRequest {
  /**
   * ShopCategory's name.
   */
  name: string,
  /**
   * ShopCategory's sort weight.
   */
  sort_weight?: number
}