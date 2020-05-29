
export interface VariantItem {
  /**
   * Name of the variation that belongs to the same item.A seller can offer variations of the same item. For example, the seller could create a fixed-priced listing for a t-shirt design and offer the shirt in different colors and sizes. In this case, each color and size combination is a separate variation. Each variation can have a different quantity and price.
   */
  name: string,
  /**
   * The current stock quantity of the variation in the listing currency.
   */
  stock: number,
  /**
   * The current price of the variation in the listing currency.
   */
  price: number,
  /**
   * A variation SKU (stock keeping unit) is an identifier defined by a seller. It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type, size, and color, which are variations of one item in Shopee Listings.
   */
  variation_sku?: string[]
  
}
export default interface AddVariantRequest {
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  item_id: number,
  /**
   * The variation of item is to list out all models of this product. For example, iPhone has model of White and Black, then its variations includes "White iPhone" and "Black iPhone".
   */
  variations: VariantItem[]

}