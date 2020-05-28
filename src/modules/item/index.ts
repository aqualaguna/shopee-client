import BaseModule from "../BaseModule";
import hmac256 from "../../helper/hmac";
import handleReject from "../../helper/handleReject";
import DeleteItemResponse from "./response/item/DeleteItemResponse";
import { ItemUnlist } from "./request/item/UnlistRequest";
import UnlistResponse from "./response/item/UnlistResponse";
import getCategoryRequest from "./request/get/getCategoryRequest";
import GetCategoryReponse from "../category/response/getCategoryResponse";
import GetAttributeRequest from "./request/get/GetAttributeRequest";
import GetAttributeResponse from "./response/get/GetAttributeResponse";
import AddVariantRequest from "./request/variant/AddVariantRequest";
import AddVariantResponse from "./response/variant/AddVariantResponse";
import AddItemRequest from "./request/item/AddItemRequest";
import AddItemResponse, { Item } from "./response/item/AddItemResponse";
import deleteVariantRequest from "./request/variant/deleteVariantRequest";
import deleteVariantResponse from "./response/variant/deleteVariantResponse";
import GetItemListRequest from "./request/get/GetItemListRequest";
import GetItemListReponse from "./response/get/GetItemListResponse";
import getItemDetailResponse from "./response/get/getItemDetailResponse";
import updateItemResponse from "./response/item/updateItemResponse";
import AddItemImageRequest from "./request/img/AddItemImageRequest";
import AddItemImageResponse from "./response/img/AddItemImageResponse";
import UpdateItemImgRequest from "./request/img/UpdateItemImgRequest";
import UpdateItemImgResponse from "./response/img/UpdateItemImgResponse";
import InsertItemImgRequest from "./request/img/InsertItemImgRequest";
import InsertItemImgResponse from "./response/img/InsertItemImgResponse";
import DeleteItemImgRequest from "./request/img/DeleteItemImgRequest";
import DeleteItemImgResponse from "./response/img/DeleteItemImgResponse";
import UpdatePriceResponse from "./response/item/UpdatePriceResponse";
import UpdateStockResponse from "./response/item/UpdateStockResponse";
import UpdateVariantPriceRequest from "./request/variant/UpdateVariantPriceRequest";
import UpdateVariantPriceResponse from "./response/variant/UpdateVariantPriceResponse";
import UpdateVariantStockRequest from "./request/variant/UpdateVariantStockRequest";
import UpdateVariantStockResponse from "./response/variant/UpdateVariantStockResponse";
import UpdatePriceBatchRequest from "./request/batch/UpdatePriceBatchRequest";
import UpdatePriceBatchResponse from "./response/batch/UpdatePriceBatchResponse";
import UpdateStockBatchRequest from "./request/batch/UpdateStockBatchRequest";
import UpdateStockBatchResponse from "./response/batch/UpdateStockBatchResponse";
import UpdateVariantPriceBatchRequest from "./request/batch/UpdateVariantPriceBatchRequest";
import UpdateVariantPriceBatchResponse from "./response/batch/UpdateVariantPriceBatchResponse";
import UpdateVariantStockBatchRequest from "./request/batch/UpdateVariantStockBatchRequest";
import InitTier2Request from "./request/tier2/InitTier2Request";
import InitTier2Response from "./response/tier2/InitTier2Response";
import AddTierVariationRequest from "./request/tier2/AddTierVariationRequest";
import AddTierVariationResponse from "./response/tier2/AddTierVariationResponse";
import GetVariationTierResponse from "./response/tier2/GetVariationTierResponse";
import UpdateTierVariationRequest from "./request/tier2/UpdateTierVariationRequest";
import UpdateTierVariationResponse from "./response/tier2/UpdateTierVariationResponse";
import UpdateTierIndexResponse from "./response/tier2/UpdateTierIndexResponse";
import UpdateTierIndexRequest from "./request/tier2/UpdateTierIndexRequest";
import BoostResponse from "./response/boost/BoostResponse";
import GetBoostResponse from "./response/boost/GetBoostResponse";
import SetItemInstallmentRequest from "./request/item/SetItemInstallmentRequest";
import SetItemInstallmentResponse from "./response/item/SetItemInstallmentResponse";
import GetPromotionInfoRequest from "./request/get/GetPromotionInfoRequest";
import GetPromotionInfoResponse from "./response/get/GetPromotionInfoResponse";
import GetRecommendCategoryResponse from "./response/get/GetRecommendCategoryResponse";
import ReplyCommentRequest from "./request/comment/ReplyCommentRequest";
import ReplyCommentResponse from "./response/comment/ReplyCommentResponse";

export default class ItemModule extends BaseModule {
  /**
   * Use this call to add a product item. Should get dependency by calling below API first
   * shopee.item.GetCategories
   * shopee.item.GetAttributes
   * shopee.logistics.GetLogistics
   * @param request 
   */
  addItem(request: AddItemRequest): Promise<AddItemResponse> {
    let full_url = this.client.defaults.baseURL + 'item/add';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/add' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to delete a product item.
   * @param item_id id of an item.
   */
  deleteItem(item_id: number): Promise<DeleteItemResponse> {
    let full_url = this.client.defaults.baseURL + 'item/delete';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      item_id
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/delete' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to unlist or list items in batch.
   * @param request 
   */
  unlistItem(items: ItemUnlist[]): Promise<UnlistResponse> {
    let full_url = this.client.defaults.baseURL + 'items/unlist';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      items
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/unlist' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to get categories of product item
   * @param request 
   */
  getCategory(request: getCategoryRequest = {}) : Promise<GetCategoryReponse> {
    let full_url = this.client.defaults.baseURL + 'item/categories/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/categories/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to get attributes of product item
   * @param request 
   */
  getAttributes(request: GetAttributeRequest) : Promise<GetAttributeResponse> {
    let full_url = this.client.defaults.baseURL + 'item/attributes/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/attributes/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
  
  /**
   * Use this call to add item variations, it only supports non-tier-variation items.
   * @param request 
   */
  addVariant(request: AddVariantRequest) : Promise<AddVariantResponse> {
    let full_url = this.client.defaults.baseURL + 'item/add_variations';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/add_variations' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }
  
  /**
   * Use this call to delete item variation
   * @param request 
   */
  deleteVariant(request: deleteVariantRequest) : Promise<deleteVariantResponse> {
    let full_url = this.client.defaults.baseURL + 'item/delete_variation';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/delete_variation' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to get a list of items
   * @param request 
   */
  getItemsList(request: GetItemListRequest) : Promise<GetItemListReponse> {
    let full_url = this.client.defaults.baseURL + 'items/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      ...request
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


  /**
   * Use this call to get detail of item
   * @param request 
   */
  getItemDetail(item_id: number) : Promise<getItemDetailResponse> {
    let full_url = this.client.defaults.baseURL + 'item/get';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
      item_id
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to update a product item.
   * Should get dependency by calling below API first shopee.item.GetItemDetail
   * @param request 
   */
  updateItem(item: Item) : Promise<updateItemResponse> {
    let full_url = this.client.defaults.baseURL + 'item/update';
    let params: any = {
      ...item,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this call to add product item images.
   * @param request 
   */
  addItemImg(request: AddItemImageRequest) : Promise<AddItemImageResponse> {
    let full_url = this.client.defaults.baseURL + 'item/img/add';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/img/add' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Override and update all the existing images of an item.
   * @param request 
   */
  updateItemImg(request: UpdateItemImgRequest) : Promise<UpdateItemImgResponse> {
    let full_url = this.client.defaults.baseURL + 'item/img/update';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/img/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to add one item image in assigned position.
   * @param request 
   */
  insertItemImg(request: InsertItemImgRequest) : Promise<InsertItemImgResponse> {
    let full_url = this.client.defaults.baseURL + 'item/img/insert';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/img/insert' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to delete a product item image.
   * @param request 
   */
  deleteItemImg(request: DeleteItemImgRequest) : Promise<DeleteItemImgResponse> {
    let full_url = this.client.defaults.baseURL + 'item/img/delete';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/img/delete' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this call to update item price
   * @param request 
   */
  updatePrice(item_id: number, price: number) : Promise<UpdatePriceResponse> {
    let full_url = this.client.defaults.baseURL + 'items/update_price';
    let params: any = {
      item_id,
      price,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/update_price' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to update item stock
   * @param request 
   */
  updateStock(item_id: number, stock: number) : Promise<UpdateStockResponse> {
    let full_url = this.client.defaults.baseURL + 'items/update_stock';
    let params: any = {
      item_id,
      stock,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/update_stock' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to update item variation price
   * @param request 
   */
  updateVariationPrice(request: UpdateVariantPriceRequest) : Promise<UpdateVariantPriceResponse> {
    let full_url = this.client.defaults.baseURL + 'items/update_variation_price';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/update_variation_price' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this call to update item variation stock
   * @param request 
   */
  updateVariationStock(request: UpdateVariantStockRequest) : Promise<UpdateVariantStockResponse> {
    let full_url = this.client.defaults.baseURL + 'items/update_variation_stock';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/update_variation_stock' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Update items price in batch.
   * @param request 
   */
  updatePriceBatch(request: UpdatePriceBatchRequest) : Promise<UpdatePriceBatchResponse> {
    let full_url = this.client.defaults.baseURL + 'items/update/items_price';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/update/items_price' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Update items stock in batch.
   * @param request 
   */
  updateStockBatch(request: UpdateStockBatchRequest) : Promise<UpdateStockBatchResponse> {
    let full_url = this.client.defaults.baseURL + 'items/update/items_stock';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/update/items_stock' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Update variations price in batch.
   * @param request 
   */
  updateVariationPriceBatch(request: UpdateVariantPriceBatchRequest) : Promise<UpdateVariantPriceBatchResponse> {
    let full_url = this.client.defaults.baseURL + 'items/update/vars_price';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/update/vars_price' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Update variations price in batch.
   * @param request 
   */
  updateVariationStockBatch(request: UpdateVariantStockBatchRequest) : Promise<UpdateVariantStockBatchRequest> {
    let full_url = this.client.defaults.baseURL + 'items/update/vars_stock';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/update/vars_stock' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Initialize a non-tier-variation item to a tier-variation item, upload variation image and initialize stock and price for each variation.
   * This API cannot edit existed tier_variation and variation price/stock.
   * @param request 
   */
  initTierVariation(request: InitTier2Request) : Promise<InitTier2Response> {
    let full_url = this.client.defaults.baseURL + 'item/tier_var/init';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/tier_var/init' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to add new tier variations in batch.
   * Tier variation index of variations in the same item must be unique.
   * @param request 
   */
  addTierVariation(request: AddTierVariationRequest) : Promise<AddTierVariationResponse> {
    let full_url = this.client.defaults.baseURL + 'item/tier_var/add';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/tier_var/add' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }


  /**
   * Use this call to get tier-variation basic information under an item
   * @param item_id unique identifier id.
   */
  getTierVariation(item_id: number) : Promise<GetVariationTierResponse> {
    let full_url = this.client.defaults.baseURL + 'item/tier_var/get';
    let params: any = {
      item_id,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/tier_var/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to update tier-variation list or upload variation image of a tier-variation item.
   * @param request 
   */
  updateTierVariation(request: UpdateTierVariationRequest ) : Promise<UpdateTierVariationResponse> {
    let full_url = this.client.defaults.baseURL + 'item/tier_var/update_list';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/tier_var/update_list' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to update existing tier index under the same variation_id.
   * @param request 
   */
  updateTierVariationIndex(request: UpdateTierIndexRequest ) : Promise<UpdateTierIndexResponse> {
    let full_url = this.client.defaults.baseURL + 'item/tier_var/update';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/tier_var/update' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to boost multiple items at once.
   * @param request 
   */
  boostItem(item_id: number[] ) : Promise<BoostResponse> {
    let full_url = this.client.defaults.baseURL + 'items/boost';
    let params: any = {
      item_id,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/boost' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to get all boosted items.
   * @param request 
   */
  getBoostItem() : Promise<GetBoostResponse> {
    let full_url = this.client.defaults.baseURL + 'items/get_boosted';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/get_boosted' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Only for TW whitelisted shop. Use this API to set the installment tenures of items.
   * @param request 
   */
  setInstallment(request: SetItemInstallmentRequest) : Promise<SetItemInstallmentResponse> {
    let full_url = this.client.defaults.baseURL + 'item/installment/set';
    let params: any = {
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/installment/set' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

  /**
   * Use this api to get ongoing and upcoming promotions.
   * @param request 
   */
  getPromotionInfo(request: GetPromotionInfoRequest) : Promise<GetPromotionInfoResponse> {
    let full_url = this.client.defaults.baseURL + 'item/promotion/get';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/promotion/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this API to get recommended category ids according to item name.
   * @param name title of product 
   */
  getRecommendCategory(name: string ) : Promise<GetRecommendCategoryResponse> {
    let full_url = this.client.defaults.baseURL + 'item/categories/get_recommend';
    let params: any = {
      name,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('item/categories/get_recommend' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this api to get comment by shopid/itemid/comment_id
   * @param name title of product 
   */
  getComment(name: string ) : Promise<GetRecommendCategoryResponse> {
    let full_url = this.client.defaults.baseURL + 'items/comments/get';
    let params: any = {
      name,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/comments/get' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

   /**
   * Use this api to reply comments from buyers in batch
   * @param request
   */
  replyComment(request: ReplyCommentRequest ) : Promise<ReplyCommentResponse> {
    let full_url = this.client.defaults.baseURL + 'items/comments/reply';
    let params: any = {
      ...request,
      partner_id: Number(this.config.partner_id),
      shopid: Number(this.config.shop_id),
      timestamp: Math.round(Date.now() / 1000),
    }
    let hmac = hmac256(this.config.partner_key || '', full_url + '|' + JSON.stringify(params))
    return this.client.post('items/comments/reply' ,params, {
      headers: {
        Authorization: hmac
      }
    }).then(handleReject);
  }

}