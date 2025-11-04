import { db } from '../DB/connection.js';

export const crearMensaje = async (req, res) => {
  try {
    const { nombre, email, asunto, mensaje } = req.body;
    if (!nombre || !email || !asunto || !mensaje)
      return res.status(400).json({ error: "Todos los campos son obligatorios" });

    await db.query(
      "INSERT INTO mensajes (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)",
      [nombre, email, asunto, mensaje]
    );

    res.status(201).json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar el mensaje" });
  }
};
