
export interface VariationId {
  /**
   * A list of tier variation indexes, which indicate variation's options in tier_variation['options'] list.
   */
  tier_index: Number[],
  /**
   * The identity of the variation.
   */
  variation_id: Number,


}

export default interface InitTier2Response {
  /**
   * The identity of product item.
   */
  item_id: Number,
  /**
   * The identifier of the API request for error tracking
   */
  request_id: String,
  /**
   * Current variation ids under this item
   */
  variation_id_list: VariationId[],

}