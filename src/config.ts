export interface ShopeeApiConfig {
  is_uat?: Boolean,
  shop_id: String|null,
  partner_id: String|null,
  partner_key: String|null,
  redirect_uri?: String,
  webhook_url?: String
}
let defaultConfig: ShopeeApiConfig = {
  is_uat: false,
  shop_id: null,
  partner_id: null,
  partner_key: null,
  webhook_url: 'http://localhost:3000/webhook',
  redirect_uri: 'http://localhost:3000/redirect',
}

export default defaultConfig;