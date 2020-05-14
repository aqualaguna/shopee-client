import axios, { AxiosInstance } from 'axios';
import defaultConfig, { ShopeeApiConfig } from './config';
import InvalidConfigError from './error/InvalidConfigError';
import ShopModule from './modules/shop';
import ImageModule from './modules/image';
import CategoryModule from './modules/category';
import ItemModule from './modules/item';
import DiscountModule from './modules/discount';
import OrderModule from './modules/orders';
import LogisticModule from './modules/logistics';
import ReturnModule from './modules/returns';
import PublicModule from './modules/public';
import TopPickModule from './modules/toppicks';
import FirstMileModule from './modules/firstmile';
import PaymentModule from './modules/payment';
import PushModule from './modules/push';
const crypto = require("crypto");


export default class ShopeeClient {
    
    protected client: AxiosInstance;
    protected config: ShopeeApiConfig = defaultConfig;
    shop: ShopModule;
    image: ImageModule;
    category: CategoryModule;
    item: ItemModule;
    discount: DiscountModule;
    order: OrderModule;
    logistic: LogisticModule;
    rtr: ReturnModule;
    pub: PublicModule;
    toppick: TopPickModule;
    firstmile: FirstMileModule;
    payment: PaymentModule;
    push: PushModule;

    constructor(config: ShopeeApiConfig) {
        Object.assign(this.config, config);
        this.validateConfig();
        this.client = axios.create({
            baseURL: this.config.is_uat ? 'https://partner.uat.shopeemobile.com/api/v1/':'https://partner.shopeemobile.com/api/v1/',
            timeout: 10000,
        });

        this.shop = new ShopModule(this.client, this.config);
        this.image = new ImageModule(this.client, this.config);
        this.category = new CategoryModule(this.client, this.config);
        this.item = new ItemModule(this.client, this.config);
        this.discount = new DiscountModule(this.client, this.config);
        this.order = new OrderModule(this.client, this.config);
        this.logistic = new LogisticModule(this.client, this.config);
        this.rtr = new ReturnModule(this.client, this.config);
        this.pub = new PublicModule(this.client, this.config);
        this.toppick = new TopPickModule(this.client, this.config);
        this.firstmile = new FirstMileModule(this.client, this.config);
        this.payment = new PaymentModule(this.client, this.config);
        this.push = new PushModule(this.client, this.config);
    }

    private validateConfig () {
        if (!this.config.partner_id) {
            throw new InvalidConfigError("Partner Id is not defined.");
        }
        if (!this.config.partner_key) {
            throw new InvalidConfigError("Partner Key is not defined.");
        }
        if (!this.config.shop_id) {
            throw new InvalidConfigError("Shop Id is not defined.");
        }
    }

    baseUrl() : string {
        return this.client.defaults.baseURL || '';
    }

    buildAuthURL(isCancel = false) {
        const token = crypto
          .createHash("sha256")
          // @ts-ignore
          .update(this.config.partner_key + (this.config.redirect_uri || ''))
          .digest("hex");
        let authUrl = `${this.baseUrl()}shop/`;
        authUrl += isCancel ? "cancel_auth_partner" : "auth_partner";
        authUrl += `?id=${this.config.partner_id}`;
        authUrl += `&token=${token}`;
        authUrl += `&redirect=${encodeURIComponent((this.config.redirect_uri || '') as string)}`;
        return authUrl;
      }

    
}