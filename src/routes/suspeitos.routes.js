import { Router } from "express";

const suspeitosRoutes = Router();

let candidatos = [
    {
      id: 1,
      nome: "P. Diddy",
      profissao: "Cantor",
      envolvimento: true,
      nivelSuspeita: "alto"
    },

    {
        id: 2,
        nome: "Jay-Z",
        profissao: "Cantor",
        envolvimento: true,
        nivelSuspeita: "alto"
    },

    {
        id: 3,
        nome: "Beyonce",
        profissao: "Cantor",
        envolvimento: true,
        nivelSuspeita: "medio"
        }
    ];

