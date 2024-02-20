import { Request, Response, NextFunction } from "express";
import { prisma } from "..";

export const eventController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.event.create({
        data: req.body,
      });
    } catch (error) {
      next(error);
    }
  },
  async read(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.event.findMany();
    } catch (error) {
      next(error);
    }
  },
  update(req: Request, res: Response, next: NextFunction) {
    res.send("test");
  },
  delete(req: Request, res: Response, next: NextFunction) {
    res.send("test");
  },
};
