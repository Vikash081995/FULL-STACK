import { Router } from "express";
import { helthCheck } from "../controllers/healthCheck.controllers";

const router = Router()

router.route("/").get(healthCheck)

export default router 