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