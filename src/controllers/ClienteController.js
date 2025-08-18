import Ciudad from "../models/Ciudad.js";
import Departamento from "../models/Departamento.js";
import DatosCliente from "../models/DatosCliente.js";
import Equipo from "../models/Equipo.js";
import Cargo from "../models/Cargo.js";
import Sucursal from "../models/sucursal.js";

import { Usuario, TipoUsuario } from "../models/index.js";

export const obtenerClientes = async (req, res) => {
    try {
        const clientes = await Usuario.findAll({
            include: [
                {
                    model: TipoUsuario,
                    as: "tipoUsuario", // Este alias debe coincidir exactamente
                    where: { codigo: "CLI" }, // Filtra solo los que son "CLI"
                    attributes: [], // Si no necesitas los datos de TipoUsuario, lo puedes omitir
                },
            ],
        });

        res.status(200).json(clientes);
    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        res.status(500).json({ error: "Error al obtener los clientes" });
    }
};

