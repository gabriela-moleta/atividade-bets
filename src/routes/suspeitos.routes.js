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
      suspeitos.push(novoSuspeito);
      return res.status(201).send(novoSuspeito);
  });
  
  suspeitosRoutes.get("/:id", (req, res) => {
      const { id } = req.params;
      const suspeito = suspeitos.find((suspeito) => suspeito.id == id);
      if (!suspeito) {
          return res.status(404).send({ message: `Suspeito com id ${id} não foi encontrado!` });
      }
      return res.status(200).json(suspeito);
  });
  
  suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, profissão, envolvimento, nivelSuspeita } = req.body;

    const suspeitoIndex = suspeitos.findIndex(suspeito => suspeito.id === Number(id));

    if (suspeitoIndex < 0) {
        return res.status(404).send({ message: "Suspeito não encontrado!" });
    }

    suspeitos[suspeitoIndex] = {
        id: Number(id),
        nome,
        profissão,
        envolvimento,
        nivelSuspeita
    };

    return res.status(200).send(suspeitos[suspeitoIndex]);
});

suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;
  const suspeito = suspeitos.find((suspeito) => suspeito.id == id);

  if (!suspeito) {
      return res.status(404).send({ message: `Suspeito com id ${id} não foi encontrado!` });
  }
  suspeitos = suspeitos.filter((suspeito) => suspeito.id != id);

  return res.status(200).send({
      message: "Suspeito removido com sucesso!",
      suspeito,
  });
});
