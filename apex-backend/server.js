import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool= mysql2.createPool({
  host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

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
app.post("/api/signup",async(req,res)=>{
    
    const sql = `INSERT INTO users(username, email,location,age,bio,password)
      VALUES (?,?,?,?,?,?)
    `
    const tuser=[
      'test1',
      "test@email",
      "Seattle",
      12,
      "Hi I'm Bob!",
      "password"
    ]
    const result= await pool.query(sql, tuser)
    console.log(result)
})
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