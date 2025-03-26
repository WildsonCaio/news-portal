const express = require("express");
const router = express.Router();
const { getNoticias, addNoticia, updateNoticia, deleteNoticia } = require("../controllers/noticiasController");

/**
 * @swagger
 * /noticias:
 *   get:
 *     summary: Retorna todas as notícias com filtros opcionais
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Filtra as notícias pelo id
 *       - in: query
 *         name: titulo
 *         schema:
 *           type: string
 *         description: Filtra as notícias pelo título
 *       - in: query
 *         name: autorId
 *         schema:
 *           type: integer
 *         description: Filtra as notícias pelo ID do autor
 *       - in: query
 *         name: texto
 *         schema:
 *           type: string
 *         description: Filtra as notícias por um trecho do texto
 *     responses:
 *       200:
 *         description: Lista de notícias filtradas retornada com sucesso
 */
router.get("/", getNoticias);

/**
 * @swagger
 * /noticias:
 *   post:
 *     summary: Adiciona uma nova notícia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               texto:
 *                 type: string
 *               autorId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Notícia cadastrada com sucesso
 */
router.post("/", addNoticia);

/**
 * @swagger
 * /noticias/{id}:
 *   put:
 *     summary: Atualiza uma notícia existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               texto:
 *                 type: string
 *               autorId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Notícia atualizada com sucesso
 */
router.put("/:id", updateNoticia);

/**
 * @swagger
 * /noticias/{id}:
 *   delete:
 *     summary: Remove uma notícia
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Notícia removida com sucesso
 */
router.delete("/:id", deleteNoticia);

module.exports = router;
