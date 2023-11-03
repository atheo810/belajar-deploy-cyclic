const { Router } = require("express");

const router = Router();

router.get("/api/book", (req, res) =>
  res.status(200).json("Selamat Datang di Api Book")
);

module.exports = router;
