import React, {Fragment} from "react";
//Circular Progressbar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PieChart from "./PieChart";

function Okruser({ okr }) {
  //Valido que vengan los datos
  let title = "";
  let objective = "";
  let description = "";
  let areaInCharge = "";
  let progress = 0;
  if (okr !== null) {
    progress = okr.progress;
    title = okr.title;
    description = okr.description;
    areaInCharge = okr.areaInCharge;
    objective = okr.objective;
    console.log(progress);
  }
  return (
     <Fragment>
      {okr ? (
        <div>
          <div style={{ width: "16%" }}>
            <CircularProgressbar value={progress} text={`${progress}%`} />
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Area encargada</th>
                  <th scope="col">objetivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{areaInCharge}</td>
                  <td>{objective}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PieChart/>
        </div>
      ) : (
        "Seleccione un OKR"
      )}
    </Fragment>
  );
}

export default Okruser;
