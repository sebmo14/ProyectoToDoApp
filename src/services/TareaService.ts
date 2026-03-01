import Tarea from "../models/Tarea.js";
import Categoria from "../models/Categoria.js";

export class TareaService {
  async getAllTareas() {
    return Tarea.findAll({
      order: [["createdAt", "DESC"]],
      include: [{ model: Categoria, as: "categoriaRel" }],
    });
  }
  async getTareaById(id: number) {
    return Tarea.findByPk(id, {
      include: [{ model: Categoria, as: "categoriaRel" }],
    });
  }
  async createTarea(data: Partial<Tarea>) {
    return Tarea.create(data as any);
  }
  async updateTarea(id: number, data: Partial<Tarea>) {
    await Tarea.update(data as any, { where: { id } });
    return Tarea.findByPk(id);
  }
  async deleteTarea(id: number) {
    return Tarea.destroy({ where: { id } });
  }
}
