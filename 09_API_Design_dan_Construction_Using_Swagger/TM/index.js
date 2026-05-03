const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

/**
 * Fungsi generate angka dari nama (deterministic)
 */
function generateNumberFromName(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return (sum % 100) + 1;
}

/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka berdasarkan nama
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               tebakan:
 *                 type: number
 *     responses:
 *       200:
 *         description: Hasil tebakan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jawaban:
 *                   type: string
 */
app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    if (!nama || tebakan === undefined) {
        return res.status(400).json({
            error: "nama dan tebakan wajib diisi"
        });
    }

    const angkaBenar = generateNumberFromName(nama);

    if (tebakan === angkaBenar) {
        return res.json({
            jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.`
        });
    }

    if (tebakan > angkaBenar) {
        return res.json({
            jawaban: "Tebakanmu terlalu tinggi!"
        });
    }

    return res.json({
        jawaban: "Tebakanmu terlalu rendah!"
    });
});

/* ================= SWAGGER ================= */

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Tebak Angka',
            version: '1.0.0'
        }
    },
    apis: ['./index.js'],
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ================= SERVER ================= */

app.listen(3000, () => {
    console.log('Server jalan di http://localhost:3000');
    console.log('Swagger di http://localhost:3000/docs');
});