import http from 'http'
import { app } from './app'
import mongoose from 'mongoose'
const DBNAME=process.env.DBNAME || "bags"
const MONGO_URL=process.env.MONGO_URL || "mongodb+srv://kranthi8919:Ty8zsr7nH4bPWqcm@cluster0.utb5jtq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
 || `mongodb://localhost:27017/${DBNAME}`
const PORT=process.env.PORT || 4000
const start=async()=>{
try{
  await mongoose.connect(MONGO_URL)
}catch(err){
    console.log("❌❌ AN Error Occured,",err);
}
http.createServer(app).listen(PORT,()=>{
    console.log(`✅✅ Running on http://localhost:${PORT}/docs`);
    
})
}
start()
