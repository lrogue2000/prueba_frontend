import UbicacionForm from "../components/UbicacionForm.js";

function HomePage(){

  function agregarUbicacion(test){
    console.log(test);
  }

  return <UbicacionForm onAddUbicacion={agregarUbicacion}/>
}
export default HomePage;