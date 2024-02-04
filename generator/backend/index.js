import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import authRoute from "./routes/auth.js";

// dotenv file

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Setting up the cors;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};


//Database connection

// ConnectMongo();

mongoose.set("strictQuery", false);

const connect = async () => {
  
  try {
    await mongoose.connect(process.env.MONGO_URI , {
    //   useNewUrlParser: "true",
    //   useUnifiedTopology: "true"
    });  
    console.log("Connected to Database Successfully");
  } catch (err) {
    console.log(err);
    console.log("Failure Detected in Connection to Database");
  }
};

// Middleware

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());


// Routes to be define


app.get("/",(req,res)=>{
  res.json("Postman is working properly from backend");
});

app.use("/api/v1/auth", authRoute );

app.listen(port, () => {
  connect();
  // console.log(process.env.MONGO_URI);
  console.log("Server Listening on Port", port);
});

