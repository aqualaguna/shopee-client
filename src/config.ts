export interface ShopeeApiConfig {
  is_uat?: Boolean,
  shop_id: String|null,
  partner_id: String|null,
  partner_key: String|null,
  redirect_uri?: String
}
let defaultConfig: ShopeeApiConfig = {
  is_uat: false,
  shop_id: null,
  partner_id: null,
  partner_key: null,
  redirect_uri: 'http://localhost:3000/redirect',
}

export default defaultConfig;