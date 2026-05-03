const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const PORT = 3000;

// Data dummy
const menu = [
    { nama: "Bakmi Ayam", kategori: "bakmi" },
    { nama: "Mie Goreng", kategori: "bakmi" },
    { nama: "Ramen Jepang", kategori: "rames" }
];

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 kategori_tersedia:
 *                   type: array
 *                   items:
 *                     type: string
 */
app.get('/menu', (req, res) => {
    const kategori = [...new Set(menu.map(item => item.kategori))];

    res.json({
        kategori_tersedia: kategori
    });
});

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
    console.log(`Swagger di http://localhost:${PORT}/docs`);
});