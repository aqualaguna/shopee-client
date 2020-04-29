
export enum CategoryStatus {
  NORMAL = 'NORMAL',
  INACTIVE= 'INACTIVE',
  DELETED= 'DELETED'
}

export interface Category {
  /**
   * ShopCategory's unique identifier.
   */
  shop_category_id: Number,
  /**
   * ShopCategory's status. Applicable values: NORMAL, INACTIVE, DELETED.
   */
  status: CategoryStatus,
  /**
   * ShopCategory's name.
   */
  name: String,
  /**
   * ShopCategory's sort weight.
   */
  sort_weight: Number,
}

export default interface GetCategoryReponse {
  shop_categorys: Category[],
  /**
   * This is to indicate whether the shop categorys list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of shop categorys.
   */
  more: Boolean,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,

}