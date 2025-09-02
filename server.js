import express from "express"
import mysql from "mysql2/promise"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

const config = {
  host: "127.0.0.1",
  user:"root",
  password:"clinT",
  database:"restaurant",
}

const pool = mysql.createPool(config)

const port = 8000

app.get('/food',async (req,res)=>{
  console.log("test")
  let query = "select * from food";
  try{
    const result = await pool.execute(query)
    
    console.log(result)
    return res.json(result)
  }catch(er){
    console.log("error is: ", er)
    return null
  }
  
})

app.listen(port,()=>{
  console.log("listening on port: " , port)
})