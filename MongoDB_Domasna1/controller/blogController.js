const Blog = require("../model/blogModel");

const createBlog = async (req, res) => {
    try{
        const newBlog = await Blog.create(req.body);
        res.send(newBlog);
    }
    catch(err) {
        res.status(400).json ({
            status: "fail",
            message: err,
        });
    }
};

const getAllBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find();

        res.status(200).json({
            status: "Uspesno konektiranje",
            data: {
                blogs: blogs,
            },
        });
    }
    catch(err) {
        res.status(404).json ({
            status: "fail",
            message: err,
        });
    }
};

module.exports = {
    createBlog,
    getAllBlogs
};