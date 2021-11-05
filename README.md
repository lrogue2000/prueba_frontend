This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Creacion css para el formulario de ubicacion
# crear la clase Ubicacion.module.css en components
.form {
    padding: 1rem;
  }
  
  .control {
    margin-bottom: 0.5rem;
  }
  
  .control label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .control input,
  .control textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
  
  .actions {
    margin-top: 1rem;
    text-align: right;
  }
  
  .actions button {
    font: inherit;
    cursor: pointer;
    background-color: #FFB533;
    color: black;
    padding: 0.5rem 1.5rem;
    border: 1px solid #FFB533;
    border-radius: 4px;
    font-weight: bold;
  }
  
  .actions button:hover,
  .actions button:active {
    background-color: #FFB533;
    border-color: #FFB533;
  }


  ## Creacion del componente UbicacionForm
  # Crear la clase UbicacionForm.js en components 
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

## Creacion de Api
# en carpeta api de pages crear new-location.js
import {MongoClient} from 'mongodb';

async function handler(req,res){

if (req.method == 'POST'){
    const data=req.body;
    const {provincia,canton,distrito,zipcode,direccion,longitud,latitud}=data;

  const client= await MongoClient.connect('mongodb+srv://lrogue:6QlmLGYuH9SrVvOj@cluster0.sbscl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  const db=client.db();
  const locationCollection=db.collection();
  const result= await locationCollection.insertOne(data);
  console.log(result);
  client.close();
  res.status(201).json({message:'ubicacion guardada'});
}


}
export default handler;

## Creacion index
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