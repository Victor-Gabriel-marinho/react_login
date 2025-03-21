import express from "express";
import { db } from "./db.js";
import cors from "cors";

 const app = express();
 app.use(express.json());
 app.use(cors());


 app.post('/', (req,res) => {
    const q = "INSERT INTO usuarios (`nome`,`email`,`idade`) VALUES(?)";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.idade,
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("usuário criado com sucesso");  
    });
 });

 app.delete('/:id', (req,res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("usuário deletado");    
    });
});

app.get('/', (_,res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (data, err) => {
        if (err) return res.json(err);

        return res.status(200).json(data);    
    })

})

app.listen(3000)