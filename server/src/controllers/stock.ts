import { Request, Response, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";

export const stockController = {
  async getStocks(req: Request, res: Response, next: NextFunction) {
    try {
      const stocks = await prisma.stock.findMany({});

      res.send({
        success: true,
        result: stocks,
      });
    } catch (error) {
      next(error);
    }
  },
  //   async addStocks(req: ReqUser, res: Response, next: NextFunction) {
  //     try {
  //       const { stock_qty } = req.body;
  //       const newStock: Prisma.StockCreateInput = {
  //         stock_qty: Number(stock_qty),
  //         event: {
  //           connect: {
  //             id: Number(event),
  //           },
  //         },
  //       };

  //       await prisma.stock.create({
  //         data: newStock,
  //       });
  //       res.send({
  //         success: true,
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  async editStocks(req: Request, res: Response, next: NextFunction) {
    try {
      const { stock_qty } = req.body;
      const { id } = req.params;
      const editStock: Prisma.StockUpdateInput = {
        stock_qty: Number(stock_qty),
        events: {
          connect: {
            id: Number(id),
          },
        },
      };

      await prisma.stock.update({
        data: editStock,
        where: {
          id: Number(req.params.id),
        },
      });
      res.send({
        success: true,
      });
    } catch (error) {
      next(error);
    }
  },
};
