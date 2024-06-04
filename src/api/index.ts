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
 * 接口 微信授权登录 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `POST /user/login/wechat`
 */
export interface PostUserLoginWechatRequest {
  /**
   * wx.login 获取的 code
   */
  code: string
}

/**
 * 接口 微信授权登录 的 **返回类型**
 *
 * @分类 用户
 * @请求头 `POST /user/login/wechat`
 */
export type PostUserLoginWechatResponse = any

/**
 * 接口 微信授权登录 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `POST /user/login/wechat`
 */
type PostUserLoginWechatRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user/login/wechat', 'data', string, string, false>
>

/**
 * 接口 微信授权登录 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `POST /user/login/wechat`
 */
const postUserLoginWechatRequestConfig: PostUserLoginWechatRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/user/login/wechat',
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
  requestFunctionName: 'postUserLoginWechat',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 微信授权登录 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `POST /user/login/wechat`
 */
export const postUserLoginWechat = /*#__PURE__*/ (
  requestData: PostUserLoginWechatRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostUserLoginWechatResponse>(prepare(postUserLoginWechatRequestConfig, requestData), ...args)
}

postUserLoginWechat.requestConfig = postUserLoginWechatRequestConfig

/**
 * 接口 修改个人资料 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `PUT /user/self`
 */
export interface PutUserSelfRequest {
  /**
   * 昵称
   */
  name?: string
  /**
   * 头像
   */
  avatar?: string
}

/**
 * 接口 修改个人资料 的 **返回类型**
 *
 * @分类 用户
 * @请求头 `PUT /user/self`
 */
export type PutUserSelfResponse = any

/**
 * 接口 修改个人资料 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `PUT /user/self`
 */
type PutUserSelfRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user/self', 'data', string, 'name' | 'avatar', false>
>

/**
 * 接口 修改个人资料 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `PUT /user/self`
 */
const putUserSelfRequestConfig: PutUserSelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/user/self',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['name', 'avatar'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putUserSelf',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改个人资料 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `PUT /user/self`
 */
export const putUserSelf = /*#__PURE__*/ (requestData: PutUserSelfRequest, ...args: UserRequestRestArgs) => {
  return request<PutUserSelfResponse>(prepare(putUserSelfRequestConfig, requestData), ...args)
}

putUserSelf.requestConfig = putUserSelfRequestConfig

/**
 * 接口 获取当前登录账号信息 的 **请求类型**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
export interface GetUserSelfRequest {}

/**
 * 接口 获取当前登录账号信息 的 **返回类型**
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
   * 用户编号
   */
  no: string
  /**
   * 昵称
   */
  name: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 当前选中的组织
   */
  orgId: number
  /**
   * 当前组织下的角色
   */
  roleId: number
}

/**
 * 接口 获取当前登录账号信息 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
type GetUserSelfRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user/self', 'data', string, string, true>
>

/**
 * 接口 获取当前登录账号信息 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
const getUserSelfRequestConfig: GetUserSelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/user/self',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
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
 * 接口 获取当前登录账号信息 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `GET /user/self`
 */
export const getUserSelf = /*#__PURE__*/ (requestData?: GetUserSelfRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserSelfResponse>(prepare(getUserSelfRequestConfig, requestData), ...args)
}

getUserSelf.requestConfig = getUserSelfRequestConfig

/**
 * 接口 获取账号信息 的 **请求类型**
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
 * 接口 获取账号信息 的 **返回类型**
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
   * 用户编号
   */
  no: string
  /**
   * 昵称
   */
  name: string
  /**
   * 头像
   */
  avatar?: string
}

/**
 * 接口 获取账号信息 的 **请求配置的类型**
 *
 * @分类 用户
 * @请求头 `GET /user/{id}`
 */
type GetUserIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/user/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取账号信息 的 **请求配置**
 *
 * @分类 用户
 * @请求头 `GET /user/{id}`
 */
const getUserIdRequestConfig: GetUserIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/user/{id}',
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
  requestFunctionName: 'getUserId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取账号信息 的 **请求函数**
 *
 * @分类 用户
 * @请求头 `GET /user/{id}`
 */
export const getUserId = /*#__PURE__*/ (requestData: GetUserIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserIdResponse>(prepare(getUserIdRequestConfig, requestData), ...args)
}

getUserId.requestConfig = getUserIdRequestConfig

const mockUrl_0_0_0_2 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_2 = '' as any
const prodUrl_0_0_0_2 = '' as any
const dataKey_0_0_0_2 = 'data' as any

/**
 * 接口 获取组织列表 的 **请求类型**
 *
 * @分类 组织
 * @请求头 `GET /organization`
 */
export interface GetOrganizationRequest {}

/**
 * 接口 获取组织列表 的 **返回类型**
 *
 * @分类 组织
 * @请求头 `GET /organization`
 */
export type GetOrganizationResponse = {
  /**
   * 组织id
   */
  id: number
  /**
   * 组织名称
   */
  name: string
  /**
   * 是否为默认组织
   */
  isDefault: number
}[]

/**
 * 接口 获取组织列表 的 **请求配置的类型**
 *
 * @分类 组织
 * @请求头 `GET /organization`
 */
type GetOrganizationRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/organization', 'data', string, string, true>
>

/**
 * 接口 获取组织列表 的 **请求配置**
 *
 * @分类 组织
 * @请求头 `GET /organization`
 */
const getOrganizationRequestConfig: GetOrganizationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/organization',
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
  requestFunctionName: 'getOrganization',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取组织列表 的 **请求函数**
 *
 * @分类 组织
 * @请求头 `GET /organization`
 */
export const getOrganization = /*#__PURE__*/ (requestData?: GetOrganizationRequest, ...args: UserRequestRestArgs) => {
  return request<GetOrganizationResponse>(prepare(getOrganizationRequestConfig, requestData), ...args)
}

getOrganization.requestConfig = getOrganizationRequestConfig

/**
 * 接口 创建组织 的 **请求类型**
 *
 * @分类 组织
 * @请求头 `POST /organization`
 */
export interface PostOrganizationRequest {
  /**
   * 组织名称
   */
  name: string
}

/**
 * 接口 创建组织 的 **返回类型**
 *
 * @分类 组织
 * @请求头 `POST /organization`
 */
export interface PostOrganizationResponse {}

/**
 * 接口 创建组织 的 **请求配置的类型**
 *
 * @分类 组织
 * @请求头 `POST /organization`
 */
type PostOrganizationRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/organization', 'data', string, string, false>
>

/**
 * 接口 创建组织 的 **请求配置**
 *
 * @分类 组织
 * @请求头 `POST /organization`
 */
const postOrganizationRequestConfig: PostOrganizationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/organization',
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
  requestFunctionName: 'postOrganization',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建组织 的 **请求函数**
 *
 * @分类 组织
 * @请求头 `POST /organization`
 */
export const postOrganization = /*#__PURE__*/ (requestData: PostOrganizationRequest, ...args: UserRequestRestArgs) => {
  return request<PostOrganizationResponse>(prepare(postOrganizationRequestConfig, requestData), ...args)
}

postOrganization.requestConfig = postOrganizationRequestConfig

/**
 * 接口 更新组织 的 **请求类型**
 *
 * @分类 组织
 * @请求头 `PUT /organization`
 */
export interface PutOrganizationRequest {
  /**
   * 组织id
   */
  id: number
  /**
   * 组织名称
   */
  name: string
}

/**
 * 接口 更新组织 的 **返回类型**
 *
 * @分类 组织
 * @请求头 `PUT /organization`
 */
export type PutOrganizationResponse = any

/**
 * 接口 更新组织 的 **请求配置的类型**
 *
 * @分类 组织
 * @请求头 `PUT /organization`
 */
type PutOrganizationRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/organization', 'data', string, string, false>
>

/**
 * 接口 更新组织 的 **请求配置**
 *
 * @分类 组织
 * @请求头 `PUT /organization`
 */
const putOrganizationRequestConfig: PutOrganizationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/organization',
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
  requestFunctionName: 'putOrganization',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新组织 的 **请求函数**
 *
 * @分类 组织
 * @请求头 `PUT /organization`
 */
export const putOrganization = /*#__PURE__*/ (requestData: PutOrganizationRequest, ...args: UserRequestRestArgs) => {
  return request<PutOrganizationResponse>(prepare(putOrganizationRequestConfig, requestData), ...args)
}

putOrganization.requestConfig = putOrganizationRequestConfig

/**
 * 接口 获取组织详情 的 **请求类型**
 *
 * @分类 组织
 * @请求头 `GET /organization/{id}`
 */
export interface GetOrganizationIdRequest {
  /**
   * 组织id
   */
  id: string
}

/**
 * 接口 获取组织详情 的 **返回类型**
 *
 * @分类 组织
 * @请求头 `GET /organization/{id}`
 */
export interface GetOrganizationIdResponse {
  /**
   * id
   */
  id: number
  /**
   * 组织名称
   */
  name: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 房间数量
   */
  roomCount: number
  /**
   * 物品数量
   */
  belongingsCount: number
  /**
   * 组织内的用户列表
   */
  members: {
    /**
     * 用户id
     */
    id: number
    /**
     * 用户名称
     */
    name: string
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 角色id
     */
    roleId: number
  }[]
}

/**
 * 接口 获取组织详情 的 **请求配置的类型**
 *
 * @分类 组织
 * @请求头 `GET /organization/{id}`
 */
type GetOrganizationIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/organization/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取组织详情 的 **请求配置**
 *
 * @分类 组织
 * @请求头 `GET /organization/{id}`
 */
const getOrganizationIdRequestConfig: GetOrganizationIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/organization/{id}',
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
  requestFunctionName: 'getOrganizationId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取组织详情 的 **请求函数**
 *
 * @分类 组织
 * @请求头 `GET /organization/{id}`
 */
export const getOrganizationId = /*#__PURE__*/ (
  requestData: GetOrganizationIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetOrganizationIdResponse>(prepare(getOrganizationIdRequestConfig, requestData), ...args)
}

getOrganizationId.requestConfig = getOrganizationIdRequestConfig

/**
 * 接口 删除组织 的 **请求类型**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{id}`
 */
export interface DeleteOrganizationIdRequest {
  /**
   * 组织id
   */
  id: string
}

/**
 * 接口 删除组织 的 **返回类型**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{id}`
 */
export type DeleteOrganizationIdResponse = any

/**
 * 接口 删除组织 的 **请求配置的类型**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{id}`
 */
type DeleteOrganizationIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/organization/{id}', 'data', 'id', string, false>
>

/**
 * 接口 删除组织 的 **请求配置**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{id}`
 */
const deleteOrganizationIdRequestConfig: DeleteOrganizationIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/organization/{id}',
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
  requestFunctionName: 'deleteOrganizationId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除组织 的 **请求函数**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{id}`
 */
export const deleteOrganizationId = /*#__PURE__*/ (
  requestData: DeleteOrganizationIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteOrganizationIdResponse>(prepare(deleteOrganizationIdRequestConfig, requestData), ...args)
}

deleteOrganizationId.requestConfig = deleteOrganizationIdRequestConfig

/**
 * 接口 切换默认组织 的 **请求类型**
 *
 * @分类 组织
 * @请求头 `PUT /organization/change`
 */
export interface PutOrganizationChangeRequest {
  /**
   * 组织id
   */
  id: number
}

/**
 * 接口 切换默认组织 的 **返回类型**
 *
 * @分类 组织
 * @请求头 `PUT /organization/change`
 */
export type PutOrganizationChangeResponse = any

/**
 * 接口 切换默认组织 的 **请求配置的类型**
 *
 * @分类 组织
 * @请求头 `PUT /organization/change`
 */
type PutOrganizationChangeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/organization/change', 'data', string, string, false>
>

/**
 * 接口 切换默认组织 的 **请求配置**
 *
 * @分类 组织
 * @请求头 `PUT /organization/change`
 */
const putOrganizationChangeRequestConfig: PutOrganizationChangeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/organization/change',
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
  requestFunctionName: 'putOrganizationChange',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 切换默认组织 的 **请求函数**
 *
 * @分类 组织
 * @请求头 `PUT /organization/change`
 */
export const putOrganizationChange = /*#__PURE__*/ (
  requestData: PutOrganizationChangeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutOrganizationChangeResponse>(prepare(putOrganizationChangeRequestConfig, requestData), ...args)
}

putOrganizationChange.requestConfig = putOrganizationChangeRequestConfig

/**
 * 接口 加入组织 的 **请求类型**
 *
 * @分类 组织
 * @请求头 `POST /organization/join`
 */
export interface PostOrganizationJoinRequest {
  /**
   * 组织id
   */
  orgId: number
}

/**
 * 接口 加入组织 的 **返回类型**
 *
 * @分类 组织
 * @请求头 `POST /organization/join`
 */
export type PostOrganizationJoinResponse = any

/**
 * 接口 加入组织 的 **请求配置的类型**
 *
 * @分类 组织
 * @请求头 `POST /organization/join`
 */
type PostOrganizationJoinRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/organization/join', 'data', string, string, false>
>

/**
 * 接口 加入组织 的 **请求配置**
 *
 * @分类 组织
 * @请求头 `POST /organization/join`
 */
const postOrganizationJoinRequestConfig: PostOrganizationJoinRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/organization/join',
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
  requestFunctionName: 'postOrganizationJoin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 加入组织 的 **请求函数**
 *
 * @分类 组织
 * @请求头 `POST /organization/join`
 */
export const postOrganizationJoin = /*#__PURE__*/ (
  requestData: PostOrganizationJoinRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostOrganizationJoinResponse>(prepare(postOrganizationJoinRequestConfig, requestData), ...args)
}

postOrganizationJoin.requestConfig = postOrganizationJoinRequestConfig

/**
 * 接口 移除组织中的成员 的 **请求类型**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{orgId}/member/{memberId}`
 */
export interface DeleteOrganizationOrgIdMemberMemberIdRequest {
  /**
   * 要移除的用户id
   */
  memberId: string
  /**
   * 组织id
   */
  orgId: string
}

/**
 * 接口 移除组织中的成员 的 **返回类型**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{orgId}/member/{memberId}`
 */
export type DeleteOrganizationOrgIdMemberMemberIdResponse = any

/**
 * 接口 移除组织中的成员 的 **请求配置的类型**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{orgId}/member/{memberId}`
 */
type DeleteOrganizationOrgIdMemberMemberIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/organization/{orgId}/member/{memberId}',
    'data',
    'memberId' | 'orgId',
    string,
    false
  >
>

/**
 * 接口 移除组织中的成员 的 **请求配置**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{orgId}/member/{memberId}`
 */
const deleteOrganizationOrgIdMemberMemberIdRequestConfig: DeleteOrganizationOrgIdMemberMemberIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/organization/{orgId}/member/{memberId}',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.raw,
    responseBodyType: ResponseBodyType.raw,
    dataKey: dataKey_0_0_0_2,
    paramNames: ['memberId', 'orgId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'deleteOrganizationOrgIdMemberMemberId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 移除组织中的成员 的 **请求函数**
 *
 * @分类 组织
 * @请求头 `DELETE /organization/{orgId}/member/{memberId}`
 */
export const deleteOrganizationOrgIdMemberMemberId = /*#__PURE__*/ (
  requestData: DeleteOrganizationOrgIdMemberMemberIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteOrganizationOrgIdMemberMemberIdResponse>(
    prepare(deleteOrganizationOrgIdMemberMemberIdRequestConfig, requestData),
    ...args,
  )
}

deleteOrganizationOrgIdMemberMemberId.requestConfig = deleteOrganizationOrgIdMemberMemberIdRequestConfig

const mockUrl_0_0_0_3 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_3 = '' as any
const prodUrl_0_0_0_3 = '' as any
const dataKey_0_0_0_3 = 'data' as any

/**
 * 接口 获取房间列表 的 **请求类型**
 *
 * @分类 房间
 * @请求头 `GET /room`
 */
export interface GetRoomRequest {
  /**
   * 组织id
   */
  orgId: string
}

/**
 * 接口 获取房间列表 的 **返回类型**
 *
 * @分类 房间
 * @请求头 `GET /room`
 */
export type GetRoomResponse = {
  /**
   * 房间id
   */
  id: number
  /**
   * 房间名称
   */
  name: string
  /**
   * 物品列表
   */
  belongingsList: {
    /**
     * 物品id
     */
    id: number
    /**
     * 物品名称
     */
    name: string
    /**
     * 物品图片
     */
    pic: string
  }[]
}[]

/**
 * 接口 获取房间列表 的 **请求配置的类型**
 *
 * @分类 房间
 * @请求头 `GET /room`
 */
type GetRoomRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/room', 'data', string, 'orgId', false>
>

/**
 * 接口 获取房间列表 的 **请求配置**
 *
 * @分类 房间
 * @请求头 `GET /room`
 */
const getRoomRequestConfig: GetRoomRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/room',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['orgId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getRoom',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取房间列表 的 **请求函数**
 *
 * @分类 房间
 * @请求头 `GET /room`
 */
export const getRoom = /*#__PURE__*/ (requestData: GetRoomRequest, ...args: UserRequestRestArgs) => {
  return request<GetRoomResponse>(prepare(getRoomRequestConfig, requestData), ...args)
}

getRoom.requestConfig = getRoomRequestConfig

/**
 * 接口 创建房间 的 **请求类型**
 *
 * @分类 房间
 * @请求头 `POST /room`
 */
export interface PostRoomRequest {
  /**
   * 房间名称
   */
  name: string
  /**
   * 组织id
   */
  orgId: number
}

/**
 * 接口 创建房间 的 **返回类型**
 *
 * @分类 房间
 * @请求头 `POST /room`
 */
export interface PostRoomResponse {}

/**
 * 接口 创建房间 的 **请求配置的类型**
 *
 * @分类 房间
 * @请求头 `POST /room`
 */
type PostRoomRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/room', 'data', string, string, false>
>

/**
 * 接口 创建房间 的 **请求配置**
 *
 * @分类 房间
 * @请求头 `POST /room`
 */
const postRoomRequestConfig: PostRoomRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/room',
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
  requestFunctionName: 'postRoom',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建房间 的 **请求函数**
 *
 * @分类 房间
 * @请求头 `POST /room`
 */
export const postRoom = /*#__PURE__*/ (requestData: PostRoomRequest, ...args: UserRequestRestArgs) => {
  return request<PostRoomResponse>(prepare(postRoomRequestConfig, requestData), ...args)
}

postRoom.requestConfig = postRoomRequestConfig

/**
 * 接口 获取房间详情 的 **请求类型**
 *
 * @分类 房间
 * @请求头 `GET /room/{id}`
 */
export interface GetRoomIdRequest {
  /**
   * 房间id
   */
  id: string
}

/**
 * 接口 获取房间详情 的 **返回类型**
 *
 * @分类 房间
 * @请求头 `GET /room/{id}`
 */
export interface GetRoomIdResponse {
  /**
   * 房间id
   */
  id: number
  /**
   * 房间名称
   */
  name: string
  /**
   * 组织id
   */
  orgId: number
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
}

/**
 * 接口 获取房间详情 的 **请求配置的类型**
 *
 * @分类 房间
 * @请求头 `GET /room/{id}`
 */
type GetRoomIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/room/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取房间详情 的 **请求配置**
 *
 * @分类 房间
 * @请求头 `GET /room/{id}`
 */
const getRoomIdRequestConfig: GetRoomIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/room/{id}',
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
  requestFunctionName: 'getRoomId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取房间详情 的 **请求函数**
 *
 * @分类 房间
 * @请求头 `GET /room/{id}`
 */
export const getRoomId = /*#__PURE__*/ (requestData: GetRoomIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetRoomIdResponse>(prepare(getRoomIdRequestConfig, requestData), ...args)
}

getRoomId.requestConfig = getRoomIdRequestConfig

/**
 * 接口 更新房间 的 **请求类型**
 *
 * @分类 房间
 * @请求头 `PUT /room/{id}`
 */
export interface PutRoomIdRequest {
  /**
   * 房间名称
   */
  name: string
  /**
   * 组织id
   */
  orgId: number
  /**
   * 房间id
   */
  id: string
}

/**
 * 接口 更新房间 的 **返回类型**
 *
 * @分类 房间
 * @请求头 `PUT /room/{id}`
 */
export type PutRoomIdResponse = any

/**
 * 接口 更新房间 的 **请求配置的类型**
 *
 * @分类 房间
 * @请求头 `PUT /room/{id}`
 */
type PutRoomIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/room/{id}', 'data', 'id', string, false>
>

/**
 * 接口 更新房间 的 **请求配置**
 *
 * @分类 房间
 * @请求头 `PUT /room/{id}`
 */
const putRoomIdRequestConfig: PutRoomIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/room/{id}',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putRoomId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新房间 的 **请求函数**
 *
 * @分类 房间
 * @请求头 `PUT /room/{id}`
 */
export const putRoomId = /*#__PURE__*/ (requestData: PutRoomIdRequest, ...args: UserRequestRestArgs) => {
  return request<PutRoomIdResponse>(prepare(putRoomIdRequestConfig, requestData), ...args)
}

putRoomId.requestConfig = putRoomIdRequestConfig

/**
 * 接口 删除房间 的 **请求类型**
 *
 * @分类 房间
 * @请求头 `DELETE /room/{id}`
 */
export interface DeleteRoomIdRequest {
  /**
   * 房间id
   */
  id: string
}

/**
 * 接口 删除房间 的 **返回类型**
 *
 * @分类 房间
 * @请求头 `DELETE /room/{id}`
 */
export type DeleteRoomIdResponse = any

/**
 * 接口 删除房间 的 **请求配置的类型**
 *
 * @分类 房间
 * @请求头 `DELETE /room/{id}`
 */
type DeleteRoomIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/room/{id}', 'data', 'id', string, false>
>

/**
 * 接口 删除房间 的 **请求配置**
 *
 * @分类 房间
 * @请求头 `DELETE /room/{id}`
 */
const deleteRoomIdRequestConfig: DeleteRoomIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/room/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteRoomId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除房间 的 **请求函数**
 *
 * @分类 房间
 * @请求头 `DELETE /room/{id}`
 */
export const deleteRoomId = /*#__PURE__*/ (requestData: DeleteRoomIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteRoomIdResponse>(prepare(deleteRoomIdRequestConfig, requestData), ...args)
}

deleteRoomId.requestConfig = deleteRoomIdRequestConfig

const mockUrl_0_0_0_4 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_4 = '' as any
const prodUrl_0_0_0_4 = '' as any
const dataKey_0_0_0_4 = 'data' as any

/**
 * 接口 获取储物空间列表 的 **请求类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space`
 */
export interface GetSpaceRequest {
  /**
   * 房间id
   */
  roomId: string
  /**
   * 父级储物空间id
   */
  parentId?: string
}

/**
 * 接口 获取储物空间列表 的 **返回类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space`
 */
export type GetSpaceResponse = {
  /**
   * 储物空间id
   */
  id: number
  /**
   * 储物空间名称
   */
  name: string
  /**
   * 父级储物空间id
   */
  parentId: number
  /**
   * 所属房间id
   */
  roomId: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
}[]

/**
 * 接口 获取储物空间列表 的 **请求配置的类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space`
 */
type GetSpaceRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/space', 'data', string, 'roomId' | 'parentId', false>
>

/**
 * 接口 获取储物空间列表 的 **请求配置**
 *
 * @分类 储物空间
 * @请求头 `GET /space`
 */
const getSpaceRequestConfig: GetSpaceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/space',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['roomId', 'parentId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSpace',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取储物空间列表 的 **请求函数**
 *
 * @分类 储物空间
 * @请求头 `GET /space`
 */
export const getSpace = /*#__PURE__*/ (requestData: GetSpaceRequest, ...args: UserRequestRestArgs) => {
  return request<GetSpaceResponse>(prepare(getSpaceRequestConfig, requestData), ...args)
}

getSpace.requestConfig = getSpaceRequestConfig

/**
 * 接口 创建储物空间 的 **请求类型**
 *
 * @分类 储物空间
 * @请求头 `POST /space`
 */
export interface PostSpaceRequest {
  /**
   * 储物空间名称
   */
  name: string
  /**
   * 房间id
   */
  roomId: number
  /**
   * 父级储物空间id
   */
  parentId?: number
  /**
   * 备注
   */
  remark?: string
}

/**
 * 接口 创建储物空间 的 **返回类型**
 *
 * @分类 储物空间
 * @请求头 `POST /space`
 */
export interface PostSpaceResponse {}

/**
 * 接口 创建储物空间 的 **请求配置的类型**
 *
 * @分类 储物空间
 * @请求头 `POST /space`
 */
type PostSpaceRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/space', 'data', string, string, false>
>

/**
 * 接口 创建储物空间 的 **请求配置**
 *
 * @分类 储物空间
 * @请求头 `POST /space`
 */
const postSpaceRequestConfig: PostSpaceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/space',
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
  requestFunctionName: 'postSpace',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建储物空间 的 **请求函数**
 *
 * @分类 储物空间
 * @请求头 `POST /space`
 */
export const postSpace = /*#__PURE__*/ (requestData: PostSpaceRequest, ...args: UserRequestRestArgs) => {
  return request<PostSpaceResponse>(prepare(postSpaceRequestConfig, requestData), ...args)
}

postSpace.requestConfig = postSpaceRequestConfig

/**
 * 接口 更新储物空间 的 **请求类型**
 *
 * @分类 储物空间
 * @请求头 `PUT /space`
 */
export interface PutSpaceRequest {
  /**
   * 储物空间id
   */
  id: number
  /**
   * 储物空间名称
   */
  name?: string
  /**
   * 房间id
   */
  roomId?: number
  /**
   * 父级储物空间id
   */
  parentId?: number
  /**
   * 备注
   */
  remark?: string
}

/**
 * 接口 更新储物空间 的 **返回类型**
 *
 * @分类 储物空间
 * @请求头 `PUT /space`
 */
export type PutSpaceResponse = any

/**
 * 接口 更新储物空间 的 **请求配置的类型**
 *
 * @分类 储物空间
 * @请求头 `PUT /space`
 */
type PutSpaceRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/space', 'data', string, string, false>
>

/**
 * 接口 更新储物空间 的 **请求配置**
 *
 * @分类 储物空间
 * @请求头 `PUT /space`
 */
const putSpaceRequestConfig: PutSpaceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/space',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putSpace',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新储物空间 的 **请求函数**
 *
 * @分类 储物空间
 * @请求头 `PUT /space`
 */
export const putSpace = /*#__PURE__*/ (requestData: PutSpaceRequest, ...args: UserRequestRestArgs) => {
  return request<PutSpaceResponse>(prepare(putSpaceRequestConfig, requestData), ...args)
}

putSpace.requestConfig = putSpaceRequestConfig

/**
 * 接口 获取储物空间列表 的 **请求类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space/ids`
 */
export interface GetSpaceIdsRequest {
  /**
   * 空间id，用 `,` 分割
   */
  ids: string
}

/**
 * 接口 获取储物空间列表 的 **返回类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space/ids`
 */
export type GetSpaceIdsResponse = {
  /**
   * 储物空间id
   */
  id: number
  /**
   * 储物空间名称
   */
  name: string
  /**
   * 父级储物空间id
   */
  parentId: number
  /**
   * 所属房间id
   */
  roomId: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
}[]

/**
 * 接口 获取储物空间列表 的 **请求配置的类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space/ids`
 */
type GetSpaceIdsRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/space/ids', 'data', string, 'ids', false>
>

/**
 * 接口 获取储物空间列表 的 **请求配置**
 *
 * @分类 储物空间
 * @请求头 `GET /space/ids`
 */
const getSpaceIdsRequestConfig: GetSpaceIdsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/space/ids',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['ids'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getSpaceIds',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取储物空间列表 的 **请求函数**
 *
 * @分类 储物空间
 * @请求头 `GET /space/ids`
 */
export const getSpaceIds = /*#__PURE__*/ (requestData: GetSpaceIdsRequest, ...args: UserRequestRestArgs) => {
  return request<GetSpaceIdsResponse>(prepare(getSpaceIdsRequestConfig, requestData), ...args)
}

getSpaceIds.requestConfig = getSpaceIdsRequestConfig

/**
 * 接口 获取空间详情 的 **请求类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space/{id}`
 */
export interface GetSpaceIdRequest {
  /**
   * 空间id
   */
  id: string
}

/**
 * 接口 获取空间详情 的 **返回类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space/{id}`
 */
export interface GetSpaceIdResponse {
  /**
   * id
   */
  id: number
  /**
   * 储物空间名称
   */
  name: string
  /**
   * 父id
   */
  parentId: number
  /**
   * 房间id
   */
  roomId: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 修改时间
   */
  updateTime?: string
}

/**
 * 接口 获取空间详情 的 **请求配置的类型**
 *
 * @分类 储物空间
 * @请求头 `GET /space/{id}`
 */
type GetSpaceIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/space/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取空间详情 的 **请求配置**
 *
 * @分类 储物空间
 * @请求头 `GET /space/{id}`
 */
const getSpaceIdRequestConfig: GetSpaceIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/space/{id}',
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
  requestFunctionName: 'getSpaceId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取空间详情 的 **请求函数**
 *
 * @分类 储物空间
 * @请求头 `GET /space/{id}`
 */
export const getSpaceId = /*#__PURE__*/ (requestData: GetSpaceIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetSpaceIdResponse>(prepare(getSpaceIdRequestConfig, requestData), ...args)
}

getSpaceId.requestConfig = getSpaceIdRequestConfig

/**
 * 接口 删除物品 的 **请求类型**
 *
 * @分类 储物空间
 * @请求头 `DELETE /space/{id}`
 */
export interface DeleteSpaceIdRequest {
  /**
   * 空间id
   */
  id: string
}

/**
 * 接口 删除物品 的 **返回类型**
 *
 * @分类 储物空间
 * @请求头 `DELETE /space/{id}`
 */
export type DeleteSpaceIdResponse = any

/**
 * 接口 删除物品 的 **请求配置的类型**
 *
 * @分类 储物空间
 * @请求头 `DELETE /space/{id}`
 */
type DeleteSpaceIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/space/{id}', 'data', 'id', string, false>
>

/**
 * 接口 删除物品 的 **请求配置**
 *
 * @分类 储物空间
 * @请求头 `DELETE /space/{id}`
 */
const deleteSpaceIdRequestConfig: DeleteSpaceIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/space/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_4,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteSpaceId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除物品 的 **请求函数**
 *
 * @分类 储物空间
 * @请求头 `DELETE /space/{id}`
 */
export const deleteSpaceId = /*#__PURE__*/ (requestData: DeleteSpaceIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteSpaceIdResponse>(prepare(deleteSpaceIdRequestConfig, requestData), ...args)
}

deleteSpaceId.requestConfig = deleteSpaceIdRequestConfig

const mockUrl_0_0_0_5 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_5 = '' as any
const prodUrl_0_0_0_5 = '' as any
const dataKey_0_0_0_5 = 'data' as any

/**
 * 接口 获取物品列表 的 **请求类型**
 *
 * @分类 物品
 * @请求头 `GET /belongings`
 */
export interface GetBelongingsRequest {
  /**
   * 组织id
   */
  orgId: string
  /**
   * 用户id
   */
  userId?: string
  /**
   * 物品名称
   */
  name?: string
  /**
   * 房间id
   */
  roomId?: string
  /**
   * 储物空间id
   */
  spaceId?: string
  /**
   * 过期状态，0:未过期 1:即将过期 2:已过期
   */
  expirationStatus?: string
}

/**
 * 接口 获取物品列表 的 **返回类型**
 *
 * @分类 物品
 * @请求头 `GET /belongings`
 */
export type GetBelongingsResponse = {
  /**
   * id
   */
  id: number
  /**
   * 物品名称
   */
  name: string
  /**
   * 物品描述
   */
  desc?: string
  /**
   * 物品数量
   */
  count: number
  /**
   * 物品图片
   */
  pic?: string
  /**
   * 组织id
   */
  orgId: number
  /**
   * 用户id
   */
  userId: number
  /**
   * 空间id
   */
  spaceId: number
  /**
   * 空间路径
   */
  spacePath: string
  /**
   * 过期时间
   */
  expirationDate: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
}[]

/**
 * 接口 获取物品列表 的 **请求配置的类型**
 *
 * @分类 物品
 * @请求头 `GET /belongings`
 */
type GetBelongingsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/belongings',
    'data',
    string,
    'orgId' | 'userId' | 'name' | 'roomId' | 'spaceId' | 'expirationStatus',
    false
  >
>

/**
 * 接口 获取物品列表 的 **请求配置**
 *
 * @分类 物品
 * @请求头 `GET /belongings`
 */
const getBelongingsRequestConfig: GetBelongingsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/belongings',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['orgId', 'userId', 'name', 'roomId', 'spaceId', 'expirationStatus'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getBelongings',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取物品列表 的 **请求函数**
 *
 * @分类 物品
 * @请求头 `GET /belongings`
 */
export const getBelongings = /*#__PURE__*/ (requestData: GetBelongingsRequest, ...args: UserRequestRestArgs) => {
  return request<GetBelongingsResponse>(prepare(getBelongingsRequestConfig, requestData), ...args)
}

getBelongings.requestConfig = getBelongingsRequestConfig

/**
 * 接口 创建物品 的 **请求类型**
 *
 * @分类 物品
 * @请求头 `POST /belongings`
 */
export interface PostBelongingsRequest {
  /**
   * 物品名称
   */
  name: string
  /**
   * 物品描述
   */
  desc?: string
  /**
   * 物品数量
   */
  count: number
  /**
   * 物品图片
   */
  pic?: string
  /**
   * 组织id
   */
  orgId: number
  /**
   * 空间路径
   */
  spacePath: string
  /**
   * 过期时间
   */
  expirationDate?: string
}

/**
 * 接口 创建物品 的 **返回类型**
 *
 * @分类 物品
 * @请求头 `POST /belongings`
 */
export interface PostBelongingsResponse {}

/**
 * 接口 创建物品 的 **请求配置的类型**
 *
 * @分类 物品
 * @请求头 `POST /belongings`
 */
type PostBelongingsRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/belongings', 'data', string, string, false>
>

/**
 * 接口 创建物品 的 **请求配置**
 *
 * @分类 物品
 * @请求头 `POST /belongings`
 */
const postBelongingsRequestConfig: PostBelongingsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/belongings',
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
  requestFunctionName: 'postBelongings',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建物品 的 **请求函数**
 *
 * @分类 物品
 * @请求头 `POST /belongings`
 */
export const postBelongings = /*#__PURE__*/ (requestData: PostBelongingsRequest, ...args: UserRequestRestArgs) => {
  return request<PostBelongingsResponse>(prepare(postBelongingsRequestConfig, requestData), ...args)
}

postBelongings.requestConfig = postBelongingsRequestConfig

/**
 * 接口 更新物品 的 **请求类型**
 *
 * @分类 物品
 * @请求头 `PUT /belongings`
 */
export interface PutBelongingsRequest {
  /**
   * 物品id
   */
  id: number
  /**
   * 物品名称
   */
  name: string
  /**
   * 物品描述
   */
  desc?: string
  /**
   * 物品数量
   */
  count: number
  /**
   * 物品图片
   */
  pic?: string
  /**
   * 组织id
   */
  orgId: number
  /**
   * 空间路径
   */
  spacePath: string
  /**
   * 过期时间
   */
  expirationDate?: string
}

/**
 * 接口 更新物品 的 **返回类型**
 *
 * @分类 物品
 * @请求头 `PUT /belongings`
 */
export type PutBelongingsResponse = any

/**
 * 接口 更新物品 的 **请求配置的类型**
 *
 * @分类 物品
 * @请求头 `PUT /belongings`
 */
type PutBelongingsRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/belongings', 'data', string, string, false>
>

/**
 * 接口 更新物品 的 **请求配置**
 *
 * @分类 物品
 * @请求头 `PUT /belongings`
 */
const putBelongingsRequestConfig: PutBelongingsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/belongings',
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
  requestFunctionName: 'putBelongings',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新物品 的 **请求函数**
 *
 * @分类 物品
 * @请求头 `PUT /belongings`
 */
export const putBelongings = /*#__PURE__*/ (requestData: PutBelongingsRequest, ...args: UserRequestRestArgs) => {
  return request<PutBelongingsResponse>(prepare(putBelongingsRequestConfig, requestData), ...args)
}

putBelongings.requestConfig = putBelongingsRequestConfig

/**
 * 接口 获取物品详情 的 **请求类型**
 *
 * @分类 物品
 * @请求头 `GET /belongings/{id}`
 */
export interface GetBelongingsIdRequest {
  /**
   * 物品id
   */
  id: string
}

/**
 * 接口 获取物品详情 的 **返回类型**
 *
 * @分类 物品
 * @请求头 `GET /belongings/{id}`
 */
export interface GetBelongingsIdResponse {
  /**
   * id
   */
  id: number
  /**
   * 物品名称
   */
  name: string
  /**
   * 物品描述
   */
  desc?: string
  /**
   * 物品数量
   */
  count: number
  /**
   * 物品图片
   */
  pic?: string
  /**
   * 组织id
   */
  orgId: number
  /**
   * 用户id
   */
  userId: number
  /**
   * 空间id
   */
  spaceId: number
  /**
   * 空间路径
   */
  spacePath: string
  /**
   * 过期时间
   */
  expirationDate: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 修改时间
   */
  updateTime: string
  /**
   * 房间id
   */
  roomId: number
}

/**
 * 接口 获取物品详情 的 **请求配置的类型**
 *
 * @分类 物品
 * @请求头 `GET /belongings/{id}`
 */
type GetBelongingsIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/belongings/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取物品详情 的 **请求配置**
 *
 * @分类 物品
 * @请求头 `GET /belongings/{id}`
 */
const getBelongingsIdRequestConfig: GetBelongingsIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/belongings/{id}',
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
  requestFunctionName: 'getBelongingsId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取物品详情 的 **请求函数**
 *
 * @分类 物品
 * @请求头 `GET /belongings/{id}`
 */
export const getBelongingsId = /*#__PURE__*/ (requestData: GetBelongingsIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetBelongingsIdResponse>(prepare(getBelongingsIdRequestConfig, requestData), ...args)
}

getBelongingsId.requestConfig = getBelongingsIdRequestConfig

/**
 * 接口 删除物品 的 **请求类型**
 *
 * @分类 物品
 * @请求头 `DELETE /belongings/{id}`
 */
export interface DeleteBelongingsIdRequest {
  /**
   * 物品id
   */
  id: string
}

/**
 * 接口 删除物品 的 **返回类型**
 *
 * @分类 物品
 * @请求头 `DELETE /belongings/{id}`
 */
export type DeleteBelongingsIdResponse = any

/**
 * 接口 删除物品 的 **请求配置的类型**
 *
 * @分类 物品
 * @请求头 `DELETE /belongings/{id}`
 */
type DeleteBelongingsIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/belongings/{id}', 'data', 'id', string, false>
>

/**
 * 接口 删除物品 的 **请求配置**
 *
 * @分类 物品
 * @请求头 `DELETE /belongings/{id}`
 */
const deleteBelongingsIdRequestConfig: DeleteBelongingsIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/belongings/{id}',
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
  requestFunctionName: 'deleteBelongingsId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除物品 的 **请求函数**
 *
 * @分类 物品
 * @请求头 `DELETE /belongings/{id}`
 */
export const deleteBelongingsId = /*#__PURE__*/ (
  requestData: DeleteBelongingsIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteBelongingsIdResponse>(prepare(deleteBelongingsIdRequestConfig, requestData), ...args)
}

deleteBelongingsId.requestConfig = deleteBelongingsIdRequestConfig

const mockUrl_0_0_0_6 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_6 = '' as any
const prodUrl_0_0_0_6 = '' as any
const dataKey_0_0_0_6 = 'data' as any

/**
 * 接口 创建反馈 的 **请求类型**
 *
 * @分类 反馈
 * @请求头 `POST /feedback`
 */
export interface PostFeedbackRequest {
  /**
   * 反馈类型
   */
  type: number
  /**
   * 反馈内容
   */
  content: string
}

/**
 * 接口 创建反馈 的 **返回类型**
 *
 * @分类 反馈
 * @请求头 `POST /feedback`
 */
export type PostFeedbackResponse = any

/**
 * 接口 创建反馈 的 **请求配置的类型**
 *
 * @分类 反馈
 * @请求头 `POST /feedback`
 */
type PostFeedbackRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/feedback', 'data', string, string, false>
>

/**
 * 接口 创建反馈 的 **请求配置**
 *
 * @分类 反馈
 * @请求头 `POST /feedback`
 */
const postFeedbackRequestConfig: PostFeedbackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/feedback',
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
  requestFunctionName: 'postFeedback',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建反馈 的 **请求函数**
 *
 * @分类 反馈
 * @请求头 `POST /feedback`
 */
export const postFeedback = /*#__PURE__*/ (requestData: PostFeedbackRequest, ...args: UserRequestRestArgs) => {
  return request<PostFeedbackResponse>(prepare(postFeedbackRequestConfig, requestData), ...args)
}

postFeedback.requestConfig = postFeedbackRequestConfig

/* prettier-ignore-end */
