import express from "express";
import {getSlides} from "../controllers/carouselController.js";

const router = express.Router();
router.get("/:numberOfSlides", getSlides);

export default router;
