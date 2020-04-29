# Nodejs Shopee Open Api Client

this project started as my goal to use shopee api easily. this project has not fully tested yet. but basic functions still function perfectly.


## Usage
```
npm install shopee-client
```

## Basic Usage
```
let client = new ShopeeClient({
  is_uat: false,
  shop_id: 'YOUR_SHOP_ID',
  partner_id: 'YOUR_PARTNER_ID',
  partner_key: 'YOUR_PARTNER_KEY'
})
let response = await client.image.uploadImage({
  images: [
    'https://i.picsum.photos/id/790/200/300.jpg'
  ]
});
console.log(response);
```

There is 13 modules :
- Category (category)
- Discount (discount)
- First Mile (firstmile)
- Shop (shop)
- Image (image)
- Item  (item)
- Order (order)
- Logistic (logistic)
- Return (rtr)
- Public (pub)
- Top Pick (toppick)
- Payment (payment)
- Push (push)

The left is the module name the right side is the name in client object.
for example Return module is called this way :
```
client.rtr.confirmReturn('fdkajkfd');
```

This Client made at last announcement on https://open.shopee.com/announcements:
- [Important] Wholesale Price will not be available for taxable sellers
2020-04-23

## Reference

for more detail look at: https://open.shopee.com/documents

## Author

Made with ♡ ♥💕❤ By Aqualaguna (ricardosentinel7@gmail.com).

## License

MIT LICENSE

Copyright 2020 Ricardo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.