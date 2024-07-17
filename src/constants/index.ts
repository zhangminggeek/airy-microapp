export const PROJECT_NAME = 'airy';

export const YEAR_FORMAT = 'YYYY';

export const MONTH_FORMAT = 'YYYY-MM';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const TIME_FORMAT = 'HH:mm:ss';

export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

// 分页默认值
export const DEFAULT_PAGE_NUM = 1;
export const DEFAULT_PAGE_SIZE = 20;

// 云托管相关
export const CLOUD_ENV_ID = 'prod-1gc7fdtuac9b3c9f';
// OSS 域名
export const OSS_DOMAIN =
  'https://7072-prod-1gc7fdtuac9b3c9f-1327588381.tcb.qcloud.la';
// OSS 路径
export const OSS_PREFIX = process.env.OSS_ENV;
// OSS 上传文件路径
export const OSS_UPLOAD_DIR = `${OSS_PREFIX}/upload`;
// OSS 静态资源路径
export const OSS_ASSETS_DIR = `${OSS_PREFIX}/assets`;

export const TAB_PAGE = [
  '/pages/market/index/index',
  '/pages/requirement/index',
  '/pages/user/index/index',
];
