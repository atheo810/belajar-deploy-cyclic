const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookApiController {
  static async getBook(req, res) {
    const result = await prisma.book.findMany({});

    res.status(200).json(result);
  }
}
