import { useRef } from 'react';


import classes from './Ubicacion.module.css';

function UbicacionForm(props) {
  const provinciaRef = useRef();
  const cantonRef = useRef();
  const distritoRef = useRef();
  const codeRef = useRef();
  const direccionRef = useRef();
 const longitudRef = useRef();
 const latitudRef = useRef();

  function salvarUbicacion(event) {
    event.preventDefault();

    const provinciaIngresada = provinciaRef.current.value;
    const cantonIngresado = cantonRef.current.value;
    const distritoingresado = direccionRef.current.value;
    const codigoIngresado = codeRef.current.value;
    const direccionIngresada = direccionRef.current.value;
    const longitudIngresada = longitudRef.current.value;
    const latitudIngresada = latitudRef.current.value;

    const UbicacionDatos = {
      provincia: provinciaIngresada,
      canton: cantonIngresado,
      distrito: distritoingresado,
      zipcode: codigoIngresado,
      direccion: direccionIngresada,
      longitud: longitudIngresada,
      latitud: latitudIngresada,

    };

    props.onAddUbicacion(UbicacionDatos);
  }

  return (
      
      <form className={classes.form} onSubmit={salvarUbicacion}>
        <div className={classes.control}>
          <label htmlFor='provincia'>Provincia</label>
          <input type='text' required id='provincia' ref={provinciaRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='canton'>Canton</label>
          <input type='text' required id='canton' ref={cantonRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='distrito'>Distrito</label>
          <input type='text' required id='distrito' ref={distritoRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='code'>ZipCode</label>
          <input type='number' required id='code' ref={codeRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='direccion'>Direccion</label>
          <input type='text' required id='direccion' ref={direccionRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='longitud'>Longitud</label>
          <input type='number' required id='longitud' ref={longitudRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='latitud'>Latitud</label>
          <input type='number' required id='latitud' ref={latitudRef} />
        </div>
        
        <div className={classes.actions}>
          <button>Salvar Ubicacion </button>
        </div>
      </form>

      
  
  );
 
}

export default UbicacionForm;
