import { Failure } from "./UpdatePriceBatchResponse";


export interface FailureVariant extends Failure {
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: Number,
}

export interface ModificationVariant{
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: Number,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: Number,

}

export interface BatchResultVariant {
  /**
   * Informations for failed price updating.
   */
  failures: FailureVariant[],
  /**
   * List of item_id which have been updated successfully.
   */
  modifications: string[]|ModificationVariant[],
}

export default interface UpdateVariantPriceBatchResponse {
  /**
   * Result of batch updating.
   */
  batch_result: BatchResultVariant[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}