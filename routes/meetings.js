// This file defines routes related to town meetings. It allows users to add new meeting videos via a form and stores them in an in-memory array. The main page ("/") will display the list of meetings, which is handled in the index.js route file.

const express = require("express");
const router = express.Router();

router.get("/new", function(req, res) {
  res.render("meetings/new", { title: "Add Meeting" });
});

/* router.post("/", function(req, res) {

  const meeting = {
    title: req.body.title,
    videoUrl: req.body.videoUrl,
    meetingDate: req.body.meetingDate
  };

  req.app.locals.meetings.push(meeting);

  res.redirect("/");

}); */


const Meeting = require("../models/Meeting");

router.post("/", async function(req, res, next) {
  try {
    await Meeting.create({
      title: req.body.title,
      videoUrl: req.body.videoUrl,
      meetingDate: req.body.meetingDate || undefined
    });
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;


