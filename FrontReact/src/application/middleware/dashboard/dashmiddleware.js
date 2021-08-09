import{
    loadingOKRSuccess,
    loadingOKRFailure,
    loadingOKRidSuccess,
    loadingOKRidFailure
} from '../../actions/dashboard/index';
import {OKRConstanst} from '../../types/dashboard/constants';


const loadingOKRFlow = ({api}) => ({dispatch}) => next => async(action) =>{
    next(action);
    if(action.type === OKRConstanst.LIST_OKRS){
        try {
            const okrs = await api.dashboard.loadingOKR()
            dispatch(loadingOKRSuccess(okrs))
        } catch (error) {
            dispatch(loadingOKRFailure(error))       
        }
    }
}

const loadingOKRidFlow = ({api}) => ({dispatch}) => next => async(action) =>{
    next(action);
    if(action.type === OKRConstanst.LIST_OKRS_ID){
        try {
            const okr = await api.dashboard.loadingOKRid(action.payload)
            dispatch(loadingOKRidSuccess(okr))
        } catch (error) {
            dispatch(loadingOKRidFailure(error))       
        }
    }
}

const middlewareOKRs = [
  loadingOKRFlow, 
  loadingOKRidFlow
]

export default middlewareOKRs