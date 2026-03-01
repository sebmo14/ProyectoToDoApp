import type { Request, Response } from "express";
import { TareaService } from "../services/TareaService.js";

const svc = new TareaService();

export const getTareas = async (req: Request, res: Response) => {
  try {
    res.json(await svc.getAllTareas());
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};
export const getTareaById = async (req: Request, res: Response) => {
  try {
    const t = await svc.getTareaById(Number(req.params.id));
    if (!t) return res.status(404).json({ message: "No encontrada" });
    res.json(t);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};
export const createTarea = async (req: Request, res: Response) => {
  try {
    res.status(201).json(await svc.createTarea(req.body));
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};
export const updateTarea = async (req: Request, res: Response) => {
  try {
    res.json(await svc.updateTarea(Number(req.params.id), req.body));
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};
export const deleteTarea = async (req: Request, res: Response) => {
  try {
    await svc.deleteTarea(Number(req.params.id));
    res.json({ message: "Eliminada" });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};
