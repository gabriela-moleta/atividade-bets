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
  
  
  export default suspeitosRoutes;