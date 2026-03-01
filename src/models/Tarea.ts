import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Tarea extends Model {
    public id!: number;
    public titulo!: string;
    public descripcion!: string;
    public completada!: boolean;
    public prioridad!: string;
    public categoriaId!: number;
}

Tarea.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        titulo: { type: DataTypes.STRING, allowNull: false },
        descripcion: { type: DataTypes.TEXT, allowNull: true },
        completada: { type: DataTypes.BOOLEAN, defaultValue: false },
        prioridad: { type: DataTypes.STRING, defaultValue: "media" },
        categoriaId: { type: DataTypes.INTEGER, allowNull: true },
    },
    { sequelize, tableName: "tareas" },
);

export default Tarea;
