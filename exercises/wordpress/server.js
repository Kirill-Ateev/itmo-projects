import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));

app.get("/login", function (req, res) {
  res.send("bgdshka");
});

app.post("/wordpress", (req, res) => {
  const { content } = req.body;

  const rawResponse1 = await fetch("https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "gossjsstudent2017", password: "|||123|||456" }),
  });

  const { token } = await rawResponse1.json();

  const rawResponse2 = await fetch("https://wordpress.kodaktor.ru/wp-json/wp/v2/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title: "bgdshka", content }),
  });
  const { id } = await rawResponse2.json();
  
  res.send(id);
});
