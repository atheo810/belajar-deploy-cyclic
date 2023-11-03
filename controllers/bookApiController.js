const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookApiController {
  static async getBook(req, res) {
    const result = await prisma.book.findMany({});

    res.status(200).json(result);
  }

  static async getDetailBook(req, res) {
    const result = await prisma.book.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (result === null) {
      res.status(404).json({ message: "Data not found" });
    } else {
      res.status(200).json(result);
    }
  }
}

module.exports = BookApiController;
