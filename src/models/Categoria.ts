import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Tarea from "./Tarea";

class Categoria extends Model {
    public id!: number;
    public nombre!: string;
    public color!: string;
}

Categoria.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        nombre: { type: DataTypes.STRING, allowNull: false, unique: true },
        color: { type: DataTypes.STRING, defaultValue: "#4f46e5" },
    },
    { sequelize, tableName: "categorias" },
);

Categoria.hasMany(Tarea, { foreignKey: "categoriaId", as: "tareasRel" });
Tarea.belongsTo(Categoria, { foreignKey: "categoriaId", as: "categoriaRel" });

export default Categoria;
