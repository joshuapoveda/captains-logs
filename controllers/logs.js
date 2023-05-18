const express = require("express");
const router = express.Router();
const Logs = require("../models/logs");


router.get("/", async (req, res) => {
  try {
    const foundLogs = await Logs.find({});
    res.render("Index", { logs: foundLogs });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

router.get("/new", (req, res) => {
  res.render('New');
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteLog = await Logs.findByIdAndRemove(req.params.id);
    res.redirect("/logs");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

router.put("/:id", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    await Logs.findByIdAndUpdate(req.params.id, req.body),
      res.redirect(`/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

router.post("/", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    await Logs.create(req.body), res.redirect("/logs");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    const foundById = await Logs.findById(req.params.id);
    res.render("Edit", { logs: foundById });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundById = await Logs.findById(req.params.id);
    res.render("Show", { logs: foundById });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

module.exports = router;
