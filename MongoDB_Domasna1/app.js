//Tреба да се креира дата база блогови:
// - име на колекција blogs,
// - да има create i get all функционалност,
// - шемата да биде со наслов, опис, оценка, време, автор,
// - на рута "/blogs" да се повикува и да се креира блог,
// - да има 10 блога


const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;




mongoose.connect('mongodb+srv://bojanzevairovski:XeP0SKPPPgPY6Zrq@cluster0.novtxsn.mongodb.net/?retryWrites=true&w=majority', {

useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/blogs', (req, res) => {
    const { naslov, opis, ocenka, vreme, avtor } = req.body;
  
    const newBlog = new Blog({
      naslov,
      opis,
      ocenka,
      vreme,
      avtor
    });
  
    newBlog.save((err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Greska pri zacuvuvanje");
      } else {
        res.status(201).send("Uspesno zacuvuvanje");
      }
    });
  });

  app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
      if (err) {
        console.log(err);
        res.status(500).send("Greska pri prevzemanje na blogot");
      } else {
        res.json(blogs);
      }
    });
  });

app.listen(port, () => {
  console.log(`Serverot raboti na porta ${port}`);
});