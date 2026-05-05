import { PoolConnection as pool } from "mysql2"

export const createUser=(req, res)=>{
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
}