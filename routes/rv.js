const { AddRD } = require("../controller/rv");
const { upload } = require("../utils/upload");

const router = require("express").Router();

router.post("/", upload.array("image"), AddRD);

module.exports = router;
