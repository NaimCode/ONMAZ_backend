const { AddBlog, AllBlogs } = require("../controller/blog");

const router = require("express").Router();

router.get("/", AllBlogs);
router.post("/add", AddBlog);

module.exports = router;
