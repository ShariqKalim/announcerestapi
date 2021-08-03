const express = require("express");
const router = new express.Router();

const announcements = require("../models/announcements");

//handling POST request
router.post("/announcements", async (req, res) => {
  try {
    const addAnnounceRecords = new announcements(req.body);
    console.log(req.body);
    const insertAnnouncements = await addAnnounceRecords.save();
    res.status(201).send(insertAnnouncements);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/announcements", async (req, res) => {
  try {
    const getAnnouncements = await announcements.find({});
    res.send(getAnnouncements);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/announcements/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAnnouncements = await announcements.findById({ _id });
    res.send(getAnnouncements);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/announcements/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAnnouncements = await announcements.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(getAnnouncements);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/announcements/:id", async (req, res) => {
  try {
    const getAnnouncements = await announcements.findByIdAndDelete(
      req.params.id
    );

    res.send(getAnnouncements);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
