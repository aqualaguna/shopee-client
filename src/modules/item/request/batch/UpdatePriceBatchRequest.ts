import UpdatePriceRequest from "../item/UpdatePriceRequest";

export default interface UpdatePriceBatchRequest {
  items: UpdatePriceRequest[],
}