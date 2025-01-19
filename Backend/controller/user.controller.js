//sabase pahle model ko import karege , bcoz data hume usse mai store karwaana hai
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"; //bcryptjs ko import kiya hai
//by that pahle travel ka collection bana the database mai , abb users ka banayenge by it.

//1st fn we cretae singnup,  in that hume name, emailid and password chahiye honge jo postman mai user mai bodyy m raw m likha hai
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body; //req.body se data fetch kiya hai
    const user = await User.findOne({email}); //user.findOne se email ko find kiya hai
    if(user){
      return res.status(400).json({message:"User already exists"}); //if user already exists then return this message
    }

    //createdUser variable hoga jisme data ko store karege
    const hashPassword = await bcryptjs.hash(password,10)//yaha apne password ko hash karege, 10  something kuch differ val aa jayege in mongodb password show
    const createdUser = new User({
         fullname:fullname,
         email:email,
         password:hashPassword,
         }); //new user create kiya hai, iss data ko parse karna padega json format mai in index.

         await createdUser.save(); //data ko save kiya hai
         res.status(201).json({message:"User created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
         }
         }); //response send kiya hai
  } catch (error) {
    console.log("Error in signup" + error.message);
    res.status(500).json({message:"Something went wrong"}); //if any error occurs then this message will be shown
  }
}

//asynchrous fn jaha use karege async await use karege, jbb hume data fetch karna hoga database se, ye in asynchronus fn ko synchronus way mai perform karwa paayege
export const login = async(req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!user || !isMatch) {
          return res.status(400).json({ message: "Invalid username or password" });
      } else {
          res.status(200).json({
              message: "Login successful",
              user: {
                  _id: user._id, //left wla user is from database and right wala user is from database matching
                  fullname: user.fullname,
                  email: user.email,
              },
          });
      }
  } catch (error) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
  }
};