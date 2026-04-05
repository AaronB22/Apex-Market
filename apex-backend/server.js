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
    title:"Test 1",
    owner:"Aaron",
    price: 21999,
    description: "Reliable midsize sedan",
    image_url: "",
  },
  {
    id: 2,
    title:"Test 2",
    owner:"Aaron",
    price: 21999,
    description: "Reliable midsize sedan",
    image_url: "",
  },
  {
    id: 3,
    title:"Test 3",
    owner:"Aaron",
    price: 21999,
    description: "Reliable midsize sedan",
    image_url: "",
  }
];

const users=[
  {
    id:1,
    username:"lukeskywakler",
    location:"tatooine",
    age:18,
    bio:"I will be a jedi like my father",
    image_url: "",

  },
  {
    id:2,
    username:"benkenobi",
    location:"tatooine",
    age:57,
    description:"Must protect the choosen one",
    image_url: "",

  }
];

app.get("/api/listings", (req, res) => {
  res.json(cars);
});
app.get("/api/user", (req, res) => {
  res.json(users[0]);
});
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});