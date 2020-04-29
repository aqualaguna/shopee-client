import ShopeeClient from '../src/index';
import { prodConfig, incorectConfig, testConfig } from './config';
import InvalidConfigError from '../src/error/InvalidConfigError';
// connect to firebase
beforeAll((done) => {
  done();
})

describe('Client Config Test', () => {
  test('correct Config', () => {
    let client = new ShopeeClient(prodConfig);
    expect(client.baseUrl).toEqual("https://partner.shopeemobile.com/api/v1/");
  });

  test('test Config', () => {
    let client = new ShopeeClient(testConfig);
    expect(client.baseUrl).toEqual("https://partner.uat.shopeemobile.com/api/v1/");
  });

  test('incorrect Config', () => {
    expect.assertions(1);
    try {
      let client = new ShopeeClient(incorectConfig);
    }catch(e) {
      expect(e).toBeInstanceOf(InvalidConfigError);
    }
  });
  test('authorize Shop', () => {
    let client = new ShopeeClient(prodConfig);
    let url = client.buildAuthURL(true);
    expect(url).toEqual('https://partner.shopeemobile.com/api/v1/shop/cancel_auth_partner?id=845386&token=18e28321f4210c4b89ed166a40fdeb86019fc550b0925237d4ae2e83112426ac&redirect=localhost:3000/redirect')
    url = client.buildAuthURL();
    expect(url).toEqual('https://partner.shopeemobile.com/api/v1/shop/auth_partner?id=845386&token=18e28321f4210c4b89ed166a40fdeb86019fc550b0925237d4ae2e83112426ac&redirect=localhost:3000/redirect')
  });
  
})