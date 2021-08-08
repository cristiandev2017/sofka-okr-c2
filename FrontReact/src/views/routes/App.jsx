import React, { useEffect, useState } from "react";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//Selectors
import { getOkrs } from "./../../application/selectors/dashboard/okrs";
//Acciones
import { loadingOKR } from "../../application/actions/dashboard/index.js";

function App({ loadingOKR, okrs }) {
  const [idokr, setidokr] = useState("");

  useEffect(() => {
    loadingOKR();
  }, [loadingOKR]);
  return (
    <div>
      <div className="row">
        <center>
          <div className="col-2"></div>
          <div className="col-8">
            <h1>Mis OKRs</h1>
            <select
              style={{width:"320px", height:"35px"}}
              name="idokr"
              value={idokr}
              onChange={(e) => setidokr(e.target.value)}
            >
              {okrs.map((okr) => (
                <option value={okr.id} key={okr.id}>{okr.title}</option>
              ))}
            </select>
            <button className="btn btn-outline-warning">Ver info</button>
          </div>
          <div className="col-2"></div>
        </center>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loadingOKR,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    okrs: getOkrs(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
