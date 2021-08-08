import {OKRConstanst} from "../../types/dashboard/constants";

const initialState ={
    OKR:[],
    error:null,
    loading:false
};

const dashboardReducer = (state=initialState,action) =>{
    switch (action.type) {
        case OKRConstanst.LIST_OKRS:
            return{...state,loading:true};
        case OKRConstanst.LIST_OKRS_SUCCESS:
            return{...state,loading:false, OKR:action.payload};
        case OKRConstanst.LIST_OKRS_FAILURE:
            return{...state,loading:false,error:action.payload};
        default:
            return state;
    }
}

export default dashboardReducer;