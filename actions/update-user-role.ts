"use server";
import { getUserByEmail, updateUserRoleByEmail } from "@/data/user";
import { UserRoleUpdateSchema } from "@/schemas";
import { z } from "zod";

export const updateUserRole = async (
  values: z.infer<typeof UserRoleUpdateSchema>
) => {
  const validatedFields = UserRoleUpdateSchema.safeParse(values);
  const { email, role } = validatedFields.data;

  try {
    const dbUser = await getUserByEmail(email);

    if (!dbUser) {
      return { error: "That user does not exist" };
    }
    await updateUserRoleByEmail(email, role);
    return { success: "User role updated " };
  } catch (error) {
    return {error:"Error updating user role"};
  }
};
