const { Router } = require("express");
const bookApi = require("./bookApi");

const router = Router();

router.get("/baru", (req, res) => res.status(200).json("selamat"));
router.use(bookApi);

module.exports = router;
