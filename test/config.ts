import { ShopeeApiConfig } from '../src/config';
let prodConfig: ShopeeApiConfig = {
  is_uat: false,
  shop_id: 'YOUR_SHOP_ID',
  partner_id: 'YOUR_PARTNER_ID',
  partner_key: 'YOUR_PARTNER_KEY'
}
let prodConfigInvalidKey: ShopeeApiConfig = {
  is_uat: false,
  shop_id: 'YOUR_SHOP_ID',
  partner_id: 'YOUR_PARTNER_ID',
  partner_key: 'YOUR_PARTNER_KEY_INVALID'
}
let testConfig: ShopeeApiConfig = {
  is_uat: true,
  shop_id: '220000769',
  partner_id: '842701',
  partner_key: 'a914ea3442088c87928d76839445f3d2061ee609a4a74d5dab377ed58652f56c',
  redirect_uri: 'https://www.google.com'
}
let testConfigWithUnlink: ShopeeApiConfig = {
  is_uat: true,
  shop_id: '198785094',
  partner_id: '842701',
  partner_key: 'a914ea3442088c87928d76839445f3d2061ee609a4a74d5dab377ed58652f56c'
}
let incorectConfig: ShopeeApiConfig = {
  is_uat: true,
  shop_id: '',
  partner_id: '',
  partner_key: ''
}
export {
  prodConfig,
  testConfig,
  incorectConfig,
  prodConfigInvalidKey,
  testConfigWithUnlink
}