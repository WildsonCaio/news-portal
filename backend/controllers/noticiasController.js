const { readData, writeData } = require("../models/noticiaModel");

const getNoticias = (req, res) => {
  const { id, titulo, autorId, texto } = req.query;
  const data = readData();
  let noticias = data.noticias;

  // Aplica os filtros, se existirem
  if (id) {
    noticias = noticias.filter((n) => n.id == id);
  }

  if (titulo) {
    noticias = noticias.filter((n) => n.titulo.toLowerCase().includes(titulo.toLowerCase()));
  }

  if (autorId) {
    noticias = noticias.filter((n) => n.autorId == autorId);
  }

  if (texto) {
    noticias = noticias.filter((n) => n.texto.toLowerCase().includes(texto.toLowerCase()));
  }

  res.json(noticias);
};

const addNoticia = (req, res) => {
  const { titulo, texto, autorId } = req.body;
  if (!titulo || !texto || !autorId) {
    console.log(req.body);
    
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  const data = readData();
  const novaNoticia = {
    id: data.noticias.length + 1,
    titulo,
    texto,
    autorId,
  };

  data.noticias.push(novaNoticia);
  writeData(data);

  res.status(201).json(novaNoticia);
};

const updateNoticia = (req, res) => {
  const { id } = req.params;
  const { titulo, texto, autorId } = req.body;
  const data = readData();

  const index = data.noticias.findIndex((n) => n.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "Notícia não encontrada" });
  }

  data.noticias[index] = { id: Number(id), titulo, texto, autorId };
  writeData(data);

  res.json(data.noticias[index]);
};

const deleteNoticia = (req, res) => {
  const { id } = req.params;
  const data = readData();
  data.noticias = data.noticias.filter((n) => n.id != id);
  writeData(data);

  res.status(204).send();
};

module.exports = { getNoticias, addNoticia, updateNoticia, deleteNoticia };
