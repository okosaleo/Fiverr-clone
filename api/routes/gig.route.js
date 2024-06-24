import express from "express"
import { getGigs } from "../controllers/gig.controller.js";


const router = express.Router();

router.get("/gigss", getGigs)

export default router