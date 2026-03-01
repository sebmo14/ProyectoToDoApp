import { Request, Response } from "express";
import { CategoriaService } from "../services/CategoriaService";

const svc = new CategoriaService();

export const getCategorias = async (req: Request, res: Response) => {
  try {
    res.json(await svc.getAllCategorias());
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};
export const createCategoria = async (req: Request, res: Response) => {
  try {
    res.status(201).json(await svc.createCategoria(req.body));
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};
export const deleteCategoria = async (req: Request, res: Response) => {
  try {
    await svc.deleteCategoria(Number(req.params.id));
    res.json({ message: "Eliminada" });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};
