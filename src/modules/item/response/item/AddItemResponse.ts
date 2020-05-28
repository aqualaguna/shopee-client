import { ItemStatus, Wholesale, ItemCondition, Attribute, Logistic } from "../../request/item/AddItemRequest";

export interface Item {
  /**
   * Shopee's unique identifier for a shop.
   */
  shopid: number,
  /**
   * An item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku: string,
  /**
   * Enumerated type that defines the current status of the item. Applicable values: NORMAL, DELETED, UNLIST and BANNED.
   */
  status: ItemStatus,
  /**
   * Name of the item in local language.
   */
  name: string,
  /**
   * Description of the item in local language.
   */
  description: string,
  /**
   * Image URLs of the item. It contains at most 9 URLs.
   */
  images: string[],
  /**
   * The three-digit code representing the currency unit used for the item in Shopee Listings.
   */
  currency: string,
  /**
   * This is to indicate whether the item has variation(s).
   */
  has_variation: boolean,
  /**
   * The current price of the item in the listing currency.If item is in promotion, this value is discount price.
   */
  price: number,
  /**
   * The current stock quantity of the item.
   */
  stock: number,
  /**
   * Timestamp that indicates the date and time that the item was created.
   */
  create_time: number,
  /**
   * Timestamp that indicates the date and time that the item was created.
   */
  update_time: number,


  /**
   * The wholesales tier list. Please put the wholesale tier info in order by min count.
   */
  wholesales? : Wholesale[],
  /**
   * Url of size chart image. Only particular categories support it. max size: 500KB. 2000*2000 pixels
   */
  size_chart?: string,
  /**
   * This indicates whether the item is secondhand.
   */
  condition: ItemCondition,

  /**
   * This field is optional(expect Indonesia) depending on the specific attribute under different categories. Should call shopee.item.GetAttributes to get attribute first. Must contain all all mandatory attribute.
   */
  attributes? : Attribute[],
  /**
   * Should call shopee.logistics.GetLogistics to get logistics first. Should contain all all logistics.
   */
  logistics: Logistic[],
  /**
   * the net weight of this item, the unit is KG.
   */
  weight: number,
  /**
   * The length of package for this single item, the unit is CM
   */
  package_length: number,
  /**
   * The width of package for this single item, the unit is CM
   */
  package_width: number,
  /**
   * The height of package for this single item, the unit is CM
   */
  package_height: number,
  /**
   * The guaranteed days to ship orders. For pre-order, please input value from 7 to 30; for non pre-order, please exclude this field and it will default to the respective standard value per your shop location.(e.g. 3 for CrossBorder)
   */
  days_to_ship?: number,
  /**
   * Could call shopee.item.GetCategories to get category detail.Related to result.categories.category_id
   */
  category_id: number,
  /**
   * The original price of the item in the listing currency.
   */
  original_price: number,
  /**
   * The variation list of item
   */
  variations: Variant[],
  /**
   * The sales volume of item.
   */
  sales: number,
  /**
   * The page view of item.
   */
  views: number,
  /**
   * The conllection number of item.
   */
  likes: number,
  /**
   * The rating star scores of this item.
   */
  rating_star: number,
  /**
   * Count of comments for the item.
   */
  cmt_count: number,
  /**
   * The ID of discount activity the item is currently in. One item can only have one discount at a time. discount_id will be 0 if the item has no discount applied, or item has variation.
   */
  discount_id: number,
  /**
   * Use this field to identify whether the item is pre-order. Applicable value: true/false.
   */
  is_pre_order: boolean,
}

export interface Variant {
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: number,
  /**
   * A variation SKU (stock keeping unit) is an identifier defined by a seller. It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type, size, and color, which are variations of one item in Shopee Listings.
   */
  variation_sku: string,
  /**
   * Name of the variation that belongs to the same item. A seller can offer variations of the same item. For example, the seller could create a fixed-priced listing for a t-shirt design and offer the shirt in different colors and sizes. In this case, each color and size combination is a separate variation. Each variation can have a different quantity and price.
   */
  name: string,
  /**
   * The current price of the variation in the listing currency.If item is in promotion, this value is discount price.
   */
  price: number,
  /**
   * The current stock quantity of the variation in the listing currency.
   */
  stock: number,
  /**
   * Enumerated type that defines the current status of the variation. Applicable values: MODEL_NORMAL and MODEL_DELETED.
   */
  status: VariantStatus,
  /**
   * Timestamp that indicates the date and time that the variation was created.
   */
  create_time: number,
  /**
   * Timestamp that indicates the last time that there was a change in value of the variation, such as price/stock change.
   */
  update_time: number,
  /**
   * The original price of the variation in the listing currency.
   */
  original_price: number,
  /**
   * The ID of discount activity the variation is currently in. One variation can only have one discount at a time. discount_id will be 0 if the variation has no discount applied.
   */
  discount_id: number,
}
export enum VariantStatus {
  MODEL_DELETED = 'MODEL_DELETED',
  MODEL_NORMAL = 'MODEL_NORMAL'
}

export default interface AddItemResponse {
  /**
   * unique identifier for item
   */
  item_id: number,
  /**
   * Item's info.
   */
  item: Item,
  warning: string,
  /**
   * Image URLs for fail download.
   */
  fail_image: string[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
  /**
   * Url of size chart image. Only particular categories support it. max size: 500KB. 2000*2000 pixels
   */
  size_chart: string,
}