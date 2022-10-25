import express from 'express';
import { deleteStadium, getStadium, getStadiums, updateStadium, createStadium} from '../controllers/stadium.js';

const router = express.Router();
//CREATE
router.post("/", createStadium)

//GET STADIUMS
router.get("/", getStadiums)

//GET STADIUM BY ID
router.get("/:id", getStadium);

//DELETE
router.delete("/:id", deleteStadium);

//UPDATE
router.put("/:id", updateStadium);


export default router;