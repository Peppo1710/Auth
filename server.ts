import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { Request , Response } from 'express';
import morgan from "morgan";
import "dotenv/config";

const PORT = process.env.PORT || 3000;


const app = express();
// Express.json parses the JSON into Javascript understandable object and thats how we able to use req.body
app.use(express.json({ limit: "10kb" }));

//It saves us from injection attack but primary level one things like malicius data stealing from frontend .
app.use(helmet)

//It allows only mentioned URLS or servers to access api of this servers
app.use(cors())

app.use(morgan("dev"));

app.use((err:any,req :Request,res:Response,next:any)=>
    {
        console.log(err);
        res.status(500).json("Internal Server issue")
        
    })
    
app.listen(PORT,()=>{
    console.log("Testing")
    
})