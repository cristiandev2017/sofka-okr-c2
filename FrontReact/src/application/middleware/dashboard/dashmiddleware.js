import{
    loadingOKRSuccess,
    loadingOKRFailure,
    loadingOKR,
} from '../../actions/dashboard/index';
import {OKRConstanst} from '../../types/dashboard/constants';


const loadingOKRFlow = ({api}) => ({dispatch}) => next => async(action) =>{
    next(action);
    if(action.type === OKRConstanst.LIST_OKRS){
        try {
            const okrs = await api.dashboard.loadingOKR()
            dispatch(loadingOKRSuccess(okrs))
        } catch (error) {
            console.log("Llege muy lejos pero tengo un error",error)
            dispatch(loadingOKRFailure(error))       
        }
    }
}

const middlewareOKRs = [
  loadingOKRFlow, 
]

export default middlewareOKRs