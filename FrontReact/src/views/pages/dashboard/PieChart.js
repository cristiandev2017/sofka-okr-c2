import React,{useState, useEffect} from 'react'
import { Pie } from 'react-chartjs-2'

function PieChart(){
  //const semanas, 

  //CONFIGURACION DE PARAMETROS DE LA GRAFICA
  const data={
    //PARAMETROS A COMPARAR
    labels:['kr1','kr2','kr3','kr4'],
    //PORCENTAJE DE CUMPLIMIENTO kRS 
    datasets:[{
      data:[20.5, 5.5, 18.6, 33.3],
      backgroundColor:['rgba(255,0,0.6)', 'rgba(100,025,0.1)', 'rgba(180,105,0.1)', 'rgba(100,155,0.1)'],
     
    }]
  };
  const opciones={
    responsive: true
  }
//   const peticionApi= async()=>{
//     await axios.get('URL peticion')
//     .then(response=>{
//       console.log(response.data);
//     })
//   }
//   useEffect(()=>{
//     peticionApi();
//   },[])
  return (
    <div className="PieChart"style={{width:"80%"}}>
      <Pie data={data} options={opciones}/>
    </div>
  );
  

}
export default PieChart;