import React, {Fragment} from "react";
//Circular Progressbar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Okruser({ okr }) {
  //Valido que vengan los datos
  let title = "";
  let objetivo = "";
  let description = "";
  let areainCharge = "";
  let progress = 0;
  if (okr !== null) {
    progress = okr[0].progress;
    title = okr[0].title;
    description = okr[0].description;
    areainCharge = okr[0].areainCharge;
    objetivo = okr[0].objetivo;
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
                  <th scope="col">#</th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Area encargada</th>
                  <th scope="col">objetivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{areainCharge}</td>
                  <td>{objetivo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        "Seleccione un OKR"
      )}
    </Fragment>
  );
}

export default Okruser;
