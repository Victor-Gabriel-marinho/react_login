import express from "express";
import { db } from "./db.js";
import cors from "cors";

 const app = express();
 app.use(express.json());
 app.use(cors());


 app.post('/usuarios', (req,res) => {

    res.status(201).json(req.body);
 })

app.get('/', (_,res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (data, err) => {
        if (err) return res.json(err);

        return res.status(200).json(data);    
    })

})

app.listen(3000)