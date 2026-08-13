import express from "express";
import {submitRsvp,getMyRsvp, getEventRsvpCounts,getEventRsvpUsersList} from "../controllers/rsvp.controller.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/:eventId", authMiddleware, submitRsvp);

router.get("/:eventId", authMiddleware, getMyRsvp);

router.get("/:eventId/counts",getEventRsvpCounts);

router.get("/:eventId/users",authMiddleware,getEventRsvpUsersList);

export default router;