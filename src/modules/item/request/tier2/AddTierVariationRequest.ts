
export interface VariationTierItem {  
  /**
   * A list of tier variation combination index, which indicates variation's option position in tier_variation['options'] list. e.g. [0,1] means tier variation 1 option 1 and tier variation 2 option 2.
   */
  tier_index: Number[],
  /**
   * Stock value of this variation item. 0 stock will make this variation a greyout option for buyer.
   */
  stock: Number,
  /**
   * Price value of this variation item.
   */
  price: Number,
  /**
   * SKU string of this variation item.
   */
  variation_sku: string,
}

export default interface AddTierVariationRequest {
  /**
   * The identity of product item.
   */
  item_id: Number,
  /**
   * 2-Tier variation list.
   */
  variation: VariationTierItem[],
}