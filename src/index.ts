import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/index.js";
import sequelize from "./config/database.js";
import "./models/Categoria.js";
import "./models/Tarea.js";

const app = express();
const port = process.env.PORT || 3000; 

app.use(cors()); 
app.use(express.json());

app.use("/api", routes); 

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
    
    await sequelize.sync(); 
    console.log("Base de datos sincronizada correctamente.");

    app.listen(port, () => {
      console.log(` API backend corriendo en puerto ${port}`);
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
    process.exit(1);
  }
};

startServer();
