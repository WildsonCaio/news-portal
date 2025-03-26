const fs = require("fs");
const storageFile = "storage.json";

const readData = () => {
  const data = fs.readFileSync(storageFile, "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(storageFile, JSON.stringify(data, null, 2), "utf-8");
};

module.exports = { readData, writeData };
