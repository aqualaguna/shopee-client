import UpdateVariantPriceRequest from "../variant/UpdateVariantPriceRequest";

export default interface UpdateVariantPriceBatchRequest {
  variations: UpdateVariantPriceRequest[],
}