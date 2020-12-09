import * as types from "../types/product"

const createAction = type => payload => ({ type, payload })

// 关于product的action

// 发起请求
const getProduct = createAction(types.FETCH_PRODUCT)
// 正在获取购物车商品
const getProductReq = createAction(types.FETCH_PRODUCT_REQ)
// 获取购物车商品成功
const getProductSuccess = createAction(types.FETCH_PRODUCT_SUCCESS)
// 获取购物车商品失败
const getProductFail = createAction(types.FETCH_PRODUCT_FAIL)
// 添加到购物车
const addTocart = createAction(types.ADD_TO_CART)

