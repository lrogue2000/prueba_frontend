import UbicacionForm from "../components/UbicacionForm.js";
import Map from "../components/Map.js";
function HomePage(){

  async function agregarUbicacion(dataIngresada){
   const  response= await fetch('/api/new-location',{
     method: 'POST',
     body: JSON.stringify(dataIngresada),
     headers:{
       'Content-Type':'application/json'
     }
   });
   const data= await response.json();
   console.log(data);

  }

  return (<div>
    <UbicacionForm onAddUbicacion={agregarUbicacion}/>
    <Map/>
  </div>)
  
  
  
  
  
}
export default HomePage;