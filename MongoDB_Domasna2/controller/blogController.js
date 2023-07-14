//? da ima create i getall funkcionlanost

// go povikuvame blogot
const Blog = require("../model/blogModel");

// Kreirame nov dokument
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

// gi prikazuvame site blogovi
const getAllBlogs = async (req, res) => {
    try{
        console.log(req.query);
        
        const queryObj = {...req.query};
        // go konveritrame objektot vo string
        let queryString = JSON.stringify(queryObj);
        
        queryString = queryString.replace(
            /\b(gte|gt|lte|lt)\b/g,
            (match) => `$${match}`
        );
        
        const query = JSON.parse(queryString);

   
        const blogs = await Blog.find(query);

        res.status(200).json({
            status: "Uspesno konektiranje",
            data: {
                blogs: blogs,
            },
        });
    }
    catch(err) {
        res.status(404).json ({
            status: "Greska",
            message: err,
        });
    }
};

const getBlog = async (req, res) => {
    try{
        console.log(req.params);
        const blog = await Blog.findById(req.params.id);

        res.status(200).json({
            status: "Uspesno konektiranje",
            data: {
              blog,
            },
          });
    }
    catch(err){
        res.status(404).json ({
            status: "Greska",
            message: err,
        });
    }
};


// Izvrsuvanje na promeni po ID
const updateBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "Uspesno konektrianje",
            data: {
                updatedBlog,
            }
        });
    }
    catch(err) {
        res.status(404).json ({
            status: "Greska",
            message: err,
        });
    }
};


// Brishenje na dokument preku ID
const deleteBlog = async (req, res) => {
    try{
        await Blog.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "Uspeno konektrianje",
            data: null,
          });
    }
    catch(err) {
        res.status(404).json ({
            status: "Greska",
            message: err,
        });
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlog,
    updateBlog,
    deleteBlog
};