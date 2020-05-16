
export interface ItemBoost {
  /**
   * boosted items' id.
   */
  item_id: number,
  /**
   * Cooldown_second time is four hours after boost. After four hours you can boost this item again.
   */
  cooldown_seoond: number,
}

export default interface GetBoostResponse {
  /**
   * This is to indicate the timestamp of the request. Required for all requests.
   */
  request_id: string,
  items: ItemBoost[],
}