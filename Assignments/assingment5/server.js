import express from  'express'
import cors from 'cors'
const app = express();

app.use (cors())
application.use("/files",express.static("files"));
app.listen(5000,()=>{
    console.log("Server running on 5000");
})