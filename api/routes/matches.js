import express from 'express';
import Match from "../models/Match.js"
import {createError} from "./utils/error.js"
import {createMatch, deleteMatch, getMatch, getMatches, updateMatch} from "../controllers/match.js"
import { verifyAdmin } from './utils/verifyToken.js';
const router = express.Router();

// router.get("/", (req,res) => {
//     res.send("This is match endpoint");
// })

//CREATE
router.post("/", verifyAdmin, createMatch)

//UPDATE
router.put("/:id", verifyAdmin, updateMatch);

//DELETE
router.delete("/:id", verifyAdmin, deleteMatch);

//GET
router.get("/:id", getMatch);

//GET ALL
router.get("/", getMatches);
  

export default router;