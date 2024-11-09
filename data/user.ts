import prisma from "@/lib/db";
import { UserRole } from "@prisma/client";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    return null;
  }
};

export const deleteUserById = async (id: string) => {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (error) {
    return null;
  }
};

export const deleteUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.delete({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
};

export const updateUserRoleByEmail = async (email: string, role: UserRole) => {
  try {
    const user = await prisma.user.update({
      where: { email },
      data: {
        role,
      },
    });
    return user;
  } catch (error) {
    console.log("error updating user");
    return null;
  }
};
