// 当前这个模块，API进行统一管理
import requests from "./request";
import mockAjax from './mockAjax'

// 三级联动的接口
// /api/product/getBaseCategoryList  get  无参数
// 发请求,axios发请求返回结果是Promise对象
export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}

export const reqGetBannerList = () => {
    return mockAjax({ url: '/banner', method: 'get' });
}