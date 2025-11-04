import { db } from '../DB/connection.js';

export const obtenerIntegrantes = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM integrantes");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los integrantes" });
  }
};
