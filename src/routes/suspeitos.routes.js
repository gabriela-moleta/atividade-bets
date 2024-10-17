import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
      id: 1,
      nome: "P. Diddy",
      profissao: "Cantor",
      envolvimento: true,
      nivelSuspeita: "alto",
    },

    {
        id: 2,
        nome: "Jay-Z",
        profissao: "Cantor",
        envolvimento: true,
        nivelSuspeita: "alto",
    },

    {
        id: 3,
        nome: "Beyonce",
        profissao: "Cantor",
        envolvimento: true,
        nivelSuspeita: "medio",
        }
    ];

    suspeitosRoutes.get("/", (req, res) => {
      return res.status(200).send(suspeitos);
  });

    suspeitosRoutes.post("/", (req, res) => {
      const { nome, profissao, envolvimento, nivelSuspeita } = req.body;
      if (!nome || !profissao) {
          return res.status(400).send({ message: "Nome, Profissão e Nível de Suspeita são Obrigatórios" });
      }

      if (nivelSuspeita != "baixo" && nivelSuspeita != "médio" && nivelSuspeita != "alto") {
        return res.status(400).send({ message: "Nivel de Suspeita não foi inserido" });
      }
      const novoSuspeito = {
          id: suspeitos.length + 1,
          nome,
          profissao,
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
  
// Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, profissao, envolvimento, nivelSuspeito } = req.body;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((politico) => politico.id == id);


  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }


  if (!nome || !profissao) {
    return res.status(400).send({
      message: "O nome ou partido não foi preenchido!",
    });
  }

  suspeito.nome = nome;
  suspeito.profissao = profissao;
  suspeito.envolvimento = envolvimento;
  suspeito.nivelSuspeita = nivelSuspeito;

  return res.status(200).json({
    message: "Suspeito atualizado com sucesso!",
    suspeito,
  });
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

export default suspeitosRoutes;