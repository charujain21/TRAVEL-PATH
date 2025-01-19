// const express = require('express') //express se express ko require kar rahe hai
// const dotenv = require ('dotenv') //esko hum backend mai bhi use kar sakte hai, js ke es6 synatax se pahle require wala syntax the jisko backend ke liye use karte the,abhi hum import wala syntax use karege
//for import, package.json mai type module likhna padega after that import wala syntax use kar sakte hai tabhi se import wala syntax use kar sakte hai

import express from 'express';//express se express ko require kar rahe hai
import mongoose from 'mongoose';//mongoose ko require kar rahe hai
import dotenv from 'dotenv';//esko hum backend mai bhi use kar sakte hai, js ke es6 synatax se pahle require wala syntax the jisko backend ke liye use karte the,abhi hum import wala syntax use karege
import cors from 'cors'; //cors ko require kar rahe hai

import travelRoutes from './route/travel.route.js';//travel route ko import kiya hai
import userRoutes from './route/user.route.js';//user route ko import kiya hai
const app = express(); //express app create kar rahe hai

app.use(cors()); //cors ko use kar rahe hai, ye middleware hai jo cross origin request ko handle karta hai
app.use(express.json()); //express json ko use kar rahe hai, ye middleware hai jo data body se bhej rahe h usse json data mai parse karta hai 

dotenv.config(); //dotenv ko use kar rhe

const PORT=process.env.PORT || 4000; //agar .env mai jo port hai wo available nahi hai toh ye wale port pe server ko run karege
//upper port 4001 will run , install .env npm https://www.npmjs.com/package/dotenv
const URI=process.env.MONGODB_URI; //mongodb uri ko .env se fetch kar rahe hai and then install mongoose npm i mongoose

//connect to database mongodb
try {
  mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}


//defining routes
app.use("/travel",travelRoutes); //it mean agar /book pe request aayi toh bookRoutes wale routes chalege,
//when save then mongodb mai travelpath mai, travel folder create hoke mil jayega , jo ke model mai the
app.use("/user",userRoutes); //it mean agar /user pe request aayi toh userRoutes wale routes chalege  


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

// What is Axios?
// Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests