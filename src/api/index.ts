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

/**
 * 接口 获取 oss 上传凭证 的 **请求类型**
 *
 * @分类 OSS
 * @请求头 `GET /oss/signature`
 */
export interface GetOssSignatureRequest {
  /**
   * superKey
   */
  superKey: string
}

/**
 * 接口 获取 oss 上传凭证 的 **返回类型**
 *
 * @分类 OSS
 * @请求头 `GET /oss/signature`
 */
export interface GetOssSignatureResponse {
  /**
   * 由服务器端指定的Policy过期时间，格式为Unix时间戳
   */
  expire: number
  /**
   * 用户表单上传的策略（Policy），Policy为经过Base64编码过的字符串
   */
  policy: string
  /**
   * 对Policy签名后的字符串
   */
  signature: string
  /**
   * 用户请求的AccessKey ID
   */
  OSSAccessKeyId: string
  /**
   * 用户发送上传请求的域名
   */
  host: string
  /**
   * 限制上传的文件前缀
   */
  dir: string
}

/**
 * 接口 获取 oss 上传凭证 的 **请求配置的类型**
 *
 * @分类 OSS
 * @请求头 `GET /oss/signature`
 */
type GetOssSignatureRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/oss/signature', 'data', string, 'superKey', false>
>

/**
 * 接口 获取 oss 上传凭证 的 **请求配置**
 *
 * @分类 OSS
 * @请求头 `GET /oss/signature`
 */
const getOssSignatureRequestConfig: GetOssSignatureRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/oss/signature',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['superKey'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getOssSignature',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取 oss 上传凭证 的 **请求函数**
 *
 * @分类 OSS
 * @请求头 `GET /oss/signature`
 */
export const getOssSignature = /*#__PURE__*/ (requestData: GetOssSignatureRequest, ...args: UserRequestRestArgs) => {
  return request<GetOssSignatureResponse>(prepare(getOssSignatureRequestConfig, requestData), ...args)
}

getOssSignature.requestConfig = getOssSignatureRequestConfig

const mockUrl_0_0_0_1 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_1 = '' as any
const prodUrl_0_0_0_1 = '' as any
const dataKey_0_0_0_1 = 'data' as any

/**
 * 接口 获取我购买的订单列表 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `GET /order/bought`
 */
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

/**
 * 接口 获取我购买的订单列表 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `GET /order/bought`
 */
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
    depositRefund?: number
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
      description: string
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
         * 公司id
         */
        companyId: number
        /**
         * 添加用户id
         */
        userId: number
        /**
         * 服饰状态 1:正常 2:已出售 3:借调中
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

/**
 * 接口 获取我购买的订单列表 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `GET /order/bought`
 */
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

/**
 * 接口 获取我购买的订单列表 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `GET /order/bought`
 */
const getOrderBoughtRequestConfig: GetOrderBoughtRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/bought',
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
  requestFunctionName: 'getOrderBought',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取我购买的订单列表 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `GET /order/bought`
 */
export const getOrderBought = /*#__PURE__*/ (requestData: GetOrderBoughtRequest, ...args: UserRequestRestArgs) => {
  return request<GetOrderBoughtResponse>(prepare(getOrderBoughtRequestConfig, requestData), ...args)
}

getOrderBought.requestConfig = getOrderBoughtRequestConfig

/**
 * 接口 获取我卖出的订单列表 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `GET /order/sold`
 */
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

/**
 * 接口 获取我卖出的订单列表 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `GET /order/sold`
 */
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
    depositRefund?: number
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
      description: string
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
         * 公司id
         */
        companyId: number
        /**
         * 添加用户id
         */
        userId: number
        /**
         * 服饰状态 1:正常 2:已出售 3:借调中
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

/**
 * 接口 获取我卖出的订单列表 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `GET /order/sold`
 */
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

/**
 * 接口 获取我卖出的订单列表 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `GET /order/sold`
 */
const getOrderSoldRequestConfig: GetOrderSoldRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/sold',
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
  requestFunctionName: 'getOrderSold',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取我卖出的订单列表 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `GET /order/sold`
 */
export const getOrderSold = /*#__PURE__*/ (requestData: GetOrderSoldRequest, ...args: UserRequestRestArgs) => {
  return request<GetOrderSoldResponse>(prepare(getOrderSoldRequestConfig, requestData), ...args)
}

getOrderSold.requestConfig = getOrderSoldRequestConfig

/**
 * 接口 创建订单 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order`
 */
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
}

/**
 * 接口 创建订单 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order`
 */
export type PostOrderResponse = number

/**
 * 接口 创建订单 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order`
 */
type PostOrderRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order', 'data', string, string, false>
>

/**
 * 接口 创建订单 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order`
 */
const postOrderRequestConfig: PostOrderRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order',
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
  requestFunctionName: 'postOrder',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建订单 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order`
 */
export const postOrder = /*#__PURE__*/ (requestData: PostOrderRequest, ...args: UserRequestRestArgs) => {
  return request<PostOrderResponse>(prepare(postOrderRequestConfig, requestData), ...args)
}

postOrder.requestConfig = postOrderRequestConfig

/**
 * 接口 删除订单 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `DELETE /order`
 */
export interface DeleteOrderRequest {
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 删除订单 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `DELETE /order`
 */
export type DeleteOrderResponse = any

/**
 * 接口 删除订单 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `DELETE /order`
 */
type DeleteOrderRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order', 'data', string, 'id', false>
>

/**
 * 接口 删除订单 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `DELETE /order`
 */
const deleteOrderRequestConfig: DeleteOrderRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteOrder',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除订单 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `DELETE /order`
 */
export const deleteOrder = /*#__PURE__*/ (requestData: DeleteOrderRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteOrderResponse>(prepare(deleteOrderRequestConfig, requestData), ...args)
}

deleteOrder.requestConfig = deleteOrderRequestConfig

/**
 * 接口 确认收货 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order/cancel`
 */
export interface PostOrderCancelRequest {
  /**
   * 订单id
   */
  id: number
}

/**
 * 接口 确认收货 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order/cancel`
 */
export type PostOrderCancelResponse = any

/**
 * 接口 确认收货 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order/cancel`
 */
type PostOrderCancelRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/cancel', 'data', string, string, false>
>

/**
 * 接口 确认收货 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order/cancel`
 */
const postOrderCancelRequestConfig: PostOrderCancelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/cancel',
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
  requestFunctionName: 'postOrderCancel',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 确认收货 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order/cancel`
 */
export const postOrderCancel = /*#__PURE__*/ (requestData: PostOrderCancelRequest, ...args: UserRequestRestArgs) => {
  return request<PostOrderCancelResponse>(prepare(postOrderCancelRequestConfig, requestData), ...args)
}

postOrderCancel.requestConfig = postOrderCancelRequestConfig

/**
 * 接口 余额支付订单 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/balance`
 */
export interface PostOrderPayBalanceRequest {
  /**
   * 订单id
   */
  id: number
}

/**
 * 接口 余额支付订单 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/balance`
 */
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

/**
 * 接口 余额支付订单 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/balance`
 */
type PostOrderPayBalanceRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/pay/balance', 'data', string, string, false>
>

/**
 * 接口 余额支付订单 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/balance`
 */
const postOrderPayBalanceRequestConfig: PostOrderPayBalanceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/pay/balance',
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
  requestFunctionName: 'postOrderPayBalance',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 余额支付订单 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/balance`
 */
export const postOrderPayBalance = /*#__PURE__*/ (
  requestData: PostOrderPayBalanceRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderPayBalanceResponse>(prepare(postOrderPayBalanceRequestConfig, requestData), ...args)
}

postOrderPayBalance.requestConfig = postOrderPayBalanceRequestConfig

/**
 * 接口 微信支付订单 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat`
 */
export interface PostOrderPayWechatRequest {
  /**
   * 订单id
   */
  id: number
}

/**
 * 接口 微信支付订单 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat`
 */
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

/**
 * 接口 微信支付订单 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat`
 */
type PostOrderPayWechatRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/pay/wechat', 'data', string, string, false>
>

/**
 * 接口 微信支付订单 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat`
 */
const postOrderPayWechatRequestConfig: PostOrderPayWechatRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/pay/wechat',
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
  requestFunctionName: 'postOrderPayWechat',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 微信支付订单 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat`
 */
export const postOrderPayWechat = /*#__PURE__*/ (
  requestData: PostOrderPayWechatRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderPayWechatResponse>(prepare(postOrderPayWechatRequestConfig, requestData), ...args)
}

postOrderPayWechat.requestConfig = postOrderPayWechatRequestConfig

/**
 * 接口 支付结果通知 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat/notice`
 */
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

/**
 * 接口 支付结果通知 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat/notice`
 */
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

/**
 * 接口 支付结果通知 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat/notice`
 */
type PostOrderPayWechatNoticeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/pay/wechat/notice', 'data', string, string, false>
>

/**
 * 接口 支付结果通知 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat/notice`
 */
const postOrderPayWechatNoticeRequestConfig: PostOrderPayWechatNoticeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/pay/wechat/notice',
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
  requestFunctionName: 'postOrderPayWechatNotice',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 支付结果通知 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order/pay/wechat/notice`
 */
export const postOrderPayWechatNotice = /*#__PURE__*/ (
  requestData: PostOrderPayWechatNoticeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderPayWechatNoticeResponse>(prepare(postOrderPayWechatNoticeRequestConfig, requestData), ...args)
}

postOrderPayWechatNotice.requestConfig = postOrderPayWechatNoticeRequestConfig

/**
 * 接口 订单发货 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order/express/deliver`
 */
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

/**
 * 接口 订单发货 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order/express/deliver`
 */
export type PostOrderExpressDeliverResponse = any

/**
 * 接口 订单发货 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order/express/deliver`
 */
type PostOrderExpressDeliverRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/express/deliver', 'data', string, string, false>
>

/**
 * 接口 订单发货 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order/express/deliver`
 */
const postOrderExpressDeliverRequestConfig: PostOrderExpressDeliverRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/express/deliver',
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
  requestFunctionName: 'postOrderExpressDeliver',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 订单发货 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order/express/deliver`
 */
export const postOrderExpressDeliver = /*#__PURE__*/ (
  requestData: PostOrderExpressDeliverRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderExpressDeliverResponse>(prepare(postOrderExpressDeliverRequestConfig, requestData), ...args)
}

postOrderExpressDeliver.requestConfig = postOrderExpressDeliverRequestConfig

/**
 * 接口 返还发货 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order/express/return`
 */
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

/**
 * 接口 返还发货 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order/express/return`
 */
export type PostOrderExpressReturnResponse = any

/**
 * 接口 返还发货 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order/express/return`
 */
type PostOrderExpressReturnRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/express/return', 'data', string, string, false>
>

/**
 * 接口 返还发货 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order/express/return`
 */
const postOrderExpressReturnRequestConfig: PostOrderExpressReturnRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/express/return',
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
  requestFunctionName: 'postOrderExpressReturn',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 返还发货 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order/express/return`
 */
export const postOrderExpressReturn = /*#__PURE__*/ (
  requestData: PostOrderExpressReturnRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderExpressReturnResponse>(prepare(postOrderExpressReturnRequestConfig, requestData), ...args)
}

postOrderExpressReturn.requestConfig = postOrderExpressReturnRequestConfig

/**
 * 接口 买家确认收货 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/buyer`
 */
export interface PostOrderReceiveBuyerRequest {
  /**
   * 订单id
   */
  id: number
}

/**
 * 接口 买家确认收货 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/buyer`
 */
export type PostOrderReceiveBuyerResponse = any

/**
 * 接口 买家确认收货 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/buyer`
 */
type PostOrderReceiveBuyerRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/receive/buyer', 'data', string, string, false>
>

/**
 * 接口 买家确认收货 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/buyer`
 */
const postOrderReceiveBuyerRequestConfig: PostOrderReceiveBuyerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/receive/buyer',
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
  requestFunctionName: 'postOrderReceiveBuyer',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 买家确认收货 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/buyer`
 */
export const postOrderReceiveBuyer = /*#__PURE__*/ (
  requestData: PostOrderReceiveBuyerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderReceiveBuyerResponse>(prepare(postOrderReceiveBuyerRequestConfig, requestData), ...args)
}

postOrderReceiveBuyer.requestConfig = postOrderReceiveBuyerRequestConfig

/**
 * 接口 卖家确认收货 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/seller`
 */
export interface PostOrderReceiveSellerRequest {
  /**
   * 订单id
   */
  id: number
  /**
   * 退还押金金额
   */
  amount: number
  /**
   * 退还押金备注
   */
  depositRefundRemark?: string
}

/**
 * 接口 卖家确认收货 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/seller`
 */
export type PostOrderReceiveSellerResponse = any

/**
 * 接口 卖家确认收货 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/seller`
 */
type PostOrderReceiveSellerRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/receive/seller', 'data', string, string, false>
>

/**
 * 接口 卖家确认收货 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/seller`
 */
const postOrderReceiveSellerRequestConfig: PostOrderReceiveSellerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/receive/seller',
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
  requestFunctionName: 'postOrderReceiveSeller',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 卖家确认收货 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `POST /order/receive/seller`
 */
export const postOrderReceiveSeller = /*#__PURE__*/ (
  requestData: PostOrderReceiveSellerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrderReceiveSellerResponse>(prepare(postOrderReceiveSellerRequestConfig, requestData), ...args)
}

postOrderReceiveSeller.requestConfig = postOrderReceiveSellerRequestConfig

/**
 * 接口 获取订单信息 的 **请求类型**
 *
 * @分类 订单
 * @请求头 `GET /order/{id}`
 */
export interface GetOrderIdRequest {
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 获取订单信息 的 **返回类型**
 *
 * @分类 订单
 * @请求头 `GET /order/{id}`
 */
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
  depositRefund?: number
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
    description: string
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
       * 公司id
       */
      companyId: number
      /**
       * 添加用户id
       */
      userId: number
      /**
       * 服饰状态 1:正常 2:已出售 3:借调中
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
     * 状态, 0:禁用 1:正常 2:待审核
     */
    status: number
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
    balance: number
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

/**
 * 接口 获取订单信息 的 **请求配置的类型**
 *
 * @分类 订单
 * @请求头 `GET /order/{id}`
 */
type GetOrderIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/order/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取订单信息 的 **请求配置**
 *
 * @分类 订单
 * @请求头 `GET /order/{id}`
 */
const getOrderIdRequestConfig: GetOrderIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/order/{id}',
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
  requestFunctionName: 'getOrderId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取订单信息 的 **请求函数**
 *
 * @分类 订单
 * @请求头 `GET /order/{id}`
 */
export const getOrderId = /*#__PURE__*/ (requestData: GetOrderIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetOrderIdResponse>(prepare(getOrderIdRequestConfig, requestData), ...args)
}

getOrderId.requestConfig = getOrderIdRequestConfig

const mockUrl_0_0_0_2 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_2 = '' as any
const prodUrl_0_0_0_2 = '' as any
const dataKey_0_0_0_2 = 'data' as any

/**
 * 接口 获取当前公司详情 的 **请求类型**
 *
 * @分类 公司
 * @请求头 `GET /company/self`
 */
export interface GetCompanySelfRequest {}

/**
 * 接口 获取当前公司详情 的 **返回类型**
 *
 * @分类 公司
 * @请求头 `GET /company/self`
 */
export interface GetCompanySelfResponse {
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
   * 状态, 0:禁用 1:正常 2:待审核
   */
  status: number
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
  balance: number
}

/**
 * 接口 获取当前公司详情 的 **请求配置的类型**
 *
 * @分类 公司
 * @请求头 `GET /company/self`
 */
type GetCompanySelfRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/self', 'data', string, string, true>
>

/**
 * 接口 获取当前公司详情 的 **请求配置**
 *
 * @分类 公司
 * @请求头 `GET /company/self`
 */
const getCompanySelfRequestConfig: GetCompanySelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/company/self',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCompanySelf',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取当前公司详情 的 **请求函数**
 *
 * @分类 公司
 * @请求头 `GET /company/self`
 */
export const getCompanySelf = /*#__PURE__*/ (requestData?: GetCompanySelfRequest, ...args: UserRequestRestArgs) => {
  return request<GetCompanySelfResponse>(prepare(getCompanySelfRequestConfig, requestData), ...args)
}

getCompanySelf.requestConfig = getCompanySelfRequestConfig

/**
 * 接口 创建公司 的 **请求类型**
 *
 * @分类 公司
 * @请求头 `POST /company/register`
 */
export interface PostCompanyRegisterRequest {
  /**
   * 公司名称
   */
  name: string
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
   * 营业执照
   */
  licenses: string[]
}

/**
 * 接口 创建公司 的 **返回类型**
 *
 * @分类 公司
 * @请求头 `POST /company/register`
 */
export type PostCompanyRegisterResponse = any

/**
 * 接口 创建公司 的 **请求配置的类型**
 *
 * @分类 公司
 * @请求头 `POST /company/register`
 */
type PostCompanyRegisterRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/register', 'data', string, string, false>
>

/**
 * 接口 创建公司 的 **请求配置**
 *
 * @分类 公司
 * @请求头 `POST /company/register`
 */
const postCompanyRegisterRequestConfig: PostCompanyRegisterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/company/register',
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
  requestFunctionName: 'postCompanyRegister',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建公司 的 **请求函数**
 *
 * @分类 公司
 * @请求头 `POST /company/register`
 */
export const postCompanyRegister = /*#__PURE__*/ (
  requestData: PostCompanyRegisterRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostCompanyRegisterResponse>(prepare(postCompanyRegisterRequestConfig, requestData), ...args)
}

postCompanyRegister.requestConfig = postCompanyRegisterRequestConfig

/**
 * 接口 更新公司 的 **请求类型**
 *
 * @分类 公司
 * @请求头 `PUT /company`
 */
export interface PutCompanyRequest {
  /**
   * 公司id
   */
  id: number
  /**
   * 公司
   */
  company: string
  /**
   * 密码（明文）
   */
  password: string
  /**
   * 微信用户唯一标识
   */
  openid?: string
}

/**
 * 接口 更新公司 的 **返回类型**
 *
 * @分类 公司
 * @请求头 `PUT /company`
 */
export type PutCompanyResponse = any

/**
 * 接口 更新公司 的 **请求配置的类型**
 *
 * @分类 公司
 * @请求头 `PUT /company`
 */
type PutCompanyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company', 'data', string, string, false>
>

/**
 * 接口 更新公司 的 **请求配置**
 *
 * @分类 公司
 * @请求头 `PUT /company`
 */
const putCompanyRequestConfig: PutCompanyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/company',
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
  requestFunctionName: 'putCompany',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新公司 的 **请求函数**
 *
 * @分类 公司
 * @请求头 `PUT /company`
 */
export const putCompany = /*#__PURE__*/ (requestData: PutCompanyRequest, ...args: UserRequestRestArgs) => {
  return request<PutCompanyResponse>(prepare(putCompanyRequestConfig, requestData), ...args)
}

putCompany.requestConfig = putCompanyRequestConfig

/**
 * 接口 删除公司 的 **请求类型**
 *
 * @分类 公司
 * @请求头 `DELETE /company`
 */
export interface DeleteCompanyRequest {
  /**
   * 公司id
   */
  id: string
}

/**
 * 接口 删除公司 的 **返回类型**
 *
 * @分类 公司
 * @请求头 `DELETE /company`
 */
export type DeleteCompanyResponse = any

/**
 * 接口 删除公司 的 **请求配置的类型**
 *
 * @分类 公司
 * @请求头 `DELETE /company`
 */
type DeleteCompanyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company', 'data', string, 'id', false>
>

/**
 * 接口 删除公司 的 **请求配置**
 *
 * @分类 公司
 * @请求头 `DELETE /company`
 */
const deleteCompanyRequestConfig: DeleteCompanyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/company',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteCompany',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除公司 的 **请求函数**
 *
 * @分类 公司
 * @请求头 `DELETE /company`
 */
export const deleteCompany = /*#__PURE__*/ (requestData: DeleteCompanyRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteCompanyResponse>(prepare(deleteCompanyRequestConfig, requestData), ...args)
}

deleteCompany.requestConfig = deleteCompanyRequestConfig

/**
 * 接口 审核公司 的 **请求类型**
 *
 * @分类 公司
 * @请求头 `POST /company/audit`
 */
export interface PostCompanyAuditRequest {
  /**
   * 公司id
   */
  id: number
  /**
   * 审核结果, 0:不通过 1:通过
   */
  status: number
}

/**
 * 接口 审核公司 的 **返回类型**
 *
 * @分类 公司
 * @请求头 `POST /company/audit`
 */
export type PostCompanyAuditResponse = any

/**
 * 接口 审核公司 的 **请求配置的类型**
 *
 * @分类 公司
 * @请求头 `POST /company/audit`
 */
type PostCompanyAuditRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/audit', 'data', string, string, false>
>

/**
 * 接口 审核公司 的 **请求配置**
 *
 * @分类 公司
 * @请求头 `POST /company/audit`
 */
const postCompanyAuditRequestConfig: PostCompanyAuditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/company/audit',
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
  requestFunctionName: 'postCompanyAudit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 审核公司 的 **请求函数**
 *
 * @分类 公司
 * @请求头 `POST /company/audit`
 */
export const postCompanyAudit = /*#__PURE__*/ (requestData: PostCompanyAuditRequest, ...args: UserRequestRestArgs) => {
  return request<PostCompanyAuditResponse>(prepare(postCompanyAuditRequestConfig, requestData), ...args)
}

postCompanyAudit.requestConfig = postCompanyAuditRequestConfig

const mockUrl_0_0_0_3 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_3 = '' as any
const prodUrl_0_0_0_3 = '' as any
const dataKey_0_0_0_3 = 'data' as any

/**
 * 接口 获取用户列表 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `GET /user`
 */
export interface GetUserRequest {}

/**
 * 接口 获取用户列表 的 **返回类型**
 *
 * @分类 用户
 * @请求头 `GET /user`
 */
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

/**
 * 接口 获取用户列表 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `GET /user`
 */
type GetUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user', 'data', string, string, true>
>

/**
 * 接口 获取用户列表 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `GET /user`
 */
const getUserRequestConfig: GetUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/user',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取用户列表 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `GET /user`
 */
export const getUser = /*#__PURE__*/ (requestData?: GetUserRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserResponse>(prepare(getUserRequestConfig, requestData), ...args)
}

getUser.requestConfig = getUserRequestConfig

/**
 * 接口 创建用户 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `POST /user`
 */
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
   * 角色id
   */
  roleId: number
}

/**
 * 接口 创建用户 的 **返回类型**
 *
 * @分类 用户
 * @请求头 `POST /user`
 */
export type PostUserResponse = number

/**
 * 接口 创建用户 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `POST /user`
 */
type PostUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user', 'data', string, string, false>
>

/**
 * 接口 创建用户 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `POST /user`
 */
const postUserRequestConfig: PostUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/user',
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
  requestFunctionName: 'postUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建用户 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `POST /user`
 */
export const postUser = /*#__PURE__*/ (requestData: PostUserRequest, ...args: UserRequestRestArgs) => {
  return request<PostUserResponse>(prepare(postUserRequestConfig, requestData), ...args)
}

postUser.requestConfig = postUserRequestConfig

/**
 * 接口 更新用户 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `PUT /user`
 */
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

/**
 * 接口 更新用户 的 **返回类型**
 *
 * @分类 用户
 * @请求头 `PUT /user`
 */
export type PutUserResponse = any

/**
 * 接口 更新用户 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `PUT /user`
 */
type PutUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user', 'data', string, string, false>
>

/**
 * 接口 更新用户 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `PUT /user`
 */
const putUserRequestConfig: PutUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/user',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新用户 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `PUT /user`
 */
export const putUser = /*#__PURE__*/ (requestData: PutUserRequest, ...args: UserRequestRestArgs) => {
  return request<PutUserResponse>(prepare(putUserRequestConfig, requestData), ...args)
}

putUser.requestConfig = putUserRequestConfig

/**
 * 接口 删除用户 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `DELETE /user`
 */
export interface DeleteUserRequest {
  /**
   * 用户id
   */
  id: string
}

/**
 * 接口 删除用户 的 **返回类型**
 *
 * @分类 用户
 * @请求头 `DELETE /user`
 */
export type DeleteUserResponse = any

/**
 * 接口 删除用户 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `DELETE /user`
 */
type DeleteUserRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user', 'data', string, 'id', false>
>

/**
 * 接口 删除用户 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `DELETE /user`
 */
const deleteUserRequestConfig: DeleteUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/user',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除用户 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `DELETE /user`
 */
export const deleteUser = /*#__PURE__*/ (requestData: DeleteUserRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteUserResponse>(prepare(deleteUserRequestConfig, requestData), ...args)
}

deleteUser.requestConfig = deleteUserRequestConfig

/**
 * 接口 获取当前登录用户信息 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
export interface GetUserSelfRequest {}

/**
 * 接口 获取当前登录用户信息 的 **返回类型**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
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

/**
 * 接口 获取当前登录用户信息 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
type GetUserSelfRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user/self', 'data', string, string, true>
>

/**
 * 接口 获取当前登录用户信息 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
const getUserSelfRequestConfig: GetUserSelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/user/self',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUserSelf',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取当前登录用户信息 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
export const getUserSelf = /*#__PURE__*/ (requestData?: GetUserSelfRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserSelfResponse>(prepare(getUserSelfRequestConfig, requestData), ...args)
}

getUserSelf.requestConfig = getUserSelfRequestConfig

/**
 * 接口 获取用户信息 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `GET /user/{id}`
 */
export interface GetUserIdRequest {
  /**
   * 用户id
   */
  id: string
}

/**
 * 接口 获取用户信息 的 **返回类型**
 *
 * @分类 用户
 * @请求头 `GET /user/{id}`
 */
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

/**
 * 接口 获取用户信息 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `GET /user/{id}`
 */
type GetUserIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取用户信息 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `GET /user/{id}`
 */
const getUserIdRequestConfig: GetUserIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/user/{id}',
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
  requestFunctionName: 'getUserId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取用户信息 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `GET /user/{id}`
 */
export const getUserId = /*#__PURE__*/ (requestData: GetUserIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserIdResponse>(prepare(getUserIdRequestConfig, requestData), ...args)
}

getUserId.requestConfig = getUserIdRequestConfig

const mockUrl_0_0_0_4 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_4 = '' as any
const prodUrl_0_0_0_4 = '' as any
const dataKey_0_0_0_4 = 'data' as any

/**
 * 接口 获取账号列表 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `GET /account`
 */
export interface GetAccountRequest {}

/**
 * 接口 获取账号列表 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `GET /account`
 */
export interface GetAccountResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 账号id
   */
  id: number
  /**
   * 账号
   */
  account: string
}

/**
 * 接口 获取账号列表 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `GET /account`
 */
type GetAccountRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account', 'data', string, string, true>
>

/**
 * 接口 获取账号列表 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `GET /account`
 */
const getAccountRequestConfig: GetAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取账号列表 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `GET /account`
 */
export const getAccount = /*#__PURE__*/ (requestData?: GetAccountRequest, ...args: UserRequestRestArgs) => {
  return request<GetAccountResponse>(prepare(getAccountRequestConfig, requestData), ...args)
}

getAccount.requestConfig = getAccountRequestConfig

/**
 * 接口 获取短信注册验证码 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `GET /account/register/code/{account}`
 */
export interface GetAccountRegisterCodeAccountRequest {
  /**
   * 账号
   */
  account: string
}

/**
 * 接口 获取短信注册验证码 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `GET /account/register/code/{account}`
 */
export type GetAccountRegisterCodeAccountResponse = any

/**
 * 接口 获取短信注册验证码 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `GET /account/register/code/{account}`
 */
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

/**
 * 接口 获取短信注册验证码 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `GET /account/register/code/{account}`
 */
const getAccountRegisterCodeAccountRequestConfig: GetAccountRegisterCodeAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/register/code/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_4,
  paramNames: ['account'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountRegisterCodeAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取短信注册验证码 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `GET /account/register/code/{account}`
 */
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

/**
 * 接口 校验注册验证码 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `POST /account/register/code/check`
 */
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

/**
 * 接口 校验注册验证码 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `POST /account/register/code/check`
 */
export type PostAccountRegisterCodeCheckResponse = string

/**
 * 接口 校验注册验证码 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `POST /account/register/code/check`
 */
type PostAccountRegisterCodeCheckRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/register/code/check', 'data', string, string, false>
>

/**
 * 接口 校验注册验证码 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `POST /account/register/code/check`
 */
const postAccountRegisterCodeCheckRequestConfig: PostAccountRegisterCodeCheckRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/register/code/check',
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
  requestFunctionName: 'postAccountRegisterCodeCheck',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 校验注册验证码 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `POST /account/register/code/check`
 */
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

/**
 * 接口 获取新盐值 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `GET /account/salt`
 */
export interface GetAccountSaltRequest {}

/**
 * 接口 获取新盐值 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `GET /account/salt`
 */
export type GetAccountSaltResponse = string

/**
 * 接口 获取新盐值 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `GET /account/salt`
 */
type GetAccountSaltRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/salt', 'data', string, string, true>
>

/**
 * 接口 获取新盐值 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `GET /account/salt`
 */
const getAccountSaltRequestConfig: GetAccountSaltRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/salt',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountSalt',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取新盐值 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `GET /account/salt`
 */
export const getAccountSalt = /*#__PURE__*/ (requestData?: GetAccountSaltRequest, ...args: UserRequestRestArgs) => {
  return request<GetAccountSaltResponse>(prepare(getAccountSaltRequestConfig, requestData), ...args)
}

getAccountSalt.requestConfig = getAccountSaltRequestConfig

/**
 * 接口 获取账号盐值 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `GET /account/salt/{account}`
 */
export interface GetAccountSaltAccountRequest {
  /**
   * 账号
   */
  account: string
}

/**
 * 接口 获取账号盐值 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `GET /account/salt/{account}`
 */
export type GetAccountSaltAccountResponse = string

/**
 * 接口 获取账号盐值 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `GET /account/salt/{account}`
 */
type GetAccountSaltAccountRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/salt/{account}', 'data', 'account', string, false>
>

/**
 * 接口 获取账号盐值 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `GET /account/salt/{account}`
 */
const getAccountSaltAccountRequestConfig: GetAccountSaltAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/salt/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: ['account'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountSaltAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取账号盐值 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `GET /account/salt/{account}`
 */
export const getAccountSaltAccount = /*#__PURE__*/ (
  requestData: GetAccountSaltAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetAccountSaltAccountResponse>(prepare(getAccountSaltAccountRequestConfig, requestData), ...args)
}

getAccountSaltAccount.requestConfig = getAccountSaltAccountRequestConfig

/**
 * 接口 密码登录 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login`
 */
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

/**
 * 接口 密码登录 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login`
 */
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

/**
 * 接口 密码登录 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login`
 */
type PostAccountLoginRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login', 'data', string, string, false>
>

/**
 * 接口 密码登录 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `POST /account/login`
 */
const postAccountLoginRequestConfig: PostAccountLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/login',
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
  requestFunctionName: 'postAccountLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 密码登录 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `POST /account/login`
 */
export const postAccountLogin = /*#__PURE__*/ (requestData: PostAccountLoginRequest, ...args: UserRequestRestArgs) => {
  return request<PostAccountLoginResponse>(prepare(postAccountLoginRequestConfig, requestData), ...args)
}

postAccountLogin.requestConfig = postAccountLoginRequestConfig

/**
 * 接口 获取短信登录验证码 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `GET /account/login/code/{account}`
 */
export interface GetAccountLoginCodeAccountRequest {
  /**
   * 账号
   */
  account: string
}

/**
 * 接口 获取短信登录验证码 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `GET /account/login/code/{account}`
 */
export type GetAccountLoginCodeAccountResponse = any

/**
 * 接口 获取短信登录验证码 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `GET /account/login/code/{account}`
 */
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

/**
 * 接口 获取短信登录验证码 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `GET /account/login/code/{account}`
 */
const getAccountLoginCodeAccountRequestConfig: GetAccountLoginCodeAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/login/code/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_4,
  paramNames: ['account'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountLoginCodeAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取短信登录验证码 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `GET /account/login/code/{account}`
 */
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

/**
 * 接口 短信验证码登录 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/code`
 */
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

/**
 * 接口 短信验证码登录 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/code`
 */
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

/**
 * 接口 短信验证码登录 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/code`
 */
type PostAccountLoginCodeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login/code', 'data', string, string, false>
>

/**
 * 接口 短信验证码登录 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `POST /account/login/code`
 */
const postAccountLoginCodeRequestConfig: PostAccountLoginCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/login/code',
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
  requestFunctionName: 'postAccountLoginCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 短信验证码登录 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `POST /account/login/code`
 */
export const postAccountLoginCode = /*#__PURE__*/ (
  requestData: PostAccountLoginCodeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountLoginCodeResponse>(prepare(postAccountLoginCodeRequestConfig, requestData), ...args)
}

postAccountLoginCode.requestConfig = postAccountLoginCodeRequestConfig

/**
 * 接口 使用微信绑定的手机号登录 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat/phone`
 */
export interface PostAccountLoginWechatPhoneRequest {
  /**
   * 微信获取手机号接口code
   */
  code: string
}

/**
 * 接口 使用微信绑定的手机号登录 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat/phone`
 */
export interface PostAccountLoginWechatPhoneResponse {
  /**
   * 账号
   */
  account: string
  /**
   * 鉴权凭证
   */
  token: string
}

/**
 * 接口 使用微信绑定的手机号登录 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat/phone`
 */
type PostAccountLoginWechatPhoneRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login/wechat/phone', 'data', string, string, false>
>

/**
 * 接口 使用微信绑定的手机号登录 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat/phone`
 */
const postAccountLoginWechatPhoneRequestConfig: PostAccountLoginWechatPhoneRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/login/wechat/phone',
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
  requestFunctionName: 'postAccountLoginWechatPhone',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 使用微信绑定的手机号登录 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat/phone`
 */
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

/**
 * 接口 微信授权登录 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat`
 */
export interface PostAccountLoginWechatRequest {
  /**
   * 微信授权登录code
   */
  code: string
}

/**
 * 接口 微信授权登录 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat`
 */
export type PostAccountLoginWechatResponse = string

/**
 * 接口 微信授权登录 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat`
 */
type PostAccountLoginWechatRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login/wechat', 'data', string, string, false>
>

/**
 * 接口 微信授权登录 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat`
 */
const postAccountLoginWechatRequestConfig: PostAccountLoginWechatRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/login/wechat',
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
  requestFunctionName: 'postAccountLoginWechat',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 微信授权登录 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat`
 */
export const postAccountLoginWechat = /*#__PURE__*/ (
  requestData: PostAccountLoginWechatRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountLoginWechatResponse>(prepare(postAccountLoginWechatRequestConfig, requestData), ...args)
}

postAccountLoginWechat.requestConfig = postAccountLoginWechatRequestConfig

/**
 * 接口 账号绑定openid 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `POST /account/bind/openid`
 */
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

/**
 * 接口 账号绑定openid 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `POST /account/bind/openid`
 */
export type PostAccountBindOpenidResponse = any

/**
 * 接口 账号绑定openid 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `POST /account/bind/openid`
 */
type PostAccountBindOpenidRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/bind/openid', 'data', string, string, false>
>

/**
 * 接口 账号绑定openid 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `POST /account/bind/openid`
 */
const postAccountBindOpenidRequestConfig: PostAccountBindOpenidRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/bind/openid',
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
  requestFunctionName: 'postAccountBindOpenid',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 账号绑定openid 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `POST /account/bind/openid`
 */
export const postAccountBindOpenid = /*#__PURE__*/ (
  requestData: PostAccountBindOpenidRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostAccountBindOpenidResponse>(prepare(postAccountBindOpenidRequestConfig, requestData), ...args)
}

postAccountBindOpenid.requestConfig = postAccountBindOpenidRequestConfig

/**
 * 接口 获取账号信息 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `GET /account/{id}`
 */
export interface GetAccountIdRequest {
  /**
   * 账号id
   */
  id: string
}

/**
 * 接口 获取账号信息 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `GET /account/{id}`
 */
export interface GetAccountIdResponse {
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 账号id
   */
  id: number
  /**
   * 账号
   */
  account: string
}

/**
 * 接口 获取账号信息 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `GET /account/{id}`
 */
type GetAccountIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取账号信息 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `GET /account/{id}`
 */
const getAccountIdRequestConfig: GetAccountIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/account/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAccountId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取账号信息 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `GET /account/{id}`
 */
export const getAccountId = /*#__PURE__*/ (requestData: GetAccountIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetAccountIdResponse>(prepare(getAccountIdRequestConfig, requestData), ...args)
}

getAccountId.requestConfig = getAccountIdRequestConfig

const mockUrl_0_0_0_5 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_5 = '' as any
const prodUrl_0_0_0_5 = '' as any
const dataKey_0_0_0_5 = 'data' as any

/**
 * 接口 获取角色列表 的 **请求类型**
 *
 * @分类 角色
 * @请求头 `GET /role`
 */
export interface GetRoleRequest {}

/**
 * 接口 获取角色列表 的 **返回类型**
 *
 * @分类 角色
 * @请求头 `GET /role`
 */
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

/**
 * 接口 获取角色列表 的 **请求配置的类型**
 *
 * @分类 角色
 * @请求头 `GET /role`
 */
type GetRoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role', 'data', string, string, true>
>

/**
 * 接口 获取角色列表 的 **请求配置**
 *
 * @分类 角色
 * @请求头 `GET /role`
 */
const getRoleRequestConfig: GetRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/role',
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
  requestFunctionName: 'getRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取角色列表 的 **请求函数**
 *
 * @分类 角色
 * @请求头 `GET /role`
 */
export const getRole = /*#__PURE__*/ (requestData?: GetRoleRequest, ...args: UserRequestRestArgs) => {
  return request<GetRoleResponse>(prepare(getRoleRequestConfig, requestData), ...args)
}

getRole.requestConfig = getRoleRequestConfig

/**
 * 接口 创建角色 的 **请求类型**
 *
 * @分类 角色
 * @请求头 `POST /role`
 */
export interface PostRoleRequest {
  /**
   * 角色名称
   */
  name: string
}

/**
 * 接口 创建角色 的 **返回类型**
 *
 * @分类 角色
 * @请求头 `POST /role`
 */
export type PostRoleResponse = any

/**
 * 接口 创建角色 的 **请求配置的类型**
 *
 * @分类 角色
 * @请求头 `POST /role`
 */
type PostRoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role', 'data', string, string, false>
>

/**
 * 接口 创建角色 的 **请求配置**
 *
 * @分类 角色
 * @请求头 `POST /role`
 */
const postRoleRequestConfig: PostRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/role',
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
  requestFunctionName: 'postRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建角色 的 **请求函数**
 *
 * @分类 角色
 * @请求头 `POST /role`
 */
export const postRole = /*#__PURE__*/ (requestData: PostRoleRequest, ...args: UserRequestRestArgs) => {
  return request<PostRoleResponse>(prepare(postRoleRequestConfig, requestData), ...args)
}

postRole.requestConfig = postRoleRequestConfig

/**
 * 接口 创建角色 的 **请求类型**
 *
 * @分类 角色
 * @请求头 `PUT /role`
 */
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

/**
 * 接口 创建角色 的 **返回类型**
 *
 * @分类 角色
 * @请求头 `PUT /role`
 */
export type PutRoleResponse = any

/**
 * 接口 创建角色 的 **请求配置的类型**
 *
 * @分类 角色
 * @请求头 `PUT /role`
 */
type PutRoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role', 'data', string, string, false>
>

/**
 * 接口 创建角色 的 **请求配置**
 *
 * @分类 角色
 * @请求头 `PUT /role`
 */
const putRoleRequestConfig: PutRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/role',
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
  requestFunctionName: 'putRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建角色 的 **请求函数**
 *
 * @分类 角色
 * @请求头 `PUT /role`
 */
export const putRole = /*#__PURE__*/ (requestData: PutRoleRequest, ...args: UserRequestRestArgs) => {
  return request<PutRoleResponse>(prepare(putRoleRequestConfig, requestData), ...args)
}

putRole.requestConfig = putRoleRequestConfig

/**
 * 接口 删除角色 的 **请求类型**
 *
 * @分类 角色
 * @请求头 `DELETE /role`
 */
export interface DeleteRoleRequest {
  /**
   * 角色id
   */
  id: string
}

/**
 * 接口 删除角色 的 **返回类型**
 *
 * @分类 角色
 * @请求头 `DELETE /role`
 */
export type DeleteRoleResponse = any

/**
 * 接口 删除角色 的 **请求配置的类型**
 *
 * @分类 角色
 * @请求头 `DELETE /role`
 */
type DeleteRoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role', 'data', string, 'id', false>
>

/**
 * 接口 删除角色 的 **请求配置**
 *
 * @分类 角色
 * @请求头 `DELETE /role`
 */
const deleteRoleRequestConfig: DeleteRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/role',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除角色 的 **请求函数**
 *
 * @分类 角色
 * @请求头 `DELETE /role`
 */
export const deleteRole = /*#__PURE__*/ (requestData: DeleteRoleRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteRoleResponse>(prepare(deleteRoleRequestConfig, requestData), ...args)
}

deleteRole.requestConfig = deleteRoleRequestConfig

/**
 * 接口 获取角色信息 的 **请求类型**
 *
 * @分类 角色
 * @请求头 `GET /role/{id}`
 */
export interface GetRoleIdRequest {
  /**
   * 角色id
   */
  id: string
}

/**
 * 接口 获取角色信息 的 **返回类型**
 *
 * @分类 角色
 * @请求头 `GET /role/{id}`
 */
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

/**
 * 接口 获取角色信息 的 **请求配置的类型**
 *
 * @分类 角色
 * @请求头 `GET /role/{id}`
 */
type GetRoleIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/role/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取角色信息 的 **请求配置**
 *
 * @分类 角色
 * @请求头 `GET /role/{id}`
 */
const getRoleIdRequestConfig: GetRoleIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/role/{id}',
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
  requestFunctionName: 'getRoleId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取角色信息 的 **请求函数**
 *
 * @分类 角色
 * @请求头 `GET /role/{id}`
 */
export const getRoleId = /*#__PURE__*/ (requestData: GetRoleIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetRoleIdResponse>(prepare(getRoleIdRequestConfig, requestData), ...args)
}

getRoleId.requestConfig = getRoleIdRequestConfig

const mockUrl_0_0_0_6 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_6 = '' as any
const prodUrl_0_0_0_6 = '' as any
const dataKey_0_0_0_6 = 'data' as any

/**
 * 接口 获取地址列表 的 **请求类型**
 *
 * @分类 地址
 * @请求头 `GET /address`
 */
export interface GetAddressRequest {}

/**
 * 接口 获取地址列表 的 **返回类型**
 *
 * @分类 地址
 * @请求头 `GET /address`
 */
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

/**
 * 接口 获取地址列表 的 **请求配置的类型**
 *
 * @分类 地址
 * @请求头 `GET /address`
 */
type GetAddressRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address', 'data', string, string, true>
>

/**
 * 接口 获取地址列表 的 **请求配置**
 *
 * @分类 地址
 * @请求头 `GET /address`
 */
const getAddressRequestConfig: GetAddressRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/address',
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
  requestFunctionName: 'getAddress',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取地址列表 的 **请求函数**
 *
 * @分类 地址
 * @请求头 `GET /address`
 */
export const getAddress = /*#__PURE__*/ (requestData?: GetAddressRequest, ...args: UserRequestRestArgs) => {
  return request<GetAddressResponse>(prepare(getAddressRequestConfig, requestData), ...args)
}

getAddress.requestConfig = getAddressRequestConfig

/**
 * 接口 创建地址 的 **请求类型**
 *
 * @分类 地址
 * @请求头 `POST /address`
 */
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

/**
 * 接口 创建地址 的 **返回类型**
 *
 * @分类 地址
 * @请求头 `POST /address`
 */
export type PostAddressResponse = number

/**
 * 接口 创建地址 的 **请求配置的类型**
 *
 * @分类 地址
 * @请求头 `POST /address`
 */
type PostAddressRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address', 'data', string, string, false>
>

/**
 * 接口 创建地址 的 **请求配置**
 *
 * @分类 地址
 * @请求头 `POST /address`
 */
const postAddressRequestConfig: PostAddressRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/address',
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
  requestFunctionName: 'postAddress',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建地址 的 **请求函数**
 *
 * @分类 地址
 * @请求头 `POST /address`
 */
export const postAddress = /*#__PURE__*/ (requestData: PostAddressRequest, ...args: UserRequestRestArgs) => {
  return request<PostAddressResponse>(prepare(postAddressRequestConfig, requestData), ...args)
}

postAddress.requestConfig = postAddressRequestConfig

/**
 * 接口 更新地址 的 **请求类型**
 *
 * @分类 地址
 * @请求头 `PUT /address`
 */
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

/**
 * 接口 更新地址 的 **返回类型**
 *
 * @分类 地址
 * @请求头 `PUT /address`
 */
export type PutAddressResponse = any

/**
 * 接口 更新地址 的 **请求配置的类型**
 *
 * @分类 地址
 * @请求头 `PUT /address`
 */
type PutAddressRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address', 'data', string, string, false>
>

/**
 * 接口 更新地址 的 **请求配置**
 *
 * @分类 地址
 * @请求头 `PUT /address`
 */
const putAddressRequestConfig: PutAddressRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/address',
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
  requestFunctionName: 'putAddress',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新地址 的 **请求函数**
 *
 * @分类 地址
 * @请求头 `PUT /address`
 */
export const putAddress = /*#__PURE__*/ (requestData: PutAddressRequest, ...args: UserRequestRestArgs) => {
  return request<PutAddressResponse>(prepare(putAddressRequestConfig, requestData), ...args)
}

putAddress.requestConfig = putAddressRequestConfig

/**
 * 接口 切换默认地址 的 **请求类型**
 *
 * @分类 地址
 * @请求头 `PUT /address/default`
 */
export interface PutAddressDefaultRequest {
  /**
   * 地址id
   */
  id: number
}

/**
 * 接口 切换默认地址 的 **返回类型**
 *
 * @分类 地址
 * @请求头 `PUT /address/default`
 */
export type PutAddressDefaultResponse = any

/**
 * 接口 切换默认地址 的 **请求配置的类型**
 *
 * @分类 地址
 * @请求头 `PUT /address/default`
 */
type PutAddressDefaultRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address/default', 'data', string, string, false>
>

/**
 * 接口 切换默认地址 的 **请求配置**
 *
 * @分类 地址
 * @请求头 `PUT /address/default`
 */
const putAddressDefaultRequestConfig: PutAddressDefaultRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/address/default',
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
  requestFunctionName: 'putAddressDefault',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 切换默认地址 的 **请求函数**
 *
 * @分类 地址
 * @请求头 `PUT /address/default`
 */
export const putAddressDefault = /*#__PURE__*/ (
  requestData: PutAddressDefaultRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutAddressDefaultResponse>(prepare(putAddressDefaultRequestConfig, requestData), ...args)
}

putAddressDefault.requestConfig = putAddressDefaultRequestConfig

/**
 * 接口 删除地址 的 **请求类型**
 *
 * @分类 地址
 * @请求头 `DELETE /address/{id}`
 */
export interface DeleteAddressIdRequest {
  /**
   * 地址id
   */
  id: string
}

/**
 * 接口 删除地址 的 **返回类型**
 *
 * @分类 地址
 * @请求头 `DELETE /address/{id}`
 */
export type DeleteAddressIdResponse = any

/**
 * 接口 删除地址 的 **请求配置的类型**
 *
 * @分类 地址
 * @请求头 `DELETE /address/{id}`
 */
type DeleteAddressIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address/{id}', 'data', 'id', string, false>
>

/**
 * 接口 删除地址 的 **请求配置**
 *
 * @分类 地址
 * @请求头 `DELETE /address/{id}`
 */
const deleteAddressIdRequestConfig: DeleteAddressIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/address/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteAddressId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除地址 的 **请求函数**
 *
 * @分类 地址
 * @请求头 `DELETE /address/{id}`
 */
export const deleteAddressId = /*#__PURE__*/ (requestData: DeleteAddressIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteAddressIdResponse>(prepare(deleteAddressIdRequestConfig, requestData), ...args)
}

deleteAddressId.requestConfig = deleteAddressIdRequestConfig

/**
 * 接口 获取地址信息 的 **请求类型**
 *
 * @分类 地址
 * @请求头 `GET /address/{id}`
 */
export interface GetAddressIdRequest {
  /**
   * 地址id
   */
  id: string
}

/**
 * 接口 获取地址信息 的 **返回类型**
 *
 * @分类 地址
 * @请求头 `GET /address/{id}`
 */
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

/**
 * 接口 获取地址信息 的 **请求配置的类型**
 *
 * @分类 地址
 * @请求头 `GET /address/{id}`
 */
type GetAddressIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/address/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取地址信息 的 **请求配置**
 *
 * @分类 地址
 * @请求头 `GET /address/{id}`
 */
const getAddressIdRequestConfig: GetAddressIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/address/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAddressId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取地址信息 的 **请求函数**
 *
 * @分类 地址
 * @请求头 `GET /address/{id}`
 */
export const getAddressId = /*#__PURE__*/ (requestData: GetAddressIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetAddressIdResponse>(prepare(getAddressIdRequestConfig, requestData), ...args)
}

getAddressId.requestConfig = getAddressIdRequestConfig

const mockUrl_0_0_0_7 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_7 = '' as any
const prodUrl_0_0_0_7 = '' as any
const dataKey_0_0_0_7 = 'data' as any

/**
 * 接口 获取未上架的服饰列表 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
export interface GetProductRequest {}

/**
 * 接口 获取未上架的服饰列表 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
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

/**
 * 接口 获取未上架的服饰列表 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
type GetProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product', 'data', string, string, true>
>

/**
 * 接口 获取未上架的服饰列表 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
const getProductRequestConfig: GetProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product',
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
  requestFunctionName: 'getProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取未上架的服饰列表 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
export const getProduct = /*#__PURE__*/ (requestData?: GetProductRequest, ...args: UserRequestRestArgs) => {
  return request<GetProductResponse>(prepare(getProductRequestConfig, requestData), ...args)
}

getProduct.requestConfig = getProductRequestConfig

/**
 * 接口 创建服饰 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `POST /product`
 */
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
     * 字段key
     */
    fieldKey: string
    /**
     * 字段的值(该字段选项的id)
     */
    fieldValue: number
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

/**
 * 接口 创建服饰 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `POST /product`
 */
export type PostProductResponse = number

/**
 * 接口 创建服饰 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `POST /product`
 */
type PostProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product', 'data', string, string, false>
>

/**
 * 接口 创建服饰 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `POST /product`
 */
const postProductRequestConfig: PostProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product',
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
  requestFunctionName: 'postProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建服饰 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `POST /product`
 */
export const postProduct = /*#__PURE__*/ (requestData: PostProductRequest, ...args: UserRequestRestArgs) => {
  return request<PostProductResponse>(prepare(postProductRequestConfig, requestData), ...args)
}

postProduct.requestConfig = postProductRequestConfig

/**
 * 接口 更新服饰 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `PUT /product`
 */
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
     * 字段key
     */
    fieldKey: string
    /**
     * 字段的值(该字段选项的id)
     */
    fieldValue: number
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

/**
 * 接口 更新服饰 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `PUT /product`
 */
export type PutProductResponse = any

/**
 * 接口 更新服饰 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `PUT /product`
 */
type PutProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product', 'data', string, string, false>
>

/**
 * 接口 更新服饰 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `PUT /product`
 */
const putProductRequestConfig: PutProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product',
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
  requestFunctionName: 'putProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新服饰 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `PUT /product`
 */
export const putProduct = /*#__PURE__*/ (requestData: PutProductRequest, ...args: UserRequestRestArgs) => {
  return request<PutProductResponse>(prepare(putProductRequestConfig, requestData), ...args)
}

putProduct.requestConfig = putProductRequestConfig

/**
 * 接口 获取服饰列表(分页) 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/page`
 */
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
}

/**
 * 接口 获取服饰列表(分页) 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/page`
 */
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

/**
 * 接口 获取服饰列表(分页) 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/page`
 */
type GetProductPageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/product/page',
    'data',
    string,
    'pageNum' | 'pageSize' | 'productTypeCode' | 'name',
    false
  >
>

/**
 * 接口 获取服饰列表(分页) 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `GET /product/page`
 */
const getProductPageRequestConfig: GetProductPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product/page',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'productTypeCode', 'name'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getProductPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取服饰列表(分页) 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `GET /product/page`
 */
export const getProductPage = /*#__PURE__*/ (requestData: GetProductPageRequest, ...args: UserRequestRestArgs) => {
  return request<GetProductPageResponse>(prepare(getProductPageRequestConfig, requestData), ...args)
}

getProductPage.requestConfig = getProductPageRequestConfig

/**
 * 接口 删除服饰 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `DELETE /product/{id}`
 */
export interface DeleteProductIdRequest {
  /**
   * 服饰id
   */
  id: string
}

/**
 * 接口 删除服饰 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `DELETE /product/{id}`
 */
export type DeleteProductIdResponse = any

/**
 * 接口 删除服饰 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `DELETE /product/{id}`
 */
type DeleteProductIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product/{id}', 'data', 'id', string, false>
>

/**
 * 接口 删除服饰 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `DELETE /product/{id}`
 */
const deleteProductIdRequestConfig: DeleteProductIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_7,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteProductId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除服饰 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `DELETE /product/{id}`
 */
export const deleteProductId = /*#__PURE__*/ (requestData: DeleteProductIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteProductIdResponse>(prepare(deleteProductIdRequestConfig, requestData), ...args)
}

deleteProductId.requestConfig = deleteProductIdRequestConfig

/**
 * 接口 获取服饰信息 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/{id}`
 */
export interface GetProductIdRequest {
  /**
   * 服饰id
   */
  id: string
}

/**
 * 接口 获取服饰信息 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/{id}`
 */
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
   * 产品类型
   */
  productType: {
    /**
     * 类型id
     */
    id: number
    /**
     * 类型名称
     */
    name: string
    /**
     * 类型编码
     */
    code: string
  }
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
  /**
   * 其他字段信息
   */
  fieldList: {
    /**
     * 选项id
     */
    id: number
    /**
     * 服饰id
     */
    productId: number
    /**
     * 字段key
     */
    fieldKey: string
    /**
     * 字段的值(该字段选项的id)
     */
    fieldValue: number
    /**
     * 字段key信息
     */
    fieldKeyInfo: {
      /**
       * 字段id
       */
      id: number
      /**
       * 字段key
       */
      key: string
      /**
       * 字段名
       */
      name: string
      /**
       * 服饰类型编码
       */
      prodectTypeCode: string
    }
    /**
     * 字段值信息
     */
    fieldValueInfo: {
      /**
       * 选项id
       */
      id: number
      /**
       * 选项名
       */
      name: string
      /**
       * 字段key
       */
      fieldKey: string
      /**
       * 服饰类型编码
       */
      prodectTypeCode: string
    }
  }[]
}

/**
 * 接口 获取服饰信息 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/{id}`
 */
type GetProductIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取服饰信息 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `GET /product/{id}`
 */
const getProductIdRequestConfig: GetProductIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product/{id}',
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
  requestFunctionName: 'getProductId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取服饰信息 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `GET /product/{id}`
 */
export const getProductId = /*#__PURE__*/ (requestData: GetProductIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetProductIdResponse>(prepare(getProductIdRequestConfig, requestData), ...args)
}

getProductId.requestConfig = getProductIdRequestConfig

/**
 * 接口 获取服饰类型 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/type`
 */
export interface GetProductTypeRequest {}

/**
 * 接口 获取服饰类型 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/type`
 */
export type GetProductTypeResponse = {
  /**
   * 类型id
   */
  id: number
  /**
   * 类型名称
   */
  name: string
  /**
   * 类型编码
   */
  code: string
}[]

/**
 * 接口 获取服饰类型 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/type`
 */
type GetProductTypeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product/type', 'data', string, string, true>
>

/**
 * 接口 获取服饰类型 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `GET /product/type`
 */
const getProductTypeRequestConfig: GetProductTypeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product/type',
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
  requestFunctionName: 'getProductType',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取服饰类型 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `GET /product/type`
 */
export const getProductType = /*#__PURE__*/ (requestData?: GetProductTypeRequest, ...args: UserRequestRestArgs) => {
  return request<GetProductTypeResponse>(prepare(getProductTypeRequestConfig, requestData), ...args)
}

getProductType.requestConfig = getProductTypeRequestConfig

/**
 * 接口 获取服饰展示的信息字段 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/field`
 */
export interface GetProductFieldRequest {
  /**
   * 服饰类型code
   */
  code: string
}

/**
 * 接口 获取服饰展示的信息字段 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/field`
 */
export type GetProductFieldResponse = {
  /**
   * 字段id
   */
  id: number
  /**
   * 字段key
   */
  key: string
  /**
   * 字段名
   */
  name: string
  /**
   * 服饰类型编码
   */
  prodectTypeCode: string
}[]

/**
 * 接口 获取服饰展示的信息字段 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/field`
 */
type GetProductFieldRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product/field', 'data', string, 'code', false>
>

/**
 * 接口 获取服饰展示的信息字段 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `GET /product/field`
 */
const getProductFieldRequestConfig: GetProductFieldRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product/field',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: ['code'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getProductField',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取服饰展示的信息字段 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `GET /product/field`
 */
export const getProductField = /*#__PURE__*/ (requestData: GetProductFieldRequest, ...args: UserRequestRestArgs) => {
  return request<GetProductFieldResponse>(prepare(getProductFieldRequestConfig, requestData), ...args)
}

getProductField.requestConfig = getProductFieldRequestConfig

/**
 * 接口 获取字段选项 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/field/option`
 */
export interface GetProductFieldOptionRequest {
  /**
   * 服饰类型code
   */
  code: string
  /**
   * 字段key
   */
  field: string
}

/**
 * 接口 获取字段选项 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/field/option`
 */
export type GetProductFieldOptionResponse = {
  /**
   * 选项id
   */
  id: number
  /**
   * 选项名
   */
  name: string
  /**
   * 字段key
   */
  fieldKey: string
  /**
   * 服饰类型编码
   */
  prodectTypeCode: string
}[]

/**
 * 接口 获取字段选项 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/field/option`
 */
type GetProductFieldOptionRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/product/field/option',
    'data',
    string,
    'code' | 'field',
    false
  >
>

/**
 * 接口 获取字段选项 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `GET /product/field/option`
 */
const getProductFieldOptionRequestConfig: GetProductFieldOptionRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/product/field/option',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: ['code', 'field'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getProductFieldOption',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取字段选项 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `GET /product/field/option`
 */
export const getProductFieldOption = /*#__PURE__*/ (
  requestData: GetProductFieldOptionRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetProductFieldOptionResponse>(prepare(getProductFieldOptionRequestConfig, requestData), ...args)
}

getProductFieldOption.requestConfig = getProductFieldOptionRequestConfig

const mockUrl_0_0_0_8 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_8 = '' as any
const prodUrl_0_0_0_8 = '' as any
const dataKey_0_0_0_8 = 'data' as any

/**
 * 接口 获取标签列表 的 **请求类型**
 *
 * @分类 标签
 * @请求头 `GET /tag`
 */
export interface GetTagRequest {
  /**
   * 标签用途
   */
  use: string
}

/**
 * 接口 获取标签列表 的 **返回类型**
 *
 * @分类 标签
 * @请求头 `GET /tag`
 */
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

/**
 * 接口 获取标签列表 的 **请求配置的类型**
 *
 * @分类 标签
 * @请求头 `GET /tag`
 */
type GetTagRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/tag', 'data', string, 'use', false>
>

/**
 * 接口 获取标签列表 的 **请求配置**
 *
 * @分类 标签
 * @请求头 `GET /tag`
 */
const getTagRequestConfig: GetTagRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/tag',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: ['use'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getTag',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取标签列表 的 **请求函数**
 *
 * @分类 标签
 * @请求头 `GET /tag`
 */
export const getTag = /*#__PURE__*/ (requestData: GetTagRequest, ...args: UserRequestRestArgs) => {
  return request<GetTagResponse>(prepare(getTagRequestConfig, requestData), ...args)
}

getTag.requestConfig = getTagRequestConfig

const mockUrl_0_0_0_9 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_9 = '' as any
const prodUrl_0_0_0_9 = '' as any
const dataKey_0_0_0_9 = 'data' as any

/**
 * 接口 获取二手市场出售\/借调服饰列表 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market`
 */
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
   * 产品描述
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
   * 服饰状态, 1:审核中 2:上架中  3:未通过 4:已借调 5:已出售 6:已下架
   */
  status?: string
  /**
   * 排序方式 1:最新发布 2:最多收藏
   */
  order?: string
}

/**
 * 接口 获取二手市场出售\/借调服饰列表 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market`
 */
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
    description: string
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

/**
 * 接口 获取二手市场出售\/借调服饰列表 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market`
 */
type GetMarketRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/market',
    'data',
    string,
    'pageNum' | 'pageSize' | 'title' | 'productTypeCode' | 'companyId' | 'status' | 'order',
    false
  >
>

/**
 * 接口 获取二手市场出售\/借调服饰列表 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market`
 */
const getMarketRequestConfig: GetMarketRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'title', 'productTypeCode', 'companyId', 'status', 'order'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getMarket',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取二手市场出售\/借调服饰列表 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market`
 */
export const getMarket = /*#__PURE__*/ (requestData: GetMarketRequest, ...args: UserRequestRestArgs) => {
  return request<GetMarketResponse>(prepare(getMarketRequestConfig, requestData), ...args)
}

getMarket.requestConfig = getMarketRequestConfig

/**
 * 接口 服饰上架二手市场出售\/借调服饰 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market`
 */
export interface PostMarketRequest {
  /**
   * 公司收货id
   */
  companyAddressId?: number
  /**
   * 产品id
   */
  productId: number
  /**
   * 产品描述
   */
  description: string
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
}

/**
 * 接口 服饰上架二手市场出售\/借调服饰 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market`
 */
export type PostMarketResponse = number

/**
 * 接口 服饰上架二手市场出售\/借调服饰 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market`
 */
type PostMarketRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market', 'data', string, string, false>
>

/**
 * 接口 服饰上架二手市场出售\/借调服饰 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market`
 */
const postMarketRequestConfig: PostMarketRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market',
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
  requestFunctionName: 'postMarket',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 服饰上架二手市场出售\/借调服饰 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market`
 */
export const postMarket = /*#__PURE__*/ (requestData: PostMarketRequest, ...args: UserRequestRestArgs) => {
  return request<PostMarketResponse>(prepare(postMarketRequestConfig, requestData), ...args)
}

postMarket.requestConfig = postMarketRequestConfig

/**
 * 接口 更新二手市场出售\/借调服饰 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market`
 */
export interface PutMarketRequest {
  /**
   * 公司收货id
   */
  companyAddressId?: number
  /**
   * 产品id
   */
  productId: number
  /**
   * 产品描述
   */
  description: string
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
   * 二手市场出售/借调服饰id
   */
  id: number
}

/**
 * 接口 更新二手市场出售\/借调服饰 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market`
 */
export type PutMarketResponse = any

/**
 * 接口 更新二手市场出售\/借调服饰 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market`
 */
type PutMarketRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market', 'data', string, string, false>
>

/**
 * 接口 更新二手市场出售\/借调服饰 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market`
 */
const putMarketRequestConfig: PutMarketRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market',
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
  requestFunctionName: 'putMarket',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新二手市场出售\/借调服饰 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market`
 */
export const putMarket = /*#__PURE__*/ (requestData: PutMarketRequest, ...args: UserRequestRestArgs) => {
  return request<PutMarketResponse>(prepare(putMarketRequestConfig, requestData), ...args)
}

putMarket.requestConfig = putMarketRequestConfig

/**
 * 接口 获取我发布的服饰列表 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/my/published`
 */
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

/**
 * 接口 获取我发布的服饰列表 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/my/published`
 */
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
    description: string
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

/**
 * 接口 获取我发布的服饰列表 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/my/published`
 */
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

/**
 * 接口 获取我发布的服饰列表 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/my/published`
 */
const getMarketMyPublishedRequestConfig: GetMarketMyPublishedRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market/my/published',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getMarketMyPublished',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取我发布的服饰列表 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/my/published`
 */
export const getMarketMyPublished = /*#__PURE__*/ (
  requestData: GetMarketMyPublishedRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetMarketMyPublishedResponse>(prepare(getMarketMyPublishedRequestConfig, requestData), ...args)
}

getMarketMyPublished.requestConfig = getMarketMyPublishedRequestConfig

/**
 * 接口 更新二手市场出售\/借调服饰状态 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market/status`
 */
export interface PutMarketStatusRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: number
  /**
   * 状态
   */
  status: number
}

/**
 * 接口 更新二手市场出售\/借调服饰状态 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market/status`
 */
export type PutMarketStatusResponse = any

/**
 * 接口 更新二手市场出售\/借调服饰状态 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market/status`
 */
type PutMarketStatusRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/status', 'data', string, string, false>
>

/**
 * 接口 更新二手市场出售\/借调服饰状态 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market/status`
 */
const putMarketStatusRequestConfig: PutMarketStatusRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market/status',
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
  requestFunctionName: 'putMarketStatus',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新二手市场出售\/借调服饰状态 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `PUT /market/status`
 */
export const putMarketStatus = /*#__PURE__*/ (requestData: PutMarketStatusRequest, ...args: UserRequestRestArgs) => {
  return request<PutMarketStatusResponse>(prepare(putMarketStatusRequestConfig, requestData), ...args)
}

putMarketStatus.requestConfig = putMarketStatusRequestConfig

/**
 * 接口 获取二手市场出售\/借调服饰信息 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/{id}`
 */
export interface GetMarketIdRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: string
}

/**
 * 接口 获取二手市场出售\/借调服饰信息 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/{id}`
 */
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
  description: string
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
     * 产品类型
     */
    productType: {
      /**
       * 类型id
       */
      id: number
      /**
       * 类型名称
       */
      name: string
      /**
       * 类型编码
       */
      code: string
    }
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
    /**
     * 其他字段信息
     */
    fieldList: {
      /**
       * 选项id
       */
      id: number
      /**
       * 服饰id
       */
      productId: number
      /**
       * 字段key
       */
      fieldKey: string
      /**
       * 字段的值(该字段选项的id)
       */
      fieldValue: number
      /**
       * 字段key信息
       */
      fieldKeyInfo: {
        /**
         * 字段id
         */
        id: number
        /**
         * 字段key
         */
        key: string
        /**
         * 字段名
         */
        name: string
        /**
         * 服饰类型编码
         */
        prodectTypeCode: string
      }
      /**
       * 字段值信息
       */
      fieldValueInfo: {
        /**
         * 选项id
         */
        id: number
        /**
         * 选项名
         */
        name: string
        /**
         * 字段key
         */
        fieldKey: string
        /**
         * 服饰类型编码
         */
        prodectTypeCode: string
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

/**
 * 接口 获取二手市场出售\/借调服饰信息 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/{id}`
 */
type GetMarketIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取二手市场出售\/借调服饰信息 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/{id}`
 */
const getMarketIdRequestConfig: GetMarketIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market/{id}',
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
  requestFunctionName: 'getMarketId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取二手市场出售\/借调服饰信息 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `GET /market/{id}`
 */
export const getMarketId = /*#__PURE__*/ (requestData: GetMarketIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetMarketIdResponse>(prepare(getMarketIdRequestConfig, requestData), ...args)
}

getMarketId.requestConfig = getMarketIdRequestConfig

/**
 * 接口 删除二手市场出售\/借调服饰 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/{id}`
 */
export interface DeleteMarketIdRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: string
}

/**
 * 接口 删除二手市场出售\/借调服饰 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/{id}`
 */
export type DeleteMarketIdResponse = any

/**
 * 接口 删除二手市场出售\/借调服饰 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/{id}`
 */
type DeleteMarketIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/{id}', 'data', 'id', string, false>
>

/**
 * 接口 删除二手市场出售\/借调服饰 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/{id}`
 */
const deleteMarketIdRequestConfig: DeleteMarketIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market/{id}',
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
  requestFunctionName: 'deleteMarketId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除二手市场出售\/借调服饰 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/{id}`
 */
export const deleteMarketId = /*#__PURE__*/ (requestData: DeleteMarketIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteMarketIdResponse>(prepare(deleteMarketIdRequestConfig, requestData), ...args)
}

deleteMarketId.requestConfig = deleteMarketIdRequestConfig

/**
 * 接口 取消审核 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/audit/{id}`
 */
export interface DeleteMarketAuditIdRequest {
  /**
   * 二手市场出售/借调服饰id
   */
  id: string
}

/**
 * 接口 取消审核 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/audit/{id}`
 */
export type DeleteMarketAuditIdResponse = any

/**
 * 接口 取消审核 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/audit/{id}`
 */
type DeleteMarketAuditIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/audit/{id}', 'data', 'id', string, false>
>

/**
 * 接口 取消审核 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/audit/{id}`
 */
const deleteMarketAuditIdRequestConfig: DeleteMarketAuditIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market/audit/{id}',
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
  requestFunctionName: 'deleteMarketAuditId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 取消审核 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `DELETE /market/audit/{id}`
 */
export const deleteMarketAuditId = /*#__PURE__*/ (
  requestData: DeleteMarketAuditIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteMarketAuditIdResponse>(prepare(deleteMarketAuditIdRequestConfig, requestData), ...args)
}

deleteMarketAuditId.requestConfig = deleteMarketAuditIdRequestConfig

/**
 * 接口 切换收藏状态 的 **请求类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market/favorite`
 */
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

/**
 * 接口 切换收藏状态 的 **返回类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market/favorite`
 */
export type PostMarketFavoriteResponse = any

/**
 * 接口 切换收藏状态 的 **请求配置的类型**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market/favorite`
 */
type PostMarketFavoriteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/market/favorite', 'data', string, string, false>
>

/**
 * 接口 切换收藏状态 的 **请求配置**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market/favorite`
 */
const postMarketFavoriteRequestConfig: PostMarketFavoriteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/market/favorite',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postMarketFavorite',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 切换收藏状态 的 **请求函数**
 *
 * @分类 二手市场出售/借调服饰
 * @请求头 `POST /market/favorite`
 */
export const postMarketFavorite = /*#__PURE__*/ (
  requestData: PostMarketFavoriteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostMarketFavoriteResponse>(prepare(postMarketFavoriteRequestConfig, requestData), ...args)
}

postMarketFavorite.requestConfig = postMarketFavoriteRequestConfig

/* prettier-ignore-end */
