import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import mysql2 from "mysql2"

import pool from './src/db.js';
import {router as userRouter} from './src/routers/user.router.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
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
app.post("/api/create-user", async(req,res)=>{
  console.log("NEW USER TRY")
    const newUser=[
      req.body.username,
      req.body.email,
      req.body.password
    ]
      const sql = `INSERT INTO users(username,email,password)
      VALUES (?,?,?)`
    const result= await pool.query(sql,newUser)

    res.status(200).json({
      username:req.body.username,
      email:req.body.email
    }
    )
})
app.use("/api/user", userRouter);

app.get("/api/listings", (req, res) => {
  console.log("listing")
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