export default interface GetCategoriesByCountryRequest {
  /**
   * Two-digit country code(capital letter).
   */
  country: string,
  /**
   * Is cross border or not. 1: cross border; 0: not cross border
   */
  is_cb: number,
  /**
   * The Identify of partner
   */
  partner_id: number,
  /**
   * Indicate the translation language. Language values include: en(English), vi(Vietnamese), id(Indonesian), th(Thai), zh-Hant(Traditional Chinese), zh-Hans(Simplified Chinese), ms-my(Malaysian Malay). If the selected language is not supported in certain shop location, the response will be in default language.
   */
  language?: string,

}