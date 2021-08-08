//Importo las constantes
import {OKRConstanst} from '../../types/dashboard/constants';

//Exporto los types y sus payload
export const loadingOKR = () =>({
    type: OKRConstanst.LIST_OKRS
});

export const loadingOKRSuccess = (okrs) =>({
    type: OKRConstanst.LIST_OKRS_SUCCESS,
    payload: okrs
});

export const loadingOKRFailure = (error) =>({
    type: OKRConstanst.LIST_OKRS_FAILURE,
    payload:error
})