var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  const meetings = req.app.locals.meetings || [];
  res.render("index", { title: "Brookline Town Meeting Transcriber", meetings });
});

module.exports = router;