//1st model chahiye hoga model folder se, ye model chahiye hoga bcoz uss me humne apni data ka structure define kiya hoga
import Travel from "../model/travel.model.js";

//2nd controller chahiye hoga controller folder se, ye controller chahiye hoga bcoz uss me humne apni data ka logic define kiya hoga
//fn create kiya hai jisme humne travel model se data fetch kiya hai, try catch mai error handle kiya hai
//async await use jise asynchronus operation ko handle kiya ja sake, in synchronus way(bcoz db pe data send, fetch karte time , time lagega.so, hum chahhte hai tbb tk hmare fn ka execution pause rahe , jb tkk response naa aa jaye)
export const getTravels = async (req, res) => {
  try {
    const travels = await Travel.find(); //data find karege , agar mil jata hai toh response send karege
    res.status(200).json(travels);
  } catch (error) {
    console.log("Error in getTravels", error);
    res.status(500).json(error);
  }
};