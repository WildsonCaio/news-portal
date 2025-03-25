const fs = require("fs");
const storageFile = "storage.json";

// Função para ler os dados do storage.json
const readData = () => {
  const data = fs.readFileSync(storageFile, "utf-8");
  return JSON.parse(data);
};

// Função para escrever os dados no storage.json
const writeData = (data) => {
  fs.writeFileSync(storageFile, JSON.stringify(data, null, 2), "utf-8");
};

// Exporta as funções para uso no controller
module.exports = { readData, writeData };
