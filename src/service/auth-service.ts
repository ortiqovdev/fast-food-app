import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type Auth = {
  username: string,
  phone: string
};

export function createAcc(auth: Auth) {
  return prisma.auth.create({
    data: {
      username: auth.username,
      phone: auth.phone
    }
  });
}

export function findAllUser() {
  return prisma.auth.findMany()
}