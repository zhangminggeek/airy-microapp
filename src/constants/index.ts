export const PROJECT_NAME = 'airy';

export const YEAR_FORMAT = 'YYYY';

export const MONTH_FORMAT = 'YYYY-MM';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const TIME_FORMAT = 'HH:mm:ss';

export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

// 分页默认值
export const DEFAULT_PAGE_NUM = 1;
export const DEFAULT_PAGE_SIZE = 20;

// OSS 路径
export const OSS_PREFIX = `https://front.jiuworker.com/${PROJECT_NAME}/${process.env.OSS_ENV}`;
// OSS superKey
export const OSS_SUPER_KEY = 'upload';

export const TAB_PAGE = [
  '/pages/market/index/index',
  '/pages/requirement/index',
  '/pages/user/index/index',
];
