import { TierVariation } from "../../request/tier2/InitTier2Request";

export interface SimpleVariationTier {
  /**
   * Unique identifier of the variation.
   */
  variation_id: Number,
  /**
   * Unique identifier of the variation.
   */
  tier_index: Number[],
}

export default interface GetVariationTierResponse {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * Tier_variation list.
   */
  tier_variation: TierVariation[],
  /**
   * Item's variation list.
   */
  variations: SimpleVariationTier[],
  /**
   * The identifier of the API request for error tracking
   */
  request_id: String,
}