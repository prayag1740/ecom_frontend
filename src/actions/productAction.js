import axios from "axios";
import { ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    GET_PRODUCT_URL,
    PRODUCT_DETAIL_URL,
    CLEAR_ERRORS } from "../constants/productContant";

axios.defaults.baseURL = 'http://localhost:8000';



export const getProduct = () => async (dispatch) => {
    try {
        dispatch({type: ALL_PRODUCT_REQUEST});

        const { data } = await axios.get(GET_PRODUCT_URL)
        
        dispatch({type:ALL_PRODUCT_SUCCESS, payload: data});


    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data
        })
    }
} 

export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST});

        const productUrl = PRODUCT_DETAIL_URL + id ;
        const { data } = await axios.get(productUrl)
        
        dispatch({type:PRODUCT_DETAILS_SUCCESS, payload: data});

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data
        })
    }
} 

//clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
};