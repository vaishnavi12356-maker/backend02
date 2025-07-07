  
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors(
    {
       origin: process.env.CORS_ORIGIN ,
       credentials: true
    }
))
//data preparation setting
app.use(express.json({limit: "16kb"})) //data from form
//datafrom url
app.use(express.urlencoded({extended: true, limit: "16kb"}))//giving extendend object
app.use(express.static("public"))//publicasset
//access the user cookie and set the cookies
//securing some cookies
app.use(cookieParser());
//export default app;

//routes import
import userRouter from './routes/user.routes.js'

//rotutes declaration

app.use("/api/v1/users", userRouter)
//http://localhost:8000/users/register
export { app }
//app.use()== middleware or configration setting