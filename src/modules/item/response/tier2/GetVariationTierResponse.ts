import { TierVariation } from "../../request/tier2/InitTier2Request";

export interface SimpleVariationTier {
  /**
   * Unique identifier of the variation.
   */
  variation_id: number,
  /**
   * Unique identifier of the variation.
   */
  tier_index: number[],
}

export default interface GetVariationTierResponse {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number,
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
  request_id: string,
}