const { AddBlog, AllBlogs, DeleteBlog } = require("../controller/blog");

const router = require("express").Router();

router.get("/", AllBlogs);
router.post("/add", AddBlog);
router.delete("/:id", DeleteBlog);

module.exports = router;
