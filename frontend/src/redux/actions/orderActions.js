import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_ID_FAILURE
} from "../constants/orderActions.js";

import { api } from "../../config/apiConfig.js"



export const createOrder = (reqData) => async(dispatch)=> {
    dispatch({type: CREATE_ORDER_REQUEST});
    try {
      
        const {data} = await api.post(`/api/orders/`, reqData.address);

        console.log("console loging the data ",data);

        if(data._id){   
            reqData.navigate({search: `step=3&order_id=${data._id}`});
        }

        console.log("created order -", data);
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data,
        });
        
    } catch (error) {
        console.log("catch error : ",error);
        dispatch({
            type:CREATE_ORDER_FAILURE,
            payload:error.message,
        });
    }
};

export const getOrderById = (orderId) => async (dispatch) =>{
    try {
        dispatch({type:GET_ORDER_BY_ID_REQUEST});

        const {data} = await api.get(
            `/api/orders/${orderId}`
        );
        console.log("order by Id ", data);
        dispatch({
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type:GET_ORDER_BY_ID_FAILURE,
            payload:error.message
        });
    }
};

