/**
 * {
      spam_listing_violation: { threshold_type: 'lte', unit: null, target: 0, my: 0 },
      overall_review_rating: { threshold_type: 'gte', unit: null, target: 4.5, my: 0 },
      average_preparation_time: { threshold_type: 'lte', unit: 'second', target: 172800, my: 0 },
      late_shipment_rate: { threshold_type: 'lt', unit: 'percent', target: 5, my: 0 },
      return_refund_rate: { threshold_type: 'lt', unit: 'percent', target: 2.5, my: 0 },
      response_time: { threshold_type: 'lte', unit: 'second', target: 86400, my: 0 },
      prohibited_listing_violation: { threshold_type: 'lte', unit: null, target: 0, my: 0 },
      cancellation_rate: { threshold_type: 'lt', unit: 'percent', target: 2.5, my: 0 },
      counterfeit_listing_violation: { threshold_type: 'lte', unit: null, target: 0, my: 0 },
      shop_rating: { threshold_type: null, unit: null, target: 5, my: null },
      response_rate: { threshold_type: 'gte', unit: 'percent', target: 70, my: 0 },
      non_fulfillment_rate: { threshold_type: 'lt', unit: 'percent', target: 5, my: 0 },
      request_id: 'f0f1440cbe07acde08e0e2c4e9e55189'
    }
 */

export interface Threshold {
  /**
   * The threshold used to compare shop's actual performance to the target performance. It has four types: lt(less than), gt(greater than), lte(less than or equal), gte(greater than or equal).
   */
  threshold_type: string, 
  /**
   * Null, not applicable.
   */
  unit: string,
  /**
   * Your target performance index.
   */
  target: number,
  /**
   * Your actual performance index.
   */
  my: number
}
export default interface PerformanceResponse {
  /**
   * To ensure that buyers can easily find what they are looking for, any attempts by sellers to manipulate search results to gain an unfair advantage will be penalized.
   */
  spam_listing_violation: Threshold[] | Threshold,
  /**
   * Overall review rating is the average of all order ratings submitted by your buyers.
   */
  overall_review_rating: Threshold[] | Threshold,
  /**
   * Preparation time is the number of days it takes a seller to prepare and ship out an order.
   */
  average_preparation_time: Threshold[] | Threshold,
  /**
   * Preparation time is the number of days it takes a seller to prepare and ship out an order.
   */
  late_shipment_rate: Threshold[] | Threshold,
  /**
   * Return-refund rate is the percentage of orders (out of total orders) that were requested by buyers for a return-refund in the past 30 days.
   */
  return_refund_rate: Threshold[] | Threshold,
  /**
   * Chat response time is the average time it takes a seller to respond to a buyer's chat message.
   */
  response_time: Threshold[] | Threshold,
  /**
   * It is the responsibility of sellers to ensure all items listed under their profiles are fully compliant with local laws, as well as Shopee’s terms and policies.
   */
  prohibited_listing_violation: Threshold[] | Threshold,
  /**
   * Cancellation rate is the percentage of orders (out of total orders) cancelled by a seller in the past 30 days. Buyers initiatied cancellations are not included in the calculation.
   */
  cancellation_rate: Threshold[] | Threshold,
  /**
   * Sellers should only list authentic products. Counterfeit items are products that were made in exact imitation of an existing brand with the intention to deceive or defraud, and may include, but are not limited to: - Products that are fake or replicas of an existing official product - Products that have never been produced by a specific brand - Products that bear such similarities with other products (e.g. a replica of a branded item with or without altered logos) without the authorization of the trademark owner
   */
  counterfeit_listing_violation: Threshold[] | Threshold,
  /**
   * Your shop rating
   */
  shop_rating: Threshold[] | Threshold,
  /**
   * Your shop rating
   */
  response_rate: Threshold[] | Threshold,
  /**
   * Non-fulfilment rate is the percentage of orders (out of total orders) that were either cancelled or returned in the past 30 days. Only orders cancelled by sellers are taken into consideration when computing non-fulfilment rate. Non-fulfilment rate is also the sum of your cancellation rate and return-refund rate.
   */
  non_fulfillment_rate: Threshold[] | Threshold,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}