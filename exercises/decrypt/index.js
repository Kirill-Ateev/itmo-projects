import express from "express";
import nodersa from "node-rsa";
import fs from "fs";
import multer from "multer";
import path from "path";
import serveStatic from "serve-static";

const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.json());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  },
});

var upload = multer({ storage: storage });

app.use("/", serveStatic(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});


app.post(
  "/decrypt",
  upload.fields([
    {
      name: "message",
      maxCount: 1,
    },
    {
      name: "RSAkey",
      maxCount: 1,
    },
  ]),
  (req, res, next) => {
    const files = req.files;

    if (!files) {
      const error = new Error("Please choose files");
      error.httpStatusCode = 400;
      return next(error);
    }

    const privateKey = fs.readFileSync("./uploads/RSAkey", "utf8");
    const original = new nodersa(privateKey).decrypt(fs.readFileSync("./uploads/message"), "utf8");


    res.send(original);
  },
);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
