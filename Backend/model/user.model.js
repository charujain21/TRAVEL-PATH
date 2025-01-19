import mongoose from "mongoose";//schmeema define krne ke liye mongoose import kiya hai


const userSchema = new mongoose.Schema({//schema define kiya hai user ka 
 fullname:{
    type:String,
    required:true
 },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
});
const User = mongoose.model("User", userSchema);//schema ko model mai convert kiya hai
export default User;//export kiya hai user ko