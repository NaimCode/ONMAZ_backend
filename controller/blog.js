const BlogModel = require("./../models/blog");
const AddBlog = (req, res) => {
  const newBlog = BlogModel({
    title: req.body.title,
    description: req.body.description,
    image: "",
  });

  try {
    newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(500).json(error);
  }
};

const AllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { AddBlog, AllBlogs };
