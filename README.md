# Local Meetup RSVP Tracker

A full-stack web application for creating and managing local meetup events and allowing users to RSVP as Going, Maybe, or Declined.


## Features

- User login with JWT authentication
- Password hashing using bcrypt
- Create meetup events
- Browse all meetup events
- View event details
- Edit and delete events created by the event creator
- RSVP with:
  - Going
  - Maybe
  - Declined
- Prevent duplicate RSVPs
- View RSVP counts
- Event creators can view attendees
- Search events by title or location
- Filter events by date
- Automatically close RSVP for expired events
- Support for overnight/midnight events
- MySQL database with foreign key constraints
- Dockerized frontend, backend, and database
- Database schema and seed data are automatically initialized

## Tech Stack

### Frontend

- Next.js
- React
- JavaScript
- Tailwind CSS
- Material UI
- Day.js

### Backend

- Node.js
- Express.js
- mysql2
- JWT
- bcrypt
- dotenv

### Database

- MySQL 8.0

### DevOps

- Docker
- Docker Compose


## Setup

### Requirements

- Docker
- Docker Compose

### Run the Application

Clone the repository and run:

```bash
docker compose up
