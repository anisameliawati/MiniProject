import { Request, Response, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
export const categoryController = {
  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await prisma.category.findMany({});

      res.send({
        success: true,
        result: categories,
      });
    } catch (error) {
      next(error);
    }
  },
};
