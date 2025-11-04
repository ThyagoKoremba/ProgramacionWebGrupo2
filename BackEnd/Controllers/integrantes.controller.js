import { db } from '../DB/connection.js';

export const obtenerIntegrantes = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        i.id,
        i.nombre,
        i.apellido,
        i.rol,
        i.email,
        p.nombre AS puesto
      FROM integrante_puesto ip
      JOIN integrantes i ON i.id = ip.id_integrante
      JOIN puestos p ON p.id = ip.id_puesto
      ORDER BY p.id, i.apellido;
    `);

    const agrupados = rows.reduce((acc, integrante) => {
      const { puesto, ...datosIntegrante } = integrante;
      if (!acc[puesto]) acc[puesto] = [];
      acc[puesto].push(datosIntegrante);
      return acc;
    }, {});

    res.json(agrupados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los integrantes por puesto" });
  }
};
