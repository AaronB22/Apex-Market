import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const cars = [
  {
    id: 1,
    name:"Test 1",
    owner:"Aaron",
    price: 21999,
    description: "Reliable midsize sedan",
    image_url: "",
  }
];

app.get("/api/listings", (req, res) => {
  res.json(cars);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});