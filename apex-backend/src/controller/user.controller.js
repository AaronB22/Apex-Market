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