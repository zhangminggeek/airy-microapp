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
 * 接口 创建账号 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `POST /account`
 */
export interface PostAccountRequest {
  /**
   * 账号
   */
  account: string
  /**
   * 密码（明文）
   */
  password?: string
  /**
   * 盐值
   */
  salt?: string
  /**
   * 微信用户唯一标识
   */
  openid?: string
}

/**
 * 接口 创建账号 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `POST /account`
 */
export type PostAccountResponse = number

/**
 * 接口 创建账号 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `POST /account`
 */
type PostAccountRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account', 'data', string, string, false>
>

/**
 * 接口 创建账号 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `POST /account`
 */
const postAccountRequestConfig: PostAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account',
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
  requestFunctionName: 'postAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建账号 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `POST /account`
 */
export const postAccount = /*#__PURE__*/ (requestData: PostAccountRequest, ...args: UserRequestRestArgs) => {
  return request<PostAccountResponse>(prepare(postAccountRequestConfig, requestData), ...args)
}

postAccount.requestConfig = postAccountRequestConfig

/**
 * 接口 删除账号 的 **请求类型**
 *
 * @分类 账号
 * @请求头 `DELETE /account`
 */
export interface DeleteAccountRequest {
  /**
   * 账号id
   */
  id: string
}

/**
 * 接口 删除账号 的 **返回类型**
 *
 * @分类 账号
 * @请求头 `DELETE /account`
 */
export type DeleteAccountResponse = any

/**
 * 接口 删除账号 的 **请求配置的类型**
 *
 * @分类 账号
 * @请求头 `DELETE /account`
 */
type DeleteAccountRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/account', 'data', string, 'id', false>
>

/**
 * 接口 删除账号 的 **请求配置**
 *
 * @分类 账号
 * @请求头 `DELETE /account`
 */
const deleteAccountRequestConfig: DeleteAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/account',
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
  requestFunctionName: 'deleteAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除账号 的 **请求函数**
 *
 * @分类 账号
 * @请求头 `DELETE /account`
 */
export const deleteAccount = /*#__PURE__*/ (requestData: DeleteAccountRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteAccountResponse>(prepare(deleteAccountRequestConfig, requestData), ...args)
}

deleteAccount.requestConfig = deleteAccountRequestConfig

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
export type PostAccountLoginResponse = any

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
  responseBodyType: ResponseBodyType.raw,
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

/* prettier-ignore-end */
