const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const books = [
  {
    name: "kuzu no honkai",
    qty: 20,
    description: "buku anime yang menceritakan proses kedewasaan",
    price: 45000,
  },
  {
    name: "Redo Healer",
    qty: 20,
    description: "buku anime yang menceritakan balas dendam",
    price: 45000,
  },
  {
    name: "Mushoku Tensei",
    qty: 20,
    description: "buku anime yang menceritakan Isekai",
    price: 45000,
  },
];

async function main() {
  for (const book of books) {
    await prisma.book.create({
      data: book,
    });
  }
  console.log("Seed data success");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
