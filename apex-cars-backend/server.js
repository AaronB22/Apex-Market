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
    make: "Toyota",
    model: "Camry",
    year: 2020,
    price: 21999,
    mileage: 42000,
    description: "Reliable midsize sedan",
    image_url: "",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2021,
    price: 23999,
    mileage: 31000,
    description: "Clean commuter car",
    image_url: "",
  },
];

app.get("/api/cars", (req, res) => {
  res.json(cars);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});