const { Router } = require("express");

const router = Router();

const BookApi = require("../controllers/bookApiController");

const { getBook, getDetailBook } = BookApi;

// router.get("/api/book", (req, res) =>
//   res.status(200).json("Selamat Datang di Api Book")
// );
router.get("/api/book", getBook);
router.get("/api/book/:id", getDetailBook);

module.exports = router;
