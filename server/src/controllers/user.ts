import { Response, Request, NextFunction } from "express";
import { prisma, secretKey } from ".."; //accessing model
import { Prisma } from "@prisma/client"; // accessing interface/types
import { genSalt, hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

type TUser = {
  email: string;
};

export const userController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, first_name, last_name, gender, username } =
        req.body;
      const salt = await genSalt(10);

      const hashedPassword = await hash(password, salt);

      const newUser: Prisma.UserCreateInput = {
        email,
        password: hashedPassword,
        first_name,
        last_name,
        gender,
        username,
      };

      const checkUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (checkUser?.id) throw Error("user sudah terdaftar");

      await prisma.user.create({
        data: newUser,
      });

      const token = sign({ email }, secretKey, {
        expiresIn: "1hr",
      });
      res.send({
        success: true,
        message: "berhasil register",
      });
    } catch (error) {
      next(error);
    }
  },
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.query;

      const user = await prisma.user.findUnique({
        where: {
          email: String(email),
        },
      });
      if (!user) throw Error("email/password salah");
      const checkPassword = await compare(String(password), user.password);
      const resUser = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        gender: user.gender,
        role: user.role,
        username: user.username,
      };
      if (checkPassword) {
        const token = sign(resUser, secretKey, {
          expiresIn: "5m",
        });

        return res.send({
          success: true,
          result: resUser,
          token,
        });
      }
      throw Error("email/password tidak sesuai");
    } catch (error) {
      next(error);
    }
  },
};
