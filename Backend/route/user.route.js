//route define karne ke liye , hamare pass hona chahiye express
import express from "express";
import {login, signup} from "../controller/user.controller.js"; //controller se signup fn ko import kiya hai
const router= express.Router();

//post request pe signup fn ko call karege and used when we send data
router.post("/signup",signup); //signup fn ko call kiya hai
router.post("/login",login); //login fn ko call kiya hai

export default router;