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
 * 接口 获取公司列表 的 **请求类型**
 *
 * @分类 公司
 * @请求头 `GET /company`
 */
export interface GetCompanyRequest {}

/**
 * 接口 获取公司列表 的 **返回类型**
 *
 * @分类 公司
 * @请求头 `GET /company`
 */
export interface GetCompanyResponse {
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
   * 公司
   */
  company: string
}

/**
 * 接口 获取公司列表 的 **请求配置的类型**
 *
 * @分类 公司
 * @请求头 `GET /company`
 */
type GetCompanyRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company', 'data', string, string, true>
>

/**
 * 接口 获取公司列表 的 **请求配置**
 *
 * @分类 公司
 * @请求头 `GET /company`
 */
const getCompanyRequestConfig: GetCompanyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/company',
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
  requestFunctionName: 'getCompany',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取公司列表 的 **请求函数**
 *
 * @分类 公司
 * @请求头 `GET /company`
 */
export const getCompany = /*#__PURE__*/ (requestData?: GetCompanyRequest, ...args: UserRequestRestArgs) => {
  return request<GetCompanyResponse>(prepare(getCompanyRequestConfig, requestData), ...args)
}

getCompany.requestConfig = getCompanyRequestConfig

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
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/company',
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
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/company',
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
 * 接口 获取公司信息 的 **请求类型**
 *
 * @分类 公司
 * @请求头 `GET /company/{id}`
 */
export interface GetCompanyIdRequest {
  /**
   * 公司id
   */
  id: string
}

/**
 * 接口 获取公司信息 的 **返回类型**
 *
 * @分类 公司
 * @请求头 `GET /company/{id}`
 */
export interface GetCompanyIdResponse {
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
   * 公司
   */
  company: string
}

/**
 * 接口 获取公司信息 的 **请求配置的类型**
 *
 * @分类 公司
 * @请求头 `GET /company/{id}`
 */
type GetCompanyIdRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/company/{id}', 'data', 'id', string, false>
>

/**
 * 接口 获取公司信息 的 **请求配置**
 *
 * @分类 公司
 * @请求头 `GET /company/{id}`
 */
const getCompanyIdRequestConfig: GetCompanyIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/company/{id}',
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
  requestFunctionName: 'getCompanyId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取公司信息 的 **请求函数**
 *
 * @分类 公司
 * @请求头 `GET /company/{id}`
 */
export const getCompanyId = /*#__PURE__*/ (requestData: GetCompanyIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetCompanyIdResponse>(prepare(getCompanyIdRequestConfig, requestData), ...args)
}

getCompanyId.requestConfig = getCompanyIdRequestConfig

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
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/company/register',
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
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/company/audit',
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

const mockUrl_0_0_0_2 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_2 = '' as any
const prodUrl_0_0_0_2 = '' as any
const dataKey_0_0_0_2 = 'data' as any

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
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/user',
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
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/user',
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
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/user',
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
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/user',
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
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/user/self',
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
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/user/{id}',
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

const mockUrl_0_0_0_3 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_3 = '' as any
const prodUrl_0_0_0_3 = '' as any
const dataKey_0_0_0_3 = 'data' as any

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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account',
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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/register/code/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/register/code/check',
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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/salt',
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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/salt/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
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
 * 接口 登录 的 **请求类型**
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
 * 接口 登录 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login`
 */
export type PostAccountLoginResponse = string

/**
 * 接口 登录 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login`
 */
type PostAccountLoginRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account/login', 'data', string, string, false>
>

/**
 * 接口 登录 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `POST /account/login`
 */
const postAccountLoginRequestConfig: PostAccountLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/login',
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
  requestFunctionName: 'postAccountLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 登录 的 **请求函数**
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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/login/code/{account}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
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
export type PostAccountLoginCodeResponse = string

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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/login/code',
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
 * 接口 微信授权登录 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `POST /account/login/wechat`
 */
export interface PostAccountLoginWechatRequest {
  /**
   * 微信获取手机号接口code
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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/login/wechat',
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
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account/{id}',
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

const mockUrl_0_0_0_4 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_4 = '' as any
const prodUrl_0_0_0_4 = '' as any
const dataKey_0_0_0_4 = 'data' as any

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
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/role',
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
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/role',
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
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/role',
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
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/role',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_4,
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
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/role/{id}',
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

const mockUrl_0_0_0_5 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_5 = '' as any
const prodUrl_0_0_0_5 = '' as any
const dataKey_0_0_0_5 = 'data' as any

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
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/address',
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
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/address',
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
   * 省编码
   */
  province?: string
  /**
   * 市编码
   */
  city?: string
  /**
   * 区编码
   */
  area?: string
  /**
   * 地址
   */
  address?: string
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
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/address',
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
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/address/{id}',
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
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/address/{id}',
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

const mockUrl_0_0_0_6 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_6 = '' as any
const prodUrl_0_0_0_6 = '' as any
const dataKey_0_0_0_6 = 'data' as any

/**
 * 接口 获取服饰列表 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
export interface GetProductRequest {}

/**
 * 接口 获取服饰列表 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
export interface GetProductResponse {
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
   * 服饰
   */
  product: string
}

/**
 * 接口 获取服饰列表 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
type GetProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product', 'data', string, string, true>
>

/**
 * 接口 获取服饰列表 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `GET /product`
 */
const getProductRequestConfig: GetProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product',
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
  requestFunctionName: 'getProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取服饰列表 的 **请求函数**
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
   * 服饰颜色
   */
  color: string
  /**
   * 服饰材质
   */
  materialId: number
  /**
   * 服饰图片
   */
  picList: string[]
  /**
   * 库存信息
   */
  inventoryList: {
    /**
     * 服饰id
     */
    productId: number
    /**
     * 服饰尺码
     */
    size: string
    /**
     * 服饰数量
     */
    count: number
  }[]
  /**
   * 服饰标签
   */
  tagIdList?: number[]
  /**
   * 描述
   */
  desc?: string
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
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product',
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
   * 服饰id
   */
  id: number
  /**
   * 服饰
   */
  product: string
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
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product',
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
 * 接口 删除服饰 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `DELETE /product`
 */
export interface DeleteProductRequest {
  /**
   * 服饰id
   */
  id: string
}

/**
 * 接口 删除服饰 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `DELETE /product`
 */
export type DeleteProductResponse = any

/**
 * 接口 删除服饰 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `DELETE /product`
 */
type DeleteProductRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product', 'data', string, 'id', false>
>

/**
 * 接口 删除服饰 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `DELETE /product`
 */
const deleteProductRequestConfig: DeleteProductRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteProduct',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除服饰 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `DELETE /product`
 */
export const deleteProduct = /*#__PURE__*/ (requestData: DeleteProductRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteProductResponse>(prepare(deleteProductRequestConfig, requestData), ...args)
}

deleteProduct.requestConfig = deleteProductRequestConfig

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
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product/type',
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
 * 接口 获取服饰尺码选项 的 **请求类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/size/option`
 */
export interface GetProductSizeOptionRequest {}

/**
 * 接口 获取服饰尺码选项 的 **返回类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/size/option`
 */
export type GetProductSizeOptionResponse = {
  /**
   * 尺码id
   */
  id: number
  /**
   * 尺码
   */
  name: string
}[]

/**
 * 接口 获取服饰尺码选项 的 **请求配置的类型**
 *
 * @分类 服饰
 * @请求头 `GET /product/size/option`
 */
type GetProductSizeOptionRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/product/size/option', 'data', string, string, true>
>

/**
 * 接口 获取服饰尺码选项 的 **请求配置**
 *
 * @分类 服饰
 * @请求头 `GET /product/size/option`
 */
const getProductSizeOptionRequestConfig: GetProductSizeOptionRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product/size/option',
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
  requestFunctionName: 'getProductSizeOption',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取服饰尺码选项 的 **请求函数**
 *
 * @分类 服饰
 * @请求头 `GET /product/size/option`
 */
export const getProductSizeOption = /*#__PURE__*/ (
  requestData?: GetProductSizeOptionRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetProductSizeOptionResponse>(prepare(getProductSizeOptionRequestConfig, requestData), ...args)
}

getProductSizeOption.requestConfig = getProductSizeOptionRequestConfig

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
   * 产品类型编码
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
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product/field',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
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
   * 产品类型编码
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
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product/field/option',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
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
   * 服饰
   */
  product: string
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
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/product/{id}',
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

const mockUrl_0_0_0_7 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_7 = '' as any
const prodUrl_0_0_0_7 = '' as any
const dataKey_0_0_0_7 = 'data' as any

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
   * 用途, 1:产品标签
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
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/tag',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
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

/* prettier-ignore-end */
