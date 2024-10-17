import { Router } from "express";

const suspeitosRoutes = Router();

let suspeito = [
    {
      id: 1,
      nome: "P. Diddy",
      profissao: "Cantor",
      envolvimento: sim,
      nivelSuspeita: "alto",
    },

    {
        id: 2,
        nome: "Jay-Z",
        profissao: "Cantor",
        envolvimento: sim,
        nivelSuspeita: "alto",
    },

    {
        id: 3,
        nome: "Beyonce",
        profissao: "Cantor",
        envolvimento: sim,
        nivelSuspeita: "medio",
        }
    ];

    suspeitosRoutes.get("/", (req, res) => {
      return res.status(200).send(suspeitos);
  });
  
  suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissão, envolvimento, nivelSuspeita } = req.body;
    if (!nome || !profissão || !nivelSuspeita) {
        return res.status(400).send({ message: "Nome, Profissão e Nível de Suspeita são Obrigatórios" });
    }
    const novoSuspeito = {
        id: suspeitos.length + 1,
        nome,
        profissão,
        envolvimento,
        nivelSuspeita
    };
  })

  suspeitos.push(novoSuspeito);
      return res.status(201).send(novoSuspeito);
  
  
  export default suspeitosRoutes;