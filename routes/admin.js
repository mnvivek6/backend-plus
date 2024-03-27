import express from "express";
const router = express.Router();
import { addingdata } from "../controller/adminController.js";

router.post("/add-data", addingdata);


export default router;
