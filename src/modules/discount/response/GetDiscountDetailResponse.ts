import { DiscountItem, VariationDiscount } from "../request/AddDiscountRequest";

export interface VariationDiscountDetail extends VariationDiscount {
  /**
   * Name of the variation that belongs to the same item.
   */
  variation_name: string,
  /**
   * The original price before discount of the variation.
   */
  variation_original_price: number,
  /**
   * The current stock quantity of the variation.
   */
  variation_stock: number,
  /**
   * Use this field to indicate the after-tax original price of variation.
   */
  variation_inflated_original_price: number,
  /**
   * Use this field to indicate the after-tax promotion price of variation.
   */
  variation_inflated_promotion_price: number,
}

export interface DiscountDetailItem extends DiscountItem{
  /**
   * Name of the item in local language.
   */
  item_name: string,
  /**
   * The original price before discount of the item. If there is variation, this value is 0.
   */
  item_original_price: number,
  /**
   * The current stock quantity of the item.
   */
  stock: number,
  /**
   * Use this field to indicate the after-tax original price.
   */
  item_inflated_original_price: number,
  /**
   * Use this field to indicate the after-tax promotion price.
   */
  item_inflated_promotion_price: Number

}

export enum DiscountStatus {
  EXPIRED= 'EXPIRED',
  ONGOING= 'ONGOING',
  UPCOMING= 'UPCOMING'
}

export default interface GetDiscountDetailResponse {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number,
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_name: string,
  /**
   * The time when discount activity start.
   */
  start_time: number,
  /**
   * The time when discount activity end.
   */
  end_time: number,
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more: boolean,
  items: DiscountDetailItem[],
  /**
   * The status of discount, applicable values: expired, ongoing, upcoming.
   */
  status: DiscountStatus,
  /**
   * The identifier of the API request for error tracking.
   */
  request_id: string,
}