const express = require("express");
const router = express.Router();
const { getAutores, addAutor } = require("../controllers/autoresController");

/**
 * @swagger
 * /autores:
 *   get:
 *     summary: Retorna todos os autores
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 */
router.get("/", getAutores);

/**
 * @swagger
 * /autores:
 *   post:
 *     summary: Adiciona um novo autor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Autor cadastrado com sucesso
 */
router.post("/", addAutor);

module.exports = router;
