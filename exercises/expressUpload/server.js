const path = require("path");
const fs = require("fs");
const multer = require("multer");
const express = require("express");

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "/uploaded"
});

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));

app.use('/uploaded',express.static(__dirname + '/uploaded'));

app.use('/allImages',(req, res) => {
  const images = []
  fs.readdirSync(__dirname + '/uploaded').forEach(file => {
    images.push(file);
  });
  res.send(images)
} )

app.post(
    "/upload",
    upload.single("file"),
    (req, res) => {
      const tempPath = req.file.path;
      const targetPath = path.join(__dirname, `./uploaded/${Math.random().toString()}-${req.file.originalname}`);

      try {
        fs.rename(tempPath, targetPath, err => {
          if (err) return handleError(err, res);
  
          res
            .status(200)
            .redirect('back');
            
            // можно отдать страницу снова, но роут поменяется
            //.sendFile(path.join(__dirname,'/signup.html'));
        });
      } catch (e) {
        fs.unlink(tempPath, err => {
          if (err) return handleError(err, res);
  
          res
            .status(403)
            .contentType("text/plain")
            .end("Error on upload!");
        });
      }
    }
  );

app.get("/", express.static(path.join(__dirname, "./public")));