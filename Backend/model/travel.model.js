import mongoose from "mongoose";

//database schema
const travelSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image:String,
  title:String
});

//schema jo uper create kiya hai wo model mai convert kar rahe hai
//it mean travelSchema mai jo data hai wo Travel model mai collect ho raha hai
const Travel = mongoose.model("Travel", travelSchema); //ye model mongo db mai travel collection mai save hoga , and travels , s automatically mongoose add kar leta hai

export default Travel;
