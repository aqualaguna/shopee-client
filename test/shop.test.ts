import ShopeeClient from "../src";
import { testConfig, testConfigWithUnlink } from "./config";
import BaseError from "../src/error/response/BaseError";


// connect to firebase
beforeAll((done) => {
  
  done();
})

describe('Shop Module Test', () => {

  it('it should fail get shop', async () => {
    expect.assertions(3);
    try {

      let client = new ShopeeClient(testConfigWithUnlink)
      let response = await client.shop.getShop()
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
      expect((e as BaseError).code).toEqual("error_auth");
      expect((e as BaseError).msg).toEqual("partner and shop has no linked");
    }
  });

  it('should success get shop method ', async () => {
    let client = new ShopeeClient(testConfig);
    let response = await client.shop.getShop();
    expect(response.shop_id).toEqual(Number(testConfig.shop_id));
  });

  it('should success update shop ', async () => {
    let client = new ShopeeClient(testConfig);
    let response = await client.shop.updateShop({
      shop_name: 'test change'
    });
    expect(response.shopid).toEqual(Number(testConfig.shop_id));
    expect(response.shop_name).toEqual('test change');
  });

  it('should success get shop performance ', async () => {
    let client = new ShopeeClient(testConfig);
    let response = await client.shop.getPerformance();
    expect(response.spam_listing_violation).toBeDefined();
  });

})