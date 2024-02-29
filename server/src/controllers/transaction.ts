import { Request, Response, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
export const transactionController = {
  async getTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const transactions = await prisma.transaction.findMany({});

      res.send({
        success: true,
        result: transactions,
      });
    } catch (error) {
      next(error);
    }
  },
};
