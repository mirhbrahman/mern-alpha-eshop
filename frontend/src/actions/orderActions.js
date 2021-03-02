import axios from "axios";
import {ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState)=>{
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post('/api/orders', order, config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

    }catch (e) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        })
    }
}