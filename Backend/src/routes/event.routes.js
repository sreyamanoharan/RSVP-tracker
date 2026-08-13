import express from "express";
import { createNewEvent ,getEvents ,getEventDetails ,updateEventDetails ,removeEvent} from "../controllers/event.controller.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, createNewEvent);
router.get("/", getEvents);
router.get("/:id",getEventDetails);
router.put("/:id", authMiddleware, updateEventDetails);
router.delete("/:id", authMiddleware, removeEvent);


export default router;