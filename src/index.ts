import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000; 

app.use(cors()); 
app.use(express.json());

app.use("/api", routes); 

app.listen(port, () => {
  console.log(` API backend corriendo en puerto ${port}`);
});
