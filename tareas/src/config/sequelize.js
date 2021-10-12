import {Sequelize} from "sequelize"

export const conexion = new Sequelize(
    "postgresql://postgres:1versitario@localhost:5432/tareas",
    {logging:false}
)