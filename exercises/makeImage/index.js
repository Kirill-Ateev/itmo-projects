import express from "express";
import multer from "multer";
import path from "path";
import serveStatic from "serve-static";
import * as PImage from "pureimage";
import * as fs from "fs";

const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.json());


app.use("/", serveStatic(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/login", function (req, res) {
  res.send("bgdshka");
});

app.get("/makeimage", (req, res) => {
  const { width, height } = req.query;

  // make image
  const img = PImage.make(width, height);

  // get canvas context
  const ctx = img.getContext("2d");

  // fill with black
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 100, 100);

  //write to 'makeimage'
  PImage.encodePNGToStream(img,  fs.createWriteStream('makeimage'))
    .then(() => {
      res.download(('makeimage'))
      console.log("wrote out the makeimage png file");
    })
    .catch(e => {
      console.log("there was an error writing");
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
