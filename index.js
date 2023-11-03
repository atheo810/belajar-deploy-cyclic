const express = require("express");
const app = express();

const router = require("./routers");

app.use(router);
app.use(express.json);

app.get("/", (req, res) => res.send("hello World"));

app.listen(3000);
