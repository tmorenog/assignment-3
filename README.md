# Brookline Town Meeting Transcriber

A small Express + EJS app for collecting Brookline Town Meeting video links.

## What the app does (or will do once future assignments are completed)

- Shows a home page with a list of submitted meetings
- Lets users add a meeting with:
  - title (required)
  - video URL (required)
  - meeting date (optional)
- Stores meetings in memory while the server is running

## Tech stack

- Node.js
- Express
- EJS templates
- Morgan request logging

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm start
   ```
3. Open:
   `http://localhost:3000`

### Development mode

Run with nodemon and inspector enabled:

```bash
npm run dev
```

## Routes

- `GET /` - home page, lists all meetings
- `GET /meetings/new` - form to add a meeting
- `POST /meetings` - saves a new meeting and redirects to home

## Data note

This app uses in-memory storage (`app.locals.meetings`), so data is reset whenever the server restarts.

## Deployment

Public URL: (https://assignment-2-an-express-application-ibo4.onrender.com/)
