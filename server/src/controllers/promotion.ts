import { Request, Response, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
export const promotionController = {
  async getPromotion(req: Request, res: Response, next: NextFunction) {
    try {
      const { promotionBanner } = req.query;
      const promotions = await prisma.promotion.findMany({
        promotionBanner: String(promotionBanner),
      });

      res.send({
        success: true,
        result: promotions,
      });
    } catch (error) {
      next(error);
    }
  },
};
