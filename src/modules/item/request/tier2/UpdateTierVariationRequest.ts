import { TierVariation } from "./InitTier2Request";

export default interface UpdateTierVariationRequest {
  /**
   * The identity of product item.
   */
  item_id: Number,
  /**
   * Tier_variation list. Length must be 1 or 2.
   */
  tier_variation: TierVariation[],

}