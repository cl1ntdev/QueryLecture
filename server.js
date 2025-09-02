import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

const config = {
  host: "127.0.0.1",
  username:"root",
  password:"clinT",
  database:"restaurant",
}


const port = 8000

app.get('/products',async (req,res)=>{
  let query = "select * from products";
  try{
    let connection = await mysql.createConnection(config)
    let [result] = await connection.execute(query)
    await connection.end()
    return res.json(result)
  }catch(er){
    console.log("error is: ", er)
    return null
  }
  
})

app.listen(port,()=>{
  console.log("listening on port: " , port)
})