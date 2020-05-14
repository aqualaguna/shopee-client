export default interface GetAttributeRequest {
  /**
   * The Identify of category. Should call shopee.item.GetCategories to get category_id first. Attributes can ONLY be fetched for the category_id WITHOUT children.
   */
  category_id: Number,
  /**
   * Indicate the translation language. Language values include: en(English), vi(Vietnamese), id(Indonesian), th(Thai), zh-Hant(Traditional Chinese), zh-Hans(Simplified Chinese), ms-my(Malaysian Malay). If the selected language is not supported in certain shop location, the response will be in default language.
   */
  language?: String,
  /**
   * Two-characters country code(capital letter) for the attributes. Should be provided if no "shopid".
   */
  country?: String,
  /**
   * Is cross-border or not. Should be provided if no "shopid".
   */
  is_cb?: Boolean, 
}