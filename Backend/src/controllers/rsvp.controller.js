import {createOrUpdateRsvp,getUserRsvp,getRsvpCounts , getEventRsvpUsers,} from "../models/rsvp.model.js";

export const submitRsvp = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { status } = req.body;

    if (!["going", "maybe", "declined"].includes(status)) {
      return res.status(400).json({
        message: "Invalid RSVP status",
      });
    }

    await createOrUpdateRsvp(
      req.user.userId,
      eventId,
      status
    );

    res.status(200).json({
      message: "RSVP updated successfully",
    });
  } catch (error) {
    console.error("RSVP error:", error);

    res.status(500).json({
      message: "Failed to submit RSVP",
    });
  }
};


export const getMyRsvp = async (req, res) => {
  try {
    const { eventId } = req.params;

    const rsvp = await getUserRsvp(
      req.user.userId,
      eventId
    );

    res.status(200).json({
      rsvp: rsvp || null,
    });
  } catch (error) {
    console.error("Get RSVP error:", error);

    res.status(500).json({
      message: "Failed to fetch RSVP",
    });
  }
};

export const getEventRsvpCounts = async (req, res) => {
  try {
    const { eventId } = req.params;

    const counts = await getRsvpCounts(eventId);

    res.status(200).json({
      counts,
    });
  } catch (error) {
    console.error("Get RSVP counts error:", error);

    res.status(500).json({
      message: "Failed to fetch RSVP counts",
    });
  }
};


export const getEventRsvpUsersList = async (req, res) => {
  try {
    const { eventId } = req.params;

    const users = await getEventRsvpUsers(
      eventId,
      req.user.userId
    );

    res.status(200).json({
      users,
    });
  } catch (error) {
    console.error("Get RSVP users error:", error);

    res.status(500).json({
      message: "Failed to fetch RSVP users",
    });
  }
};