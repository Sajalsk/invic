import mongoose from "mongoose";
const mongoURI = "mongodb://localhost:27017";

const ConnectMongo=()=>{
        mongoose.connect(mongoURI,()=>{
            console.log("Connected Mongodb Succesfully");
        })
} 

export default ConnectMongo;