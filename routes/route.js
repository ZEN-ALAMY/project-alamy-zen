const express = require("express");
const control = require("../controllers/controller");

const router = express.Router();

router.get("/all", control.getNotes);
router.post("/add", control.addNotes);
router.post("/remove", control.removeNotes);

//router.post("/remove", control.removeNotes);

module.exports = router;
