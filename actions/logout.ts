"use server";
import { signOut } from "@/auth";

// For when modifications on the server are needed

export const logout = async () => {
  // do server specific stuff
  await signOut({ redirect: true, redirectTo: "/auth/login" });
};
