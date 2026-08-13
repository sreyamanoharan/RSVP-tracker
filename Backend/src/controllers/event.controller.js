import { createEvent , getAllEvents , getEventById , updateEvent, deleteEvent} from "../models/event.model.js";

export const createNewEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      start_time,
      end_time,
    } = req.body;

    if (
      !title ||
      !location ||
      !start_time ||
      !end_time
    ) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
    }

    const eventId = await createEvent({
      title,
      description: description || null,
      location,
      start_time,
      end_time,
      created_by: req.user.userId,
    });

    res.status(201).json({
      message: "Event created successfully",
      eventId,
    });
  } catch (error) {
    console.error("Create event error:", error);

    res.status(500).json({
      message: "Failed to create event",
    });
  }
};


export const getEvents = async (req, res) => {
  try {
    const events = await getAllEvents();

    res.status(200).json({
      events,
    });
  } catch (error) {
    console.error("Get events error:", error);

    res.status(500).json({
      message: "Failed to fetch events",
    });
  }
};

export const getEventDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await getEventById(id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      event,
    });
  } catch (error) {
    console.error("Get event details error:", error);

    res.status(500).json({
      message: "Failed to fetch event details",
    });
  }
};


export const updateEventDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      location,
      start_time,
      end_time,
    } = req.body;

    if (!title || !location || !start_time || !end_time) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
    }

    const result = await updateEvent(id, req.user.userId, {
      title,
      description: description || null,
      location,
      start_time,
      end_time,
    });

    if (result.affectedRows === 0) {
      return res.status(403).json({
        message: "You are not allowed to edit this event",
      });
    }

    res.status(200).json({
      message: "Event updated successfully",
    });
  } catch (error) {
    console.error("Update event error:", error);

    res.status(500).json({
      message: "Failed to update event",
    });
  }
};

export const removeEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteEvent(id, req.user.userId);

    if (result.affectedRows === 0) {
      return res.status(403).json({
        message: "You are not allowed to delete this event",
      });
    }

    res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("Delete event error:", error);

    res.status(500).json({
      message: "Failed to delete event",
    });
  }
};