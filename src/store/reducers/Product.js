import { FETCH_PRODUCT_REQ, FETCH_PRODUCT_SUCCESS } from "../types/product"

let defaultState = {
    isFerching: true,
    data:[],
    err:null
}

export default (state = defaultState, action) => {
    let { type, payload } = action
    switch (type) {
        case "FETCH_PRODUCT_REQ":
            return Object.assign({}, state, {
                isFerching:true
            })
        case "FETCH_PRODUCT_SUCCESS":
            return Object.assign({}, state, {
                isFerching: false,
                data:payload.data
            })
        case "FETCH_PRODUCT_FAIL":
            return Object.assign({}, state, {
                isFerching: false,
                data:[],
                err:payload.err
            })
        
        default:
            return {...state}
            
    }
}