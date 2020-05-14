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
    expect(client.baseUrl()).toEqual("https://partner.shopeemobile.com/api/v1/");
  });

  test('test Config', () => {
    let client = new ShopeeClient(testConfig);
    expect(client.baseUrl()).toEqual("https://partner.uat.shopeemobile.com/api/v1/");
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
    let client = new ShopeeClient(testConfig);
    let url = client.buildAuthURL(true);
    expect(url).toEqual('https://partner.uat.shopeemobile.com/api/v1/shop/cancel_auth_partner?id=842701&token=a3a159a6a77df1c82c1943ecb18fa38bdd8f36a655361b4eae3d21a33cbb8531&redirect=https%3A%2F%2Fwww.google.com')
    url = client.buildAuthURL();
    expect(url).toEqual('https://partner.uat.shopeemobile.com/api/v1/shop/auth_partner?id=842701&token=a3a159a6a77df1c82c1943ecb18fa38bdd8f36a655361b4eae3d21a33cbb8531&redirect=https%3A%2F%2Fwww.google.com')
  });
  
})