import React, {useEffect} from 'react'
//Redux
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//Selectors
//import { getOkrs } from './../../application/selectors/dashboard/okrs';
//Acciones
import {loadingOKR} from '../../application/actions/dashboard/index.js' 

function App({loadingOKR}) {
    useEffect(()=>{
        loadingOKR()
    },[loadingOKR]);
    return (
        <div>
            <h1>Componente de APP</h1>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    loadingOKR
    },dispatch)
}

export default connect (null,mapDispatchToProps)(App);
//export default App
