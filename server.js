import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connecDB from "./config/db.config.js"
import errorHandler from "./middleware/error.middlware.js"

const app=express();
//database
connecDB()

//middleare
app.use(express.json())

//route
// app.use('/api/pastes',routePastes)

//error handler
app.use(errorHandler)
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})