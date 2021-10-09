const { AddBlog, AllBlogs, DeleteBlog } = require("../controller/blog");
const { upload } = require("../utils/upload");

const router = require("express").Router();

router.get("/", AllBlogs);
router.post("/add", upload.single("image"), AddBlog);
router.delete("/:id", DeleteBlog);

module.exports = router;
