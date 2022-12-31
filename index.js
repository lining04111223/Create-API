import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Serving is running on ${PORT}`));
