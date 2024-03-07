import express from "express";
import connectDatabase from "../config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectDatabase();

conexao.on("error",(erro)=>{
    console.error("erro de conexao",erro);
})

conexao.once("open",()=>{
    console.log("Conexao realizada com o banco!")
})
const app = express();
routes(app);

export default app;