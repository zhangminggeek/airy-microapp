/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from '../utils/request'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_0 = '' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = 'data' as any

export interface GetCommonOssPolicyRequest {
  /**
   * 文件后缀
   */
  ext: string
}

export interface GetCommonOssPolicyResponse {
  cosHost: string
  cosKey: string
  authorization: string
  securityToken: string
}

type GetCommonOssPolicyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/common/oss/policy', 'data', string, 'ext', false>
>

const getCommonOssPolicyRequestConfig: GetCommonOssPolicyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/common/oss/policy',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['ext'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCommonOssPolicy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCommonOssPolicy = /*#__PURE__*/ (
  requestData: GetCommonOssPolicyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCommonOssPolicyResponse>(prepare(getCommonOssPolicyRequestConfig, requestData), ...args)
}

getCommonOssPolicy.requestConfig = getCommonOssPolicyRequestConfig

const mockUrl_0_0_0_1 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_1 = '' as any
const prodUrl_0_0_0_1 = '' as any
const dataKey_0_0_0_1 = 'data' as any

export interface GetMarketRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 产品标题或品牌
   */
  keyword?: string
  /**
   * 产品标题
   */
  title?: string
  /**
   * 产品类型
   */
  productTypeCode?: string
  /**
   * 公司id
   */
  companyId?: string
  /**
   * 允许出售
   */
  allowSell?: string
  /**
   * 允许借调
   */
  allowLease?: string
  /**
   * 最小出售价格
   */
  minSellingPrice?: string
  /**
   * 最大出售价格
   */
  maxSellingPrice?: string
  /**
   * 最小借调价格
   */
  minLeasePrice?: string
  /**
   * 最大借调价格
   */
  maxLeasePrice?: string
  /**
   * 发货方式, 1:包邮 2:到付 3:自提
   */
  expressMethod?: string
  /**
   * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
   */
  quality?: string
  /**
   * 服饰状态, 1:审核中 2:上架中  3:未通过 4:已借调 5:已出售 6:已下架
   */
  status?: string
  /**
   * 排序方式 1:最新发布 2:最多收藏
   */
  order?: string
  /**
   * 筛选项
   */
  filterStr?: string
}

export interface GetMarketResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 数据id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 公司收货地址id
     */
    companyAddressId?: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 商品标题
     */
    title: string
    /**
     * 商品描述
     */
    description?: string
    /**
     * 是否允许出售, 0:否 1:是
     */
    allowSell: boolean
    /**
     * 是否允许借调, 0:否 1:是
     */
    allowLease: boolean
    /**
     * 出售价
     */
    sellingPrice?: string
    /**
     * 借调价
     */
    leasePrice?: string
    /**
     * 借调押金
     */
    leaseDeposit?: string
    /**
     * 发货方式, 1:包邮 2:到付 3:自提
     */
    expressMethod: number
    /**
     * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
     */
    quality: number
    /**
     * 服饰状态, 1:审核中 2:上架中 3:未通过 4:已借调 5:已出售 6:已下架
     */
    status: number
    /**
     * 审批结论
     */
    remark?: string
    /**
     * 是否被删除
     */
    isDeleted: boolean
    /**
     * 公司名称
     */
    companyName: string
    /**
     * 公司LOGO
     */
    companyLogo?: string
    /**
     * 服饰信息
     */
    product: {
      /**
       * 服饰名称
       */
      name: string
      /**
       * 服饰编号
       */
      no?: string
      /**
       * 服饰品牌
       */
      brand?: string
      /**
       * 服饰类型
       */
      typeCode: string
      /**
       * 描述
       */
      description?: string
      /**
       * 租赁次数
       */
      leaseCount: number
      /**
       * 图片
       */
      picList: {
        /**
         * 服饰图片id
         */
        id: number
        /**
         * 服饰id
         */
        productId: number
        /**
         * 服饰图片地址
         */
        url: string
      }[]
      /**
       * 标签
       */
      tagList: {
        /**
         * id
         */
        id: number
        /**
         * 标签id
         */
        tagId: number
        /**
         * 服饰id
         */
        productId: number
        /**
         * 标签
         */
        tag: {
          /**
           * 标签id
           */
          id: number
          /**
           * 标签名称
           */
          name: string
          /**
           * 用途, 1:服饰标签
           */
          use: number
        }
      }[]
    }
    /**
     * 被收藏数
     */
    favorities: number
  }[]
}

type GetMarketRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/market',
    'data',
    string,
    | 'pageNum'
    | 'pageSize'
    | 'keyword'
    | 'title'
    | 'productTypeCode'
    | 'companyId'
    | 'allowSell'
    | 'allowLease'
    | 'minSellingPrice'
    | 'maxSellingPrice'
    | 'minLeasePrice'
    | 'maxLeasePrice'
    | 'expressMethod'
    | 'quality'
    | 'status'
    | 'order'
    | 'filterStr',
    false
  >
>

const getMarketRequestConfig: GetMarketRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [
    'pageNum',
    'pageSize',
    'keyword',
    'title',
    'productTypeCode',
    'companyId',
    'allowSell',
    'allowLease',
    'minSellingPrice',
    'maxSellingPrice',
    'minLeasePrice',
    'maxLeasePrice',
    'expressMethod',
    'quality',
    'status',
    'order',
    'filterStr',
  ],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getMarket',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getMarket = /*#__PURE__*/ (requestData: GetMarketRequest, ...args: UserRequestRestArgs) => {
  return request<GetMarketResponse>(prepare(getMarketRequestConfig, requestData), ...args)
}

getMarket.requestConfig = getMarketRequestConfig

export interface PostMarketRequest {
  /**
   * 名称
   */
  title: string
  /**
   * 公司收货id
   */
  companyAddressId?: number
  /**
   * 产品描述
   */
  description?: string
  /**
   * 是否允许出售, 0:否 1:是
   */
  allowSell: boolean
  /**
   * 是否允许借调, 0:否 1:是
   */
  allowLease: boolean
  /**
   * 出售价
   */
  sellingPrice?: string
  /**
   * 借调价
   */
  leasePrice?: string
  /**
   * 借调押金
   */
  leaseDeposit?: string
  /**
   * 发货方式, 1:包邮 2:到付 3:自提
   */
  expressMethod: number
  /**
   * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
   */
  quality: number
  /**
   * 产品id
   */
  productId: number
}

export type PostMarketResponse = number

type PostMarketRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market', 'data', string, string, false>
>

const postMarketRequestConfig: PostMarketRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postMarket',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postMarket = /*#__PURE__*/ (requestData: PostMarketRequest, ...args: UserRequestRestArgs) => {
  return request<PostMarketResponse>(prepare(postMarketRequestConfig, requestData), ...args)
}

postMarket.requestConfig = postMarketRequestConfig

export interface PutMarketRequest {
  /**
   * 名称
   */
  title: string
  /**
   * 公司收货id
   */
  companyAddressId?: number
  /**
   * 产品描述
   */
  description?: string
  /**
   * 是否允许出售, 0:否 1:是
   */
  allowSell: boolean
  /**
   * 是否允许借调, 0:否 1:是
   */
  allowLease: boolean
  /**
   * 出售价
   */
  sellingPrice?: string
  /**
   * 借调价
   */
  leasePrice?: string
  /**
   * 借调押金
   */
  leaseDeposit?: string
  /**
   * 发货方式, 1:包邮 2:到付 3:自提
   */
  expressMethod: number
  /**
   * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
   */
  quality: number
  /**
   * 产品id
   */
  productId: number
  /**
   * 二手市场出售/借调服饰id
   */
  id: number
}

export type PutMarketResponse = any

type PutMarketRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market', 'data', string, string, false>
>

const putMarketRequestConfig: PutMarketRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putMarket',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putMarket = /*#__PURE__*/ (requestData: PutMarketRequest, ...args: UserRequestRestArgs) => {
  return request<PutMarketResponse>(prepare(putMarketRequestConfig, requestData), ...args)
}

putMarket.requestConfig = putMarketRequestConfig

export interface GetMarketMyPublishedRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 服饰状态, 1:审核中 2:上架中  3:未通过 4:已借调 5:已出售 6:已下架
   */
  status?: string
}

export interface GetMarketMyPublishedResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 数据id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 公司收货地址id
     */
    companyAddressId?: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 商品标题
     */
    title: string
    /**
     * 商品描述
     */
    description?: string
    /**
     * 是否允许出售, 0:否 1:是
     */
    allowSell: boolean
    /**
     * 是否允许借调, 0:否 1:是
     */
    allowLease: boolean
    /**
     * 出售价
     */
    sellingPrice?: string
    /**
     * 借调价
     */
    leasePrice?: string
    /**
     * 借调押金
     */
    leaseDeposit?: string
    /**
     * 发货方式, 1:包邮 2:到付 3:自提
     */
    expressMethod: number
    /**
     * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
     */
    quality: number
    /**
     * 服饰状态, 1:审核中 2:上架中 3:未通过 4:已借调 5:已出售 6:已下架
     */
    status: number
    /**
     * 审批结论
     */
    remark?: string
    /**
     * 是否被删除
     */
    isDeleted: boolean
    /**
     * 公司名称
     */
    companyName: string
    /**
     * 公司LOGO
     */
    companyLogo?: string
    /**
     * 服饰信息
     */
    product: {
      /**
       * 服饰名称
       */
      name: string
      /**
       * 服饰编号
       */
      no?: string
      /**
       * 服饰品牌
       */
      brand?: string
      /**
       * 服饰类型
       */
      typeCode: string
      /**
       * 描述
       */
      description?: string
      /**
       * 租赁次数
       */
      leaseCount: number
      /**
       * 图片
       */
      picList: {
        /**
         * 服饰图片id
         */
        id: number
        /**
         * 服饰id
         */
        productId: number
        /**
         * 服饰图片地址
         */
        url: string
      }[]
      /**
       * 标签
       */
      tagList: {
        /**
         * id
         */
        id: number
        /**
         * 标签id
         */
        tagId: number
        /**
         * 服饰id
         */
        productId: number
        /**
         * 标签
         */
        tag: {
          /**
           * 标签id
           */
          id: number
          /**
           * 标签名称
           */
          name: string
          /**
           * 用途, 1:服饰标签
           */
          use: number
        }
      }[]
    }
    /**
     * 被收藏数
     */
    favorities: number
  }[]
}

type GetMarketMyPublishedRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/market/my/published',
    'data',
    string,
    'pageNum' | 'pageSize' | 'status',
    false
  >
>

const getMarketMyPublishedRequestConfig: GetMarketMyPublishedRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/my/published',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getMarketMyPublished',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getMarketMyPublished = /*#__PURE__*/ (
  requestData: GetMarketMyPublishedRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetMarketMyPublishedResponse>(prepare(getMarketMyPublishedRequestConfig, requestData), ...args)
}

getMarketMyPublished.requestConfig = getMarketMyPublishedRequestConfig

export interface GetMarketMyFavoriteRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
}

export interface GetMarketMyFavoriteResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 数据id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 公司收货地址id
     */
    companyAddressId?: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 商品标题
     */
    title: string
    /**
     * 商品描述
     */
    description?: string
    /**
     * 是否允许出售, 0:否 1:是
     */
    allowSell: boolean
    /**
     * 是否允许借调, 0:否 1:是
     */
    allowLease: boolean
    /**
     * 出售价
     */
    sellingPrice?: string
    /**
     * 借调价
     */
    leasePrice?: string
    /**
     * 借调押金
     */
    leaseDeposit?: string
    /**
     * 发货方式, 1:包邮 2:到付 3:自提
     */
    expressMethod: number
    /**
     * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
     */
    quality: number
    /**
     * 服饰状态, 1:审核中 2:上架中 3:未通过 4:已借调 5:已出售 6:已下架
     */
    status: number
    /**
     * 审批结论
     */
    remark?: string
    /**
     * 是否被删除
     */
    isDeleted: boolean
    /**
     * 公司名称
     */
    companyName: string
    /**
     * 公司LOGO
     */
    companyLogo?: string
    /**
     * 服饰信息
     */
    product: {
      /**
       * 服饰名称
       */
      name: string
      /**
       * 服饰编号
       */
      no?: string
      /**
       * 服饰品牌
       */
      brand?: string
      /**
       * 服饰类型
       */
      typeCode: string
      /**
       * 描述
       */
      description?: string
      /**
       * 租赁次数
       */
      leaseCount: number
      /**
       * 图片
       */
      picList: {
        /**
         * 服饰图片id
         */
        id: number
        /**
         * 服饰id
         */
        productId: number
        /**
         * 服饰图片地址
         */
        url: string
      }[]
      /**
       * 标签
       */
      tagList: {
        /**
         * id
         */
        id: number
        /**
         * 标签id
         */
        tagId: number
        /**
         * 服饰id
         */
        productId: number
        /**
         * 标签
         */
        tag: {
          /**
           * 标签id
           */
          id: number
          /**
           * 标签名称
           */
          name: string
          /**
           * 用途, 1:服饰标签
           */
          use: number
        }
      }[]
    }
    /**
     * 被收藏数
     */
    favorities: number
  }[]
}

type GetMarketMyFavoriteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/market/my/favorite',
    'data',
    string,
    'pageNum' | 'pageSize',
    false
  >
>

const getMarketMyFavoriteRequestConfig: GetMarketMyFavoriteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/my/favorite',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getMarketMyFavorite',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getMarketMyFavorite = /*#__PURE__*/ (
  requestData: GetMarketMyFavoriteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetMarketMyFavoriteResponse>(prepare(getMarketMyFavoriteRequestConfig, requestData), ...args)
}

getMarketMyFavorite.requestConfig = getMarketMyFavoriteRequestConfig

export interface PostMarketAndProductRequest {
  /**
   * 名称
   */
  title: string
  /**
   * 公司收货id
   */
  companyAddressId?: number
  /**
   * 产品描述
   */
  description?: string
  /**
   * 是否允许出售, 0:否 1:是
   */
  allowSell: boolean
  /**
   * 是否允许借调, 0:否 1:是
   */
  allowLease: boolean
  /**
   * 出售价
   */
  sellingPrice?: string
  /**
   * 借调价
   */
  leasePrice?: string
  /**
   * 借调押金
   */
  leaseDeposit?: string
  /**
   * 发货方式, 1:包邮 2:到付 3:自提
   */
  expressMethod: number
  /**
   * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
   */
  quality: number
  /**
   * 服饰图片
   */
  picList: string[]
  /**
   * 服饰品牌
   */
  brand?: string
  /**
   * 服饰类型code
   */
  typeCode: string
  /**
   * 服饰尺寸
   */
  size: number
  /**
   * 其他信息
   */
  fieldList?: {
    /**
     * 字段键名
     */
    fieldKey: string
    /**
     * 字段键值
     */
    fieldValue: string
  }[]
  /**
   * 服饰标签
   */
  tagIdList?: number[]
}

export type PostMarketAndProductResponse = number

type PostMarketAndProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/and/product', 'data', string, string, false>
>

const postMarketAndProductRequestConfig: PostMarketAndProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/and/product',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postMarketAndProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postMarketAndProduct = /*#__PURE__*/ (
  requestData: PostMarketAndProductRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostMarketAndProductResponse>(prepare(postMarketAndProductRequestConfig, requestData), ...args)
}

postMarketAndProduct.requestConfig = postMarketAndProductRequestConfig

export interface PutMarketShelvesOnRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: number
}

export type PutMarketShelvesOnResponse = any

type PutMarketShelvesOnRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/shelves/on', 'data', string, string, false>
>

const putMarketShelvesOnRequestConfig: PutMarketShelvesOnRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/shelves/on',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putMarketShelvesOn',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putMarketShelvesOn = /*#__PURE__*/ (
  requestData: PutMarketShelvesOnRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutMarketShelvesOnResponse>(prepare(putMarketShelvesOnRequestConfig, requestData), ...args)
}

putMarketShelvesOn.requestConfig = putMarketShelvesOnRequestConfig

export interface PutMarketShelvesOffRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: number
}

export type PutMarketShelvesOffResponse = any

type PutMarketShelvesOffRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/shelves/off', 'data', string, string, false>
>

const putMarketShelvesOffRequestConfig: PutMarketShelvesOffRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/shelves/off',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putMarketShelvesOff',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putMarketShelvesOff = /*#__PURE__*/ (
  requestData: PutMarketShelvesOffRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutMarketShelvesOffResponse>(prepare(putMarketShelvesOffRequestConfig, requestData), ...args)
}

putMarketShelvesOff.requestConfig = putMarketShelvesOffRequestConfig

export interface GetMarketIdRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: string
}

export interface GetMarketIdResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 数据id
   */
  id: number
  /**
   * 公司id
   */
  companyId: number
  /**
   * 公司收货地址id
   */
  companyAddressId?: number
  /**
   * 服饰id
   */
  productId: number
  /**
   * 商品标题
   */
  title: string
  /**
   * 商品描述
   */
  description?: string
  /**
   * 是否允许出售, 0:否 1:是
   */
  allowSell: boolean
  /**
   * 是否允许借调, 0:否 1:是
   */
  allowLease: boolean
  /**
   * 出售价
   */
  sellingPrice?: string
  /**
   * 借调价
   */
  leasePrice?: string
  /**
   * 借调押金
   */
  leaseDeposit?: string
  /**
   * 发货方式, 1:包邮 2:到付 3:自提
   */
  expressMethod: number
  /**
   * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
   */
  quality: number
  /**
   * 服饰状态, 1:审核中 2:上架中 3:未通过 4:已借调 5:已出售 6:已下架
   */
  status: number
  /**
   * 审批结论
   */
  remark?: string
  /**
   * 是否被删除
   */
  isDeleted: boolean
  /**
   * 公司信息
   */
  company: {
    /**
     * 公司id
     */
    id: number
    /**
     * 公司名称
     */
    name: string
    /**
     * 公司LOGO
     */
    logo?: string
    /**
     * 简介
     */
    intro?: string
    /**
     * 粉丝数量
     */
    fansCount: number
    /**
     * 是否已关注
     */
    follewed: boolean
    /**
     * 已卖出数量
     */
    sold: number
  }
  /**
   * 服饰信息
   */
  product: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 服饰id
     */
    id: number
    /**
     * 服饰名称
     */
    name: string
    /**
     * 服饰编号
     */
    no?: string
    /**
     * 服饰品牌
     */
    brand?: string
    /**
     * 服饰类型
     */
    typeCode: string
    /**
     * 服饰尺码
     */
    size: number
    /**
     * 描述
     */
    description?: string
    /**
     * 租赁次数
     */
    leaseCount: number
    /**
     * 服饰状态 1:正常 2:已售出 3:借调中
     */
    status: number
    /**
     * 其他信息字段
     */
    bizData?: string
    /**
     * 图片
     */
    picList: {
      /**
       * 服饰图片id
       */
      id: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 服饰图片地址
       */
      url: string
    }[]
    /**
     * 标签
     */
    tagList: {
      /**
       * id
       */
      id: number
      /**
       * 标签id
       */
      tagId: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 标签
       */
      tag: {
        /**
         * 标签id
         */
        id: number
        /**
         * 标签名称
         */
        name: string
        /**
         * 用途, 1:服饰标签
         */
        use: number
      }
    }[]
  }
  /**
   * 被收藏数
   */
  favorities: number
  /**
   * 当前用户是否已收藏
   */
  isFavorited: boolean
}

type GetMarketIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/{id}', 'data', 'id', string, false>
>

const getMarketIdRequestConfig: GetMarketIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getMarketId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getMarketId = /*#__PURE__*/ (requestData: GetMarketIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetMarketIdResponse>(prepare(getMarketIdRequestConfig, requestData), ...args)
}

getMarketId.requestConfig = getMarketIdRequestConfig

export interface DeleteMarketIdRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: string
}

export type DeleteMarketIdResponse = any

type DeleteMarketIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/{id}', 'data', 'id', string, false>
>

const deleteMarketIdRequestConfig: DeleteMarketIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteMarketId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const deleteMarketId = /*#__PURE__*/ (requestData: DeleteMarketIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteMarketIdResponse>(prepare(deleteMarketIdRequestConfig, requestData), ...args)
}

deleteMarketId.requestConfig = deleteMarketIdRequestConfig

export interface DeleteMarketAuditIdRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: string
}

export type DeleteMarketAuditIdResponse = any

type DeleteMarketAuditIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/audit/{id}', 'data', 'id', string, false>
>

const deleteMarketAuditIdRequestConfig: DeleteMarketAuditIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/audit/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteMarketAuditId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const deleteMarketAuditId = /*#__PURE__*/ (
  requestData: DeleteMarketAuditIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteMarketAuditIdResponse>(prepare(deleteMarketAuditIdRequestConfig, requestData), ...args)
}

deleteMarketAuditId.requestConfig = deleteMarketAuditIdRequestConfig

export interface PostMarketFavoriteRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: number
  /**
   * 是否收藏
   */
  isFavorited: boolean
}

export type PostMarketFavoriteResponse = any

type PostMarketFavoriteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/favorite', 'data', string, string, false>
>

const postMarketFavoriteRequestConfig: PostMarketFavoriteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/market/favorite',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postMarketFavorite',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postMarketFavorite = /*#__PURE__*/ (
  requestData: PostMarketFavoriteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostMarketFavoriteResponse>(prepare(postMarketFavoriteRequestConfig, requestData), ...args)
}

postMarketFavorite.requestConfig = postMarketFavoriteRequestConfig

const mockUrl_0_0_0_2 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_2 = '' as any
const prodUrl_0_0_0_2 = '' as any
const dataKey_0_0_0_2 = 'data' as any

export interface GetPurchaseRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 产品描述
   */
  title?: string
  /**
   * 产品类型code
   */
  typeCode?: string
  /**
   * 服饰状态, 1:审核中 2:求购中 3:已完成 4:审核未通过
   */
  status?: string
  /**
   * 排序方式 1:最新发布 2:报价量由高到低 3:报价量由低到高
   */
  order?: string
}

export interface GetPurchaseResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 求购id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 标题
     */
    title: string
    /**
     * 购买
     */
    wantBuy: boolean
    /**
     * 借调
     */
    wantLease: boolean
    /**
     * 最大求购价格
     */
    maxPrice?: string
    /**
     * 最小求购价格
     */
    minPrice?: string
    /**
     * 最大求购价格
     */
    maxLeasePrice?: string
    /**
     * 最小求购价格
     */
    minLeasePrice?: string
    /**
     * 服饰类型code
     */
    typeCode: string
    /**
     * 服饰品牌
     */
    brand?: string
    /**
     * 尺码, 0:均码 1:xs 2:s 3:m 4:l 5:xl 6:xxl 7:xxxl 8:4xl 9:5xl 10:6xl 11:7xl 12:8xl 13:9xl 14:10xl
     */
    size?: number
    /**
     * 其他信息字段
     */
    bizData?: string
    /**
     * 状态 1:审核中 2:求购中 3:已完成 4:审核不通过
     */
    status: number
    /**
     * 审核不通过原因
     */
    remark?: string
    /**
     * 是否被删除
     */
    isDeleted: boolean
    /**
     * 公司名称
     */
    companyName: string
    /**
     * 公司LOGO
     */
    companyLogo?: string
    /**
     * 图片
     */
    picList: {
      /**
       * 服饰图片id
       */
      id: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 服饰图片地址
       */
      url: string
    }[]
    /**
     * 标签
     */
    tagList: {
      /**
       * id
       */
      id: number
      /**
       * 标签id
       */
      tagId: number
      /**
       * 求购id
       */
      purchaseId: number
      /**
       * 标签名称
       */
      tagName: string
    }[]
    /**
     * 报价单数量
     */
    quotations?: number
  }[]
}

type GetPurchaseRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/purchase',
    'data',
    string,
    'pageNum' | 'pageSize' | 'title' | 'typeCode' | 'status' | 'order',
    false
  >
>

const getPurchaseRequestConfig: GetPurchaseRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'title', 'typeCode', 'status', 'order'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPurchase',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getPurchase = /*#__PURE__*/ (requestData: GetPurchaseRequest, ...args: UserRequestRestArgs) => {
  return request<GetPurchaseResponse>(prepare(getPurchaseRequestConfig, requestData), ...args)
}

getPurchase.requestConfig = getPurchaseRequestConfig

export interface PostPurchaseRequest {
  /**
   * 标题
   */
  title: string
  /**
   * 服饰图片
   */
  picList?: string[]
  /**
   * 购买
   */
  wantBuy: boolean
  /**
   * 借调
   */
  wantLease: boolean
  /**
   * 最大求购价格
   */
  maxPrice?: string
  /**
   * 最小求购价格
   */
  minPrice?: string
  /**
   * 最大求购价格
   */
  maxLeasePrice?: string
  /**
   * 最小求购价格
   */
  minLeasePrice?: string
  /**
   * 服饰类型code
   */
  typeCode: string
  /**
   * 服饰品牌
   */
  brand?: string
  /**
   * 尺码, 0:均码 1:xs 2:s 3:m 4:l 5:xl 6:xxl 7:xxxl 8:4xl 9:5xl 10:6xl 11:7xl 12:8xl 13:9xl 14:10xl
   */
  size?: number
  /**
   * 其他信息
   */
  fieldList?: {
    /**
     * 字段键名
     */
    fieldKey: string
    /**
     * 字段键值
     */
    fieldValue: string
  }[]
  /**
   * 服饰标签
   */
  tagIdList?: number[]
}

export type PostPurchaseResponse = number

type PostPurchaseRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/purchase', 'data', string, string, false>
>

const postPurchaseRequestConfig: PostPurchaseRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPurchase',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postPurchase = /*#__PURE__*/ (requestData: PostPurchaseRequest, ...args: UserRequestRestArgs) => {
  return request<PostPurchaseResponse>(prepare(postPurchaseRequestConfig, requestData), ...args)
}

postPurchase.requestConfig = postPurchaseRequestConfig

export interface PutPurchaseRequest {
  /**
   * 标题
   */
  title: string
  /**
   * 服饰图片
   */
  picList?: string[]
  /**
   * 购买
   */
  wantBuy: boolean
  /**
   * 借调
   */
  wantLease: boolean
  /**
   * 最大求购价格
   */
  maxPrice?: string
  /**
   * 最小求购价格
   */
  minPrice?: string
  /**
   * 最大求购价格
   */
  maxLeasePrice?: string
  /**
   * 最小求购价格
   */
  minLeasePrice?: string
  /**
   * 服饰类型code
   */
  typeCode: string
  /**
   * 服饰品牌
   */
  brand?: string
  /**
   * 尺码, 0:均码 1:xs 2:s 3:m 4:l 5:xl 6:xxl 7:xxxl 8:4xl 9:5xl 10:6xl 11:7xl 12:8xl 13:9xl 14:10xl
   */
  size?: number
  /**
   * 其他信息
   */
  fieldList?: {
    /**
     * 字段键名
     */
    fieldKey: string
    /**
     * 字段键值
     */
    fieldValue: string
  }[]
  /**
   * 服饰标签
   */
  tagIdList?: number[]
  /**
   * 求购id
   */
  id: number
}

export type PutPurchaseResponse = any

type PutPurchaseRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/purchase', 'data', string, string, false>
>

const putPurchaseRequestConfig: PutPurchaseRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putPurchase',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putPurchase = /*#__PURE__*/ (requestData: PutPurchaseRequest, ...args: UserRequestRestArgs) => {
  return request<PutPurchaseResponse>(prepare(putPurchaseRequestConfig, requestData), ...args)
}

putPurchase.requestConfig = putPurchaseRequestConfig

export interface GetPurchaseSelfRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 产品描述
   */
  title?: string
  /**
   * 产品类型code
   */
  typeCode?: string
  /**
   * 服饰状态, 1:审核中 2:求购中 3:已完成 4:审核未通过
   */
  status?: string
  /**
   * 排序方式 1:最新发布 2:报价量由高到低 3:报价量由低到高
   */
  order?: string
}

export interface GetPurchaseSelfResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 求购id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 标题
     */
    title: string
    /**
     * 购买
     */
    wantBuy: boolean
    /**
     * 借调
     */
    wantLease: boolean
    /**
     * 最大求购价格
     */
    maxPrice?: string
    /**
     * 最小求购价格
     */
    minPrice?: string
    /**
     * 最大求购价格
     */
    maxLeasePrice?: string
    /**
     * 最小求购价格
     */
    minLeasePrice?: string
    /**
     * 服饰类型code
     */
    typeCode: string
    /**
     * 服饰品牌
     */
    brand?: string
    /**
     * 尺码, 0:均码 1:xs 2:s 3:m 4:l 5:xl 6:xxl 7:xxxl 8:4xl 9:5xl 10:6xl 11:7xl 12:8xl 13:9xl 14:10xl
     */
    size?: number
    /**
     * 其他信息字段
     */
    bizData?: string
    /**
     * 状态 1:审核中 2:求购中 3:已完成 4:审核不通过
     */
    status: number
    /**
     * 审核不通过原因
     */
    remark?: string
    /**
     * 是否被删除
     */
    isDeleted: boolean
    /**
     * 公司名称
     */
    companyName: string
    /**
     * 公司LOGO
     */
    companyLogo?: string
    /**
     * 图片
     */
    picList: {
      /**
       * 服饰图片id
       */
      id: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 服饰图片地址
       */
      url: string
    }[]
    /**
     * 标签
     */
    tagList: {
      /**
       * id
       */
      id: number
      /**
       * 标签id
       */
      tagId: number
      /**
       * 求购id
       */
      purchaseId: number
      /**
       * 标签名称
       */
      tagName: string
    }[]
    /**
     * 报价单数量
     */
    quotations?: number
  }[]
}

type GetPurchaseSelfRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/purchase/self',
    'data',
    string,
    'pageNum' | 'pageSize' | 'title' | 'typeCode' | 'status' | 'order',
    false
  >
>

const getPurchaseSelfRequestConfig: GetPurchaseSelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase/self',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'title', 'typeCode', 'status', 'order'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPurchaseSelf',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getPurchaseSelf = /*#__PURE__*/ (requestData: GetPurchaseSelfRequest, ...args: UserRequestRestArgs) => {
  return request<GetPurchaseSelfResponse>(prepare(getPurchaseSelfRequestConfig, requestData), ...args)
}

getPurchaseSelf.requestConfig = getPurchaseSelfRequestConfig

export interface GetPurchaseIdRequest {
  /**
   * 求购id
   */
  id: string
}

export interface GetPurchaseIdResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 求购id
   */
  id: number
  /**
   * 公司id
   */
  companyId: number
  /**
   * 标题
   */
  title: string
  /**
   * 购买
   */
  wantBuy: boolean
  /**
   * 借调
   */
  wantLease: boolean
  /**
   * 最低购买价格
   */
  minPrice?: string
  /**
   * 最高购买价格
   */
  maxPrice?: string
  /**
   * 最低借调价格
   */
  minLeasePrice?: string
  /**
   * 最高借调价格
   */
  maxLeasePrice?: string
  /**
   * 服饰类型
   */
  typeCode: string
  /**
   * 服饰品牌
   */
  brand?: string
  /**
   * 服饰尺码
   */
  size?: number
  /**
   * 状态
   */
  status: number
  /**
   * 审批不通过原因
   */
  remark?: string
  /**
   * 图片
   */
  picList?: {
    /**
     * 图片id
     */
    id: number
    /**
     * 求购id
     */
    purchaseId: number
    /**
     * 图片地址
     */
    url: string
  }[]
  /**
   * 标签
   */
  tagList?: {
    /**
     * 标签id
     */
    id: number
    /**
     * 标签名
     */
    name: string
  }[]
  /**
   * 字段信息
   */
  bizData?: string
  /**
   * 报价
   */
  quotationList?: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 报价单id
     */
    id: number
    /**
     * 二手市场商品id
     */
    marketId: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 公司名称
     */
    companyName: string
    /**
     * 公司LOGO
     */
    companyLogo: string
    /**
     * 标题
     */
    title: string
    /**
     * 描述
     */
    description?: string
    /**
     * 借调价格
     */
    leasePrice?: string
    /**
     * 出售价格
     */
    sellingPrice?: string
    /**
     * 收藏数
     */
    favorites: number
    /**
     * 图片
     */
    picList: {
      /**
       * 服饰图片id
       */
      id: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 服饰图片地址
       */
      url: string
    }[]
  }[]
}

type GetPurchaseIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/purchase/{id}', 'data', 'id', string, false>
>

const getPurchaseIdRequestConfig: GetPurchaseIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPurchaseId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getPurchaseId = /*#__PURE__*/ (requestData: GetPurchaseIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetPurchaseIdResponse>(prepare(getPurchaseIdRequestConfig, requestData), ...args)
}

getPurchaseId.requestConfig = getPurchaseIdRequestConfig

export interface DeletePurchaseIdRequest {
  /**
   * 求购id
   */
  id: string
}

export type DeletePurchaseIdResponse = any

type DeletePurchaseIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/purchase/{id}', 'data', 'id', string, false>
>

const deletePurchaseIdRequestConfig: DeletePurchaseIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deletePurchaseId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const deletePurchaseId = /*#__PURE__*/ (requestData: DeletePurchaseIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeletePurchaseIdResponse>(prepare(deletePurchaseIdRequestConfig, requestData), ...args)
}

deletePurchaseId.requestConfig = deletePurchaseIdRequestConfig

export interface PostPurchaseSendRequest {
  /**
   * 求购id
   */
  id: number
  /**
   * 二手市场id
   */
  marketIds: number[]
}

export type PostPurchaseSendResponse = any

type PostPurchaseSendRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/purchase/send', 'data', string, string, false>
>

const postPurchaseSendRequestConfig: PostPurchaseSendRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase/send',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPurchaseSend',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postPurchaseSend = /*#__PURE__*/ (requestData: PostPurchaseSendRequest, ...args: UserRequestRestArgs) => {
  return request<PostPurchaseSendResponse>(prepare(postPurchaseSendRequestConfig, requestData), ...args)
}

postPurchaseSend.requestConfig = postPurchaseSendRequestConfig

export interface PutPurchaseAccomplishIdRequest {
  /**
   * 求购id
   */
  id: string
}

export type PutPurchaseAccomplishIdResponse = any

type PutPurchaseAccomplishIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/purchase/accomplish/{id}', 'data', 'id', string, false>
>

const putPurchaseAccomplishIdRequestConfig: PutPurchaseAccomplishIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase/accomplish/{id}',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putPurchaseAccomplishId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putPurchaseAccomplishId = /*#__PURE__*/ (
  requestData: PutPurchaseAccomplishIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutPurchaseAccomplishIdResponse>(prepare(putPurchaseAccomplishIdRequestConfig, requestData), ...args)
}

putPurchaseAccomplishId.requestConfig = putPurchaseAccomplishIdRequestConfig

export interface PutPurchaseAuditCancelIdRequest {
  /**
   * 求购id
   */
  id: string
}

export type PutPurchaseAuditCancelIdResponse = any

type PutPurchaseAuditCancelIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/purchase/audit/cancel/{id}', 'data', 'id', string, false>
>

const putPurchaseAuditCancelIdRequestConfig: PutPurchaseAuditCancelIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/purchase/audit/cancel/{id}',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putPurchaseAuditCancelId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putPurchaseAuditCancelId = /*#__PURE__*/ (
  requestData: PutPurchaseAuditCancelIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutPurchaseAuditCancelIdResponse>(prepare(putPurchaseAuditCancelIdRequestConfig, requestData), ...args)
}

putPurchaseAuditCancelId.requestConfig = putPurchaseAuditCancelIdRequestConfig

const mockUrl_0_0_0_3 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_3 = '' as any
const prodUrl_0_0_0_3 = '' as any
const dataKey_0_0_0_3 = 'data' as any

export interface GetOrderBoughtRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 订单状态
   */
  status?: string
}

export interface GetOrderBoughtResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 订单id
     */
    id: number
    /**
     * 订单号
     */
    no: string
    /**
     * 微信支付系统生成的订单号
     */
    transactionId?: string
    /**
     * 二手市场商品id
     */
    marketId: number
    /**
     * 订单类型 1:出售 2:借调
     */
    type: number
    /**
     * 购买人的公司id
     */
    buyerId: number
    /**
     * 收货地址id
     */
    buyerAddressId: number
    /**
     * 出售人的公司id
     */
    sellerId: number
    /**
     * 返还收货地址id
     */
    sellerAddressId?: number
    /**
     * 借调开始日期
     */
    leaseStartDate?: string
    /**
     * 借调结束日期
     */
    leaseEndDate?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 订单状态, 1:待支付 2:待发货 3:待收货 4:待返回 5:已完成 6:已取消
     */
    status: number
    /**
     * 发货快递id
     */
    expressDeliveryId?: number
    /**
     * 返还快递id
     */
    expressReturnId?: number
    /**
     * 退还押金
     */
    depositRefund?: string
    /**
     * 退还押金备注
     */
    depositRefundRemark?: string
    /**
     * 二手市场商品信息
     */
    market: {
      /**
       * 创建时间
       */
      createTime: string
      /**
       * 修改时间
       */
      updateTime: string
      /**
       * 数据id
       */
      id: number
      /**
       * 公司id
       */
      companyId: number
      /**
       * 公司收货地址id
       */
      companyAddressId?: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 商品标题
       */
      title: string
      /**
       * 商品描述
       */
      description?: string
      /**
       * 是否允许出售, 0:否 1:是
       */
      allowSell: boolean
      /**
       * 是否允许借调, 0:否 1:是
       */
      allowLease: boolean
      /**
       * 出售价
       */
      sellingPrice?: string
      /**
       * 借调价
       */
      leasePrice?: string
      /**
       * 借调押金
       */
      leaseDeposit?: string
      /**
       * 发货方式, 1:包邮 2:到付 3:自提
       */
      expressMethod: number
      /**
       * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
       */
      quality: number
      /**
       * 服饰状态, 1:审核中 2:上架中 3:未通过 4:已借调 5:已出售 6:已下架
       */
      status: number
      /**
       * 审批结论
       */
      remark?: string
      /**
       * 是否被删除
       */
      isDeleted: boolean
      /**
       * 服饰信息
       */
      product: {
        /**
         * 创建时间
         */
        createTime: string
        /**
         * 修改时间
         */
        updateTime: string
        /**
         * 服饰id
         */
        id: number
        /**
         * 服饰名称
         */
        name: string
        /**
         * 服饰编号
         */
        no?: string
        /**
         * 服饰品牌
         */
        brand?: string
        /**
         * 服饰类型
         */
        typeCode: string
        /**
         * 尺码, 0:均码 1:xs 2:s 3:m 4:l 5:xl 6:xxl 7:xxxl 8:4xl 9:5xl 10:6xl 11:7xl 12:8xl 13:9xl 14:10xl
         */
        size: number
        /**
         * 描述
         */
        description?: string
        /**
         * 租赁次数
         */
        leaseCount: number
        /**
         * 其他信息字段
         */
        bizData?: string
        /**
         * 公司id
         */
        companyId: number
        /**
         * 添加用户id
         */
        userId: number
        /**
         * 服饰状态 1:正常 2:上架中 3:已出售 4:借调中 5:下架中
         */
        status: number
        /**
         * 是否被删除
         */
        isDeleted: boolean
        /**
         * 图片
         */
        picList: {
          /**
           * 服饰图片id
           */
          id: number
          /**
           * 服饰id
           */
          productId: number
          /**
           * 服饰图片地址
           */
          url: string
        }[]
      }
    }
  }[]
}

type GetOrderBoughtRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/order/bought',
    'data',
    string,
    'pageNum' | 'pageSize' | 'status',
    false
  >
>

const getOrderBoughtRequestConfig: GetOrderBoughtRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/bought',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getOrderBought',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getOrderBought = /*#__PURE__*/ (requestData: GetOrderBoughtRequest, ...args: UserRequestRestArgs) => {
  return request<GetOrderBoughtResponse>(prepare(getOrderBoughtRequestConfig, requestData), ...args)
}

getOrderBought.requestConfig = getOrderBoughtRequestConfig

export interface GetOrderSoldRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 订单状态
   */
  status?: string
}

export interface GetOrderSoldResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 订单id
     */
    id: number
    /**
     * 订单号
     */
    no: string
    /**
     * 微信支付系统生成的订单号
     */
    transactionId?: string
    /**
     * 二手市场商品id
     */
    marketId: number
    /**
     * 订单类型 1:出售 2:借调
     */
    type: number
    /**
     * 购买人的公司id
     */
    buyerId: number
    /**
     * 收货地址id
     */
    buyerAddressId: number
    /**
     * 出售人的公司id
     */
    sellerId: number
    /**
     * 返还收货地址id
     */
    sellerAddressId?: number
    /**
     * 借调开始日期
     */
    leaseStartDate?: string
    /**
     * 借调结束日期
     */
    leaseEndDate?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 订单状态, 1:待支付 2:待发货 3:待收货 4:待返回 5:已完成 6:已取消
     */
    status: number
    /**
     * 发货快递id
     */
    expressDeliveryId?: number
    /**
     * 返还快递id
     */
    expressReturnId?: number
    /**
     * 退还押金
     */
    depositRefund?: string
    /**
     * 退还押金备注
     */
    depositRefundRemark?: string
    /**
     * 二手市场商品信息
     */
    market: {
      /**
       * 创建时间
       */
      createTime: string
      /**
       * 修改时间
       */
      updateTime: string
      /**
       * 数据id
       */
      id: number
      /**
       * 公司id
       */
      companyId: number
      /**
       * 公司收货地址id
       */
      companyAddressId?: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 商品标题
       */
      title: string
      /**
       * 商品描述
       */
      description?: string
      /**
       * 是否允许出售, 0:否 1:是
       */
      allowSell: boolean
      /**
       * 是否允许借调, 0:否 1:是
       */
      allowLease: boolean
      /**
       * 出售价
       */
      sellingPrice?: string
      /**
       * 借调价
       */
      leasePrice?: string
      /**
       * 借调押金
       */
      leaseDeposit?: string
      /**
       * 发货方式, 1:包邮 2:到付 3:自提
       */
      expressMethod: number
      /**
       * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
       */
      quality: number
      /**
       * 服饰状态, 1:审核中 2:上架中 3:未通过 4:已借调 5:已出售 6:已下架
       */
      status: number
      /**
       * 审批结论
       */
      remark?: string
      /**
       * 是否被删除
       */
      isDeleted: boolean
      /**
       * 服饰信息
       */
      product: {
        /**
         * 创建时间
         */
        createTime: string
        /**
         * 修改时间
         */
        updateTime: string
        /**
         * 服饰id
         */
        id: number
        /**
         * 服饰名称
         */
        name: string
        /**
         * 服饰编号
         */
        no?: string
        /**
         * 服饰品牌
         */
        brand?: string
        /**
         * 服饰类型
         */
        typeCode: string
        /**
         * 尺码, 0:均码 1:xs 2:s 3:m 4:l 5:xl 6:xxl 7:xxxl 8:4xl 9:5xl 10:6xl 11:7xl 12:8xl 13:9xl 14:10xl
         */
        size: number
        /**
         * 描述
         */
        description?: string
        /**
         * 租赁次数
         */
        leaseCount: number
        /**
         * 其他信息字段
         */
        bizData?: string
        /**
         * 公司id
         */
        companyId: number
        /**
         * 添加用户id
         */
        userId: number
        /**
         * 服饰状态 1:正常 2:上架中 3:已出售 4:借调中 5:下架中
         */
        status: number
        /**
         * 是否被删除
         */
        isDeleted: boolean
        /**
         * 图片
         */
        picList: {
          /**
           * 服饰图片id
           */
          id: number
          /**
           * 服饰id
           */
          productId: number
          /**
           * 服饰图片地址
           */
          url: string
        }[]
      }
    }
  }[]
}

type GetOrderSoldRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/order/sold',
    'data',
    string,
    'pageNum' | 'pageSize' | 'status',
    false
  >
>

const getOrderSoldRequestConfig: GetOrderSoldRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/sold',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getOrderSold',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getOrderSold = /*#__PURE__*/ (requestData: GetOrderSoldRequest, ...args: UserRequestRestArgs) => {
  return request<GetOrderSoldResponse>(prepare(getOrderSoldRequestConfig, requestData), ...args)
}

getOrderSold.requestConfig = getOrderSoldRequestConfig

export interface PostOrderRequest {
  /**
   * market id
   */
  id: number
  /**
   * 订单类型 1:出售 2:借调
   */
  type: number
  /**
   * 收货地址id
   */
  buyerAddressId: number
  /**
   * 借调开始时间
   */
  leaseStartDate?: string
  /**
   * 借调结束时间
   */
  leaseEndDate?: string
  /**
   * 备注
   */
  remark?: string
}

export type PostOrderResponse = number

type PostOrderRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order', 'data', string, string, false>
>

const postOrderRequestConfig: PostOrderRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrder',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrder = /*#__PURE__*/ (requestData: PostOrderRequest, ...args: UserRequestRestArgs) => {
  return request<PostOrderResponse>(prepare(postOrderRequestConfig, requestData), ...args)
}

postOrder.requestConfig = postOrderRequestConfig

export interface PostOrderCancelRequest {
  /**
   * 订单id
   */
  id: number
}

export type PostOrderCancelResponse = any

type PostOrderCancelRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/cancel', 'data', string, string, false>
>

const postOrderCancelRequestConfig: PostOrderCancelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/cancel',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrderCancel',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrderCancel = /*#__PURE__*/ (requestData: PostOrderCancelRequest, ...args: UserRequestRestArgs) => {
  return request<PostOrderCancelResponse>(prepare(postOrderCancelRequestConfig, requestData), ...args)
}

postOrderCancel.requestConfig = postOrderCancelRequestConfig

export interface PostOrderPayBalanceRequest {
  /**
   * 订单id
   */
  id: number
}

export interface PostOrderPayBalanceResponse {
  /**
   * 时间戳
   */
  timestamp: number
  /**
   * 随机字符串
   */
  nonceStr: string
  /**
   * 下单接口返回的prepay_id参数值
   */
  pkg: string
  /**
   * 签名
   */
  paySign: string
}

type PostOrderPayBalanceRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/pay/balance', 'data', string, string, false>
>

const postOrderPayBalanceRequestConfig: PostOrderPayBalanceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/pay/balance',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrderPayBalance',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrderPayBalance = /*#__PURE__*/ (
  requestData: PostOrderPayBalanceRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderPayBalanceResponse>(prepare(postOrderPayBalanceRequestConfig, requestData), ...args)
}

postOrderPayBalance.requestConfig = postOrderPayBalanceRequestConfig

export interface PostOrderPayWechatRequest {
  /**
   * 订单id
   */
  id: number
}

export interface PostOrderPayWechatResponse {
  /**
   * 时间戳
   */
  timestamp: number
  /**
   * 随机字符串
   */
  nonceStr: string
  /**
   * 下单接口返回的prepay_id参数值
   */
  pkg: string
  /**
   * 签名
   */
  paySign: string
}

type PostOrderPayWechatRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/pay/wechat', 'data', string, string, false>
>

const postOrderPayWechatRequestConfig: PostOrderPayWechatRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/pay/wechat',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrderPayWechat',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrderPayWechat = /*#__PURE__*/ (
  requestData: PostOrderPayWechatRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderPayWechatResponse>(prepare(postOrderPayWechatRequestConfig, requestData), ...args)
}

postOrderPayWechat.requestConfig = postOrderPayWechatRequestConfig

export interface PostOrderPayWechatNoticeRequest {
  /**
   * 通知的唯一ID
   */
  id?: string
  /**
   * 通知创建的时间
   */
  create_time?: string
  /**
   * 通知的类型，支付成功通知的类型为TRANSACTION.SUCCESS
   */
  event_type?: string
  /**
   * 通知的资源数据类型，支付成功通知为encrypt-resource
   */
  resource_type?: string
  /**
   * 通知资源数据
   */
  resource?: {
    /**
     * 对开启结果数据进行加密的加密算法，目前只支持AEAD_AES_256_GCM
     */
    algorithm?: string
    /**
     * Base64编码后的开启/停用结果数据密文
     */
    ciphertext?: string
    /**
     * 附加数据
     */
    associated_data?: string
    /**
     * 原始回调类型，为transaction
     */
    original_type?: string
    /**
     * 加密使用的随机串
     */
    nonce?: string
  }
  /**
   * 回调摘要
   */
  summary?: string
}

export interface PostOrderPayWechatNoticeResponse {
  /**
   * 时间戳
   */
  timestamp: number
  /**
   * 随机字符串
   */
  nonceStr: string
  /**
   * 下单接口返回的prepay_id参数值
   */
  pkg: string
  /**
   * 签名
   */
  paySign: string
}

type PostOrderPayWechatNoticeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/pay/wechat/notice', 'data', string, string, false>
>

const postOrderPayWechatNoticeRequestConfig: PostOrderPayWechatNoticeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/pay/wechat/notice',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrderPayWechatNotice',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrderPayWechatNotice = /*#__PURE__*/ (
  requestData: PostOrderPayWechatNoticeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderPayWechatNoticeResponse>(prepare(postOrderPayWechatNoticeRequestConfig, requestData), ...args)
}

postOrderPayWechatNotice.requestConfig = postOrderPayWechatNoticeRequestConfig

export interface GetOrderWechatPayTransactionRequest {
  /**
   * 订单id
   */
  id: string
}

export type GetOrderWechatPayTransactionResponse = boolean

type GetOrderWechatPayTransactionRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/wechat/pay/transaction', 'data', string, 'id', false>
>

const getOrderWechatPayTransactionRequestConfig: GetOrderWechatPayTransactionRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/wechat/pay/transaction',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getOrderWechatPayTransaction',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getOrderWechatPayTransaction = /*#__PURE__*/ (
  requestData: GetOrderWechatPayTransactionRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetOrderWechatPayTransactionResponse>(
    prepare(getOrderWechatPayTransactionRequestConfig, requestData),
    ...args,
  )
}

getOrderWechatPayTransaction.requestConfig = getOrderWechatPayTransactionRequestConfig

export interface PostOrderExpressDeliverRequest {
  /**
   * 订单id
   */
  id: number
  /**
   * 快递单号
   */
  no: string
  /**
   * 备注
   */
  remark?: string
}

export type PostOrderExpressDeliverResponse = any

type PostOrderExpressDeliverRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/express/deliver', 'data', string, string, false>
>

const postOrderExpressDeliverRequestConfig: PostOrderExpressDeliverRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/express/deliver',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrderExpressDeliver',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrderExpressDeliver = /*#__PURE__*/ (
  requestData: PostOrderExpressDeliverRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderExpressDeliverResponse>(prepare(postOrderExpressDeliverRequestConfig, requestData), ...args)
}

postOrderExpressDeliver.requestConfig = postOrderExpressDeliverRequestConfig

export interface PostOrderExpressReturnRequest {
  /**
   * 订单id
   */
  id: number
  /**
   * 快递单号
   */
  no: string
  /**
   * 备注
   */
  remark?: string
}

export type PostOrderExpressReturnResponse = any

type PostOrderExpressReturnRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/express/return', 'data', string, string, false>
>

const postOrderExpressReturnRequestConfig: PostOrderExpressReturnRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/express/return',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrderExpressReturn',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrderExpressReturn = /*#__PURE__*/ (
  requestData: PostOrderExpressReturnRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderExpressReturnResponse>(prepare(postOrderExpressReturnRequestConfig, requestData), ...args)
}

postOrderExpressReturn.requestConfig = postOrderExpressReturnRequestConfig

export interface PostOrderReceiveBuyerRequest {
  /**
   * 订单id
   */
  id: number
}

export type PostOrderReceiveBuyerResponse = any

type PostOrderReceiveBuyerRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/receive/buyer', 'data', string, string, false>
>

const postOrderReceiveBuyerRequestConfig: PostOrderReceiveBuyerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/receive/buyer',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrderReceiveBuyer',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrderReceiveBuyer = /*#__PURE__*/ (
  requestData: PostOrderReceiveBuyerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderReceiveBuyerResponse>(prepare(postOrderReceiveBuyerRequestConfig, requestData), ...args)
}

postOrderReceiveBuyer.requestConfig = postOrderReceiveBuyerRequestConfig

export interface PostOrderReceiveSellerRequest {
  /**
   * 订单id
   */
  id: number
  /**
   * 退还押金金额
   */
  amount: string
  /**
   * 退还押金备注
   */
  depositRefundRemark?: string
}

export type PostOrderReceiveSellerResponse = any

type PostOrderReceiveSellerRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/receive/seller', 'data', string, string, false>
>

const postOrderReceiveSellerRequestConfig: PostOrderReceiveSellerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/receive/seller',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postOrderReceiveSeller',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postOrderReceiveSeller = /*#__PURE__*/ (
  requestData: PostOrderReceiveSellerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderReceiveSellerResponse>(prepare(postOrderReceiveSellerRequestConfig, requestData), ...args)
}

postOrderReceiveSeller.requestConfig = postOrderReceiveSellerRequestConfig

export interface GetOrderIdRequest {
  /**
   * 订单id
   */
  id: string
}

export interface GetOrderIdResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 订单id
   */
  id: number
  /**
   * 订单号
   */
  no: string
  /**
   * 微信支付系统生成的订单号
   */
  transactionId?: string
  /**
   * 二手市场商品id
   */
  marketId: number
  /**
   * 订单类型 1:出售 2:借调
   */
  type: number
  /**
   * 购买人的公司id
   */
  buyerId: number
  /**
   * 收货地址id
   */
  buyerAddressId: number
  /**
   * 出售人的公司id
   */
  sellerId: number
  /**
   * 返还收货地址id
   */
  sellerAddressId?: number
  /**
   * 借调开始日期
   */
  leaseStartDate?: string
  /**
   * 借调结束日期
   */
  leaseEndDate?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 订单状态, 1:待支付 2:待发货 3:待收货 4:待返回 5:已完成 6:已取消
   */
  status: number
  /**
   * 发货快递id
   */
  expressDeliveryId?: number
  /**
   * 返还快递id
   */
  expressReturnId?: number
  /**
   * 退还押金
   */
  depositRefund?: string
  /**
   * 退还押金备注
   */
  depositRefundRemark?: string
  /**
   * 二手市场商品信息
   */
  market: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 数据id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 公司收货地址id
     */
    companyAddressId?: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 商品标题
     */
    title: string
    /**
     * 商品描述
     */
    description?: string
    /**
     * 是否允许出售, 0:否 1:是
     */
    allowSell: boolean
    /**
     * 是否允许借调, 0:否 1:是
     */
    allowLease: boolean
    /**
     * 出售价
     */
    sellingPrice?: string
    /**
     * 借调价
     */
    leasePrice?: string
    /**
     * 借调押金
     */
    leaseDeposit?: string
    /**
     * 发货方式, 1:包邮 2:到付 3:自提
     */
    expressMethod: number
    /**
     * 新旧程度, 1:全新 2:几乎全新 3:轻微使用痕迹 4: 明显使用痕迹
     */
    quality: number
    /**
     * 服饰状态, 1:审核中 2:上架中 3:未通过 4:已借调 5:已出售 6:已下架
     */
    status: number
    /**
     * 审批结论
     */
    remark?: string
    /**
     * 是否被删除
     */
    isDeleted: boolean
    /**
     * 服饰信息
     */
    product: {
      /**
       * 创建时间
       */
      createTime: string
      /**
       * 修改时间
       */
      updateTime: string
      /**
       * 服饰id
       */
      id: number
      /**
       * 服饰名称
       */
      name: string
      /**
       * 服饰编号
       */
      no?: string
      /**
       * 服饰品牌
       */
      brand?: string
      /**
       * 服饰类型
       */
      typeCode: string
      /**
       * 尺码, 0:均码 1:xs 2:s 3:m 4:l 5:xl 6:xxl 7:xxxl 8:4xl 9:5xl 10:6xl 11:7xl 12:8xl 13:9xl 14:10xl
       */
      size: number
      /**
       * 描述
       */
      description?: string
      /**
       * 租赁次数
       */
      leaseCount: number
      /**
       * 其他信息字段
       */
      bizData?: string
      /**
       * 公司id
       */
      companyId: number
      /**
       * 添加用户id
       */
      userId: number
      /**
       * 服饰状态 1:正常 2:上架中 3:已出售 4:借调中 5:下架中
       */
      status: number
      /**
       * 是否被删除
       */
      isDeleted: boolean
      /**
       * 图片
       */
      picList: {
        /**
         * 服饰图片id
         */
        id: number
        /**
         * 服饰id
         */
        productId: number
        /**
         * 服饰图片地址
         */
        url: string
      }[]
    }
  }
  /**
   * 买家信息
   */
  buyer: {
    /**
     * 公司id
     */
    id: number
    /**
     * 公司名称
     */
    name: string
    /**
     * 公司LOGO
     */
    logo?: string
  }
  /**
   * 卖家信息
   */
  seller: {
    /**
     * 公司id
     */
    id: number
    /**
     * 公司名称
     */
    name: string
    /**
     * 公司LOGO
     */
    logo?: string
  }
  /**
   * 买家收货地址
   */
  buyerAddress: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 地址id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 收件人
     */
    recipient: string
    /**
     * 手机号
     */
    phone: string
    /**
     * 省code
     */
    province: string
    /**
     * 市code
     */
    city: string
    /**
     * 区code
     */
    area: string
    /**
     * 地址
     */
    address: string
    /**
     * 是否为默认地址
     */
    isDefault: boolean
    /**
     * 是否被删除
     */
    isDeleted: boolean
  }
  /**
   * 卖家收货地址
   */
  sellerAddress: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 地址id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 收件人
     */
    recipient: string
    /**
     * 手机号
     */
    phone: string
    /**
     * 省code
     */
    province: string
    /**
     * 市code
     */
    city: string
    /**
     * 区code
     */
    area: string
    /**
     * 地址
     */
    address: string
    /**
     * 是否为默认地址
     */
    isDefault: boolean
    /**
     * 是否被删除
     */
    isDeleted: boolean
  }
  /**
   * 快递发货信息
   */
  expressDelivery: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 快递单id
     */
    id: number
    /**
     * 快递单号
     */
    no: string
    /**
     * 备注
     */
    remark?: string
  }
  /**
   * 快递返还信息
   */
  expressReturn: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 快递单id
     */
    id: number
    /**
     * 快递单号
     */
    no: string
    /**
     * 备注
     */
    remark?: string
  }
}

type GetOrderIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/{id}', 'data', 'id', string, false>
>

const getOrderIdRequestConfig: GetOrderIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/order/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getOrderId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getOrderId = /*#__PURE__*/ (requestData: GetOrderIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetOrderIdResponse>(prepare(getOrderIdRequestConfig, requestData), ...args)
}

getOrderId.requestConfig = getOrderIdRequestConfig

const mockUrl_0_0_0_4 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_4 = '' as any
const prodUrl_0_0_0_4 = '' as any
const dataKey_0_0_0_4 = 'data' as any

export interface PostPlatformWithdrawAuditRequest {
  /**
   * 提现记录id
   */
  id: number
  /**
   * 状态 1:审核中 2:待转账 3:已完成 4:已拒绝 5:已取消
   */
  status: number
}

export type PostPlatformWithdrawAuditResponse = any

type PostPlatformWithdrawAuditRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/platform/withdraw/audit', 'data', string, string, false>
>

const postPlatformWithdrawAuditRequestConfig: PostPlatformWithdrawAuditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/platform/withdraw/audit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformWithdrawAudit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postPlatformWithdrawAudit = /*#__PURE__*/ (
  requestData: PostPlatformWithdrawAuditRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformWithdrawAuditResponse>(
    prepare(postPlatformWithdrawAuditRequestConfig, requestData),
    ...args,
  )
}

postPlatformWithdrawAudit.requestConfig = postPlatformWithdrawAuditRequestConfig

export interface PostPlatformFeatureReservationRequest {
  /**
   * 预约功能类型
   */
  type: number
}

export type PostPlatformFeatureReservationResponse = any

type PostPlatformFeatureReservationRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/platform/feature/reservation', 'data', string, string, false>
>

const postPlatformFeatureReservationRequestConfig: PostPlatformFeatureReservationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/platform/feature/reservation',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformFeatureReservation',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postPlatformFeatureReservation = /*#__PURE__*/ (
  requestData: PostPlatformFeatureReservationRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformFeatureReservationResponse>(
    prepare(postPlatformFeatureReservationRequestConfig, requestData),
    ...args,
  )
}

postPlatformFeatureReservation.requestConfig = postPlatformFeatureReservationRequestConfig

export interface PostPlatformOfficialAccountsEventRequest {
  /**
   * 开发者微信号
   */
  ToUserName: string
  /**
   * 发送方账号（一个OpenID）
   */
  FromUserName: string
  /**
   * 消息创建时间（整型）
   */
  CreateTime: string
  /**
   * 消息类型
   */
  MsgType: string
  /**
   * 消息id
   */
  MsgId?: number
  /**
   * 消息内容
   */
  Content?: string
  /**
   * 事件类型
   */
  Event?: string
}

export type PostPlatformOfficialAccountsEventResponse = string

type PostPlatformOfficialAccountsEventRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/platform/official-accounts/event',
    'data',
    string,
    string,
    false
  >
>

const postPlatformOfficialAccountsEventRequestConfig: PostPlatformOfficialAccountsEventRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/platform/official-accounts/event',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPlatformOfficialAccountsEvent',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postPlatformOfficialAccountsEvent = /*#__PURE__*/ (
  requestData: PostPlatformOfficialAccountsEventRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostPlatformOfficialAccountsEventResponse>(
    prepare(postPlatformOfficialAccountsEventRequestConfig, requestData),
    ...args,
  )
}

postPlatformOfficialAccountsEvent.requestConfig = postPlatformOfficialAccountsEventRequestConfig

const mockUrl_0_0_0_5 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_5 = '' as any
const prodUrl_0_0_0_5 = '' as any
const dataKey_0_0_0_5 = 'data' as any

export interface GetCompanyStatisticsRequest {}

export interface GetCompanyStatisticsResponse {
  /**
   * 余额
   */
  balance: string
  /**
   * 提现中的金额
   */
  locked: string
  /**
   * 粉丝数量
   */
  fansCount: number
  /**
   * 关注数量
   */
  follewedCount: number
  /**
   * 今日销售（元）
   */
  saleToday: string
  /**
   * 今日售出（件）
   */
  saleVolumeToday: string
}

type GetCompanyStatisticsRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/statistics', 'data', string, string, true>
>

const getCompanyStatisticsRequestConfig: GetCompanyStatisticsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/statistics',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyStatistics',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyStatistics = /*#__PURE__*/ (
  requestData?: GetCompanyStatisticsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCompanyStatisticsResponse>(prepare(getCompanyStatisticsRequestConfig, requestData), ...args)
}

getCompanyStatistics.requestConfig = getCompanyStatisticsRequestConfig

export interface GetCompanyBalanceRequest {}

export interface GetCompanyBalanceResponse {
  /**
   * 公司余额
   */
  balance: string
  /**
   * 提现中的金额
   */
  locked: string
}

type GetCompanyBalanceRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/balance', 'data', string, string, true>
>

const getCompanyBalanceRequestConfig: GetCompanyBalanceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/balance',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyBalance',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyBalance = /*#__PURE__*/ (
  requestData?: GetCompanyBalanceRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCompanyBalanceResponse>(prepare(getCompanyBalanceRequestConfig, requestData), ...args)
}

getCompanyBalance.requestConfig = getCompanyBalanceRequestConfig

export interface GetCompanyFansRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
}

export interface GetCompanyFansResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 公司id
     */
    id: number
    /**
     * 公司名称
     */
    name: string
    /**
     * 营业执照
     */
    license?: string
    /**
     * 营业执照上的公司名称
     */
    licenseCompanyName?: string
    /**
     * 公司LOGO
     */
    logo?: string
    /**
     * 简介
     */
    intro?: string
    /**
     * 联系人
     */
    contacts: string
    /**
     * 联系电话
     */
    contactPhone: string
    /**
     * 省
     */
    province: string
    /**
     * 市
     */
    city: string
    /**
     * 区
     */
    area: string
    /**
     * 地址
     */
    address: string
    /**
     * 账户余额
     */
    balance: string
    /**
     * 邀请码
     */
    invitationCode: string
    /**
     * 每日可使用的喇叭数量
     */
    trumpet: number
    /**
     * 状态, 0:禁用 1:正常 2:待审核
     */
    status: number
    /**
     * 是否为内部账号
     */
    inner: boolean
  }[]
}

type GetCompanyFansRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/fans', 'data', string, 'pageNum' | 'pageSize', false>
>

const getCompanyFansRequestConfig: GetCompanyFansRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/fans',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyFans',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyFans = /*#__PURE__*/ (requestData: GetCompanyFansRequest, ...args: UserRequestRestArgs) => {
  return request<GetCompanyFansResponse>(prepare(getCompanyFansRequestConfig, requestData), ...args)
}

getCompanyFans.requestConfig = getCompanyFansRequestConfig

export interface GetCompanyFolloweeRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
}

export interface GetCompanyFolloweeResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 公司id
     */
    id: number
    /**
     * 公司名称
     */
    name: string
    /**
     * 营业执照
     */
    license?: string
    /**
     * 营业执照上的公司名称
     */
    licenseCompanyName?: string
    /**
     * 公司LOGO
     */
    logo?: string
    /**
     * 简介
     */
    intro?: string
    /**
     * 联系人
     */
    contacts: string
    /**
     * 联系电话
     */
    contactPhone: string
    /**
     * 省
     */
    province: string
    /**
     * 市
     */
    city: string
    /**
     * 区
     */
    area: string
    /**
     * 地址
     */
    address: string
    /**
     * 账户余额
     */
    balance: string
    /**
     * 邀请码
     */
    invitationCode: string
    /**
     * 每日可使用的喇叭数量
     */
    trumpet: number
    /**
     * 状态, 0:禁用 1:正常 2:待审核
     */
    status: number
    /**
     * 是否为内部账号
     */
    inner: boolean
  }[]
}

type GetCompanyFolloweeRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/company/followee',
    'data',
    string,
    'pageNum' | 'pageSize',
    false
  >
>

const getCompanyFolloweeRequestConfig: GetCompanyFolloweeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/followee',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyFollowee',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyFollowee = /*#__PURE__*/ (
  requestData: GetCompanyFolloweeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCompanyFolloweeResponse>(prepare(getCompanyFolloweeRequestConfig, requestData), ...args)
}

getCompanyFollowee.requestConfig = getCompanyFolloweeRequestConfig

export interface PostCompanyRegisterRequest {
  /**
   * 公司名称
   */
  name: string
  /**
   * 营业执照
   */
  license?: string
  /**
   * 公司LOGO
   */
  logo?: string
  /**
   * 联系人
   */
  contacts: string
  /**
   * 联系电话
   */
  contactPhone: string
  /**
   * 省编码
   */
  province: string
  /**
   * 市编码
   */
  city: string
  /**
   * 区编码
   */
  area: string
  /**
   * 地址
   */
  address: string
  /**
   * 邀请人的邀请码
   */
  inviter?: string
}

export type PostCompanyRegisterResponse = any

type PostCompanyRegisterRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/register', 'data', string, string, false>
>

const postCompanyRegisterRequestConfig: PostCompanyRegisterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/register',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCompanyRegister',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postCompanyRegister = /*#__PURE__*/ (
  requestData: PostCompanyRegisterRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCompanyRegisterResponse>(prepare(postCompanyRegisterRequestConfig, requestData), ...args)
}

postCompanyRegister.requestConfig = postCompanyRegisterRequestConfig

export interface PostCompanyLicenseRequest {
  /**
   * 营业执照
   */
  license: string
}

export type PostCompanyLicenseResponse = any

type PostCompanyLicenseRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/license', 'data', string, string, false>
>

const postCompanyLicenseRequestConfig: PostCompanyLicenseRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/license',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCompanyLicense',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postCompanyLicense = /*#__PURE__*/ (
  requestData: PostCompanyLicenseRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCompanyLicenseResponse>(prepare(postCompanyLicenseRequestConfig, requestData), ...args)
}

postCompanyLicense.requestConfig = postCompanyLicenseRequestConfig

export interface PutCompanyRequest {
  /**
   * 公司LOGO
   */
  logo?: string
  /**
   * 简介
   */
  intro?: string
}

export type PutCompanyResponse = any

type PutCompanyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company', 'data', string, string, false>
>

const putCompanyRequestConfig: PutCompanyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putCompany',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putCompany = /*#__PURE__*/ (requestData: PutCompanyRequest, ...args: UserRequestRestArgs) => {
  return request<PutCompanyResponse>(prepare(putCompanyRequestConfig, requestData), ...args)
}

putCompany.requestConfig = putCompanyRequestConfig

export interface GetCompanyPaymentRequest {}

export type GetCompanyPaymentResponse = {
  /**
   * 收款账户id
   */
  id: number
  /**
   * 公司id
   */
  companyId: number
  /**
   * 收款账户类型 1:银行卡 2:支付宝
   */
  type: number
  /**
   * 姓名
   */
  owner: string
  /**
   * 账号/卡号
   */
  account: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 银行名称
   */
  bankName?: string
}[]

type GetCompanyPaymentRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/payment', 'data', string, string, true>
>

const getCompanyPaymentRequestConfig: GetCompanyPaymentRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/payment',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyPayment',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyPayment = /*#__PURE__*/ (
  requestData?: GetCompanyPaymentRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCompanyPaymentResponse>(prepare(getCompanyPaymentRequestConfig, requestData), ...args)
}

getCompanyPayment.requestConfig = getCompanyPaymentRequestConfig

export interface PostCompanyPaymentRequest {
  /**
   * 收款账户类型 1:银行卡 2:支付宝
   */
  type: number
  /**
   * 姓名
   */
  owner: string
  /**
   * 账号/卡号
   */
  account: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 银行名称
   */
  bankName?: string
}

export type PostCompanyPaymentResponse = any

type PostCompanyPaymentRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/payment', 'data', string, string, false>
>

const postCompanyPaymentRequestConfig: PostCompanyPaymentRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/payment',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCompanyPayment',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postCompanyPayment = /*#__PURE__*/ (
  requestData: PostCompanyPaymentRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCompanyPaymentResponse>(prepare(postCompanyPaymentRequestConfig, requestData), ...args)
}

postCompanyPayment.requestConfig = postCompanyPaymentRequestConfig

export interface GetCompanyPaymentIdRequest {
  /**
   * 收款账户id
   */
  id: string
}

export interface GetCompanyPaymentIdResponse {
  /**
   * 收款账户id
   */
  id: number
  /**
   * 公司id
   */
  companyId: number
  /**
   * 收款账户类型 1:银行卡 2:支付宝
   */
  type: number
  /**
   * 姓名
   */
  owner: string
  /**
   * 账号/卡号
   */
  account: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 银行名称
   */
  bankName?: string
}

type GetCompanyPaymentIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/payment/{id}', 'data', 'id', string, false>
>

const getCompanyPaymentIdRequestConfig: GetCompanyPaymentIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/payment/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyPaymentId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyPaymentId = /*#__PURE__*/ (
  requestData: GetCompanyPaymentIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCompanyPaymentIdResponse>(prepare(getCompanyPaymentIdRequestConfig, requestData), ...args)
}

getCompanyPaymentId.requestConfig = getCompanyPaymentIdRequestConfig

export interface DeleteCompanyPaymentIdRequest {
  /**
   * 收款账户id
   */
  id: string
}

export type DeleteCompanyPaymentIdResponse = any

type DeleteCompanyPaymentIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/payment/{id}', 'data', 'id', string, false>
>

const deleteCompanyPaymentIdRequestConfig: DeleteCompanyPaymentIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/payment/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteCompanyPaymentId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const deleteCompanyPaymentId = /*#__PURE__*/ (
  requestData: DeleteCompanyPaymentIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteCompanyPaymentIdResponse>(prepare(deleteCompanyPaymentIdRequestConfig, requestData), ...args)
}

deleteCompanyPaymentId.requestConfig = deleteCompanyPaymentIdRequestConfig

export interface GetCompanyBalanceRecordRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 类型 1:服装出售 2:服装借出 3:服装购买 4:服装借入 5:押金 6:押金退还 7:提现
   */
  type?: string
  /**
   * 流水 1:收入 2:支出
   */
  mode?: string
  /**
   * 支付途径 1:余额 2:微信
   */
  payment?: string
}

export interface GetCompanyBalanceRecordResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 余额流水id
     */
    id: number
    /**
     * 类型 1:服装出售 2:服装借出 3:服装购买 4:服装借入 5:押金 6:押金退还 7:提现 8:邀请注册奖励
     */
    type: number
    /**
     * 收支 1:收入 2:支出
     */
    mode: number
    /**
     * 支付途径 1:余额 2:微信
     */
    payment: number
    /**
     * 金额
     */
    amount: string
    /**
     * 手续费
     */
    serviceCharge?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 公司id
     */
    companyId: number
  }[]
}

type GetCompanyBalanceRecordRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/company/balance/record',
    'data',
    string,
    'pageNum' | 'pageSize' | 'type' | 'mode' | 'payment',
    false
  >
>

const getCompanyBalanceRecordRequestConfig: GetCompanyBalanceRecordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/balance/record',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'type', 'mode', 'payment'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyBalanceRecord',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyBalanceRecord = /*#__PURE__*/ (
  requestData: GetCompanyBalanceRecordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCompanyBalanceRecordResponse>(prepare(getCompanyBalanceRecordRequestConfig, requestData), ...args)
}

getCompanyBalanceRecord.requestConfig = getCompanyBalanceRecordRequestConfig

export interface GetCompanyWithdrawRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 状态 1:审核中 2:待转账 3:已完成 4:已拒绝 5:已取消
   */
  status?: string
}

export interface GetCompanyWithdrawResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 收款账户id
     */
    id: number
    /**
     * 公司id
     */
    companyId: number
    /**
     * 提现方式 1:银行卡 2:支付宝
     */
    type: number
    /**
     * 提现金额
     */
    amount: string
    /**
     * 状态 1:审核中 2:待转账 3:已完成 4:已拒绝 5:已取消
     */
    status: number
    /**
     * 拒绝理由
     */
    remark?: string
    /**
     * 附件
     */
    file?: string
  }[]
}

type GetCompanyWithdrawRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/company/withdraw',
    'data',
    string,
    'pageNum' | 'pageSize' | 'status',
    false
  >
>

const getCompanyWithdrawRequestConfig: GetCompanyWithdrawRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/withdraw',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyWithdraw',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyWithdraw = /*#__PURE__*/ (
  requestData: GetCompanyWithdrawRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCompanyWithdrawResponse>(prepare(getCompanyWithdrawRequestConfig, requestData), ...args)
}

getCompanyWithdraw.requestConfig = getCompanyWithdrawRequestConfig

export interface PostCompanyWithdrawRequest {
  /**
   * 提现方式
   */
  type: number
  /**
   * 提现金额
   */
  amount: string
}

export type PostCompanyWithdrawResponse = number

type PostCompanyWithdrawRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/withdraw', 'data', string, string, false>
>

const postCompanyWithdrawRequestConfig: PostCompanyWithdrawRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/withdraw',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCompanyWithdraw',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postCompanyWithdraw = /*#__PURE__*/ (
  requestData: PostCompanyWithdrawRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCompanyWithdrawResponse>(prepare(postCompanyWithdrawRequestConfig, requestData), ...args)
}

postCompanyWithdraw.requestConfig = postCompanyWithdrawRequestConfig

export interface PostCompanyFollowToggleRequest {
  /**
   * 被关注的公司id
   */
  id: number
  /**
   * 是否关注
   */
  isFollow: boolean
}

export type PostCompanyFollowToggleResponse = any

type PostCompanyFollowToggleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/follow/toggle', 'data', string, string, false>
>

const postCompanyFollowToggleRequestConfig: PostCompanyFollowToggleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/follow/toggle',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCompanyFollowToggle',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postCompanyFollowToggle = /*#__PURE__*/ (
  requestData: PostCompanyFollowToggleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCompanyFollowToggleResponse>(prepare(postCompanyFollowToggleRequestConfig, requestData), ...args)
}

postCompanyFollowToggle.requestConfig = postCompanyFollowToggleRequestConfig

export interface GetCompanyInvitationRequest {}

export type GetCompanyInvitationResponse = {
  /**
   * 公司id
   */
  id: number
  /**
   * 公司LOGO
   */
  logo: string
  /**
   * 公司名称
   */
  name: string
  /**
   * 邀请任务完成情况，第一位注册，第二位关注公众号，第三位二手市场上架服装，第四位完成首笔交易
   */
  taskStatus: string
}[]

type GetCompanyInvitationRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/invitation', 'data', string, string, true>
>

const getCompanyInvitationRequestConfig: GetCompanyInvitationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/invitation',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyInvitation',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyInvitation = /*#__PURE__*/ (
  requestData?: GetCompanyInvitationRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetCompanyInvitationResponse>(prepare(getCompanyInvitationRequestConfig, requestData), ...args)
}

getCompanyInvitation.requestConfig = getCompanyInvitationRequestConfig

export interface PostCompanyLaunchNoticeRequest {
  /**
   * 上新时间
   */
  time: string
}

export type PostCompanyLaunchNoticeResponse = any

type PostCompanyLaunchNoticeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/launch/notice', 'data', string, string, false>
>

const postCompanyLaunchNoticeRequestConfig: PostCompanyLaunchNoticeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/launch/notice',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postCompanyLaunchNotice',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postCompanyLaunchNotice = /*#__PURE__*/ (
  requestData: PostCompanyLaunchNoticeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCompanyLaunchNoticeResponse>(prepare(postCompanyLaunchNoticeRequestConfig, requestData), ...args)
}

postCompanyLaunchNotice.requestConfig = postCompanyLaunchNoticeRequestConfig

export interface GetCompanyIdRequest {
  /**
   * 要查询的公司id
   */
  id: string
}

export interface GetCompanyIdResponse {
  /**
   * 公司id
   */
  id: number
  /**
   * 公司名称
   */
  name: string
  /**
   * 公司LOGO
   */
  logo?: string
  /**
   * 简介
   */
  intro?: string
  /**
   * 粉丝数量
   */
  fansCount: number
  /**
   * 是否已关注
   */
  follewed: boolean
  /**
   * 已卖出数量
   */
  sold: number
}

type GetCompanyIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/{id}', 'data', 'id', string, false>
>

const getCompanyIdRequestConfig: GetCompanyIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/company/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanyId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getCompanyId = /*#__PURE__*/ (requestData: GetCompanyIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetCompanyIdResponse>(prepare(getCompanyIdRequestConfig, requestData), ...args)
}

getCompanyId.requestConfig = getCompanyIdRequestConfig

const mockUrl_0_0_0_6 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_6 = '' as any
const prodUrl_0_0_0_6 = '' as any
const dataKey_0_0_0_6 = 'data' as any

export interface GetAccountRegisterCodeAccountRequest {
  /**
   * 账号
   */
  account: string
}

export type GetAccountRegisterCodeAccountResponse = any

type GetAccountRegisterCodeAccountRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/account/register/code/{account}',
    'data',
    'account',
    string,
    false
  >
>

const getAccountRegisterCodeAccountRequestConfig: GetAccountRegisterCodeAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/register/code/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['account'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountRegisterCodeAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getAccountRegisterCodeAccount = /*#__PURE__*/ (
  requestData: GetAccountRegisterCodeAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAccountRegisterCodeAccountResponse>(
    prepare(getAccountRegisterCodeAccountRequestConfig, requestData),
    ...args,
  )
}

getAccountRegisterCodeAccount.requestConfig = getAccountRegisterCodeAccountRequestConfig

export interface PostAccountRegisterCodeCheckRequest {
  /**
   * 账号
   */
  account: string
  /**
   * 验证码
   */
  code: string
}

export type PostAccountRegisterCodeCheckResponse = string

type PostAccountRegisterCodeCheckRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/register/code/check', 'data', string, string, false>
>

const postAccountRegisterCodeCheckRequestConfig: PostAccountRegisterCodeCheckRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/register/code/check',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAccountRegisterCodeCheck',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postAccountRegisterCodeCheck = /*#__PURE__*/ (
  requestData: PostAccountRegisterCodeCheckRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountRegisterCodeCheckResponse>(
    prepare(postAccountRegisterCodeCheckRequestConfig, requestData),
    ...args,
  )
}

postAccountRegisterCodeCheck.requestConfig = postAccountRegisterCodeCheckRequestConfig

export interface GetAccountChangePasswordCodeAccountRequest {
  /**
   * 账号
   */
  account: string
}

export type GetAccountChangePasswordCodeAccountResponse = any

type GetAccountChangePasswordCodeAccountRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/account/change/password/code/{account}',
    'data',
    'account',
    string,
    false
  >
>

const getAccountChangePasswordCodeAccountRequestConfig: GetAccountChangePasswordCodeAccountRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/account/change/password/code/{account}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.raw,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['account'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getAccountChangePasswordCodeAccount',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

export const getAccountChangePasswordCodeAccount = /*#__PURE__*/ (
  requestData: GetAccountChangePasswordCodeAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAccountChangePasswordCodeAccountResponse>(
    prepare(getAccountChangePasswordCodeAccountRequestConfig, requestData),
    ...args,
  )
}

getAccountChangePasswordCodeAccount.requestConfig = getAccountChangePasswordCodeAccountRequestConfig

export interface PostAccountChangePasswordCodeCheckRequest {
  /**
   * 账号
   */
  account: string
  /**
   * 验证码
   */
  code: string
}

export type PostAccountChangePasswordCodeCheckResponse = string

type PostAccountChangePasswordCodeCheckRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/account/change/password/code/check',
    'data',
    string,
    string,
    false
  >
>

const postAccountChangePasswordCodeCheckRequestConfig: PostAccountChangePasswordCodeCheckRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/change/password/code/check',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAccountChangePasswordCodeCheck',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postAccountChangePasswordCodeCheck = /*#__PURE__*/ (
  requestData: PostAccountChangePasswordCodeCheckRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountChangePasswordCodeCheckResponse>(
    prepare(postAccountChangePasswordCodeCheckRequestConfig, requestData),
    ...args,
  )
}

postAccountChangePasswordCodeCheck.requestConfig = postAccountChangePasswordCodeCheckRequestConfig

export interface GetAccountSaltRequest {}

export type GetAccountSaltResponse = string

type GetAccountSaltRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/salt', 'data', string, string, true>
>

const getAccountSaltRequestConfig: GetAccountSaltRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/salt',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountSalt',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getAccountSalt = /*#__PURE__*/ (requestData?: GetAccountSaltRequest, ...args: UserRequestRestArgs) => {
  return request<GetAccountSaltResponse>(prepare(getAccountSaltRequestConfig, requestData), ...args)
}

getAccountSalt.requestConfig = getAccountSaltRequestConfig

export interface GetAccountSaltAccountRequest {
  /**
   * 账号
   */
  account: string
}

export type GetAccountSaltAccountResponse = string

type GetAccountSaltAccountRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/salt/{account}', 'data', 'account', string, false>
>

const getAccountSaltAccountRequestConfig: GetAccountSaltAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/salt/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['account'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountSaltAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getAccountSaltAccount = /*#__PURE__*/ (
  requestData: GetAccountSaltAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAccountSaltAccountResponse>(prepare(getAccountSaltAccountRequestConfig, requestData), ...args)
}

getAccountSaltAccount.requestConfig = getAccountSaltAccountRequestConfig

export interface PostAccountLoginRequest {
  /**
   * 账号
   */
  account: string
  /**
   * 密码（密文）
   */
  password: string
  /**
   * 盐值
   */
  salt: string
}

export interface PostAccountLoginResponse {
  /**
   * 登录凭证
   */
  token: string
  /**
   * 是否绑定openid
   */
  bind: boolean
}

type PostAccountLoginRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login', 'data', string, string, false>
>

const postAccountLoginRequestConfig: PostAccountLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAccountLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postAccountLogin = /*#__PURE__*/ (requestData: PostAccountLoginRequest, ...args: UserRequestRestArgs) => {
  return request<PostAccountLoginResponse>(prepare(postAccountLoginRequestConfig, requestData), ...args)
}

postAccountLogin.requestConfig = postAccountLoginRequestConfig

export interface GetAccountLoginCodeAccountRequest {
  /**
   * 账号
   */
  account: string
}

export type GetAccountLoginCodeAccountResponse = any

type GetAccountLoginCodeAccountRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/account/login/code/{account}',
    'data',
    'account',
    string,
    false
  >
>

const getAccountLoginCodeAccountRequestConfig: GetAccountLoginCodeAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/login/code/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['account'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountLoginCodeAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getAccountLoginCodeAccount = /*#__PURE__*/ (
  requestData: GetAccountLoginCodeAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAccountLoginCodeAccountResponse>(
    prepare(getAccountLoginCodeAccountRequestConfig, requestData),
    ...args,
  )
}

getAccountLoginCodeAccount.requestConfig = getAccountLoginCodeAccountRequestConfig

export interface PostAccountLoginCodeRequest {
  /**
   * 账号
   */
  account: string
  /**
   * 验证码
   */
  code: string
}

export interface PostAccountLoginCodeResponse {
  /**
   * 登录凭证
   */
  token: string
  /**
   * 是否绑定openid
   */
  bind: boolean
}

type PostAccountLoginCodeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login/code', 'data', string, string, false>
>

const postAccountLoginCodeRequestConfig: PostAccountLoginCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/login/code',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAccountLoginCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postAccountLoginCode = /*#__PURE__*/ (
  requestData: PostAccountLoginCodeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountLoginCodeResponse>(prepare(postAccountLoginCodeRequestConfig, requestData), ...args)
}

postAccountLoginCode.requestConfig = postAccountLoginCodeRequestConfig

export interface PostAccountLoginWechatPhoneRequest {
  /**
   * 微信获取手机号接口code
   */
  code: string
}

export interface PostAccountLoginWechatPhoneResponse {
  /**
   * 账号
   */
  account: string
  /**
   * 鉴权凭证
   */
  token: string
  /**
   * 是否绑定openid
   */
  bind: boolean
}

type PostAccountLoginWechatPhoneRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login/wechat/phone', 'data', string, string, false>
>

const postAccountLoginWechatPhoneRequestConfig: PostAccountLoginWechatPhoneRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/login/wechat/phone',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAccountLoginWechatPhone',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postAccountLoginWechatPhone = /*#__PURE__*/ (
  requestData: PostAccountLoginWechatPhoneRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountLoginWechatPhoneResponse>(
    prepare(postAccountLoginWechatPhoneRequestConfig, requestData),
    ...args,
  )
}

postAccountLoginWechatPhone.requestConfig = postAccountLoginWechatPhoneRequestConfig

export interface PostAccountLoginWechatRequest {
  /**
   * 微信授权登录code
   */
  code: string
}

export type PostAccountLoginWechatResponse = string

type PostAccountLoginWechatRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login/wechat', 'data', string, string, false>
>

const postAccountLoginWechatRequestConfig: PostAccountLoginWechatRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/login/wechat',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAccountLoginWechat',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postAccountLoginWechat = /*#__PURE__*/ (
  requestData: PostAccountLoginWechatRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountLoginWechatResponse>(prepare(postAccountLoginWechatRequestConfig, requestData), ...args)
}

postAccountLoginWechat.requestConfig = postAccountLoginWechatRequestConfig

export interface PostAccountBindOpenidRequest {
  /**
   * 账号
   */
  account: string
  /**
   * 微信授权登录code
   */
  code: string
}

export type PostAccountBindOpenidResponse = any

type PostAccountBindOpenidRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/bind/openid', 'data', string, string, false>
>

const postAccountBindOpenidRequestConfig: PostAccountBindOpenidRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/bind/openid',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAccountBindOpenid',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postAccountBindOpenid = /*#__PURE__*/ (
  requestData: PostAccountBindOpenidRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountBindOpenidResponse>(prepare(postAccountBindOpenidRequestConfig, requestData), ...args)
}

postAccountBindOpenid.requestConfig = postAccountBindOpenidRequestConfig

export interface PutAccountPasswordRequest {
  /**
   * 短信验证码
   */
  code: string
  /**
   * 新密码（密文）
   */
  password: string
  /**
   * 盐值
   */
  salt: string
}

export type PutAccountPasswordResponse = any

type PutAccountPasswordRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/password', 'data', string, string, false>
>

const putAccountPasswordRequestConfig: PutAccountPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/account/password',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putAccountPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putAccountPassword = /*#__PURE__*/ (
  requestData: PutAccountPasswordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutAccountPasswordResponse>(prepare(putAccountPasswordRequestConfig, requestData), ...args)
}

putAccountPassword.requestConfig = putAccountPasswordRequestConfig

const mockUrl_0_0_0_7 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_7 = '' as any
const prodUrl_0_0_0_7 = '' as any
const dataKey_0_0_0_7 = 'data' as any

export interface GetUserRequest {}

export type GetUserResponse = {
  /**
   * 用户id
   */
  id: number
  /**
   * 账号id
   */
  accountId: number
  /**
   * 姓名
   */
  name: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 公司id
   */
  companyId: number
  /**
   * 角色id
   */
  roleId: number
}[]

type GetUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user', 'data', string, string, true>
>

const getUserRequestConfig: GetUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/user',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getUser = /*#__PURE__*/ (requestData?: GetUserRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserResponse>(prepare(getUserRequestConfig, requestData), ...args)
}

getUser.requestConfig = getUserRequestConfig

export interface PostUserRequest {
  /**
   * 姓名
   */
  name: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 密码(明文)
   */
  password?: string
  /**
   * 角色id
   */
  roleId: number
}

export type PostUserResponse = number

type PostUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user', 'data', string, string, false>
>

const postUserRequestConfig: PostUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/user',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postUser = /*#__PURE__*/ (requestData: PostUserRequest, ...args: UserRequestRestArgs) => {
  return request<PostUserResponse>(prepare(postUserRequestConfig, requestData), ...args)
}

postUser.requestConfig = postUserRequestConfig

export interface PutUserRequest {
  /**
   * 用户id
   */
  id: number
  /**
   * 用户
   */
  user: string
  /**
   * 密码（明文）
   */
  password: string
  /**
   * 微信用户唯一标识
   */
  openid?: string
}

export type PutUserResponse = any

type PutUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user', 'data', string, string, false>
>

const putUserRequestConfig: PutUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/user',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putUser = /*#__PURE__*/ (requestData: PutUserRequest, ...args: UserRequestRestArgs) => {
  return request<PutUserResponse>(prepare(putUserRequestConfig, requestData), ...args)
}

putUser.requestConfig = putUserRequestConfig

export interface DeleteUserRequest {
  /**
   * 用户id
   */
  id: string
}

export type DeleteUserResponse = any

type DeleteUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user', 'data', string, 'id', false>
>

const deleteUserRequestConfig: DeleteUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/user',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const deleteUser = /*#__PURE__*/ (requestData: DeleteUserRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteUserResponse>(prepare(deleteUserRequestConfig, requestData), ...args)
}

deleteUser.requestConfig = deleteUserRequestConfig

export interface GetUserSelfRequest {}

export interface GetUserSelfResponse {
  /**
   * 用户id
   */
  id: number
  /**
   * 账号id
   */
  accountId: number
  /**
   * 姓名
   */
  name: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 公司id
   */
  companyId: number
  /**
   * 角色id
   */
  roleId: number
  /**
   * 公司信息
   */
  company: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 公司id
     */
    id: number
    /**
     * 公司名称
     */
    name: string
    /**
     * 营业执照
     */
    license?: string
    /**
     * 营业执照上的公司名称
     */
    licenseCompanyName?: string
    /**
     * 公司LOGO
     */
    logo?: string
    /**
     * 简介
     */
    intro?: string
    /**
     * 联系人
     */
    contacts: string
    /**
     * 联系电话
     */
    contactPhone: string
    /**
     * 省
     */
    province: string
    /**
     * 市
     */
    city: string
    /**
     * 区
     */
    area: string
    /**
     * 地址
     */
    address: string
    /**
     * 账户余额
     */
    balance: string
    /**
     * 邀请码
     */
    invitationCode: string
    /**
     * 每日可使用的喇叭数量
     */
    trumpet: number
    /**
     * 状态, 0:禁用 1:正常 2:待审核
     */
    status: number
    /**
     * 是否为内部账号
     */
    inner: boolean
  }
  /**
   * 用户账号
   */
  account: string
  /**
   * 角色名称
   */
  roleName: string
  /**
   * 是否为超级管理员
   */
  isAdmin: boolean
  /**
   * 权限点
   */
  auth: number[]
}

type GetUserSelfRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user/self', 'data', string, string, true>
>

const getUserSelfRequestConfig: GetUserSelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/user/self',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUserSelf',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getUserSelf = /*#__PURE__*/ (requestData?: GetUserSelfRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserSelfResponse>(prepare(getUserSelfRequestConfig, requestData), ...args)
}

getUserSelf.requestConfig = getUserSelfRequestConfig

export interface GetUserIdRequest {
  /**
   * 用户id
   */
  id: string
}

export interface GetUserIdResponse {
  /**
   * 用户id
   */
  id: number
  /**
   * 账号id
   */
  accountId: number
  /**
   * 姓名
   */
  name: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 公司id
   */
  companyId: number
  /**
   * 角色id
   */
  roleId: number
  /**
   * 公司信息
   */
  company: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 公司id
     */
    id: number
    /**
     * 公司名称
     */
    name: string
    /**
     * 营业执照
     */
    license?: string
    /**
     * 营业执照上的公司名称
     */
    licenseCompanyName?: string
    /**
     * 公司LOGO
     */
    logo?: string
    /**
     * 简介
     */
    intro?: string
    /**
     * 联系人
     */
    contacts: string
    /**
     * 联系电话
     */
    contactPhone: string
    /**
     * 省
     */
    province: string
    /**
     * 市
     */
    city: string
    /**
     * 区
     */
    area: string
    /**
     * 地址
     */
    address: string
    /**
     * 账户余额
     */
    balance: string
    /**
     * 邀请码
     */
    invitationCode: string
    /**
     * 每日可使用的喇叭数量
     */
    trumpet: number
    /**
     * 状态, 0:禁用 1:正常 2:待审核
     */
    status: number
    /**
     * 是否为内部账号
     */
    inner: boolean
  }
  /**
   * 用户账号
   */
  account: string
  /**
   * 角色名称
   */
  roleName: string
  /**
   * 是否为超级管理员
   */
  isAdmin: boolean
  /**
   * 权限点
   */
  auth: number[]
}

type GetUserIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user/{id}', 'data', 'id', string, false>
>

const getUserIdRequestConfig: GetUserIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/user/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUserId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getUserId = /*#__PURE__*/ (requestData: GetUserIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserIdResponse>(prepare(getUserIdRequestConfig, requestData), ...args)
}

getUserId.requestConfig = getUserIdRequestConfig

const mockUrl_0_0_0_8 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_8 = '' as any
const prodUrl_0_0_0_8 = '' as any
const dataKey_0_0_0_8 = 'data' as any

export interface GetRoleRequest {}

export interface GetRoleResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 角色id
   */
  id: number
  /**
   * 角色
   */
  role: string
}

type GetRoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role', 'data', string, string, true>
>

const getRoleRequestConfig: GetRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/role',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getRole = /*#__PURE__*/ (requestData?: GetRoleRequest, ...args: UserRequestRestArgs) => {
  return request<GetRoleResponse>(prepare(getRoleRequestConfig, requestData), ...args)
}

getRole.requestConfig = getRoleRequestConfig

export interface PostRoleRequest {
  /**
   * 角色名称
   */
  name: string
}

export type PostRoleResponse = any

type PostRoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role', 'data', string, string, false>
>

const postRoleRequestConfig: PostRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/role',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postRole = /*#__PURE__*/ (requestData: PostRoleRequest, ...args: UserRequestRestArgs) => {
  return request<PostRoleResponse>(prepare(postRoleRequestConfig, requestData), ...args)
}

postRole.requestConfig = postRoleRequestConfig

export interface PutRoleRequest {
  /**
   * 角色id
   */
  id: number
  /**
   * 角色
   */
  role: string
  /**
   * 密码（明文）
   */
  password: string
  /**
   * 微信用户唯一标识
   */
  openid?: string
}

export type PutRoleResponse = any

type PutRoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role', 'data', string, string, false>
>

const putRoleRequestConfig: PutRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/role',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putRole = /*#__PURE__*/ (requestData: PutRoleRequest, ...args: UserRequestRestArgs) => {
  return request<PutRoleResponse>(prepare(putRoleRequestConfig, requestData), ...args)
}

putRole.requestConfig = putRoleRequestConfig

export interface DeleteRoleRequest {
  /**
   * 角色id
   */
  id: string
}

export type DeleteRoleResponse = any

type DeleteRoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role', 'data', string, 'id', false>
>

const deleteRoleRequestConfig: DeleteRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/role',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const deleteRole = /*#__PURE__*/ (requestData: DeleteRoleRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteRoleResponse>(prepare(deleteRoleRequestConfig, requestData), ...args)
}

deleteRole.requestConfig = deleteRoleRequestConfig

export interface GetRoleIdRequest {
  /**
   * 角色id
   */
  id: string
}

export interface GetRoleIdResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 角色id
   */
  id: number
  /**
   * 角色
   */
  role: string
}

type GetRoleIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role/{id}', 'data', 'id', string, false>
>

const getRoleIdRequestConfig: GetRoleIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/role/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getRoleId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getRoleId = /*#__PURE__*/ (requestData: GetRoleIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetRoleIdResponse>(prepare(getRoleIdRequestConfig, requestData), ...args)
}

getRoleId.requestConfig = getRoleIdRequestConfig

const mockUrl_0_0_0_9 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_9 = '' as any
const prodUrl_0_0_0_9 = '' as any
const dataKey_0_0_0_9 = 'data' as any

export interface GetAddressRequest {}

export type GetAddressResponse = {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 地址id
   */
  id: number
  /**
   * 公司id
   */
  companyId: number
  /**
   * 收件人
   */
  recipient: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 省code
   */
  province: string
  /**
   * 市code
   */
  city: string
  /**
   * 区code
   */
  area: string
  /**
   * 地址
   */
  address: string
  /**
   * 是否为默认地址
   */
  isDefault: boolean
  /**
   * 是否被删除
   */
  isDeleted: boolean
}[]

type GetAddressRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address', 'data', string, string, true>
>

const getAddressRequestConfig: GetAddressRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/address',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAddress',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getAddress = /*#__PURE__*/ (requestData?: GetAddressRequest, ...args: UserRequestRestArgs) => {
  return request<GetAddressResponse>(prepare(getAddressRequestConfig, requestData), ...args)
}

getAddress.requestConfig = getAddressRequestConfig

export interface PostAddressRequest {
  /**
   * 收件人
   */
  recipient: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 省编码
   */
  province: string
  /**
   * 市编码
   */
  city: string
  /**
   * 区编码
   */
  area: string
  /**
   * 地址
   */
  address: string
  /**
   * 是否为默认地址
   */
  isDefault?: boolean
}

export type PostAddressResponse = number

type PostAddressRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address', 'data', string, string, false>
>

const postAddressRequestConfig: PostAddressRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/address',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postAddress',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postAddress = /*#__PURE__*/ (requestData: PostAddressRequest, ...args: UserRequestRestArgs) => {
  return request<PostAddressResponse>(prepare(postAddressRequestConfig, requestData), ...args)
}

postAddress.requestConfig = postAddressRequestConfig

export interface PutAddressRequest {
  /**
   * 地址id
   */
  id: number
  /**
   * 收件人
   */
  recipient: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 省编码
   */
  province: string
  /**
   * 市编码
   */
  city: string
  /**
   * 区编码
   */
  area: string
  /**
   * 地址
   */
  address: string
}

export type PutAddressResponse = any

type PutAddressRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address', 'data', string, string, false>
>

const putAddressRequestConfig: PutAddressRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/address',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putAddress',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putAddress = /*#__PURE__*/ (requestData: PutAddressRequest, ...args: UserRequestRestArgs) => {
  return request<PutAddressResponse>(prepare(putAddressRequestConfig, requestData), ...args)
}

putAddress.requestConfig = putAddressRequestConfig

export interface PutAddressDefaultRequest {
  /**
   * 地址id
   */
  id: number
}

export type PutAddressDefaultResponse = any

type PutAddressDefaultRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address/default', 'data', string, string, false>
>

const putAddressDefaultRequestConfig: PutAddressDefaultRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/address/default',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putAddressDefault',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putAddressDefault = /*#__PURE__*/ (
  requestData: PutAddressDefaultRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutAddressDefaultResponse>(prepare(putAddressDefaultRequestConfig, requestData), ...args)
}

putAddressDefault.requestConfig = putAddressDefaultRequestConfig

export interface DeleteAddressIdRequest {
  /**
   * 地址id
   */
  id: string
}

export type DeleteAddressIdResponse = any

type DeleteAddressIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address/{id}', 'data', 'id', string, false>
>

const deleteAddressIdRequestConfig: DeleteAddressIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/address/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_9,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteAddressId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const deleteAddressId = /*#__PURE__*/ (requestData: DeleteAddressIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteAddressIdResponse>(prepare(deleteAddressIdRequestConfig, requestData), ...args)
}

deleteAddressId.requestConfig = deleteAddressIdRequestConfig

export interface GetAddressIdRequest {
  /**
   * 地址id
   */
  id: string
}

export interface GetAddressIdResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 地址id
   */
  id: number
  /**
   * 公司id
   */
  companyId: number
  /**
   * 收件人
   */
  recipient: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 省code
   */
  province: string
  /**
   * 市code
   */
  city: string
  /**
   * 区code
   */
  area: string
  /**
   * 地址
   */
  address: string
  /**
   * 是否为默认地址
   */
  isDefault: boolean
  /**
   * 是否被删除
   */
  isDeleted: boolean
}

type GetAddressIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address/{id}', 'data', 'id', string, false>
>

const getAddressIdRequestConfig: GetAddressIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/address/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAddressId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getAddressId = /*#__PURE__*/ (requestData: GetAddressIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetAddressIdResponse>(prepare(getAddressIdRequestConfig, requestData), ...args)
}

getAddressId.requestConfig = getAddressIdRequestConfig

const mockUrl_0_0_0_10 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_10 = '' as any
const prodUrl_0_0_0_10 = '' as any
const dataKey_0_0_0_10 = 'data' as any

export interface GetProductRequest {
  /**
   * 服饰状态 1:正常 2:已出售 3:借调中
   */
  status?: string
}

export type GetProductResponse = {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 服饰id
   */
  id: number
  /**
   * 服饰名称
   */
  name: string
  /**
   * 服饰编号
   */
  no?: string
  /**
   * 服饰品牌
   */
  brand?: string
  /**
   * 服饰类型
   */
  typeCode: string
  /**
   * 描述
   */
  description?: string
  /**
   * 租赁次数
   */
  leaseCount: number
  /**
   * 其他信息字段
   */
  bizData?: string
  /**
   * 服饰状态 1:正常 2:已售出 3:借调中
   */
  status: number
  /**
   * 图片
   */
  picList: {
    /**
     * 服饰图片id
     */
    id: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 服饰图片地址
     */
    url: string
  }[]
}[]

type GetProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product', 'data', string, 'status', false>
>

const getProductRequestConfig: GetProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/product',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: ['status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getProduct = /*#__PURE__*/ (requestData: GetProductRequest, ...args: UserRequestRestArgs) => {
  return request<GetProductResponse>(prepare(getProductRequestConfig, requestData), ...args)
}

getProduct.requestConfig = getProductRequestConfig

export interface PostProductRequest {
  /**
   * 服饰名称
   */
  name: string
  /**
   * 服饰图片
   */
  picList: string[]
  /**
   * 服饰编号
   */
  no?: string
  /**
   * 服饰品牌
   */
  brand?: string
  /**
   * 服饰类型code
   */
  typeCode: string
  /**
   * 服饰尺寸
   */
  size: number
  /**
   * 其他信息
   */
  fieldList?: {
    /**
     * 字段键名
     */
    fieldKey: string
    /**
     * 字段键值
     */
    fieldValue: string
  }[]
  /**
   * 服饰标签
   */
  tagIdList?: number[]
  /**
   * 描述
   */
  description?: string
}

export type PostProductResponse = number

type PostProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product', 'data', string, string, false>
>

const postProductRequestConfig: PostProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/product',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const postProduct = /*#__PURE__*/ (requestData: PostProductRequest, ...args: UserRequestRestArgs) => {
  return request<PostProductResponse>(prepare(postProductRequestConfig, requestData), ...args)
}

postProduct.requestConfig = postProductRequestConfig

export interface PutProductRequest {
  /**
   * 服饰名称
   */
  name: string
  /**
   * 服饰图片
   */
  picList: string[]
  /**
   * 服饰编号
   */
  no?: string
  /**
   * 服饰品牌
   */
  brand?: string
  /**
   * 服饰类型code
   */
  typeCode: string
  /**
   * 服饰尺寸
   */
  size: number
  /**
   * 其他信息
   */
  fieldList?: {
    /**
     * 字段键名
     */
    fieldKey: string
    /**
     * 字段键值
     */
    fieldValue: string
  }[]
  /**
   * 服饰标签
   */
  tagIdList?: number[]
  /**
   * 描述
   */
  description?: string
  /**
   * 服饰id
   */
  id: number
}

export type PutProductResponse = any

type PutProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product', 'data', string, string, false>
>

const putProductRequestConfig: PutProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/product',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const putProduct = /*#__PURE__*/ (requestData: PutProductRequest, ...args: UserRequestRestArgs) => {
  return request<PutProductResponse>(prepare(putProductRequestConfig, requestData), ...args)
}

putProduct.requestConfig = putProductRequestConfig

export interface GetProductPageRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 分页条数
   */
  pageSize: string
  /**
   * 服饰类型code
   */
  productTypeCode?: string
  /**
   * 服饰名称
   */
  name?: string
  /**
   * 服饰状态 1:正常 2:已出售 3:借调中
   */
  status?: string
}

export interface GetProductPageResponse {
  /**
   * 数据总条数
   */
  total: number
  /**
   * 数据
   */
  list: {
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 修改时间
     */
    updateTime: string
    /**
     * 服饰id
     */
    id: number
    /**
     * 服饰名称
     */
    name: string
    /**
     * 服饰编号
     */
    no?: string
    /**
     * 服饰品牌
     */
    brand?: string
    /**
     * 服饰类型
     */
    typeCode: string
    /**
     * 服饰尺码
     */
    size: number
    /**
     * 描述
     */
    description?: string
    /**
     * 租赁次数
     */
    leaseCount: number
    /**
     * 服饰状态 1:正常 2:已售出 3:借调中
     */
    status: number
    /**
     * 图片
     */
    picList: {
      /**
       * 服饰图片id
       */
      id: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 服饰图片地址
       */
      url: string
    }[]
  }[]
}

type GetProductPageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/product/page',
    'data',
    string,
    'pageNum' | 'pageSize' | 'productTypeCode' | 'name' | 'status',
    false
  >
>

const getProductPageRequestConfig: GetProductPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/product/page',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'productTypeCode', 'name', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getProductPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getProductPage = /*#__PURE__*/ (requestData: GetProductPageRequest, ...args: UserRequestRestArgs) => {
  return request<GetProductPageResponse>(prepare(getProductPageRequestConfig, requestData), ...args)
}

getProductPage.requestConfig = getProductPageRequestConfig

export interface DeleteProductIdRequest {
  /**
   * 服饰id
   */
  id: string
}

export type DeleteProductIdResponse = any

type DeleteProductIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product/{id}', 'data', 'id', string, false>
>

const deleteProductIdRequestConfig: DeleteProductIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/product/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_10,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteProductId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const deleteProductId = /*#__PURE__*/ (requestData: DeleteProductIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteProductIdResponse>(prepare(deleteProductIdRequestConfig, requestData), ...args)
}

deleteProductId.requestConfig = deleteProductIdRequestConfig

export interface GetProductIdRequest {
  /**
   * 服饰id
   */
  id: string
}

export interface GetProductIdResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 服饰id
   */
  id: number
  /**
   * 服饰名称
   */
  name: string
  /**
   * 服饰编号
   */
  no?: string
  /**
   * 服饰品牌
   */
  brand?: string
  /**
   * 服饰类型
   */
  typeCode: string
  /**
   * 服饰尺码
   */
  size: number
  /**
   * 描述
   */
  description?: string
  /**
   * 租赁次数
   */
  leaseCount: number
  /**
   * 服饰状态 1:正常 2:已售出 3:借调中
   */
  status: number
  /**
   * 其他信息字段
   */
  bizData?: string
  /**
   * 图片
   */
  picList: {
    /**
     * 服饰图片id
     */
    id: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 服饰图片地址
     */
    url: string
  }[]
  /**
   * 标签
   */
  tagList: {
    /**
     * id
     */
    id: number
    /**
     * 标签id
     */
    tagId: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 标签
     */
    tag: {
      /**
       * 标签id
       */
      id: number
      /**
       * 标签名称
       */
      name: string
      /**
       * 用途, 1:服饰标签
       */
      use: number
    }
  }[]
}

type GetProductIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product/{id}', 'data', 'id', string, false>
>

const getProductIdRequestConfig: GetProductIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/product/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getProductId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getProductId = /*#__PURE__*/ (requestData: GetProductIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetProductIdResponse>(prepare(getProductIdRequestConfig, requestData), ...args)
}

getProductId.requestConfig = getProductIdRequestConfig

const mockUrl_0_0_0_11 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_11 = '' as any
const prodUrl_0_0_0_11 = '' as any
const dataKey_0_0_0_11 = 'data' as any

export interface GetTagRequest {
  /**
   * 标签用途
   */
  use: string
}

export type GetTagResponse = {
  /**
   * 标签id
   */
  id: number
  /**
   * 标签名称
   */
  name: string
  /**
   * 用途, 1:服饰标签
   */
  use: number
}[]

type GetTagRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/tag', 'data', string, 'use', false>
>

const getTagRequestConfig: GetTagRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/tag',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['use'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getTag',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

export const getTag = /*#__PURE__*/ (requestData: GetTagRequest, ...args: UserRequestRestArgs) => {
  return request<GetTagResponse>(prepare(getTagRequestConfig, requestData), ...args)
}

getTag.requestConfig = getTagRequestConfig

/* prettier-ignore-end */
