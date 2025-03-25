const { readData, writeData } = require("../models/noticiaModel");

const getAutores = (req, res) => {
  const data = readData();
  res.json(data.autores);
};

const addAutor = (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ message: "Nome é obrigatório" });

  const data = readData();
  const novoAutor = { id: data.autores.length + 1, nome };
  data.autores.push(novoAutor);
  writeData(data);

  res.status(201).json(novoAutor);
};

module.exports = { getAutores, addAutor };
