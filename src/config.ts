export interface ShopeeApiConfig {
  is_uat?: boolean,
  shop_id: string|null,
  partner_id: string|null,
  partner_key: string|null,
  redirect_uri?: string
}
let defaultConfig: ShopeeApiConfig = {
  is_uat: false,
  shop_id: null,
  partner_id: null,
  partner_key: null,
  redirect_uri: 'http://localhost:3000/redirect',
}

export default defaultConfig;