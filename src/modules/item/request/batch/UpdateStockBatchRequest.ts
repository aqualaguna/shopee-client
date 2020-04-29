import UpdateStockRequest from "../item/UpdateStockRequest";

export default interface UpdateStockBatchRequest{
  items: UpdateStockRequest[],
}