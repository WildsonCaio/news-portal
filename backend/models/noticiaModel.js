const fs = require("fs");
const storageFile = "storage.json";

const readData = () => {
  if (!fs.existsSync(storageFile)) {
    return { noticias: [], autores: [] };
  }
  return JSON.parse(fs.readFileSync(storageFile, "utf-8"));
};

const writeData = (data) => {
  fs.writeFileSync(storageFile, JSON.stringify(data, null, 2), "utf-8");
};

module.exports = { readData, writeData };
