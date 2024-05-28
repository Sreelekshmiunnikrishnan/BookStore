import express from "express"
import {PORT,MongoDBURL} from "./config.js"
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();
//Middleware for parsing request body
app.use(express.json());
//Middleware for handling CORS policy
//option 1:allow all origins with default CORS
app.use(cors());
//option 2:allow custom origins
//app.use(cors({
  //origin:"http://localhost:3000",
  //methods:['GET','POST','PUT','DELETE'],
//allowedHeaders:['Content-type'],
//}))


app.use('/books',bookRoutes);
mongoose.connect(MongoDBURL).then(() =>{
  console.log("App connected to database");
app.listen(PORT || 3002, () => {
  console.log(`App is  listening on port ${PORT}`);
});


}).catch((error) =>{
    console.log(error);
})
