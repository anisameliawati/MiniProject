import { Request, Response, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";

export const eventController = {
  async addEvent(req: ReqUser, res: Response, next: NextFunction) {
    try {
      await prisma.$transaction(async (prisma) => {
        const {
          eventName,
          description,
          price,
          location,
          eventDate,
          category,
          stock,
        } = req.body;
        const newProduct: Prisma.EventCreateInput = {
          eventName,
          imgUrl: String(req.file?.filename),
          price,
          description,
          eventDate: new Date(eventDate),
          location,
          user: {
            connect: {
              id: req.user?.id,
            },
          },
          category: {
            connect: {
              id: Number(category),
            },
          },
        };

        const newEvent = await prisma.event.create({
          data: newProduct,
        });

        await prisma.stock.create({
          data: {
            events: {
              connect: {
                id: newEvent.id,
              },
            },
            stock_qty: stock,
          } as Prisma.StockCreateInput,
        });

        res.send({
          success: true,
          message: "data berhasil ditambahkan",
        });
      });
    } catch (error) {
      next(error);
    }
  },
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventName, category } = req.query;

      const whereCategory = {} as Prisma.CategoryWhereInput;
      if (category) whereCategory.id = Number(category);

      const events = await prisma.event.findMany({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
          category: true,
          stock: {
            where: {
              status: "available",
            },
          },
        },
        where: {
          eventName: {
            contains: String(eventName),
          },
          category: { ...whereCategory },
        },
      });

      res.send({
        success: true,
        result: events,
      });
    } catch (error) {
      next(error);
    }
  },
  async getEventsById(req: Request, res: Response, next: NextFunction) {
    try {
      const events = await prisma.event.findUnique({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
          stock: {
            where: {
              status: "available",
            },
          },
        },
        where: {
          id: Number(req.params.id),
        },
      });

      res.send({
        success: true,
        result: events,
      });
      await prisma.event.findMany();
    } catch (error) {
      next(error);
    }
  },
  async editEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        eventName,
        description,
        price,
        location,
        eventDate,
        category,
        stock,
      } = req.body;
      const editEvent: Prisma.EventUpdateInput = {
        eventName,
        price,
        description,
        location,
        eventDate,
        category: {
          connect: {
            id: Number(category),
          },
        },
      };

      await prisma.$transaction(async (prisma) => {
        const check = await prisma.stock.findFirst({
          where: {
            eventId: Number(req.params.id),
            status: "available",
          },
        });

        if (req.file?.filename) editEvent.imgUrl = String(req.file?.filename);

        await prisma.event.update({
          data: editEvent,
          where: {
            id: Number(req.params.id),
          },
        });

        if (check) {
          await prisma.stock.update({
            data: {
              stock_qty: Number(stock),
            } as Prisma.StockUpdateInput,
            where: {
              id: check.id,
            } as Prisma.StockWhereUniqueInput,
          });
        } else
          await prisma.stock.create({
            data: {
              stock_qty: Number(stock),
              events: {
                connect: {
                  id: Number(req.params.id),
                },
              },
            } as Prisma.StockCreateInput,
          });
      });

      res.send({
        success: true,
        message: "data berhasil diedit",
      });
    } catch (error) {
      console.log(error);

      next(error);
    }
  },
  async deleteEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const checkStock = await prisma.stock.findFirst({
        where: {
          eventId: Number(req.params.id),
        },
      });

      if (checkStock)
        await prisma.stock.delete({
          where: {
            id: checkStock.id,
          },
        });
      await prisma.event.delete({
        where: {
          id: Number(req.params.id),
        },
      });

      res.send({
        success: true,
        message: "data berhasil dihapus",
      });
    } catch (error) {
      next(error);
    }
  },
};
