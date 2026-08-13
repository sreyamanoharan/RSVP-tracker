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


## Test Login Credentials

Use the following seeded accounts to log in and test the application:

**User 1**
- Email: sreya@gmail.com
- Password: Sreya@123

**User 2**
- Email: alex@gmail.com
- Password: Alex@123


## Setup

### Requirements

- Docker
- Docker Compose


### Run the Application

After cloning the repository, run:

```bash
docker compose up
