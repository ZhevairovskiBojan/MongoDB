const express = require("express");
const app = express();
const mongoose = require("mongoose");

const blogController = require("./controller/blogController");

app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://bojanzevairovski:XeP0SKPPPgPY6Zrq@cluster0.novtxsn.mongodb.net/?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
).then(() => {
    console.log("Uspesna konekcija!");
}).catch((err) => {
    console.log(err);
})

app.get("/blogs", blogController.getAllBlogs);
app.post("/blogs", blogController.createBlog);

app.get("/blogs/:id", blogController.getBlog);
app.patch("/blogs/:id", blogController.updateBlog);
app.delete("/blogs/:id", blogController.deleteBlog);


app.listen(10000, (err) => {
    if(err) console.log(err);
})