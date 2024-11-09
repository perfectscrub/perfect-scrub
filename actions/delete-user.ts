"use server";
import { deleteUserById } from "@/data/user";
import { DeleteUserSchema } from "@/schemas";
import { z } from "zod";

export const deleteUser = async (values: z.infer<typeof DeleteUserSchema>) => {
  const validatedFields = DeleteUserSchema.safeParse(values);
  const { id } = validatedFields.data;

  try {
    await deleteUserById(id);
    return { success: "User deleted " };
  } catch (error) {
    return { error: "Error deleting user" };
  }
};
