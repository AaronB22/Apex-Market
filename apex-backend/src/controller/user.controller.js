import pool from "../db.js"

export const createUser = async (req, res) => {
    try {
        const newUser = [req.body.username, req.body.email, req.body.password];
        const sql = `INSERT INTO users(username,email,password) VALUES (?,?,?)`;
        await pool.query(sql, newUser);
        res.status(200).json({ username: req.body.username, email: req.body.email });
    } catch (err) {
        console.error("createUser error:", err.message);
        res.status(500).json({ error: err.message });
    }
}
export const signInUser= async(req,res)=>{
    try{
        const sql= `Select username,email FROM users WHERE email= ? AND password= ?`
       const [rows]= await pool.query(sql,[req.body.email, req.body.password])
       console.log(rows.length)
        if(rows.length==0){
            res.status(404).json({message:"email or password incorrect"})
        }
        else{
            res.status(202).json(rows[0])
        }
    }
    catch (err) {
        console.error("Sign In error:", err.message);
        res.status(500).json({ error: err.message });
    }
}