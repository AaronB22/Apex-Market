import pool from "../db.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const COOKIE_OPTS = {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

function signToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
}

export const createUser = async (req, res) => {
    try {
        const hashed = await bcrypt.hash(req.body.password, 10);
        const sql = `INSERT INTO users(username,email,password) VALUES (?,?,?)`;
        await pool.query(sql, [req.body.username, req.body.email, hashed]);

        const token = signToken({ username: req.body.username, email: req.body.email });
        res.cookie("token", token, COOKIE_OPTS);
        res.status(200).json({ username: req.body.username, email: req.body.email });
    } catch (err) {
        console.error("createUser error:", err.message);
        res.status(500).json({ error: err.message });
    }
}

export const signInUser = async (req, res) => {
    try {
        const sql = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await pool.query(sql, [req.body.email]);

        if (rows.length === 0 || !await bcrypt.compare(req.body.password, rows[0].password)) {
            return res.status(401).json({ message: "Email or password incorrect" });
        }

        const { username, email } = rows[0];
        const token = signToken({ username, email });
        res.cookie("token", token, COOKIE_OPTS);
        res.status(200).json({ username, email });
    } catch (err) {
        console.error("signInUser error:", err.message);
        res.status(500).json({ error: err.message });
    }
}

export const getMe = (req, res) => {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Not authenticated" });

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ username: payload.username, email: payload.email });
    } catch {
        res.status(401).json({ message: "Invalid or expired token" });
    }
}

export const signOutUser = (req, res) => {
    res.clearCookie("token", COOKIE_OPTS);
    res.status(200).json({ message: "Signed out" });
}

export const updateUser=async(req,res)=>{
    const token= req.cookies?.token;
    if(!token) return res.status(401).json({message: "Not authenticated"});
    let payload;
    try{
        payload= jwt.verify(token, process.env.JWT_SECRET)
    }catch{
         return res.status(401).json({message: "Invalid Token"});
    }
    const {age,location,bio, username}= req.body;
    const sql= `UPDATE users SET age =?, location=?,bio=? WHERE username=?`;
    await pool.query(sql, [age,location,bio,username])
    res.status(200).json({message: "updated"})
}