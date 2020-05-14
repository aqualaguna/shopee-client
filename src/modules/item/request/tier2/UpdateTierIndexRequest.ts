import { SimpleVariationTier } from "../../response/tier2/GetVariationTierResponse";

export default interface UpdateTierIndexRequest {
  /**
   * 2-Tier variation list.
   */
  item_id: number,
  /**
   * 2-Tier variation list.
   */
  variation: SimpleVariationTier[],

}