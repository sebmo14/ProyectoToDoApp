import { Router } from "express";
import {
    getTareas,
    getTareaById,
    createTarea,
    updateTarea,
    deleteTarea,
} from "../controllers/TareaController";
import {
    getCategorias,
    createCategoria,
    deleteCategoria,
} from "../controllers/CategoriaController";

const router = Router();

router.get("/tareas", getTareas);
router.get("/tareas/:id", getTareaById);
router.post("/tareas", createTarea);
router.put("/tareas/:id", updateTarea);
router.delete("/tareas/:id", deleteTarea);

router.get("/categorias", getCategorias);
router.post("/categorias", createCategoria);
router.delete("/categorias/:id", deleteCategoria);

export default router;
