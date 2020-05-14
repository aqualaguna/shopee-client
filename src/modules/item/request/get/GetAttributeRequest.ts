export default interface GetAttributeRequest {
  /**
   * The Identify of category. Should call shopee.item.GetCategories to get category_id first. Attributes can ONLY be fetched for the category_id WITHOUT children.
   */
  category_id: number,
  /**
   * Indicate the translation language. Language values include: en(English), vi(Vietnamese), id(Indonesian), th(Thai), zh-Hant(Traditional Chinese), zh-Hans(Simplified Chinese), ms-my(Malaysian Malay). If the selected language is not supported in certain shop location, the response will be in default language.
   */
  language?: string,
  /**
   * Two-characters country code(capital letter) for the attributes. Should be provided if no "shopid".
   */
  country?: string,
  /**
   * Is cross-border or not. Should be provided if no "shopid".
   */
  is_cb?: boolean, 
  /**
   * Shopee's unique identifier for a shop. Should be provided if no "country" and "is_cb".
   */
  shopid?: Number
}