export interface ImageShopee {
  /**
   * Url of items' image.The system would synchronous download the image one by one.if one of those image can not fetch, would get a warning in result.But can continue the AddItem proccessing.
   */
  url: String,
}

export interface Attribute {
  /**
   * related to shopee.item.GetAttributes result.attributes.attribute_id
   */
  attributes_id: Number,
  /**
   * related to shopee.item.GetAttributes one of result.attributes.options. Max length is 40 letters.
   */
  value: String,
}

export interface Logistic {
  /**
   * related to shopee.logistics.GetLogistics result.logistics.logistic_id
   */
  logistic_id: Number,
  /**
   * related to shopee.logistics.GetLogistics result.logistics.enabled only affect current item
   */
  enabled: Boolean,
  /**
   * Only needed when logistics fee_type = CUSTOM_PRICE.
   */
  shipping_fee?: Number,
  /**
   * If specify logistic fee_type is SIZE_SELECTION size_id is required
   */
  size_id?: Number,
  /**
   * when seller chooses this option, the shipping fee of this channel on item will be set to 0. Default value is False.
   */
  is_free?: Boolean,
}

export interface Wholesale {
  /**
   * The min count of this tier wholesale. If the wholesale is not the first one, the min count must equal to max count of last tier plus one.
   */
  min: Number, 
  /**
   * The max count of this tier wholesale.
   */
  max: Number,
  /**
   * The current price of the wholesale in the listing currency. The price must be cheaper than original price. And if the wholesale is not the first one, the price must be cheaper than previous tier.
   */
  unit_price: Number,
}

export default interface AddItemRequest {
  /**
   * Should call shopee.item.GetCategories to get category first.Related to result.categories.category_id
   */
  category_id: Number,
  /**
   * Name of the item in local language.
   */
  name: String,
  /**
   * Description of the item in local language. HTML is not supported.
   */
  description: String,
  /**
   * The current price of the item in the listing currency. This value will be ignored if there is variation level price input.
   */
  price: Number,
  /**
   * The current stock quantity of the item. This value will be ignored if there is variation level stock input.
   */
  stock: Number,
  /**
   * An item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku?: String,
  /**
   * Image URLs of the item. Up to 9 images(12 images for TW mall seller), max 2.0 MB each.Image format accepted: JPG, JPEG, PNG.Suggested dimension: 1024 x 1024 px. Max size: 2MB
   */
  images: ImageShopee[],

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
  weight: Number,
  /**
   * The length of package for this single item, the unit is CM
   */
  package_length: Number,
  /**
   * The width of package for this single item, the unit is CM
   */
  package_width: Number,
  /**
   * The height of package for this single item, the unit is CM
   */
  package_height: Number,
  /**
   * The guaranteed days to ship orders. For pre-order, please input value from 7 to 30; for non pre-order, please exclude this field and it will default to the respective standard value per your shop location.(e.g. 3 for CrossBorder)
   */
  days_to_ship?: Number,

  /**
   * The wholesales tier list. Please put the wholesale tier info in order by min count.
   */
  wholesales? : Wholesale[],
  /**
   * Url of size chart image. Only particular categories support it. max size: 500KB. 2000*2000 pixels
   */
  size_chart?: String,
  /**
   * This indicates whether the item is secondhand.
   */
  condition: ItemCondition,
  /**
   * Use this field to indicate the initial status of the new item. Value can be one of 'NORMAL' or 'UNLIST'.
   */
  status: ItemStatus,
  /**
   * Use this field to identify whether the item is pre-order. Applicable value: true/false.
   */
  is_pre_order?: Boolean,
}

export enum ItemStatus {
  NORMAL= 'NORMAL',
  UNLIST='UNLIST',
  DELETE= 'DELETED',
  BANNED = 'BANNED'
}
export enum ItemCondition {
  NEW = 'NEW',
  USED= 'USED'
}