import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router() //app

router.route("/register").post(registerUser)
//router.route("/login").post(registerUser)


//user router transfer the controller which router ?

export default router