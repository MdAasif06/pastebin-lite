import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connecDB from "./config/db.config.js"
import errorHandler from "./middleware/error.middlware.js"
import routePastes from './routes/paste.route.js'
const app=express();
//database
connecDB()

//middleare
app.use(express.json())
//error handler
app.use(errorHandler)

//route
app.use('/api/pastes',routePastes)

app.get('/',(req,res)=>{
  res.status(200).json({status:"Welcome to pastebin backend"})
})
app.get("/health", (req, res) => {
  res.status(200).json({ status: "health route working good" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})