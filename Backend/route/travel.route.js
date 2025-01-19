import express from 'express';
//controller mai gettravel fn ko import kiya hai
import { getTravels } from '../controller/book.controller.js';

//express router yaha create krege
const router = express.Router();

router.get('/', getTravels); //it mean agar ye wale url pe get request aayi toh getTravels fn call hoga jo ki travel.controller.js mai hai
//ye upper api create kari h

export default router;
//after that index.js mai travel route ko import karege