import db from "../config/db.js";

export const createEvent = async ({
  title,
  description,
  location,
  start_time,
  end_time,
  created_by,
}) => {
  const [result] = await db.execute(
    `INSERT INTO events
      (title, description, location, start_time, end_time, created_by)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      title,
      description,
      location,
      start_time,
      end_time,
      created_by,
    ]
  );

  return result.insertId;
};

export const getAllEvents = async () => {
  const [rows] = await db.execute(
    `SELECT 
      id,
      title,
      description,
      location,
      start_time,
      end_time,
      created_by,
      created_at
     FROM events
     ORDER BY start_time ASC`
  );

  return rows;
};

export const getEventById = async (eventId) => {
  const [rows] = await db.execute(
    `SELECT *
     FROM events
     WHERE id = ?`,
    [eventId]
  );

  return rows[0];
};

export const updateEvent = async (eventId, userId, eventData) => {
  const {
    title,
    description,
    location,
    start_time,
    end_time,
  } = eventData;

  const [result] = await db.execute(
    `UPDATE events
     SET title = ?,
         description = ?,
         location = ?,
         start_time = ?,
         end_time = ?
     WHERE id = ?
     AND created_by = ?`,
    [
      title,
      description,
      location,
      start_time,
      end_time,
      eventId,
      userId,
    ]
  );

  return result;
};


export const deleteEvent = async (eventId, userId) => {
  const [result] = await db.execute(
    `DELETE FROM events
     WHERE id = ?
     AND created_by = ?`,
    [eventId, userId]
  );

  return result;
};