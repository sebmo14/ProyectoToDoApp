import Categoria from "../models/Categoria.js";

export class CategoriaService {
  async getAllCategorias() {
    return Categoria.findAll();
  }
  async createCategoria(data: Partial<Categoria>) {
    return Categoria.create(data as any);
  }
  async deleteCategoria(id: number) {
    return Categoria.destroy({ where: { id } });
  }
}
