import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/teste', (rec, res)=> res
.status(200)
.send({mensagem: "Boas-vindas à API"}))

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

export default app;