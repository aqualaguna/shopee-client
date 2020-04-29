import ShopeeClient from "../src";
import { testConfig } from "./config";


// connect to firebase
beforeAll((done) => {
  
  done();
})

describe('Image Module Test', () => {

  it('it should success upload Image', async () => {
      let client = new ShopeeClient(testConfig)
      let response = await client.image.uploadImage({
        images: [
          'https://i.picsum.photos/id/790/200/300.jpg'
        ]
      });
      expect(response.images.length).toEqual(1);
      expect(response.images[0].image_url).toEqual('https://i.picsum.photos/id/790/200/300.jpg');
  });

})