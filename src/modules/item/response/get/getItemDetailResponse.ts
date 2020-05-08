import { Item } from "../item/AddItemResponse";

export interface ItemDetail extends Item {
  /**
   * Only for TW seller. List of installments
   */
  tenures: Number[],
  /**
   * Use this field to get Wthe locked stock of item by promotions.
   */
  reserved_stock: Number,
  /**
   * Use this field to indicate the after-tax price.
   */
  inflated_price: Number,
  /**
   * Use this field to indicate the after-tax original price.
   */
  inflated_original_price: Number,
}

export interface ItemDetail extends Item {
  is_2tier_item: boolean,
  days_to_ship: number,
  update_time: number,
  create_time: number,
  likes: number,
  views: number,
  sales: number,
  rating_star: number,
  item_id: number,
  size_chart: string,
}

export default interface getItemDetailResponse {
  item: ItemDetail,
  /**
   * Warning returned when the category or attributes are missing/invalid.
   */
  warning: String,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}