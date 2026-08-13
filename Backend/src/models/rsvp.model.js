import db from "../config/db.js";

export const createOrUpdateRsvp = async (
  userId,
  eventId,
  status
) => {
  const [result] = await db.execute(
    `INSERT INTO rsvps (user_id, event_id, status)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE status = ?`,
    [userId, eventId, status, status]
  );

  return result;
};



export const getUserRsvp = async (userId, eventId) => {
  const [rows] = await db.execute(
    `SELECT status
     FROM rsvps
     WHERE user_id = ?
     AND event_id = ?`,
    [userId, eventId]
  );

  return rows[0];
};

export const getRsvpCounts = async (eventId) => {
  const [rows] = await db.execute(
    `SELECT
       status,
       COUNT(*) AS count
     FROM rsvps
     WHERE event_id = ?
     GROUP BY status`,
    [eventId]
  );

  return rows;
};

export const getEventRsvpUsers = async (eventId, userId) => {
  const [rows] = await db.execute(
    `SELECT u.name, u.email, r.status
     FROM rsvps r
     JOIN users u ON r.user_id = u.id
     JOIN events e ON r.event_id = e.id
     WHERE r.event_id = ? AND e.created_by = ?`,
    [eventId, userId]
  );

  return rows;
};