import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import {
    productCreateReducer,
    productDeleteReducer,
    productListReducer, productReviewCreateReducer, productTopRatedReducer,
    productUpdateReducer
} from "./reducers/productReducers";
import { productDetailsReducer } from "./reducers/productDetailsReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
    userDeleteReducer,
    userDetailsReducer, userListReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer, userUpdateReducer
} from "./reducers/userReducers";

import {
    orderCreateReducer, orderDeliverReducer,
    orderDetailsReducer,
    orderListMyReducer, orderListReducer,
    orderPayReducer
} from "./reducers/orderReducers";


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    orderDeliver: orderDeliverReducer,
    orderList: orderListReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {}

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage
    },
    userLogin: {userInfo : userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store