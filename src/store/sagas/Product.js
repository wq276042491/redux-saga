import { call, put, takeLatest } from "redux-saga/effects"
import * as actions from "../actions/product"
import { getProductApi } from "../../api"
import * as types from "../types/product" 

export default function* watchFetchProductFlow () {
    // 参数1 想要拦截的action类型 (type)
    // 参数2 传入generator处理函数 
    yield takeLatest(types.FETCH_PRODUCT,getProductData)
}


function* getProductData () {
    // 正在发起请求 提交action通知reducer
    // put相当于dispatch
    yield put(actions.getProductReq())
    try {
        // call可以调用请求api
        let res = yield call(getProductApi, "蒙多")
        // 数据获取成功
        yield put(actions.getProductSuccess({data:res.data}))
        console.log(res);
    } catch (err) {
        err.e.toString()
        // 数据拉取失败
        yield put(actions.getProductFail({ err }))
    }
}