"use server";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields" };

  const { email, password, name } = validatedFields.data;
  console.log("email, password, name", email, password, name);

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already exists" };
  } 

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: send verification token email

  return { success: "Account created successfully" };
};
