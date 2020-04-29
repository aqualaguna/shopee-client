import UpdateVariantStockRequest from "../variant/UpdateVariantStockRequest";

export default interface UpdateVariantStockBatchRequest {
  variations: UpdateVariantStockRequest[],
}