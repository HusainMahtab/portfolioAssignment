import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import dbConnection from "./db/dbConnection.js"
const app=express()
dotenv.config({
    path:"./.env"
})

app.use(
    cors({
      origin:['http://localhost:5173',"https://mahtab-husain-pf.onrender.com"], 
      credentials: true, // Allow cookies and credentials
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Ensure headers are allowed
    })
  );
// Handle OPTIONS preflight requests
app.options('*', cors());

const port =process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`app is live at port:${port}`)
})
dbConnection()

app.use(express.json({ limit: "16mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16mb" }));

// import user routes
import {router} from "./routes/user.routes.js"
app.use("/api/v1/users",router)

// import project routes
import project_router from "./routes/project.routes.js"
app.use("/api/v1/projects",project_router)

// import message routes
import user_messages from "./routes/userMessage.routes.js"
app.use("/api/v1/message",user_messages)

