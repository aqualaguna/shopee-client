import { DisputeReason } from "../request/DisputeReturnRequest";

export enum ReturnReason {
  NONE= 'NONE',
  NOT_RECEIPT= 'NOT_RECEIPT',
  WRONG_ITEM= 'WRONG_ITEM',
  ITEM_DAMAGED= 'ITEM_DAMAGED',
  DIFFERENT_DESCRIPTION= 'DIFFERENT_DESCRIPTION',
  MUTUAL_AGREE= 'MUTUAL_AGREE',
  OTHER= 'OTHER',
  ITEM_WRONGDAMAGED= 'ITEM_WRONGDAMAGED',
  CHANGE_MIND= 'CHANGE_MIND',
  ITEM_MISSING= 'ITEM_MISSING',
  EXPECTATION_FAILED= 'EXPECTATION_FAILED',
  ITEM_FAKE= 'ITEM_FAKE',
}

export enum ReturnStatus {
  REQUESTED = 'REQUESTED',
  ACCEPTED = 'ACCEPTED',
  CANCELLED = 'CANCELLED',
  JUDGING = 'JUDGING',
  REFUND_PAID = 'REFUND_PAID',
  CLOSED = 'CLOSED',
  PROCESSING = 'PROCESSING',
  SELLER_DISPUTE = 'SELLER_DISPUTE',
}

export interface ReturnItem {
  /**
   * Item id.
   */
  item_id: Number,
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  variation_id: Number,
  /**
   * Name of item in local language.
   */
  name: string,
  /**
   * Image URLs of item.
   */
  images: string[],
  /**
   * Amount of this item.
   */
  amount: Number,
  /**
   * The price of Item.
   */
  item_price: Number,
  /**
   * To indicate if this item belongs to an addon deal.
   */
  is_add_on_deal: boolean,
  /**
   * To indicate if this item is main item or sub item. True means main item, false means sub item.
   */
  is_main_item: boolean,
  /**
   * A unique ID to distinguish groups of items in Cart, and Order. (e.g. AddOnDeal)
   */
  add_on_deal_id: Number
}

export interface Return {
  /**
   * Image URLs of return.
   */
  images: string[],
  /**
   * Reason for return product. Applicable values: See Data Definition- ReturnReason.
   */
  reason: ReturnReason,
  /**
   * Reason that buyer provide.
   */
  text_reason: string,
  /**
   * The serial number of return.
   */
  returnsn: Number,
  /**
   * Amount of the refund.
   */
  refund_amount: Number,
  /**
   * Currency of the return.
   */
  currency: string,
  /**
   * The time of return create.
   */
  create_time: Number,
  /**
   * The time of return modified.
   */
  update_time: Number,
  /**
   * Enumerated type that defines the current status of the return. Applicable values: See Data Definition- ReturnStatus.
   */
  status: ReturnStatus,
  /**
   * The last time seller deal with this return.
   */
  due_date: Number,
  /**
   * The tracking number assigned by the shipping carrier for item shipment.
   */
  tracking_number: string,
  /**
   * The reason of seller dispute return. While the return has been disputed, this field is useful. Applicable values: See Data Definition- ReturnDisputeReason.
   */
  dispute_reason: DisputeReason,
  /**
   * The reason that seller provide. While the return has been disputed, this field is useful.
   */
  dispute_text_reason: string,
  /**
   * Items to be sent back to seller. Can be either integrated/non-integrated.
   */
  needs_logistics: boolean,
  /**
   * Order price before discount.
   */
  amount_before_discount: Number,

  user: {
    /**
     * Buyer's nickname.
     */
    username: string,
    /**
     * Buyer's email.
     */
    email:string,
    /**
     * Buyer's picture.
     */
    portrait: string,
  },
  
  item: ReturnItem[],
  /**
   * Shopee's unique identifier for an order.
   */
  ordersn: string,
}

export default interface GetReturnListResponse {
  returns: Return[],
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more: boolean,
  /**
   * The identifier for an API request for error tracking
   */
  request_id: string,
}