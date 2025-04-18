// routes/upload.js
const express = require("express");
const multer = require("multer");
const { bucket } = require("../firebase");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/subir", upload.single("imagen"), async (req, res) => {
    if (!req.file) return res.status(400).send("No se envió ninguna imagen.");

    const nombreArchivo = `${Date.now()}-${req.file.originalname}`;
    const archivo = bucket.file(nombreArchivo);

    const stream = archivo.createWriteStream({
        metadata: {
            contentType: req.file.mimetype,
        },
    });

    stream.on("error", (err) => res.status(500).send(err));
    stream.on("finish", async () => {
        // Hacer la imagen pública
        await archivo.makePublic();
        const url = `https://storage.googleapis.com/${bucket.name}/${nombreArchivo}`;
        res.status(200).json({ url });
    });

    stream.end(req.file.buffer);
});

module.exports = router;
