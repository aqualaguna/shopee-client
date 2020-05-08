


export interface TierVariation {
  /**
   * Tier variation name.
   */
  name: String,
  /**
   * Tier variation value options list. Option length should be under 20. Quantity of combinations of all 2 tier options is up to 50.
   */
  options: String[],
  /**
   * Tier variation images. Can only be applied for the first level options. Urls sequence match the options sequence and urls number cannot exceed options number.
   */
  images_url?: String[],
}

export interface TierVariation2 {
  /**
   * A list of tier variation combination index, which indicates variation's option position in tier_variation['options'] list. e.g. [0,1] means tier variation 1 option 1 and tier variation 2 option 2.
   */
  tier_index: Number[],
  /**
   * Stock value of this variation item. The original variation stock will be override when calling this API to initialize 2-tier structure for an existed item. 0 stock will make this variation a greyout option for buyer.
   */
  stock: Number,
  /**
   * Price value of this variation item. The original variation price will be override when calling this API to initialize 2-tier structure for an existed item.
   */
  price: Number,
  /**
   * SKU string of this variation.SKU length should be under 100.
   */
  variation_sku: String,
}

export default interface InitTier2Request {
  /**
   * The identity of product item.
   */
  item_id: Number,
  /**
   * Tier_variation list. Up to 2 tiers.
   */
  tier_variation: TierVariation[],
  /**
   * 2-Tier variation list.
   */
  variation: TierVariation2[],


}