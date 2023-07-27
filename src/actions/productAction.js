import axios from "axios";
import { ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    ALL_PRODUCT_FAIL,
    GET_PRODUCT_URL,
    CLEAR_ERRORS } from "../constants/productContant";

axios.defaults.baseURL = 'http://localhost:8000';



export const getProduct = () => async (dispatch) => {
    try {
        dispatch({type: ALL_PRODUCT_REQUEST});

        const { data } = await axios.get(GET_PRODUCT_URL)
        
        dispatch({type:ALL_PRODUCT_SUCCESS, payload: data});


    } catch (error) {
        console.log("hellloo")
        console.log(error)
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response
        })
    }
} 

//clear erros

export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
};