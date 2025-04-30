import express from "express";
import {Pool} from "pg"
import cors from "cors";
const app = express()

app.use(express.json())
app.use(cors());

const pool = new Pool({
    connectionString:"postgres://postgres:postgres@db.default.svc.cluster.local:5432/postgres"
})
app.get("/users",async(req,res)=>{
    const result = await pool.query("SELECT * from users");
    res.json(result.rows)
})
app.post("/user",async(req,res)=>{
    const result = await pool.query("INSERT INTO users (name) VALUES ($1) RETURNING *",[req.body.name]);
    res.json(result.rows[0]);
})
app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
});

const initDb = async  () => {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,name VARCHAR(255) NOT NULL)`);
}
initDb()